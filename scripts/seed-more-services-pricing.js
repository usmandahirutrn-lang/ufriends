// Seed Airtime, Bills (Electricity), and Education (JAMB) services with initial pricing
// Usage: node scripts/seed-more-services-pricing.js
// Pricing semantics:
// - Airtime VTU: service fee (NGN) per network
// - Bills Electricity: service fee (NGN) per DISCO
// - Education JAMB: fixed price (NGN) per service type

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

async function seedAirtime() {
  const cat = await ensureCategory('airtime', 'Airtime')
  const networks = ['mtn', 'airtel', 'glo', '9mobile']
  const services = []

  // Define service fees (₦) per network for VTU, Share'n'Sell, Airtime 2 Cash
  const fees = {
    vtu: { mtn: 10, airtel: 10, glo: 10, '9mobile': 10 },
    'share-n-sell': { mtn: 20, airtel: 20, glo: 20, '9mobile': 20 },
    'airtime-2-cash': { mtn: 50, airtel: 50, glo: 50, '9mobile': 50 },
  }

  for (const sub of Object.keys(fees)) {
    for (const net of networks) {
      const slug = toSlug(['airtime', sub, net]) // e.g., airtime.vtu.mtn
      const name = `${sub.replace(/-/g, ' ').toUpperCase()} - ${net.toUpperCase()}`
      const description = `${sub.replace(/-/g, ' ')} service fee for ${net.toUpperCase()}`
      const svc = await ensureService(cat.id, slug, name, description)
      services.push(svc.slug)
      await prisma.servicePricing.create({
        data: { serviceId: svc.id, price: Number(fees[sub][net]), currency: 'NGN', tier: null }
      })
    }
  }

  return { category: 'airtime', count: services.length }
}

async function seedBillsElectricity() {
  const cat = await ensureCategory('bills', 'Bills')
  const discos = [
    'ikeja','eko','ibadan','abuja','kano','port-harcourt','enugu','jos'
  ]
  const fee = 50 // flat service fee
  let count = 0

  for (const disco of discos) {
    const slug = toSlug(['bills', 'electricity', disco]) // e.g., bills.electricity.ikeja
    const name = `Electricity Bill - ${disco.toUpperCase()}`
    const description = `Service fee for ${disco.toUpperCase()} electricity payments`
    const svc = await ensureService(cat.id, slug, name, description)
    await prisma.servicePricing.create({ data: { serviceId: svc.id, price: fee, currency: 'NGN', tier: null } })
    count++
  }

  return { category: 'bills.electricity', count }
}

async function seedEducationJamb() {
  const cat = await ensureCategory('education', 'Education')
  const jambServices = [
    { id: 'profile-code', name: "Profile Code Retrieval", price: 1000 },
    { id: 'print-admission-letter', name: "Print Admission Letter", price: 1500 },
    { id: 'original-result', name: "Original JAMB Result", price: 2000 },
    { id: 'olevel-upload', name: "O'Level Upload", price: 1500 },
    { id: 'check-admission-status', name: "Check Admission Status", price: 1200 },
    { id: 'acceptance', name: "Acceptance of Admission", price: 1500 },
  ]

  let count = 0
  for (const svcDef of jambServices) {
    const slug = toSlug(['education', 'jamb', svcDef.id]) // e.g., education.jamb.profile-code
    const name = `Education - JAMB - ${svcDef.name}`
    const description = `JAMB service: ${svcDef.name}`
    const svc = await ensureService(cat.id, slug, name, description)
    await prisma.servicePricing.create({ data: { serviceId: svc.id, price: svcDef.price, currency: 'NGN', tier: null } })
    count++
  }

  return { category: 'education.jamb', count }
}

async function main() {
  try {
    const results = []
    results.push(await seedAirtime())
    results.push(await seedBillsElectricity())
    results.push(await seedEducationJamb())
    console.log('Seeded services:', results)
  } catch (err) {
    console.error('Seed error:', err)
    process.exitCode = 1
  } finally {
    await prisma.$disconnect()
  }
}

main()