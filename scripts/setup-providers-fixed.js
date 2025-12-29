#!/usr/bin/env node

/**
 * Setup script to configure providers with environment variables
 * This creates the initial provider configurations based on .env settings
 */

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  console.log('🚀 Setting up providers from environment variables...')

  // Prembly Configuration
  if (process.env.PREMBLY_BASE_URL && process.env.PREMBLY_API_KEY) {
    console.log('Configuring Prembly provider...')
    
    try {
      const premblyProvider = await prisma.serviceProvider.upsert({
        where: { 
          name: 'Prembly Verification'
        },
        update: {
          apiBaseUrl: process.env.PREMBLY_BASE_URL,
          isActive: true,
          priority: 10,
          configJson: {
            adapter: 'prembly'
          }
        },
        create: {
          name: 'Prembly Verification',
          category: 'verification',
          apiBaseUrl: process.env.PREMBLY_BASE_URL,
          isActive: true,
          priority: 10,
          configJson: {
            adapter: 'prembly'
          }
        }
      })

      console.log('Prembly provider created/updated:', premblyProvider.name)

      // Add API key
      await prisma.serviceProviderApiKey.upsert({
        where: {
          providerId_keyName: {
            providerId: premblyProvider.id,
            keyName: 'api_key'
          }
        },
        update: {
          keyValue: process.env.PREMBLY_API_KEY
        },
        create: {
          providerId: premblyProvider.id,
          keyName: 'api_key',
          keyValue: process.env.PREMBLY_API_KEY
        }
      })

      // Ensure app_id is also stored
      await prisma.serviceProviderApiKey.upsert({
        where: {
          providerId_keyName: {
            providerId: premblyProvider.id,
            keyName: 'app_id'
          }
        },
        update: {
          keyValue: process.env.PREMBLY_APP_ID
        },
        create: {
          providerId: premblyProvider.id,
          keyName: 'app_id',
          keyValue: process.env.PREMBLY_APP_ID
        }
      })

      console.log('✅ Prembly verification provider configured')

      // Also configure for other categories that use Prembly
      const categories = ['bvn', 'nin', 'cac']
      for (const category of categories) {
        const provider = await prisma.serviceProvider.upsert({
          where: { 
            name: `Prembly ${category.toUpperCase()}`
          },
          update: {
            apiBaseUrl: process.env.PREMBLY_BASE_URL,
            isActive: true,
            priority: 10,
            configJson: {
              adapter: 'prembly'
            }
          },
          create: {
            name: `Prembly ${category.toUpperCase()}`,
            category: category,
            apiBaseUrl: process.env.PREMBLY_BASE_URL,
            isActive: true,
            priority: 10,
            configJson: {
              adapter: 'prembly'
            }
          }
        })

        await prisma.serviceProviderApiKey.upsert({
          where: {
            providerId_keyName: {
              providerId: provider.id,
              keyName: 'api_key'
            }
          },
          update: {
            keyValue: process.env.PREMBLY_API_KEY
          },
          create: {
            providerId: provider.id,
            keyName: 'api_key',
            keyValue: process.env.PREMBLY_API_KEY
          }
        })

        // Ensure app_id is also stored for category providers
        await prisma.serviceProviderApiKey.upsert({
          where: {
            providerId_keyName: {
              providerId: provider.id,
              keyName: 'app_id'
            }
          },
          update: {
            keyValue: process.env.PREMBLY_APP_ID
          },
          create: {
            providerId: provider.id,
            keyName: 'app_id',
            keyValue: process.env.PREMBLY_APP_ID
          }
        })

        console.log(`✅ Prembly ${category} provider configured`)
      }
    } catch (error) {
      console.error('Error configuring Prembly:', error.message)
    }
  }

  // SubAndGain Configuration
  if (process.env.SUBANDGAIN_BASE_URL && process.env.SUBANDGAIN_API_KEY && process.env.SUBANDGAIN_USERNAME) {
    console.log('Configuring SubAndGain provider...')
    
    try {
      const subandgainProvider = await prisma.serviceProvider.upsert({
        where: { 
          name: 'SubAndGain VTU'
        },
        update: {
          apiBaseUrl: process.env.SUBANDGAIN_BASE_URL,
          isActive: true,
          priority: 10,
          configJson: {
            adapter: 'subandgain'
          }
        },
        create: {
          name: 'SubAndGain VTU',
          category: 'vtu',
          apiBaseUrl: process.env.SUBANDGAIN_BASE_URL,
          isActive: true,
          priority: 10,
          configJson: {
            adapter: 'subandgain'
          }
        }
      })

      console.log('SubAndGain provider created/updated:', subandgainProvider.name)

      // Add API key
      await prisma.serviceProviderApiKey.upsert({
        where: {
          providerId_keyName: {
            providerId: subandgainProvider.id,
            keyName: 'api_key'
          }
        },
        update: {
          keyValue: process.env.SUBANDGAIN_API_KEY
        },
        create: {
          providerId: subandgainProvider.id,
          keyName: 'api_key',
          keyValue: process.env.SUBANDGAIN_API_KEY
        }
      })

      // Add username
      await prisma.serviceProviderApiKey.upsert({
        where: {
          providerId_keyName: {
            providerId: subandgainProvider.id,
            keyName: 'username'
          }
        },
        update: {
          keyValue: process.env.SUBANDGAIN_USERNAME
        },
        create: {
          providerId: subandgainProvider.id,
          keyName: 'username',
          keyValue: process.env.SUBANDGAIN_USERNAME
        }
      })

      console.log('✅ SubAndGain VTU provider configured')

      // Also configure for bills category
      const billsProvider = await prisma.serviceProvider.upsert({
        where: { 
          name: 'SubAndGain Bills'
        },
        update: {
          apiBaseUrl: process.env.SUBANDGAIN_BASE_URL,
          isActive: true,
          priority: 10,
          configJson: {
            adapter: 'subandgain'
          }
        },
        create: {
          name: 'SubAndGain Bills',
          category: 'bills',
          apiBaseUrl: process.env.SUBANDGAIN_BASE_URL,
          isActive: true,
          priority: 10,
          configJson: {
            adapter: 'subandgain'
          }
        }
      })

      await prisma.serviceProviderApiKey.upsert({
        where: {
          providerId_keyName: {
            providerId: billsProvider.id,
            keyName: 'api_key'
          }
        },
        update: {
          keyValue: process.env.SUBANDGAIN_API_KEY
        },
        create: {
          providerId: billsProvider.id,
          keyName: 'api_key',
          keyValue: process.env.SUBANDGAIN_API_KEY
        }
      })

      await prisma.serviceProviderApiKey.upsert({
        where: {
          providerId_keyName: {
            providerId: billsProvider.id,
            keyName: 'username'
          }
        },
        update: {
          keyValue: process.env.SUBANDGAIN_USERNAME
        },
        create: {
          providerId: billsProvider.id,
          keyName: 'username',
          keyValue: process.env.SUBANDGAIN_USERNAME
        }
      })

      console.log('✅ SubAndGain Bills provider configured')
    } catch (error) {
      console.error('Error configuring SubAndGain:', error.message)
    }
  }

  // PortedSIM Configuration (as fallback)
  if (process.env.PORTEDSIM_BASE_URL && process.env.PORTEDSIM_API_KEY) {
    console.log('Configuring PortedSIM provider...')
    
    try {
      const portedsimProvider = await prisma.serviceProvider.upsert({
        where: { 
          name: 'PortedSIM VTU'
        },
        update: {
          apiBaseUrl: process.env.PORTEDSIM_BASE_URL,
          isActive: false, // Set as inactive by default
          priority: 5, // Lower priority than SubAndGain
          configJson: {
            adapter: 'portedsim'
          }
        },
        create: {
          name: 'PortedSIM VTU',
          category: 'vtu',
          apiBaseUrl: process.env.PORTEDSIM_BASE_URL,
          isActive: false,
          priority: 5,
          configJson: {
            adapter: 'portedsim'
          }
        }
      })

      console.log('PortedSIM provider created/updated:', portedsimProvider.name)

      await prisma.serviceProviderApiKey.upsert({
        where: {
          providerId_keyName: {
            providerId: portedsimProvider.id,
            keyName: 'api_key'
          }
        },
        update: {
          keyValue: process.env.PORTEDSIM_API_KEY
        },
        create: {
          providerId: portedsimProvider.id,
          keyName: 'api_key',
          keyValue: process.env.PORTEDSIM_API_KEY
        }
      })

      console.log('✅ PortedSIM VTU provider configured (inactive)')
    } catch (error) {
      console.error('Error configuring PortedSIM:', error.message)
    }
  }

  console.log('🎉 Provider setup completed!')
  console.log('')
  console.log('Next steps:')
  console.log('1. Visit the Admin panel to activate/configure providers')
  console.log('2. Test providers using the built-in testing feature')
  console.log('3. Switch between providers as needed')
}

main()
  .catch((e) => {
    console.error('❌ Error setting up providers:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })