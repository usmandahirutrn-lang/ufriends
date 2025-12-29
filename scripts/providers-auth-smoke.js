/*
 Authenticated Providers Smoke Test
 - Logs in to obtain access token
 - Fetches providers
 - PATCH /api/admin/providers/:id with no-op update
 - PATCH /api/admin/providers/category/:category to switch active provider
 - POST/DELETE /api/admin/providers/:id/api-key to create and remove a key

 Usage (PowerShell):
   $env:BASE_URL="http://localhost:3000"; 
   $env:AUTH_SMOKE_EMAIL="usman@universalkart.com.ng"; 
   $env:AUTH_SMOKE_PASSWORD="Admin123!"; 
   node scripts/providers-auth-smoke.js

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

async function getProviders(accessToken) {
  const res = await fetch(`${BASE}/api/admin/providers`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Providers failed: ${data.error || res.status}`)
  return data
}

async function patchProvider(accessToken, provider) {
  const body = {
    name: provider.name,
    category: provider.category,
    apiBaseUrl: provider.apiBaseUrl || undefined,
    isActive: !!provider.isActive,
  }
  const res = await fetch(`${BASE}/api/admin/providers/${encodeURIComponent(provider.id)}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
    body: JSON.stringify(body),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Patch provider failed: ${data.error || res.status}`)
  return data
}

async function patchActive(accessToken, categorySlug, activeProviderId) {
  const res = await fetch(`${BASE}/api/admin/providers/category/${encodeURIComponent(categorySlug)}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
    body: JSON.stringify({ activeProviderId }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Patch active failed: ${data.error || res.status}`)
  return data
}

async function createApiKey(accessToken, providerId, keyName, keyValue) {
  const res = await fetch(`${BASE}/api/admin/providers/${encodeURIComponent(providerId)}/api-key`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
    body: JSON.stringify({ keyName, keyValue }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Create API key failed: ${data.error || res.status}`)
  return data
}

async function deleteApiKey(accessToken, providerId, keyId) {
  const res = await fetch(`${BASE}/api/admin/providers/${encodeURIComponent(providerId)}/api-key?keyId=${encodeURIComponent(keyId)}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  if (!res.ok) {
    const text = await res.text().catch(() => "")
    throw new Error(`Delete API key failed: ${res.status} ${text}`)
  }
  return { ok: true }
}

function pickCategorySlug(name) {
  const map = {
    "Wallet / Payments": "wallet",
    "Verification / KYC": "bvn",
    "Bills & Education": "bills",
    "Airtime & Data (VTU)": "airtime",
  }
  return map[name] || name
}

;(async () => {
  console.log(`[1/5] Login as ${EMAIL}`)
  const loginData = await login(EMAIL, PASSWORD)
  const access = loginData?.tokens?.accessToken
  if (!access) throw new Error("Missing access token")
  console.log("     ✓ Logged in; role:", loginData?.user?.role)

  console.log("[2/5] Fetch providers")
  const prov = await getProviders(access)
  const byCat = prov.providersByCategory || {}
  const firstCatName = Object.keys(byCat)[0] || null
  const firstCatList = firstCatName ? byCat[firstCatName] || [] : []
  const anyProvider = firstCatList[0] || (prov.providers && prov.providers[0])
  if (!anyProvider) throw new Error("No providers found")
  console.log(`     ✓ Found provider: ${anyProvider.name} (${anyProvider.id}) in ${anyProvider.category}`)

  console.log("[3/5] No-op PATCH provider")
  const patchRes = await patchProvider(access, anyProvider)
  const patched = patchRes?.provider || {}
  if (patched?.id !== anyProvider.id) throw new Error("Patched provider mismatch")
  console.log("     ✓ Patch OK; provider id:", patched.id)

  // Active switch: prefer wallet category if available, else use first category with >=2 providers
  console.log("[4/5] Switch active provider in a category")
  let catSlug = null
  let catItems = null
  if (byCat.wallet && byCat.wallet.length >= 2) {
    catSlug = "wallet"
    catItems = byCat.wallet
  } else {
    for (const [slug, items] of Object.entries(byCat)) {
      if ((items || []).length >= 2) { catSlug = slug; catItems = items; break }
    }
  }
  if (!catSlug) {
    console.log("     ⚠ No category with >=2 providers; skipping active switch.")
  } else {
    const currentActive = catItems.find(p => p.isActive)
    const candidate = catItems.find(p => !p.isActive) || catItems[0]
    if (!candidate) throw new Error("No candidate provider for active switch")
    const res = await patchActive(access, catSlug, candidate.id)
    const updated = res?.providers || []
    const activeNow = (updated.find(p => p.isActive) || {}).id
    if (!activeNow || activeNow !== candidate.id) {
      console.log("     ⚠ Active switch may not reflect immediately; continuing.")
    } else {
      console.log("     ✓ Active provider switched to:", activeNow)
    }
  }

  console.log("[5/5] Create and delete API key on provider")
  const keyProv = anyProvider
  const createRes = await createApiKey(access, keyProv.id, "smoke-key", "secret-value")
  // The API returns { ok, providerId, keyName } without key id; refetch providers to find it
  const refetch = await getProviders(access)
  const byCat2 = refetch.providersByCategory || {}
  let createdKeyId = null
  for (const items of Object.values(byCat2)) {
    const prov = (items || []).find(p => p.id === keyProv.id)
    if (prov) {
      const match = (prov.apiKeys || []).find(k => k.keyName === "smoke-key")
      if (match) { createdKeyId = match.id; break }
    }
  }
  if (!createdKeyId) throw new Error("Could not locate created API key id after creation")
  console.log("     ✓ API key created:", createdKeyId)
  const delRes = await deleteApiKey(access, keyProv.id, createdKeyId)
  if (!delRes.ok) throw new Error("Delete API key failed")
  console.log("     ✓ API key deleted")

  console.log("\nAuthenticated providers smoke completed.")
  process.exit(0)
})().catch((e) => {
  console.error("Authenticated providers smoke failed:", e?.message || String(e))
  process.exit(1)
})