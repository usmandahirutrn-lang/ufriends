/*
 Live Service Flows Smoke Test

 Tests live provider integrations end-to-end:
 - POST /api/service/airtime/vtu
 - POST /api/service/data/bundle
 - POST /api/service/bills/electricity
 - POST /api/service/education/token
 - POST /api/verification/nin-slip

 Usage (PowerShell):
   $env:BASE_URL="http://localhost:3000";
   $env:AUTH_SMOKE_EMAIL="admin@ufriends.local";
   $env:AUTH_SMOKE_PASSWORD="Admin123!";
   node scripts/service-flows-live.js

 Exits non-zero on failure.
*/

const BASE = process.env.BASE_URL || "http://localhost:3000"
const EMAIL = process.env.AUTH_SMOKE_EMAIL || process.env.ADMIN_EMAIL
const PASSWORD = process.env.AUTH_SMOKE_PASSWORD || process.env.ADMIN_PASSWORD

if (!EMAIL || !PASSWORD) {
  console.error("Missing AUTH_SMOKE_EMAIL or AUTH_SMOKE_PASSWORD env vars.")
  process.exit(2)
}

async function login() {
  const res = await fetch(`${BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: EMAIL, password: PASSWORD }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Login failed: ${data.error || res.status}`)
  const token = data?.tokens?.accessToken
  if (!token) throw new Error("Missing access token after login")
  return token
}

async function post(path, token, payload) {
  const res = await fetch(`${BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(payload),
  })
  const data = await res.json().catch(async () => ({ text: await res.text().catch(() => "") }))
  return { res, data }
}

async function run() {
  const accessToken = await login()
  console.log("✔ Auth OK")

  const idKey = () => `smk-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`
  const assertOk = (label, res, data) => {
    if (!res.ok || data?.ok === false) {
      throw new Error(`${label} failed: ${res.status} ${JSON.stringify(data)}`)
    }
    console.log(`✓ ${label} ok:`, { reference: data.reference || data.providerRef })
  }

  // Airtime
  {
    const { res, data } = await post("/api/service/airtime/vtu", accessToken, {
      amount: 100,
      params: { phone: "08012345678", network: "MTN" },
      idempotencyKey: idKey(),
    })
    assertOk("airtime/vtu", res, data)
  }

  // Data
  {
    const { res, data } = await post("/api/service/data/bundle", accessToken, {
      amount: 200,
      params: { phone: "08012345678", network: "MTN", planCode: "500MB" },
      idempotencyKey: idKey(),
    })
    assertOk("data/bundle", res, data)
  }

  // Bills/Electricity
  {
    const { res, data } = await post("/api/service/bills/electricity", accessToken, {
      amount: 500,
      params: { meterNumber: "1234567890", serviceProvider: "IKEDC" },
      idempotencyKey: idKey(),
    })
    assertOk("bills/electricity", res, data)
  }

  // Education (token purchase)
  {
    const { res, data } = await post("/api/service/education/token", accessToken, {
      amount: 300,
      params: { eduType: "NEONE" },
      idempotencyKey: idKey(),
    })
    assertOk("education/token", res, data)
  }

  // Verification (NIN Slip)
  {
    const { res, data } = await post("/api/verification/nin-slip", accessToken, {
      nin: "12345678901",
      templateType: "digital",
      amount: 500,
      idempotencyKey: idKey(),
    })
    assertOk("verification/nin-slip", res, data)
  }

  console.log("🎯 Live service flows completed successfully")
}

run().catch((err) => {
  console.error("❌ Live service flow smoke failed:", err.message)
  process.exit(1)
})