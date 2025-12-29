const { PrismaClient } = require('@prisma/client')

async function main() {
  const prisma = new PrismaClient()
  try {
    const tx = await prisma.transaction.findMany({
      where: { type: 'SERVICE_PURCHASE' },
      orderBy: { createdAt: 'desc' },
      take: 5,
    })
    if (!tx || tx.length === 0) {
      console.log('No service transactions found')
      return
    }
    for (const t of tx) {
      const meta = t.meta || {}
      console.log({ reference: t.reference, status: t.status, amount: t.amount?.toString?.() || t.amount, providerId: meta?.providerId, providerRef: meta?.providerRef, code: meta?.code, error: meta?.error })
    }
  } catch (err) {
    console.error('Error:', err)
  } finally {
    await prisma.$disconnect()
  }
}

main()