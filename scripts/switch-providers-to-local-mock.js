/// Switch provider API base URLs to local mock endpoints for reliable testing
const BASE = process.env.BASE_URL || "http://localhost:5070"
const EMAIL = process.env.ADMIN_EMAIL || "admin@ufriends.local"
const PASSWORD = process.env.ADMIN_PASSWORD || "Admin123!"

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

async function getProviders(token) {
  const res = await fetch(`${BASE}/api/admin/providers`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Fetch providers failed: ${data.error || res.status}`)
  const grouped = data?.providersByCategory || {}
  const flat = Object.values(grouped).flat()
  return flat
}

async function patchProvider(token, id, updates) {
  const res = await fetch(`${BASE}/api/admin/providers/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(updates),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Update provider ${id} failed: ${data.error || res.status}`)
  return data?.provider
}

async function main() {
  try {
    const token = await login()
    console.log("✔ Admin login ok")

  const providers = await getProviders(token)
    console.log(`Found ${providers.length} providers`)
    for (const p of providers) {
      console.log(`- ${p.name} [${p.category}] active=${p.isActive} base=${p.apiBaseUrl || ""}`)
    }

    const targets = [
      { name: /portedsim\s*airtime/i, newBase: `${BASE}/api/mock/ported` },
      { name: /portedsim\s*data/i, newBase: `${BASE}/api/mock/ported` },
      { name: /subandgain\s*bills/i, newBase: `${BASE}/api/mock/subandgain` },
    ]

    for (const t of targets) {
      const p = providers.find((p) => t.name.test(String(p.name)))
      if (!p) {
        console.warn(`⚠ Provider matching ${t.name} not found; skipping`)
        continue
      }
      const updated = await patchProvider(token, p.id, { apiBaseUrl: t.newBase })
      console.log(`🔁 Updated ${p.name}: apiBaseUrl -> ${updated.apiBaseUrl}`)
    }

    console.log("🎯 Providers switched to local mock base URLs")
  } catch (err) {
    console.error("❌ Switch failed:", err.message)
    process.exit(1)
  }
}

main()