// Seed initial catalog pricing entries matching the user UI keys
// Run with: node scripts/seed-initial-pricing.js

const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

function stableParamsKey(params) {
  if (!params || typeof params !== "object" || Array.isArray(params)) return ""
  const entries = Object.entries(params).filter(([_, v]) => v !== undefined && v !== null)
  if (!entries.length) return ""
  entries.sort(([a], [b]) => a.localeCompare(b))
  return entries.map(([k, v]) => `${k}=${String(v)}`).join("|")
}

async function ensureCatalog(category, subservice, variant = "", description = undefined) {
  const existing = await prisma.serviceCatalog.findFirst({
    where: {
      category: { equals: category, mode: "insensitive" },
      subservice: { equals: subservice, mode: "insensitive" },
      variant: { equals: variant || "", mode: "insensitive" },
    },
    select: { id: true },
  })
  if (existing) return existing.id
  const created = await prisma.serviceCatalog.create({
    data: { category, subservice, variant: variant || "", description },
    select: { id: true },
  })
  return created.id
}

async function upsertPrice({ category, subservice, variant = "", basePrice, userPrice, marketerPrice, parameters }) {
  const paramsKey = stableParamsKey(parameters)
  await ensureCatalog(category, subservice, variant)
  const existing = await prisma.catalogPricing.findFirst({
    where: {
      category: { equals: category, mode: "insensitive" },
      subservice: { equals: subservice, mode: "insensitive" },
      variant: { equals: variant || "", mode: "insensitive" },
      paramsKey: paramsKey,
    },
    select: { id: true },
  })
  if (existing) {
    await prisma.catalogPricing.update({
      where: { id: existing.id },
      data: { basePrice, userPrice, marketerPrice, parameters, paramsKey },
    })
  } else {
    await prisma.catalogPricing.create({
      data: { category, subservice, variant: variant || "", basePrice, userPrice, marketerPrice, parameters, paramsKey },
    })
  }
}

async function main() {
  // Default prices you can adjust later in Admin UI
  const DEFAULT_USER = 500
  const DEFAULT_MARKETER = 450
  const DEFAULT_BASE = 400
  const entries = []

  // NIN Slip variants used by UI: basic, standard, regular, premium
  for (const v of ["basic", "standard", "regular", "premium"]) {
    entries.push({ category: "nin", subservice: "slip", variant: v, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })
  }

  // BVN Advanced verification
  entries.push({ category: "bvn", subservice: "advanced", variant: "advanced", basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })

  // Passport verify (basic)
  entries.push({ category: "passport", subservice: "verify", variant: "basic", basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })

  // Phone advanced (basic)
  entries.push({ category: "phone", subservice: "advanced", variant: "basic", basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })

  // Voters Card: basic and full
  for (const v of ["basic", "full"]) {
    entries.push({ category: "voters-card", subservice: v, variant: v, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })
  }

  // TIN: basic and certificate
  for (const v of ["basic", "certificate"]) {
    entries.push({ category: "tin", subservice: v, variant: v, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })
  }

  // CAC: info/basic and status/certificate, parameterized by companyType (RC, BN, IT)
  const companyTypes = ["RC", "BN", "IT"]
  // Base fallbacks with no parameters
  entries.push({ category: "cac", subservice: "info", variant: "basic", basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })
  entries.push({ category: "cac", subservice: "status", variant: "certificate", basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })
  // Parameter-specific entries
  for (const ct of companyTypes) {
    entries.push({ category: "cac", subservice: "info", variant: "basic", basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { companyType: ct } })
    entries.push({ category: "cac", subservice: "status", variant: "certificate", basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { companyType: ct } })
  }

  // CAC Registration: variants bn and rc, parameterized by directorsCount
  for (const v of ["bn", "rc"]) {
    // Fallback without parameters
    entries.push({ category: "cac", subservice: "registration", variant: v, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })
    // Example parameter-specific entries for directorsCount
    for (const d of [0, 1, 2, 3, 4]) {
      entries.push({ category: "cac", subservice: "registration", variant: v, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { directorsCount: d } })
    }
    // Business type / structure parameter-specific entries
    const businessTypes = [
      "sole proprietorship",
      "partnership",
      "limited liability company",
      "public limited company",
      "ngo",
      "incorporated trustees",
    ]
    for (const bt of businessTypes) {
      entries.push({ category: "cac", subservice: "registration", variant: v, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { businessType: bt } })
    }
  }

  // CAC JTB TIN Registration: variants individual and business
  for (const v of ["individual", "business"]) {
    entries.push({ category: "cac", subservice: "jtb-tin", variant: v, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })
  }

  // CAC Post-Incorporation: variants for each service type; certified-copy supports quantity parameter
  const postIncVariants = [
    "annual-returns",
    "change-name",
    "change-address",
    "change-directors",
    "increase-capital",
    "certified-copy",
    "good-standing",
    "retrieve-certificate",
    "retrieve-status",
    "amend-memorandum",
  ]
  for (const v of postIncVariants) {
    // Fallback
    entries.push({ category: "cac", subservice: "post-incorporation", variant: v, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })
    if (v === "certified-copy") {
      // Quantity-specific examples
      for (const q of [1, 5]) {
        entries.push({ category: "cac", subservice: "post-incorporation", variant: v, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { quantity: q } })
      }
    }
  }

  // Driver's License: basic
  // Fallback (no params)
  entries.push({ category: "driver-license", subservice: "basic", variant: "basic", basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })
  // Parameter-specific entries for lookupMode
  entries.push({ category: "driver-license", subservice: "basic", variant: "basic", basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { lookupMode: "number" } })
  entries.push({ category: "driver-license", subservice: "basic", variant: "basic", basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { lookupMode: "name_dob" } })

  // Plate Number: basic
  entries.push({ category: "plate-number", subservice: "basic", variant: "basic", basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })

  // BVN Modification: variant basic, parameterized by modificationType and verificationType
  const modificationTypes = [
    "name_correction",
    "date_of_birth_correction",
    "phone_number_update",
    "address_update",
    "gender_correction",
    "email_correction",
    "others",
  ]
  const verificationTypes = ["NIN", "Voter's Card", "Driver's License", "International Passport"]
  // Fallback entry
  entries.push({ category: "bvn", subservice: "modification", variant: "basic", basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })
  // Seed per modificationType
  for (const mt of modificationTypes) {
    entries.push({ category: "bvn", subservice: "modification", variant: "basic", basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { modificationType: mt } })
    for (const vt of verificationTypes) {
      entries.push({ category: "bvn", subservice: "modification", variant: "basic", basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { modificationType: mt, verificationType: vt } })
    }
  }

  // BVN Android License Enrollment: variant enrollment, parameterized by state
  entries.push({ category: "bvn", subservice: "android-license", variant: "enrollment", basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })
  // Example parameter-specific entries
  for (const st of ["lagos", "abuja", "unknown"]) {
    entries.push({ category: "bvn", subservice: "android-license", variant: "enrollment", basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { state: st } })
  }

  // NIN Modification: variant basic, parameterized by modificationType
  entries.push({ category: "nin", subservice: "modification", variant: "basic", basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })
  for (const mt of ["name", "dob", "address", "gender", "phone", "other"]) {
    entries.push({ category: "nin", subservice: "modification", variant: "basic", basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { modificationType: mt } })
  }

  // NIN Validation: variant basic, parameterized by validationType
  entries.push({ category: "nin", subservice: "validation", variant: "basic", basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })
  for (const vt of ["normal", "photographic_error", "sim_registration", "bank_validation"]) {
    entries.push({ category: "nin", subservice: "validation", variant: "basic", basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { validationType: vt } })
  }

  // NIN IPE Clearance: variant-specific pricing
  entries.push({ category: "nin", subservice: "ipe-clearance", variant: "basic", basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })
  for (const v of ["normal", "modification"]) {
    entries.push({ category: "nin", subservice: "ipe-clearance", variant: v, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })
  }

  // Agency Banking: POS Request — variants by provider, parameterized by posType and deliveryOption
  const posProviders = ["opay", "moniepoint", "fcmb", "nomba", "other"]
  const posTypesByProvider = {
    opay: ["mini", "traditional", "android"],
    moniepoint: ["android", "traditional"],
    fcmb: ["wired", "wireless"],
    nomba: ["nomba lite", "nomba pro", "android"],
    other: ["android", "traditional"],
  }
  const deliveryOptions = ["pickup", "delivery"]
  for (const p of posProviders) {
    // Fallback for provider without parameters
    entries.push({ category: "agency-banking", subservice: "pos-request", variant: p, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })
    // Parameter-specific entries for posType
    for (const pt of posTypesByProvider[p] || []) {
      entries.push({ category: "agency-banking", subservice: "pos-request", variant: p, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { posType: pt } })
    }
    // Parameter-specific entries for deliveryOption
    for (const dof of deliveryOptions) {
      entries.push({ category: "agency-banking", subservice: "pos-request", variant: p, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { deliveryOption: dof } })
    }
    // Combination entries for posType + deliveryOption
    for (const pt of posTypesByProvider[p] || []) {
      for (const dof of deliveryOptions) {
        entries.push({ category: "agency-banking", subservice: "pos-request", variant: p, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { posType: pt, deliveryOption: dof } })
      }
    }
  }

  // Software Development: Web — variants by appType, parameterized by posType and deliveryOption
  const webAppTypes = [
    "business-website",
    "e-commerce",
    "saas",
    "admin-panel",
    "other",
  ]
  for (const appType of webAppTypes) {
    // Fallback for appType without parameters
    entries.push({ category: "software-development", subservice: "web", variant: appType, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })
    // Parameter-specific: posType
    entries.push({ category: "software-development", subservice: "web", variant: appType, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { posType: appType } })
    // Parameter-specific: deliveryOption
    for (const dof of ["standard", "express"]) {
      entries.push({ category: "software-development", subservice: "web", variant: appType, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { deliveryOption: dof } })
      // Combination posType + deliveryOption
      entries.push({ category: "software-development", subservice: "web", variant: appType, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { posType: appType, deliveryOption: dof } })
    }
  }

  // Software Development: Mobile — variants by appType, parameterized by posType and deliveryOption
  const mobileAppTypes = [
    "android",
    "ios",
    "cross-platform",
  ]
  for (const appType of mobileAppTypes) {
    entries.push({ category: "software-development", subservice: "mobile", variant: appType, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })
    entries.push({ category: "software-development", subservice: "mobile", variant: appType, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { posType: appType } })
    for (const dof of ["standard", "express"]) {
      entries.push({ category: "software-development", subservice: "mobile", variant: appType, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { deliveryOption: dof } })
      entries.push({ category: "software-development", subservice: "mobile", variant: appType, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { posType: appType, deliveryOption: dof } })
    }
  }

  // Software Development: Custom — variants by solutionType, parameterized by posType and deliveryOption
  const customSolutionTypes = [
    "automation-tool",
    "crm",
    "erp",
    "api-integration",
    "ai-ml",
    "other",
  ]
  for (const solType of customSolutionTypes) {
    entries.push({ category: "software-development", subservice: "custom", variant: solType, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })
    entries.push({ category: "software-development", subservice: "custom", variant: solType, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { posType: solType } })
    for (const dof of ["standard", "express"]) {
      entries.push({ category: "software-development", subservice: "custom", variant: solType, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { deliveryOption: dof } })
      entries.push({ category: "software-development", subservice: "custom", variant: solType, basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { posType: solType, deliveryOption: dof } })
    }
  }

  // Training: Premium User — subscription pricing with optional deliveryOption
  entries.push({ category: "training", subservice: "premium-user", variant: "subscription", basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER })
  for (const dof of ["standard", "express"]) {
    entries.push({ category: "training", subservice: "premium-user", variant: "subscription", basePrice: DEFAULT_BASE, userPrice: DEFAULT_USER, marketerPrice: DEFAULT_MARKETER, parameters: { deliveryOption: dof } })
  }

  for (const e of entries) {
    await upsertPrice(e)
  }
  console.log("✅ Initial catalog pricing seeded for verification services.")
  console.log("You can now edit these in Admin › Pricing.")
}

main()
  .catch((e) => { console.error("❌ Seed failed:", e); process.exit(1) })
  .finally(async () => { await prisma.$disconnect() })