/**
 * Seed ServiceCatalog and parameterized CatalogPricing entries
 * Usage: node scripts/seed-catalog-pricing-with-parameters.js
 */
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

function stableParamsKey(params) {
  if (!params || typeof params !== "object" || Array.isArray(params)) return ""
  const entries = Object.entries(params).filter(([k, v]) => v !== undefined && v !== null)
  if (!entries.length) return ""
  entries.sort(([a], [b]) => a.localeCompare(b))
  return entries.map(([k, v]) => `${k}=${String(v)}`).join("|")
}

async function ensureCatalog({ category, subservice, variant = "", description = undefined }) {
  const existing = await prisma.serviceCatalog.findUnique({
    where: {
      category_subservice_variant_unique: { category, subservice, variant: variant || "" },
    },
  })
  if (existing) return existing
  return prisma.serviceCatalog.create({
    data: { category, subservice, variant: variant || "", description },
  })
}

async function upsertCatalogPricing({ category, subservice, variant = "", basePrice, userPrice, marketerPrice, parameters }) {
  const paramsKey = stableParamsKey(parameters)
  const data = {
    category,
    subservice,
    variant: variant || "",
    basePrice: Number(basePrice),
    userPrice: Number(userPrice),
    marketerPrice: Number(marketerPrice),
    parameters,
    paramsKey,
  }
  const pricing = await prisma.catalogPricing.upsert({
    where: {
      catalog_pricing_category_subservice_variant_paramsKey_unique: {
        category,
        subservice,
        variant: variant || "",
        paramsKey,
      },
    },
    update: data,
    create: data,
  })
  return pricing
}

async function main() {
  try {
    console.log("Seeding parameterized catalog pricing…")

    // Ensure lowercase data subservices exist
    await ensureCatalog({ category: "data", subservice: "gift", variant: "", description: "Data gifting services" })
    await ensureCatalog({ category: "data", subservice: "sme", variant: "", description: "SME data services" })
    await ensureCatalog({ category: "data", subservice: "corporate", variant: "", description: "Corporate data services" })

    // Seed parameter combinations for data.gift
    const giftRows = [
      { parameters: { network: "mtn", size: "500mb" }, basePrice: 150, userPrice: 180, marketerPrice: 170 },
      { parameters: { network: "mtn", size: "1gb" }, basePrice: 300, userPrice: 350, marketerPrice: 340 },
      { parameters: { network: "airtel", size: "1gb" }, basePrice: 270, userPrice: 330, marketerPrice: 320 },
      { parameters: { network: "glo", size: "2gb" }, basePrice: 500, userPrice: 600, marketerPrice: 580 },
    ]
    let created = 0
    for (const row of giftRows) {
      await upsertCatalogPricing({
        category: "data",
        subservice: "gift",
        variant: "",
        basePrice: row.basePrice,
        userPrice: row.userPrice,
        marketerPrice: row.marketerPrice,
        parameters: row.parameters,
      })
      created++
    }
    console.log(`✅ Seeded ${created} parameterized pricing rows for data/gift`)

    // Seed parameter combinations for data.sme
    const smeRows = [
      { parameters: { network: "mtn", size: "500mb" }, basePrice: 140, userPrice: 170, marketerPrice: 160 },
      { parameters: { network: "mtn", size: "1gb" }, basePrice: 280, userPrice: 330, marketerPrice: 320 },
      { parameters: { network: "airtel", size: "1gb" }, basePrice: 270, userPrice: 320, marketerPrice: 310 },
    ]
    let smeCreated = 0
    for (const row of smeRows) {
      await upsertCatalogPricing({
        category: "data",
        subservice: "sme",
        variant: "",
        basePrice: row.basePrice,
        userPrice: row.userPrice,
        marketerPrice: row.marketerPrice,
        parameters: row.parameters,
      })
      smeCreated++
    }
    console.log(`✅ Seeded ${smeCreated} parameterized pricing rows for data/sme`)

    // Seed parameter combinations for data.corporate
    const corpRows = [
      { parameters: { network: "mtn", size: "1gb" }, basePrice: 300, userPrice: 360, marketerPrice: 340 },
      { parameters: { network: "mtn", size: "10gb" }, basePrice: 3000, userPrice: 3600, marketerPrice: 3400 },
      { parameters: { network: "airtel", size: "2gb" }, basePrice: 580, userPrice: 650, marketerPrice: 630 },
    ]
    let corpCreated = 0
    for (const row of corpRows) {
      await upsertCatalogPricing({
        category: "data",
        subservice: "corporate",
        variant: "",
        basePrice: row.basePrice,
        userPrice: row.userPrice,
        marketerPrice: row.marketerPrice,
        parameters: row.parameters,
      })
      corpCreated++
    }
    console.log(`✅ Seeded ${corpCreated} parameterized pricing rows for data/corporate`)
  } catch (err) {
    console.error("❌ Seed error:", err)
    process.exitCode = 1
  } finally {
    await prisma.$disconnect()
  }
}

main()