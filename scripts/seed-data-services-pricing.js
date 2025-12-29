/**
 * Seed Data services (SME, Gift, Corporate) and pricing for all networks/sizes
 * Usage: node scripts/seed-data-services-pricing.js
 */
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const SME = {
  MTN: [
    { size: "500MB", price: 150 },
    { size: "1GB", price: 280 },
    { size: "2GB", price: 560 },
    { size: "3GB", price: 840 },
    { size: "4GB", price: 1120 },
    { size: "5GB", price: 1400 },
    { size: "10GB", price: 2800 },
  ],
  Airtel: [
    { size: "500MB", price: 140 },
    { size: "1GB", price: 270 },
    { size: "2GB", price: 540 },
    { size: "3GB", price: 810 },
    { size: "4GB", price: 1080 },
    { size: "5GB", price: 1350 },
    { size: "10GB", price: 2700 },
  ],
  Glo: [
    { size: "500MB", price: 130 },
    { size: "1GB", price: 250 },
    { size: "2GB", price: 500 },
    { size: "3GB", price: 750 },
    { size: "4GB", price: 1000 },
    { size: "5GB", price: 1250 },
    { size: "10GB", price: 2500 },
  ],
  "9mobile": [
    { size: "500MB", price: 120 },
    { size: "1GB", price: 240 },
    { size: "2GB", price: 480 },
    { size: "3GB", price: 720 },
    { size: "4GB", price: 960 },
    { size: "5GB", price: 1200 },
    { size: "10GB", price: 2400 },
  ],
}

const GIFT = {
  MTN: [
    { size: "500MB", price: 180 },
    { size: "1GB", price: 350 },
    { size: "2GB", price: 700 },
    { size: "3GB", price: 1050 },
    { size: "4GB", price: 1400 },
    { size: "5GB", price: 1750 },
    { size: "10GB", price: 3500 },
  ],
  Airtel: [
    { size: "500MB", price: 170 },
    { size: "1GB", price: 340 },
    { size: "2GB", price: 680 },
    { size: "3GB", price: 1020 },
    { size: "4GB", price: 1360 },
    { size: "5GB", price: 1700 },
    { size: "10GB", price: 3400 },
  ],
  Glo: [
    { size: "500MB", price: 160 },
    { size: "1GB", price: 320 },
    { size: "2GB", price: 640 },
    { size: "3GB", price: 960 },
    { size: "4GB", price: 1280 },
    { size: "5GB", price: 1600 },
    { size: "10GB", price: 3200 },
  ],
  "9mobile": [
    { size: "500MB", price: 150 },
    { size: "1GB", price: 300 },
    { size: "2GB", price: 600 },
    { size: "3GB", price: 900 },
    { size: "4GB", price: 1200 },
    { size: "5GB", price: 1500 },
    { size: "10GB", price: 3000 },
  ],
}

const CORPORATE = {
  MTN: [
    { size: "1GB", price: 300 },
    { size: "2GB", price: 600 },
    { size: "3GB", price: 900 },
    { size: "4GB", price: 1200 },
    { size: "5GB", price: 1500 },
    { size: "10GB", price: 3000 },
    { size: "25GB", price: 7500 },
    { size: "50GB", price: 15000 },
  ],
  Airtel: [
    { size: "1GB", price: 290 },
    { size: "2GB", price: 580 },
    { size: "3GB", price: 870 },
    { size: "4GB", price: 1160 },
    { size: "5GB", price: 1450 },
    { size: "10GB", price: 2900 },
    { size: "25GB", price: 7250 },
  ],
  Glo: [
    { size: "1GB", price: 280 },
    { size: "2GB", price: 560 },
    { size: "3GB", price: 840 },
    { size: "4GB", price: 1120 },
    { size: "5GB", price: 1400 },
    { size: "10GB", price: 2800 },
  ],
  "9mobile": [
    { size: "1GB", price: 270 },
    { size: "2GB", price: 540 },
    { size: "3GB", price: 810 },
    { size: "4GB", price: 1080 },
    { size: "5GB", price: 1350 },
    { size: "10GB", price: 2700 },
  ],
}

function toSlug(parts) {
  return parts
    .map((p) => String(p).toLowerCase().replace(/[^a-z0-9]+/g, ".").replace(/^\.+|\.+$/g, ""))
    .join(".")
}

async function ensureCategory(slug, name) {
  const existing = await prisma.serviceCategory.findUnique({ where: { slug } })
  if (existing) return existing
  return prisma.serviceCategory.create({ data: { slug, name, description: `${name} services` } })
}

async function ensureService(categoryId, slug, name, description) {
  const existing = await prisma.service.findUnique({ where: { slug } })
  if (existing) return existing
  return prisma.service.create({ data: { categoryId, slug, name, description, active: true } })
}

async function seedGroup(category, groupName, data) {
  const cat = await ensureCategory("data", "Data")
  let createdServices = 0
  let createdPrices = 0

  for (const [network, plans] of Object.entries(data)) {
    for (const plan of plans) {
      const sizeSlug = plan.size.toLowerCase()
      const slug = toSlug(["data", groupName, network, sizeSlug]) // e.g., data.sme.mtn.1gb
      const name = `${groupName.toUpperCase()} Data - ${network} ${plan.size}`
      const description = `${groupName.toUpperCase()} ${network} ${plan.size} plan`
      const svc = await ensureService(cat.id, slug, name, description)
      createdServices += 1

      await prisma.servicePricing.create({
        data: {
          serviceId: svc.id,
          price: Number(plan.price),
          currency: "NGN",
          tier: null,
        },
      })
      createdPrices += 1
    }
  }

  return { createdServices, createdPrices }
}

async function main() {
  try {
    const sme = await seedGroup("data", "sme", SME)
    const gift = await seedGroup("data", "gift", GIFT)
    const corp = await seedGroup("data", "corporate", CORPORATE)
    console.log("Seeded Data services:", {
      sme,
      gift,
      corporate: corp,
    })
  } catch (err) {
    console.error("Error seeding services:", err)
    process.exitCode = 1
  } finally {
    await prisma.$disconnect()
  }
}

main()