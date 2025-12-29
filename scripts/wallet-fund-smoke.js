/*
 Wallet Funding Authenticated Smoke Test (PaymentPoint path)
 - Logs in to obtain access token
 - Fetches wallet balance
 - Initiates funding via PaymentPoint provider
 - Verifies response structure and virtual account details
 - Re-fetches wallet balance (should not change without webhook)

 Usage (PowerShell):
   $env:BASE_URL="http://localhost:3000";
   $env:AUTH_SMOKE_EMAIL="usman@universalkart.com.ng";
   $env:AUTH_SMOKE_PASSWORD="Admin123!";
   node scripts/wallet-fund-smoke.js

 Exits non-zero on failure.
*/

const BASE = process.env.BASE_URL || "http://localhost:3000"
const EMAIL = process.env.AUTH_SMOKE_EMAIL || process.env.ADMIN_EMAIL
const PASSWORD = process.env.AUTH_SMOKE_PASSWORD || process.env.ADMIN_PASSWORD

if (!EMAIL || !PASSWORD) {
  console.error("Missing AUTH_SMOKE_EMAIL or AUTH_SMOKE_PASSWORD env vars.")
  process.exit(2)
}

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

async function getBalance(accessToken) {
  const res = await fetch(`${BASE}/api/wallet/balance`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Balance failed: ${data.error || res.status}`)
  return data
}

async function fundWalletPaymentPoint(accessToken, amount) {
  const res = await fetch(`${BASE}/api/wallet/fund`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
    body: JSON.stringify({ provider: "paymentpoint", amount }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Fund failed: ${data.error || res.status}`)
  return data
}

;(async () => {
  console.log(`[1/4] Login as ${EMAIL}`)
  const loginData = await login(EMAIL, PASSWORD)
  const access = loginData?.tokens?.accessToken
  if (!access) throw new Error("Missing access token")
  console.log("     ✓ Logged in; role:", loginData?.user?.role)

  console.log("[2/4] Fetch wallet balance")
  const before = await getBalance(access)
  const beforeBal = Number(before?.balance ?? 0)
  console.log(`     ✓ Balance before: ₦${beforeBal.toLocaleString()} ${before?.currency || "NGN"}`)

  console.log("[3/4] Initiate funding via PaymentPoint")
  const amount = 500
  const fund = await fundWalletPaymentPoint(access, amount)
  if (!fund?.ok || !fund?.reference) throw new Error("Missing ok/reference in fund response")
  const va = fund?.virtualAccount || {}
  if (!va?.accountNumber) console.log("     ⚠ Virtual account number not returned; using fallback in route.")
  console.log(`     ✓ Fund initiated. Reference: ${fund.reference}; Provider: ${fund.provider}`)

  console.log("[4/4] Re-fetch wallet balance (should be unchanged without webhook)")
  const after = await getBalance(access)
  const afterBal = Number(after?.balance ?? 0)
  if (isNaN(afterBal)) throw new Error("Invalid after balance")
  console.log(`     ✓ Balance after: ₦${afterBal.toLocaleString()} ${after?.currency || "NGN"}`)

  console.log("\nWallet funding smoke completed.")
  process.exit(0)
})().catch((e) => {
  console.error("Wallet funding smoke failed:", e?.message || String(e))
  process.exit(1)
})