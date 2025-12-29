const { PrismaClient } = require('@prisma/client');

async function main() {
  const prisma = new PrismaClient();
  
  try {
    const providers = await prisma.serviceProvider.findMany({
      include: { apiKeys: true }
    });
    
    console.log('All Service Providers:');
    console.log(JSON.stringify(providers, null, 2));
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();