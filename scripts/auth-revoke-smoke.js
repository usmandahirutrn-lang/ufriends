/*
 Auth Revoke/Logout Smoke Test
 - Logs in to obtain access/refresh tokens
 - Performs one refresh to rotate tokens
 - Logs out to revoke current refresh token
 - Ensures refresh is rejected after logout
 - Optionally checks /api/me; may still be valid until access token expiry
*/

const BASE_URL = process.env.BASE_URL || "http://localhost:5070"
const EMAIL = process.env.AUTH_SMOKE_EMAIL
const PASSWORD = process.env.AUTH_SMOKE_PASSWORD

if (!EMAIL || !PASSWORD) {
  console.error("AUTH_SMOKE_EMAIL and AUTH_SMOKE_PASSWORD env vars are required.")
  process.exit(1)
}

async function login(email, password) {
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Login failed: ${res.status} ${JSON.stringify(data)}`)
  return data
}

async function me(accessToken) {
  const res = await fetch(`${BASE_URL}/api/me`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  const data = await res.json().catch(() => ({}))
  return { ok: res.ok, status: res.status, data }
}

async function refresh(refreshToken) {
  const res = await fetch(`${BASE_URL}/api/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  })
  const data = await res.json().catch(() => ({}))
  return { ok: res.ok, status: res.status, data }
}

async function logout(refreshToken) {
  const res = await fetch(`${BASE_URL}/api/auth/logout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  })
  const data = await res.json().catch(() => ({}))
  return { ok: res.ok, status: res.status, data }
}

;(async () => {
  console.log("[Revoke] Logging in...")
  const loginRes = await login(EMAIL, PASSWORD)
  let accessToken = loginRes?.tokens?.accessToken
  let refreshToken = loginRes?.tokens?.refreshToken
  if (!accessToken || !refreshToken) throw new Error("Missing tokens from login response")
  const me1 = await me(accessToken)
  if (!me1.ok) throw new Error(`/api/me failed after login: ${me1.status}`)
  console.log("[Revoke] /api/me OK after login.")

  console.log("[Revoke] Performing one refresh to rotate tokens...")
  const ref = await refresh(refreshToken)
  if (!ref.ok) throw new Error(`Refresh failed: ${ref.status} ${JSON.stringify(ref.data)}`)
  const newAccess = ref?.data?.tokens?.accessToken
  const newRefresh = ref?.data?.tokens?.refreshToken
  if (!newAccess || !newRefresh) throw new Error("Missing tokens from refresh response")
  accessToken = newAccess
  refreshToken = newRefresh
  console.log("[Revoke] Refresh OK. Logging out to revoke current refresh token...")

  const lo = await logout(refreshToken)
  if (!lo.ok) throw new Error(`Logout failed: ${lo.status} ${JSON.stringify(lo.data)}`)
  console.log("[Revoke] Logout OK. Attempting to refresh after logout (should fail)...")

  const after = await refresh(refreshToken)
  if (after.ok) throw new Error("Refresh unexpectedly succeeded after logout")
  if (![401, 403].includes(after.status)) {
    console.warn(`Refresh after logout failed with unexpected status: ${after.status}`)
  }
  console.log("[Revoke] Refresh after logout rejected as expected.")

  // Optional: Check /api/me. Depending on implementation, access token may remain valid until expiry.
  const me2 = await me(accessToken)
  console.log(`[Revoke] /api/me after logout status: ${me2.status}`)

  console.log("[Revoke] Test completed.")
  process.exit(0)
})().catch((e) => {
  console.error("[Revoke] Test failed:", e)
  process.exit(1)
})