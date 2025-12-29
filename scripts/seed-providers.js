/**
 * Seed a few ServiceProvider rows for admin UI testing
 * Usage: node scripts/seed-providers.js
 */
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function ensureProvider({ id, name, category, apiBaseUrl, priority, isActive }) {
  const existing = await prisma.serviceProvider.findUnique({ where: { id } })
  if (existing) {
    await prisma.serviceProvider.update({ where: { id }, data: { name, category, apiBaseUrl, priority, isActive } })
    return
  }
  await prisma.serviceProvider.create({ data: { id, name, category, apiBaseUrl, priority, isActive } })
}

async function main() {
  const items = [
    { id: "paymentpoint", name: "PaymentPoint", category: "wallet", apiBaseUrl: "https://api.paymentpoint.co/api/v1", priority: 10, isActive: true },
    { id: "monnify", name: "Monnify", category: "wallet", apiBaseUrl: "https://sandbox.monnify.com/api/v1", priority: 8, isActive: false },
    { id: "bvn_provider_a", name: "BVN Provider A", category: "bvn", apiBaseUrl: "https://provider-a.example/api", priority: 5, isActive: true },
    { id: "bvn_provider_b", name: "BVN Provider B", category: "bvn", apiBaseUrl: "https://provider-b.example/api", priority: 3, isActive: false },
    // Mock service providers for smoke tests
    { id: "airtime_mock", name: "Mock Airtime", category: "airtime", apiBaseUrl: null, priority: 5, isActive: false },
    { id: "data_mock", name: "Mock Data", category: "data", apiBaseUrl: null, priority: 5, isActive: false },
    { id: "bills_mock", name: "Mock Bills", category: "bills", apiBaseUrl: null, priority: 5, isActive: false },
    { id: "education_mock", name: "Mock Education", category: "education", apiBaseUrl: null, priority: 5, isActive: false },
  ]
  for (const p of items) {
    await ensureProvider(p)
  }
  console.log("✓ Seeded providers:", items.map(i => `${i.category}:${i.id}`).join(", "))
}

main().catch(err => {
  console.error("Seed providers failed:", err)
  process.exit(1)
}).finally(async () => {
  await prisma.$disconnect()
})