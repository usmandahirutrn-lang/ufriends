const { PrismaClient } = require('@prisma/client')

async function main() {
  const prisma = new PrismaClient()
  try {
    const provider = await prisma.serviceProvider.findFirst({
      where: { name: 'PortedSIM Airtime' }
    })
    if (!provider) {
      console.error('PortedSIM Airtime provider not found')
      return
    }
    const updated = await prisma.serviceProvider.update({
      where: { id: provider.id },
      data: { priority: 5, isActive: false }
    })
    console.log('Updated fallback provider:', { id: updated.id, priority: updated.priority, isActive: updated.isActive })
  } catch (err) {
    console.error('Error:', err)
  } finally {
    await prisma.$disconnect()
  }
}

main()