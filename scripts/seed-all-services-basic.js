// Seed all sidebar-listed services and sub-services with slugs only (no prices)
// Usage: node scripts/seed-all-services-basic.js
// This ensures ServiceCategory and Service records exist and are active, so the
// admin pricing & profit manager shows everything categorised. Prices can be added later.

const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

function toSlug(parts) {
  return parts
    .map((p) => String(p).toLowerCase().replace(/[^a-z0-9]+/g, ".").replace(/^\.+|\.+$/g, ""))
    .join(".")
}

async function ensureCategory(slug, name, description = `${name} services`) {
  const existing = await prisma.serviceCategory.findUnique({ where: { slug } })
  if (existing) return existing
  return prisma.serviceCategory.create({ data: { slug, name, description } })
}

async function ensureService(categoryId, slug, name, description = name) {
  const existing = await prisma.service.findUnique({ where: { slug } })
  if (existing) return existing
  return prisma.service.create({ data: { categoryId, slug, name, description, active: true } })
}

async function seedSimpleGroup(categorySlug, categoryName, subItems) {
  const cat = await ensureCategory(categorySlug, categoryName)
  let count = 0
  for (const sub of subItems) {
    const slug = toSlug([categorySlug, sub.id])
    const name = `${categoryName} - ${sub.name}`
    await ensureService(cat.id, slug, name, sub.description || name)
    count++
  }
  return { category: categorySlug, count }
}

async function main() {
  try {
    const results = []

    // Airtime
    results.push(await seedSimpleGroup("airtime", "Airtime", [
      { id: "vtu", name: "VTU" },
      { id: "share-n-sell", name: "Share 'n Sell" },
      { id: "airtime-2-cash", name: "Airtime 2 Cash" },
    ]))

    // Data
    results.push(await seedSimpleGroup("data", "Data", [
      { id: "sme", name: "SME Data" },
      { id: "corporate", name: "Corporate Data" },
      { id: "gift", name: "Gift Data" },
    ]))

    // Bills (include Cable, Electricity, and placeholders for Water/Internet)
    results.push(await seedSimpleGroup("bills", "Bills", [
      { id: "cable", name: "Cable TV" },
      { id: "electricity", name: "Electricity" },
      { id: "water", name: "Water" },
      { id: "internet", name: "Internet" },
    ]))

    // BVN Services
    results.push(await seedSimpleGroup("bvn", "BVN Services", [
      { id: "android-license", name: "Android License" },
      { id: "modification", name: "BVN Modification" },
      { id: "retrieval", name: "BVN Retrieval" },
      { id: "central-risk", name: "Central Risk Management" },
      { id: "printout", name: "BVN Print Out" },
    ]))

    // NIN Services
    results.push(await seedSimpleGroup("nin", "NIN Services", [
      { id: "slip", name: "NIN Slip" },
      { id: "modification", name: "NIN Modification" },
      { id: "validation", name: "NIN Validation" },
      { id: "ipe-clearance", name: "IPE Clearance" },
      { id: "printout", name: "NIN Printout" },
    ]))

    // CAC
    results.push(await seedSimpleGroup("cac", "CAC Registration", [
      { id: "registration", name: "CAC Registration" },
      { id: "jtb-tin", name: "JTB TIN Registration" },
      { id: "status-report", name: "Retrieval Status Report" },
      { id: "certification", name: "Retrieval of Certification" },
      { id: "post-incorporation", name: "Post-Incorporation" },
    ]))

    // Education (top-level categories)
    results.push(await seedSimpleGroup("education", "Education", [
      { id: "waec", name: "WAEC" },
      { id: "neco", name: "NECO" },
      { id: "nabteb", name: "NABTEB" },
      { id: "nbais", name: "NBAIS" },
      { id: "jamb", name: "JAMB" },
      { id: "nysc", name: "NYSC" },
    ]))

    // Verification (generic)
    results.push(await seedSimpleGroup("verification", "Verification", [
      { id: "voters-card", name: "Voters Card" },
      { id: "driver-license", name: "Driver License" },
      { id: "passport", name: "International Passport" },
      { id: "nin", name: "NIN" },
      { id: "bvn", name: "BVN" },
      { id: "plate-number", name: "Plate Number" },
      { id: "tin", name: "TIN" },
      { id: "cac", name: "CAC" },
      { id: "phone", name: "Phone Number" },
    ]))

    // Agency Banking
    results.push(await seedSimpleGroup("agency-banking", "Agency Banking", [
      { id: "pos-request", name: "POS Request" },
      { id: "marketer", name: "Become UFriends Marketer" },
    ]))

    // Training
    results.push(await seedSimpleGroup("training", "Training", [
      { id: "free-user", name: "Free User Training" },
      { id: "premium-user", name: "Premium User Training" },
      { id: "cac-registration", name: "CAC Registration Training" },
      { id: "nin-modification", name: "NIN Modification Training" },
      { id: "bvn-modification", name: "BVN Modification Training" },
      { id: "agency-updates", name: "Agency Updates Training" },
    ]))

    // Software Development
    results.push(await seedSimpleGroup("software-development", "Software Development", [
      { id: "web", name: "Web Applications" },
      { id: "mobile", name: "Mobile Applications" },
      { id: "custom", name: "Custom Solutions" },
    ]))

    console.log("Seeded categories/services:", results)
  } catch (err) {
    console.error("Seed error:", err)
    process.exitCode = 1
  } finally {
    await prisma.$disconnect()
  }
}

main()