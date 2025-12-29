/**
 * Seed education ServiceCatalog entries and baseline CatalogPricing for variants
 * Usage: node scripts/seed-education-pricing.js
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
  const category = "education"
  const variantsBySubservice = {
    waec: ["waec-pin", "gce-registration-pin"],
    neco: ["neco-pin", "gce-registration-pin"],
    nabteb: ["nabteb-pin", "gce-registration-pin"],
    nbais: ["nbais-pin", "gce-registration-pin"],
    jamb: ["profile-code", "print-admission-letter", "original-result", "olevel-upload", "check-admission-status", "acceptance"],
    nysc: ["verification", "reprint", "call-up-letter", "certificate-retrieval"],
  }

  // Baseline pricing (editable later in Admin UI)
  const BASE = 1000
  const USER = 1200
  const MARKETER = 1100

  const created = []

  for (const [subservice, variants] of Object.entries(variantsBySubservice)) {
    // Ensure base (no-variant) catalog row exists for dropdown completeness
    await ensureCatalog({ category, subservice, variant: "", description: `${subservice.toUpperCase()} base` }).catch(() => {})
    for (const variant of variants) {
      await ensureCatalog({ category, subservice, variant, description: `${subservice.toUpperCase()} • ${variant}` })
      const pricing = await upsertCatalogPricing({
        category,
        subservice,
        variant,
        basePrice: BASE,
        userPrice: USER,
        marketerPrice: MARKETER,
        parameters: {},
      })
      created.push({ category, subservice, variant, basePrice: pricing.basePrice?.toString?.() || pricing.basePrice, userPrice: pricing.userPrice?.toString?.() || pricing.userPrice, marketerPrice: pricing.marketerPrice?.toString?.() || pricing.marketerPrice })
    }
  }

  console.log("Seeded education pricing entries:", created)
}

main()
  .catch((err) => {
    console.error("Error seeding education pricing:", err)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })