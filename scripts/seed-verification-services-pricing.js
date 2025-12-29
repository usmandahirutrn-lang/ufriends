// Seed BVN and NIN verification services with slugs only (no prices)
// Usage: node scripts/seed-verification-services-pricing.js
// This creates ServiceCategory "verification" and Service entries for all slugs
// you now use in the app pages (BVN/NIN). You can add tiered prices later.

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

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

async function main() {
  try {
    console.log("[1/3] Ensure category: verification")
    const cat = await ensureCategory('verification', 'Verification')

    // BVN services
    const BVN_SERVICES = [
      { slug: 'verification.bvn.retrieval', name: 'BVN Retrieval', description: 'Retrieve forgotten BVN' },
      { slug: 'verification.bvn.central-risk', name: 'BVN Central Risk', description: 'Check central risk status' },
      { slug: 'verification.bvn.printout', name: 'BVN Printout', description: 'Print BVN slip and documents' },
    ]

    // NIN Validation
    const NIN_VALIDATION = [
      { seg: 'normal', name: 'NIN Validation - Normal', description: 'Validation with no record' },
      { seg: 'photographic-error', name: 'NIN Validation - Photographic Error', description: 'Resolve photographic errors' },
      { seg: 'sim-registration', name: 'NIN Validation - SIM Registration', description: 'Validation for SIM registration' },
      { seg: 'bank-validation', name: 'NIN Validation - Bank Validation', description: 'Validation for bank processes' },
    ].map(x => ({ slug: toSlug(['verification', 'nin', 'validation', x.seg]), name: x.name, description: x.description }))

    // NIN Modification
    const NIN_MODIFICATION = [
      { seg: 'name', name: 'NIN Modification - Name Correction' },
      { seg: 'dob', name: 'NIN Modification - Date of Birth Correction' },
      { seg: 'address', name: 'NIN Modification - Address Update' },
      { seg: 'gender', name: 'NIN Modification - Gender Update' },
      { seg: 'phone', name: 'NIN Modification - Phone Update' },
      { seg: 'other', name: 'NIN Modification - Others' },
    ].map(x => ({ slug: toSlug(['verification', 'nin', 'modification', x.seg]), name: x.name, description: x.name }))

    // NIN Slip types
    const NIN_SLIP = [
      { seg: 'standard', name: 'NIN Slip - Standard' },
      { seg: 'premium', name: 'NIN Slip - Premium' },
      { seg: 'regular', name: 'NIN Slip - Regular' },
    ].map(x => ({ slug: toSlug(['verification', 'nin', 'slip', x.seg]), name: x.name, description: x.name }))

    // NIN Printout (no subtype)
    const NIN_PRINTOUT = [
      { slug: 'verification.nin.printout', name: 'NIN Printout', description: 'Print NIN slip and documents' },
    ]

    // IPE Clearance
    const NIN_IPE = [
      { seg: 'normal', name: 'IPE Clearance - Normal' },
      { seg: 'modification', name: 'IPE Clearance - Modification' },
    ].map(x => ({ slug: toSlug(['verification', 'nin', 'ipe-clearance', x.seg]), name: x.name, description: x.name }))

    const ALL = [
      ...BVN_SERVICES,
      ...NIN_VALIDATION,
      ...NIN_MODIFICATION,
      ...NIN_SLIP,
      ...NIN_PRINTOUT,
      ...NIN_IPE,
    ]

    console.log(`[2/3] Ensuring ${ALL.length} verification service slugs`)
    let created = 0
    for (const svc of ALL) {
      await ensureService(cat.id, svc.slug, svc.name, svc.description)
      created += 1
    }

    console.log(`[3/3] Done. Ensured ${created} services under category 'verification'.`)
    console.log("Note: No prices were inserted. Add tiered prices later via Prisma or an admin UI.")
  } catch (err) {
    console.error("Seed error:", err)
    process.exitCode = 1
  } finally {
    await prisma.$disconnect()
  }
}

main()