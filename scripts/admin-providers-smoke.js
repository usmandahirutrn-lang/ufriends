/*
 Admin Providers Smoke Test

 - Logs in as admin to obtain access token
 - Calls GET /api/admin/providers to verify categories and providers

 Usage (PowerShell):
   $env:BASE_URL="http://localhost:3000"; 
   $env:ADMIN_EMAIL="admin@ufriends.local"; 
   $env:ADMIN_PASSWORD="Admin123!"; 
   node scripts/admin-providers-smoke.js

 Exits non-zero on failure.
*/

const BASE = process.env.BASE_URL || "http://localhost:3000"
const EMAIL = process.env.ADMIN_EMAIL || process.env.TEST_EMAIL || "admin@ufriends.local"
const PASSWORD = process.env.ADMIN_PASSWORD || process.env.TEST_PASSWORD || "Admin123!"

async function login(email, password) {
  const res = await fetch(`${BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Login failed: ${data.error || res.status}`)
  return data
}

async function providers(accessToken) {
  const res = await fetch(`${BASE}/api/admin/providers`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Providers failed: ${data.error || res.status}`)
  return data
}

async function main() {
  if (!EMAIL || !PASSWORD) {
    console.error("Missing ADMIN_EMAIL or ADMIN_PASSWORD env vars.")
    process.exit(2)
  }

  console.log(`[1/2] Login as ${EMAIL}`)
  const loginData = await login(EMAIL, PASSWORD)
  const access = loginData?.tokens?.accessToken
  if (!access) throw new Error("Missing access token from login response")
  console.log("     ✓ Logged in; role:", loginData?.user?.role)

  console.log("[2/2] Fetch admin providers")
  const prov = await providers(access)
  const categories = Object.keys(prov?.providersByCategory || {})
  console.log("     ✓ Providers categories:", categories.join(", ") || "<none>")
  for (const [cat, items] of Object.entries(prov?.providersByCategory || {})) {
    const names = (items || []).map((p) => `${p.name}(${p.id})${p.isActive ? "*" : ""}`)
    console.log(`     - ${cat}: ${names.join(", ")}`)
  }
}

main().catch((err) => {
  console.error("Admin providers smoke test failed:", err?.message || String(err))
  process.exit(1)
})