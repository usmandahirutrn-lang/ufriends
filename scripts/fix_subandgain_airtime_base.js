const { PrismaClient } = require('@prisma/client')

async function main() {
  const prisma = new PrismaClient()
  try {
    const provider = await prisma.serviceProvider.findFirst({
      where: { name: 'SubAndGain Airtime' }
    })
    if (!provider) {
      console.error('SubAndGain Airtime provider not found')
      return
    }
    const updated = await prisma.serviceProvider.update({
      where: { id: provider.id },
      data: { apiBaseUrl: 'https://subandgain.com' }
    })
    console.log('Updated provider:', { id: updated.id, apiBaseUrl: updated.apiBaseUrl })
  } catch (err) {
    console.error('Error:', err)
  } finally {
    await prisma.$disconnect()
  }
}

main()