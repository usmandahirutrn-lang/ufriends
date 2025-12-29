const { PrismaClient } = require('@prisma/client')

async function main() {
  const prisma = new PrismaClient()
  const BASE = process.env.BASE_URL || 'http://localhost:3000'
  const newBase = `${BASE}/api/mock/ported`
  try {
    const names = ['PortedSIM Airtime', 'PortedSIM Data']
    for (const name of names) {
      const p = await prisma.serviceProvider.findFirst({ where: { name } })
      if (!p) {
        console.warn(`Provider ${name} not found`)
        continue
      }
      const updated = await prisma.serviceProvider.update({ where: { id: p.id }, data: { apiBaseUrl: newBase } })
      console.log(`Updated ${name}:`, { id: updated.id, apiBaseUrl: updated.apiBaseUrl })
    }
  } catch (err) {
    console.error('Error updating providers:', err)
  } finally {
    await prisma.$disconnect()
  }
}

main()