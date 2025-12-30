/*
 Auth Rotation Smoke Test
 - Logs in to obtain access/refresh tokens
 - Performs multiple refresh rotations, verifying tokens change
 - Ensures old refresh tokens are invalid after rotation
 - Verifies /api/me works with the latest access token
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

;(async () => {
  console.log("[Rotation] Logging in...")
  const loginRes = await login(EMAIL, PASSWORD)
  let accessToken = loginRes?.tokens?.accessToken
  let refreshToken = loginRes?.tokens?.refreshToken
  if (!accessToken || !refreshToken) throw new Error("Missing tokens from login response")
  console.log("[Rotation] Login success; verifying /api/me...")
  const me1 = await me(accessToken)
  if (!me1.ok) throw new Error(`/api/me failed after login: ${me1.status}`)
  console.log("[Rotation] /api/me OK after login.")

  const rotations = 3
  for (let i = 1; i <= rotations; i++) {
    console.log(`\n[Rotation] Refresh #${i} with current refresh token...`)
    const ref = await refresh(refreshToken)
    if (!ref.ok) throw new Error(`Refresh #${i} failed: ${ref.status} ${JSON.stringify(ref.data)}`)
    const newAccess = ref?.data?.tokens?.accessToken
    const newRefresh = ref?.data?.tokens?.refreshToken
    if (!newAccess || !newRefresh) throw new Error(`Refresh #${i} missing tokens`)
    if (newRefresh === refreshToken) throw new Error(`Refresh #${i} did not rotate the refresh token`)
    accessToken = newAccess
    const oldRefresh = refreshToken
    refreshToken = newRefresh
    console.log(`[Rotation] Tokens rotated. Checking /api/me with new access token...`)
    const meRes = await me(accessToken)
    if (!meRes.ok) throw new Error(`/api/me failed after refresh #${i}: ${meRes.status}`)
    console.log(`[Rotation] /api/me OK after refresh #${i}. Verifying old refresh is invalid...`)
    const oldRef = await refresh(oldRefresh)
    if (oldRef.ok) throw new Error(`Old refresh token remained valid after rotation #${i}`)
    if (![401, 403].includes(oldRef.status)) {
      console.warn(`Old refresh token failed with unexpected status: ${oldRef.status}`)
    }
    console.log(`[Rotation] Old refresh token invalid as expected.`)
  }

  console.log("\n[Rotation] All rotations succeeded.")
  process.exit(0)
})().catch((e) => {
  console.error("[Rotation] Test failed:", e)
  process.exit(1)
})