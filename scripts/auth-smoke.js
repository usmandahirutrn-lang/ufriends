/*
 Auth Smoke Test (JS version)

 Exercises token-based auth endpoints:
 - POST /api/auth/login
 - GET  /api/me
 - POST /api/auth/refresh
 - POST /api/auth/logout

 Usage (PowerShell):
   $env:BASE_URL="http://localhost:5070"; $env:TEST_EMAIL="admin@ufriends.local"; $env:TEST_PASSWORD="Admin123!"; node scripts/auth-smoke.js

 Exits non-zero on failure.
*/

const BASE = process.env.BASE_URL || "http://localhost:5070"

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

async function me(accessToken) {
  const res = await fetch(`${BASE}/api/me`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Me failed: ${data.error || res.status}`)
  return data
}

async function refresh(refreshToken) {
  const res = await fetch(`${BASE}/api/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Refresh failed: ${data.error || res.status}`)
  return data
}

async function logout(refreshToken) {
  const res = await fetch(`${BASE}/api/auth/logout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(refreshToken ? { refreshToken } : {}),
  })
  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new Error(`Logout failed: ${data.error || res.status}`)
  }
}

async function main() {
  const email = process.env.TEST_EMAIL
  const password = process.env.TEST_PASSWORD

  if (!email || !password) {
    console.error("Missing TEST_EMAIL or TEST_PASSWORD env vars.")
    console.error(
      "Set them and re-run, e.g.: $env:BASE_URL='http://localhost:5070'; $env:TEST_EMAIL='admin@ufriends.local'; $env:TEST_PASSWORD='Admin123!'; node scripts/auth-smoke.js"
    )
    process.exit(2)
  }

  console.log(`[1/4] Login as ${email}`)
  const loginData = await login(email, password)
  console.log("     ✓ Logged in; user:", loginData.user)

  console.log("[2/4] Call /api/me with access token")
  const meData = await me(loginData.tokens.accessToken)
  console.log("     ✓ Me OK; profile:", meData?.profile)

  console.log("[3/4] Rotate refresh token")
  const refreshed = await refresh(loginData.tokens.refreshToken)
  console.log("     ✓ Refresh OK; got new tokens")

  console.log("[4/4] Logout (revoke previous refresh if provided)")
  await logout(loginData.tokens.refreshToken)
  console.log("     ✓ Logout OK")
}

main().catch((err) => {
  console.error("Auth smoke test failed:", err?.message || String(err))
  process.exit(1)
})