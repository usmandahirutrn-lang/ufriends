// Configure SubAndGain as the active provider for airtime, data, bills, and education
// Usage (PowerShell):
//   $env:BASE_URL="http://localhost:5070"; 
//   $env:ADMIN_EMAIL="usman@universalkart.com.ng"; 
//   $env:ADMIN_PASSWORD="Admin123!"; 
//   $env:SUBANDGAIN_BASE_URL="https://subandgain.com"; 
//   $env:SUBANDGAIN_API_KEY="<your_api_key>"; 
//   $env:SUBANDGAIN_USERNAME="<your_username>"; 
//   node scripts/configure-subandgain-all.js

const BASE = process.env.BASE_URL || "http://localhost:5070";
const EMAIL = process.env.ADMIN_EMAIL || "admin@ufriends.local";
const PASSWORD = process.env.ADMIN_PASSWORD || "Admin123!";

const SAG_BASE = process.env.SUBANDGAIN_BASE_URL || "https://subandgain.com";
const SAG_API_KEY = process.env.SUBANDGAIN_API_KEY || "";
const SAG_USERNAME = process.env.SUBANDGAIN_USERNAME || "";

if (!SAG_API_KEY || !SAG_USERNAME) {
  console.error("Missing SUBANDGAIN_API_KEY or SUBANDGAIN_USERNAME env vars.");
  process.exit(2);
}

const PROVIDERS = [
  {
    name: "SubAndGain Airtime",
    category: "airtime",
    apiBaseUrl: SAG_BASE,
    priority: 10,
    isActive: false,
    configJson: {
      adapter: "subandgain",
      endpoints: { vtu: "/api/airtime.php" }
    },
    apiKeys: [
      { keyName: "apiKey", keyValue: SAG_API_KEY },
      { keyName: "username", keyValue: SAG_USERNAME },
    ],
  },
  {
    name: "SubAndGain Data",
    category: "data",
    apiBaseUrl: SAG_BASE,
    priority: 10,
    isActive: false,
    configJson: {
      adapter: "subandgain",
      endpoints: { bundle: "/api/data.php" }
    },
    apiKeys: [
      { keyName: "apiKey", keyValue: SAG_API_KEY },
      { keyName: "username", keyValue: SAG_USERNAME },
    ],
  },
  {
    name: "SubAndGain Bills",
    category: "bills",
    apiBaseUrl: SAG_BASE,
    priority: 10,
    isActive: false,
    configJson: {
      adapter: "subandgain",
      endpoints: { purchase: "/electricity/purchase" }
    },
    apiKeys: [
      { keyName: "apiKey", keyValue: SAG_API_KEY },
    ],
  },
  {
    name: "SubAndGain Education",
    category: "education",
    apiBaseUrl: SAG_BASE,
    priority: 10,
    isActive: false,
    configJson: {
      adapter: "subandgain",
      endpoints: { education: "/api/education.php" }
    },
    apiKeys: [
      { keyName: "apiKey", keyValue: SAG_API_KEY },
      { keyName: "username", keyValue: SAG_USERNAME },
    ],
  },
];

async function login(email, password) {
  const res = await fetch(`${BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`Login failed: ${data.error || res.statusText}`);
  return data.tokens?.accessToken;
}

async function createProvider(accessToken, provider) {
  const { apiKeys, ...payload } = provider;
  const res = await fetch(`${BASE}/api/admin/providers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`Create provider failed: ${data.error || res.statusText}`);
  return { provider: data.provider, apiKeys };
}

async function setApiKey(accessToken, providerId, key) {
  const res = await fetch(`${BASE}/api/admin/providers/${providerId}/api-key`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(key),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`Set API key failed: ${data.error || res.statusText}`);
  return data;
}

async function activateProvider(accessToken, category, providerId) {
  const res = await fetch(`${BASE}/api/admin/providers/category/${category}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ activeProviderId: providerId }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`Activate provider failed: ${data.error || res.statusText}`);
  return data;
}

async function main() {
  try {
    console.log(`[1/4] Login as ${EMAIL}`);
    const access = await login(EMAIL, PASSWORD);
    if (!access) throw new Error("Missing access token from login response");
    console.log("     ✓ Logged in successfully");

    console.log(`[2/4] Create SubAndGain providers (${PROVIDERS.length})`);
    const created = [];
    for (const cfg of PROVIDERS) {
      try {
        const res = await createProvider(access, cfg);
        console.log(`     ✓ Created ${cfg.name} (${res.provider.id})`);
        created.push(res);
      } catch (err) {
        console.log(`     ✗ Failed to create ${cfg.name}: ${err.message}`);
      }
    }

    console.log(`[3/4] Set API keys`);
    for (const { provider, apiKeys } of created) {
      for (const k of apiKeys) {
        try {
          await setApiKey(access, provider.id, k);
          console.log(`     ✓ Set ${k.keyName} for ${provider.name}`);
        } catch (err) {
          console.log(`     ✗ Failed to set ${k.keyName} for ${provider.name}: ${err.message}`);
        }
      }
    }

    console.log(`[4/4] Activate providers per category`);
    for (const { provider } of created) {
      try {
        await activateProvider(access, provider.category, provider.id);
        console.log(`     ✓ Activated ${provider.name} for ${provider.category}`);
      } catch (err) {
        console.log(`     ✗ Failed to activate ${provider.name}: ${err.message}`);
      }
    }

    console.log("\n🎉 SubAndGain configured for airtime, data, bills, and education.");
  } catch (err) {
    console.error("❌ Configuration failed:", err.message);
    process.exit(1);
  }
}

main();