const { PrismaClient } = require('@prisma/client')

async function main() {
  const prisma = new PrismaClient()
  const category = process.argv[2] || 'airtime'
  try {
    const providers = await prisma.serviceProvider.findMany({
      where: { category },
      include: { apiKeys: true },
      orderBy: [{ isActive: 'desc' }, { priority: 'desc' }, { name: 'asc' }]
    })
    console.log(`Providers in category '${category}':`)
    for (const p of providers) {
      console.log({ id: p.id, name: p.name, isActive: p.isActive, priority: p.priority, apiBaseUrl: p.apiBaseUrl, adapter: (p.configJson || {}).adapter, keys: p.apiKeys.map(k => ({ name: k.keyName, value: k.keyValue })) })
    }
  } catch (err) {
    console.error('Error:', err)
  } finally {
    await prisma.$disconnect()
  }
}

main()