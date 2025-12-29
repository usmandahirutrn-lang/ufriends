const fs = require('fs')

async function login() {
  // Mint a short-lived admin token via local secret
  const { SignJWT } = await import('jose')
  function nowSeconds() { return Math.floor(Date.now() / 1000) }
  const sub = process.env.SUB || 'cmh8y9ip70000vvu46e8tnhgn'
  const email = process.env.EMAIL || 'admin@ufriends.local'
  const role = process.env.ROLE || 'ADMIN'
  const exp = parseInt(process.env.EXP_SECONDS || '900', 10)
  const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'dev_access_secret')
  const token = await new SignJWT({ sub, email, role })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt(nowSeconds())
    .setExpirationTime(nowSeconds() + exp)
    .sign(secret)
  return token
}

async function main() {
  const BASE = process.env.BASE_URL || 'http://localhost:3000'
  const LOG = 'services-smoke.log'
  const token = await login()

  const body = {
    amount: 100,
    params: { phone: '08012345678', network: 'MTN' },
    idempotencyKey: `air_${Date.now()}`
  }

  const res = await fetch(`${BASE}/api/service/airtime/vtu`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    body: JSON.stringify(body)
  })
  const text = await res.text()
  let parsed
  try { parsed = JSON.parse(text) } catch { parsed = { raw: text } }

  const entry = {
    ts: new Date().toISOString(),
    status: res.status,
    url: '/api/service/airtime/vtu',
    response: parsed
  }
  fs.appendFileSync(LOG, `\nAIRTIME_TEST ${JSON.stringify(entry)}\n`)
  console.log('Logged to services-smoke.log:', entry)
}

main().catch(err => { console.error('airtime_request_log error:', err); process.exit(1) })