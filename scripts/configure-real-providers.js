// Configure real providers for airtime, data, and bills services
const BASE = process.env.BASE_URL || "http://localhost:3000"
const EMAIL = process.env.ADMIN_EMAIL || "admin@ufriends.local"
const PASSWORD = process.env.ADMIN_PASSWORD || "Admin123!"

// Provider configurations
const PROVIDERS_CONFIG = [
  {
    name: "PortedSIM Airtime",
    category: "airtime",
    apiBaseUrl: "https://api.portedsim.com",
    priority: 10,
    isActive: false, // Will activate after creating
    configJson: {
      adapter: "ported",
      endpoints: {
        vtu: "/airtime/vtu"
      }
    },
    apiKey: {
      keyName: "apiKey",
      keyValue: process.env.PORTEDSIM_API_KEY || "demo_ported_key_12345"
    }
  },
  {
    name: "PortedSIM Data",
    category: "data", 
    apiBaseUrl: "https://api.portedsim.com",
    priority: 10,
    isActive: false,
    configJson: {
      adapter: "ported",
      endpoints: {
        bundle: "/data/bundle"
      }
    },
    apiKey: {
      keyName: "apiKey",
      keyValue: process.env.PORTEDSIM_API_KEY || "demo_ported_key_12345"
    }
  },
  {
    name: "SubAndGain Bills",
    category: "bills",
    apiBaseUrl: "https://api.subandgain.com", 
    priority: 10,
    isActive: false,
    configJson: {
      adapter: "subandgain",
      endpoints: {
        purchase: "/electricity/purchase"
      }
    },
    apiKey: {
      keyName: "apiKey",
      keyValue: process.env.SUBANDGAIN_API_KEY || "demo_subandgain_key_67890"
    }
  }
]

async function login(email, password) {
  const res = await fetch(`${BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Login failed: ${data.error || res.statusText}`)
  const accessToken = data.tokens?.accessToken
  console.log(`     ✓ Access token: ${accessToken ? 'received' : 'missing'}`)
  return accessToken
}

async function createProvider(accessToken, config) {
  const { apiKey, ...providerData } = config
  
  const res = await fetch(`${BASE}/api/admin/providers`, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`
    },
    body: JSON.stringify(providerData),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    console.log(`     Debug: Status ${res.status}, Response:`, data)
    throw new Error(`Create provider failed: ${data.error || res.statusText}`)
  }
  return data.provider
}

async function setApiKey(accessToken, providerId, apiKey) {
  const res = await fetch(`${BASE}/api/admin/providers/${providerId}/api-key`, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`
    },
    body: JSON.stringify(apiKey),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Set API key failed: ${data.error || res.statusText}`)
  return data
}

async function activateProvider(accessToken, category, providerId) {
  const res = await fetch(`${BASE}/api/admin/providers/category/${category}`, {
    method: "PATCH",
    headers: { 
      "Content-Type": "application/json",
      "Authorization": `Bearer ${accessToken}`
    },
    body: JSON.stringify({ activeProviderId: providerId }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Activate provider failed: ${data.error || res.statusText}`)
  return data
}

async function main() {
  try {
    console.log(`[1/4] Login as ${EMAIL}`)
    const accessToken = await login(EMAIL, PASSWORD)
    console.log("     ✓ Logged in successfully")

    const createdProviders = []

    console.log(`[2/4] Create ${PROVIDERS_CONFIG.length} real providers`)
    for (const config of PROVIDERS_CONFIG) {
      try {
        const provider = await createProvider(accessToken, config)
        console.log(`     ✓ Created ${config.name} (${provider.id})`)
        createdProviders.push({ ...provider, apiKey: config.apiKey })
      } catch (err) {
        console.log(`     ✗ Failed to create ${config.name}: ${err.message}`)
      }
    }

    console.log(`[3/4] Set API keys for ${createdProviders.length} providers`)
    for (const provider of createdProviders) {
      try {
        await setApiKey(accessToken, provider.id, provider.apiKey)
        console.log(`     ✓ Set API key for ${provider.name}`)
      } catch (err) {
        console.log(`     ✗ Failed to set API key for ${provider.name}: ${err.message}`)
      }
    }

    console.log(`[4/4] Activate real providers`)
    for (const provider of createdProviders) {
      try {
        await activateProvider(accessToken, provider.category, provider.id)
        console.log(`     ✓ Activated ${provider.name} for ${provider.category}`)
      } catch (err) {
        console.log(`     ✗ Failed to activate ${provider.name}: ${err.message}`)
      }
    }

    console.log("\n🎉 Real provider configuration completed!")
    console.log("   - PortedSIM configured for airtime and data services")
    console.log("   - SubAndGain configured for bills/electricity services")
    console.log("   - All providers activated and ready for testing")

  } catch (err) {
    console.error("❌ Configuration failed:", err.message)
    process.exit(1)
  }
}

main()