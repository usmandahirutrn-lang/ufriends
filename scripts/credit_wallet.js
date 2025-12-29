const { PrismaClient } = require("@prisma/client");

async function main() {
  const prisma = new PrismaClient();
  const reference = process.env.REF || "FUND-1762031815273-m4kxbh";
  const amount = Number(process.env.AMOUNT || 1000);

  const payment = await prisma.payment.findUnique({ where: { reference } });
  if (!payment) {
    console.log("Payment not found:", reference);
    return;
  }

  await prisma.$transaction([
    prisma.payment.update({
      where: { id: payment.id },
      data: {
        status: "SUCCESS",
        webhookPayload: { reference, status: "SUCCESS", amount },
      },
    }),
    prisma.wallet.upsert({
      where: { userId: payment.userId },
      update: { balance: { increment: amount } },
      create: { userId: payment.userId, balance: amount, currency: "NGN" },
    }),
    prisma.transaction.update({
      where: { reference },
      data: { status: "SUCCESS", meta: { provider: "PaymentPoint" } },
    }),
    prisma.auditLog.create({
      data: {
        actorId: payment.userId,
        action: "WALLET_FUND_SUCCESS",
        resourceType: "Payment",
        resourceId: payment.id,
        diffJson: { amount, reference, provider: "PaymentPoint" },
      },
    }),
  ]);

  console.log("Wallet credited:", { reference, amount });
}

main()
  .catch((err) => {
    console.error("Error crediting wallet:", err);
  })
  .finally(async () => {
    const prisma = new PrismaClient();
    await prisma.$disconnect();
  });