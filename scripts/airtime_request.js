const { spawnSync } = require('child_process')

async function main() {
  // Get a fresh access token via the ESM mint script
  const tokenProc = spawnSync(process.execPath, ['scripts/mint_token.mjs'], { encoding: 'utf8' })
  const token = (tokenProc.stdout || '').trim()
  if (!token) {
    console.error('Failed to mint access token')
    process.exit(1)
  }

  const payload = {
    amount: 100,
    params: { phone: '08012345678', network: 'MTN' },
    idempotencyKey: `AIR-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,
  }

  const res = await fetch('http://localhost:3000/api/service/airtime/vtu', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  })

  const text = await res.text()
  let data
  try { data = JSON.parse(text) } catch { data = { raw: text } }
  console.log('Status:', res.status)
  console.log('Body:', JSON.stringify(data, null, 2))
}

main().catch(err => { console.error('Error:', err); process.exit(1) })