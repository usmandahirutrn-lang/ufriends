/*
 Monnify Webhook Simulation Smoke Test (bank-transfer)
 - Logs in to obtain access token
 - Initiates wallet funding via Monnify (provider: bank-transfer) and captures reference
 - Generates a valid Monnify webhook payload and signature
 - Posts webhook to credit wallet
 - Verifies wallet balance increments by the funded amount

 Prereq: Dev server started with env `MONNIFY_WEBHOOK_SECRET`.

 Usage (PowerShell):
   $env:BASE_URL="http://localhost:5070";
   $env:AUTH_SMOKE_EMAIL="usman@universalkart.com.ng";
   $env:AUTH_SMOKE_PASSWORD="Admin123!";
   $env:MONNIFY_WEBHOOK_SECRET="dev-monnify-secret";
   node scripts/monnify-webhook-smoke.js

 Exits non-zero on failure.
*/

const crypto = require("crypto")

const BASE = process.env.BASE_URL || "http://localhost:5070"
const EMAIL = process.env.AUTH_SMOKE_EMAIL || process.env.ADMIN_EMAIL
const PASSWORD = process.env.AUTH_SMOKE_PASSWORD || process.env.ADMIN_PASSWORD
const MONNIFY_SECRET = process.env.MONNIFY_WEBHOOK_SECRET
const FUND_AMOUNT = Number(process.env.FUND_AMOUNT || 800)

if (!EMAIL || !PASSWORD) {
  console.error("Missing AUTH_SMOKE_EMAIL or AUTH_SMOKE_PASSWORD env vars.")
  process.exit(2)
}
if (!MONNIFY_SECRET) {
  console.error("Missing MONNIFY_WEBHOOK_SECRET env var.")
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

async function fundWalletMonnify(accessToken, amount) {
  const res = await fetch(`${BASE}/api/wallet/fund`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
    body: JSON.stringify({ provider: "bank-transfer", amount }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Fund failed: ${data.error || res.status}`)
  return data
}

async function postMonnifyWebhook(payload, accessToken) {
  const raw = JSON.stringify(payload)
  const signatureHex = crypto.createHmac("sha256", MONNIFY_SECRET).update(raw).digest("hex")
  const res = await fetch(`${BASE}/api/wallet/webhook/monnify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-monnify-signature": signatureHex,
      Authorization: `Bearer ${accessToken}`,
    },
    body: raw,
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Webhook failed: ${data.error || res.status}`)
  return data
}

;(async () => {
  console.log(`[1/5] Login as ${EMAIL}`)
  const loginData = await login(EMAIL, PASSWORD)
  const access = loginData?.tokens?.accessToken
  if (!access) throw new Error("Missing access token")
  console.log("     ✓ Logged in; role:", loginData?.user?.role)

  console.log("[2/5] Fetch wallet balance (before)")
  const before = await getBalance(access)
  const beforeBal = Number(before?.balance ?? 0)
  console.log(`     ✓ Balance before: ₦${beforeBal.toLocaleString()} ${before?.currency || "NGN"}`)

  console.log("[3/5] Initiate funding via Monnify (bank-transfer)")
  const amount = FUND_AMOUNT
  const fund = await fundWalletMonnify(access, amount)
  if (!fund?.ok || !fund?.reference) throw new Error("Missing ok/reference in fund response")
  console.log(`     ✓ Fund initiated. Reference: ${fund.reference}; Provider: ${fund.provider}`)

  console.log("[4/5] Post Monnify webhook SUCCESS to credit wallet")
  const webhookPayload = {
    paymentReference: fund.reference,
    paymentStatus: "SUCCESS",
    paidAmount: amount,
    customer: { email: loginData?.user?.email || EMAIL },
    meta: { smoke: true },
  }
  const wh = await postMonnifyWebhook(webhookPayload, access)
  if (!wh?.ok) throw new Error("Webhook response not ok")
  console.log("     ✓ Webhook accepted and processed")

  console.log("[5/5] Fetch wallet balance (after)")
  const after = await getBalance(access)
  const afterBal = Number(after?.balance ?? 0)
  const diff = afterBal - beforeBal
  if (diff < amount) throw new Error(`Balance did not increment as expected (Δ=${diff}, expected ≥ ${amount})`)
  console.log(`     ✓ Balance incremented by ₦${diff.toLocaleString()} (expected ≥ ₦${amount.toLocaleString()})`)

  console.log("\nMonnify webhook simulation smoke completed.")
  process.exit(0)
})().catch((e) => {
  console.error("Monnify webhook smoke failed:", e?.message || String(e))
  process.exit(1)
})