const { PrismaClient } = require('@prisma/client')

async function main() {
  const prisma = new PrismaClient()
  try {
    const providers = await prisma.serviceProvider.findMany({ where: { category: 'airtime' } })
    console.log('Airtime providers:', providers.map(p => ({ id: p.id, name: p.name, isActive: p.isActive, priority: p.priority, apiBaseUrl: p.apiBaseUrl })))
  } catch (err) {
    console.error('Error:', err)
  } finally {
    await prisma.$disconnect()
  }
}

main()