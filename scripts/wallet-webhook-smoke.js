/*
 Wallet Webhook Simulation Smoke Test (PaymentPoint)
 - Logs in to obtain access token
 - Initiates wallet funding via PaymentPoint and captures reference
 - Generates a valid PaymentPoint webhook payload and signature
 - Posts webhook to credit wallet
 - Verifies wallet balance increments by the funded amount

 Prereq: Dev server started with env `PAYMENTPOINT_WEBHOOK_SECRET`.

 Usage (PowerShell):
   $env:BASE_URL="http://localhost:3000";
   $env:AUTH_SMOKE_EMAIL="usman@universalkart.com.ng";
   $env:AUTH_SMOKE_PASSWORD="Admin123!";
   $env:PAYMENTPOINT_WEBHOOK_SECRET="dev-webhook-secret";
   node scripts/wallet-webhook-smoke.js

 Exits non-zero on failure.
*/

const crypto = require("crypto")

const BASE = process.env.BASE_URL || "http://localhost:3000"
const EMAIL = process.env.AUTH_SMOKE_EMAIL || process.env.ADMIN_EMAIL
const PASSWORD = process.env.AUTH_SMOKE_PASSWORD || process.env.ADMIN_PASSWORD
const PP_SECRET = process.env.PAYMENTPOINT_WEBHOOK_SECRET || process.env.PAYMENTPOINT_KEY

if (!EMAIL || !PASSWORD) {
  console.error("Missing AUTH_SMOKE_EMAIL or AUTH_SMOKE_PASSWORD env vars.")
  process.exit(2)
}
if (!PP_SECRET) {
  console.error("Missing PAYMENTPOINT_WEBHOOK_SECRET or PAYMENTPOINT_KEY env var.")
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


async function postPaymentPointWebhook(payload, accessToken) {
  const raw = JSON.stringify(payload)
  const signatureHex = crypto.createHmac("sha256", PP_SECRET).update(raw).digest("hex")
  const res = await fetch(`${BASE}/api/wallet/webhook/paymentpoint`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-paymentpoint-signature": signatureHex,
      Authorization: `Bearer ${accessToken}`,
    },
    body: raw, // Important: signature is computed over this exact body
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

  console.log("[3/5] Initiate funding via PaymentPoint")
  const amount = 700
  const fund = await fundWalletPaymentPoint(access, amount)
  if (!fund?.ok || !fund?.reference) throw new Error("Missing ok/reference in fund response")
  console.log(`     ✓ Fund initiated. Reference: ${fund.reference}; Provider: ${fund.provider}`)

  console.log("[4/5] Post PaymentPoint webhook SUCCESS to credit wallet")
  const webhookPayload = {
    reference: fund.reference,
    status: "SUCCESS",
    amount,
    customer: { email: loginData?.user?.email || EMAIL },
    meta: { smoke: true },
  }
  const wh = await postPaymentPointWebhook(webhookPayload, access)
  if (!wh?.ok) throw new Error("Webhook response not ok")
  console.log("     ✓ Webhook accepted and processed")

  console.log("[5/5] Fetch wallet balance (after)")
  const after = await getBalance(access)
  const afterBal = Number(after?.balance ?? 0)
  const diff = afterBal - beforeBal
  if (diff < amount) throw new Error(`Balance did not increment as expected (Δ=${diff}, expected ≥ ${amount})`)
  console.log(`     ✓ Balance incremented by ₦${diff.toLocaleString()} (expected ≥ ₦${amount.toLocaleString()})`)

  console.log("\nWallet webhook simulation smoke completed.")
  process.exit(0)
})().catch((e) => {
  console.error("Wallet webhook smoke failed:", e?.message || String(e))
  process.exit(1)
})