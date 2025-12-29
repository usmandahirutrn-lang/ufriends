import { describe, it, expect, vi } from "vitest"
import { payEducationViaSubAndGain } from "@/lib/providers/education-subandgain"

vi.mock("@/lib/http-client", () => ({
  fetchJsonWithRetry: vi.fn(async (url: string, _init: any) => {
    return {
      res: { ok: true, status: 200 },
      data: { reference: "EDU-REF-12345", token: "TOKEN123" },
    }
  }),
}))

describe("education-subandgain adapter", () => {
  it("fails when config is missing", async () => {
    const res = await payEducationViaSubAndGain({ amount: 1000, params: { eduType: "NECO" }, providerId: "p1" }, {
      id: "p1",
      name: "SubAndGain Education",
      category: "education",
      isActive: true,
      priority: 10,
      apiBaseUrl: "",
      configJson: {},
      apiKeys: [],
    } as any)
    expect(res.ok).toBe(false)
    expect(res.code).toBe("MISSING_CONFIG")
  })

  it("succeeds with valid config and eduType", async () => {
    const res = await payEducationViaSubAndGain({ amount: 1000, params: { eduType: "NECO" }, providerId: "p1" }, {
      id: "p1",
      name: "SubAndGain Education",
      category: "education",
      isActive: true,
      priority: 10,
      apiBaseUrl: "https://subandgain.com",
      configJson: { adapter: "subandgain" },
      apiKeys: [
        { id: "k1", keyName: "apiKey", keyValue: "test" },
        { id: "k2", keyName: "username", keyValue: "user" },
      ],
    } as any)
    expect(res.ok).toBe(true)
    expect(res.providerReference).toBe("EDU-REF-12345")
    expect(res.token).toBe("TOKEN123")
  })
})