const { PrismaClient } = require('@prisma/client');

async function main() {
  const prisma = new PrismaClient();
  
  try {
    const provider = await prisma.serviceProvider.findFirst({
      where: { name: 'SubAndGain' },
      include: { apiKeys: true }
    });
    
    console.log('SubAndGain Provider Configuration:');
    console.log(JSON.stringify(provider, null, 2));
    
    // Also check environment variables
    console.log('\nEnvironment Variables:');
    console.log('SUBANDGAIN_BASE_URL:', process.env.SUBANDGAIN_BASE_URL);
    console.log('SUBANDGAIN_API_KEY:', process.env.SUBANDGAIN_API_KEY ? '[SET]' : '[NOT SET]');
    console.log('SUBANDGAIN_USERNAME:', process.env.SUBANDGAIN_USERNAME);
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();