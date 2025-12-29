/*
 Auth Smoke Test

 This script exercises the token-based auth endpoints:
 - POST /api/auth/login
 - GET  /api/me
 - POST /api/auth/refresh
 - POST /api/auth/logout

 Usage (PowerShell):
   $env:TEST_EMAIL="user@example.com"; $env:TEST_PASSWORD="secret123"; node scripts/auth-smoke.ts

 The script expects a valid user account. It will log concise output
 for success/failure at each step and exit with a non-zero code on errors.
*/

const BASE = process.env.BASE_URL || "http://localhost:3000"

type LoginResult = {
  user: { id: string; email: string; role: string }
  tokens: { accessToken: string; refreshToken: string }
}

async function login(email: string, password: string): Promise<LoginResult> {
  const res = await fetch(`${BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Login failed: ${data.error || res.status}`)
  return data as LoginResult
}

async function me(accessToken: string): Promise<any> {
  const res = await fetch(`${BASE}/api/me`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Me failed: ${data.error || res.status}`)
  return data
}

async function refresh(refreshToken: string): Promise<{ tokens: { accessToken: string; refreshToken: string } }> {
  const res = await fetch(`${BASE}/api/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Refresh failed: ${data.error || res.status}`)
  return data
}

async function logout(refreshToken?: string): Promise<void> {
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
    console.error("Set them and re-run, e.g.: $env:TEST_EMAIL='user@example.com'; $env:TEST_PASSWORD='secret123'; node scripts/auth-smoke.ts")
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