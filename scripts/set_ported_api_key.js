const { PrismaClient } = require('@prisma/client')

async function main() {
  const prisma = new PrismaClient()
  try {
    const provider = await prisma.serviceProvider.findFirst({
      where: { name: { equals: 'PortedSIM Airtime' } },
      include: { apiKeys: true }
    })
    if (!provider) {
      console.error('PortedSIM Airtime provider not found')
      return
    }

    const existing = provider.apiKeys.find(k => k.keyName.toLowerCase() === 'apikey')
    if (existing) {
      const updated = await prisma.providerApiKey.update({
        where: { id: existing.id },
        data: { keyValue: process.env.PORTEDSIM_API_KEY || 'mock_key_123' }
      })
      console.log('Updated apiKey for provider:', { providerId: provider.id, keyId: updated.id })
    } else {
      const created = await prisma.providerApiKey.create({
        data: {
          providerId: provider.id,
          keyName: 'apiKey',
          keyValue: process.env.PORTEDSIM_API_KEY || 'mock_key_123'
        }
      })
      console.log('Created apiKey for provider:', { providerId: provider.id, keyId: created.id })
    }
  } catch (err) {
    console.error('Error:', err)
  } finally {
    await prisma.$disconnect()
  }
}

main()