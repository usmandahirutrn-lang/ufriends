// Seed script to create an admin user for login
// Run with: npx prisma db seed  (or npm run db:seed after wiring)

const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcryptjs")

const prisma = new PrismaClient()

async function main() {
  const email = process.env.ADMIN_EMAIL || "visitusman2021@gmail.com"
  const password = process.env.ADMIN_PASSWORD || "Admin123!"
  const name = process.env.ADMIN_NAME || "Usman Admin"
  const phone = process.env.ADMIN_PHONE || "+2348000000000"

  const passwordHash = await bcrypt.hash(password, 10)

  // Upsert admin user
  const existing = await prisma.user.findUnique({ where: { email } })

  let user
  if (existing) {
    user = await prisma.user.update({
      where: { email },
      data: { role: "ADMIN", passwordHash },
      select: { id: true, email: true, role: true },
    })
  } else {
    user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        role: "ADMIN",
        profile: { create: { name, phone } },
      },
      select: { id: true, email: true, role: true },
    })
  }

  // Ensure profile exists (if user existed without profile)
  const profile = await prisma.profile.findUnique({ where: { userId: user.id } })
  if (!profile) {
    await prisma.profile.create({ data: { userId: user.id, name, phone } })
  }

  console.log("✅ Admin seeded:", {
    email,
    role: user.role,
    password: password,
  })

  // Seed initial Service Catalog
  const initial = [
    { category: "Airtime", subservices: [{ name: "VTU" }, { name: "Share 'n Sell" }, { name: "Airtime 2 Cash" }] },
    {
      category: "Data", subservices: [
        { name: "SME", variants: ["500MB", "1GB", "2GB", "5GB"] },
        { name: "Corporate", variants: ["1GB", "2GB", "10GB"] },
        { name: "Gift", variants: ["500MB", "1GB", "2GB"] },
      ]
    },
    { category: "Bills", subservices: [{ name: "Cable" }, { name: "Electricity" }] },
    {
      category: "BVN", subservices: [
        { name: "Retrieval", variants: ["With Phone", "With Bank Account"] },
        { name: "Modification" },
        { name: "Printout" },
        { name: "Android License" },
        { name: "Central Risk Management" },
      ]
    },
    {
      category: "NIN", subservices: [
        { name: "Slip", variants: ["Premium", "Standard", "Regular"] },
        { name: "Modification" },
        { name: "Validation", variants: ["Normal Validation", "Photographic Error", "Sim Registration", "Bank Validation", "We Modification Validation"] },
        { name: "IPE Clearance", variants: ["Normal IPE", "Modification IPE"] },
        { name: "Printout" },
      ]
    },
    {
      category: "CAC", subservices: [
        { name: "Registration" },
        { name: "Retrieval" },
        { name: "Status Report" },
        { name: "Post Incorporation" },
        { name: "JTB TIN", variants: ["Individual", "Business"] },
      ]
    },
    {
      category: "POS", subservices: [
        { name: "Request", variants: ["Opay POS", "Moniepoint POS", "FCMB POS", "Nomba POS"] },
        { name: "Become UFriends Marketer" },
      ]
    },
    {
      category: "Education", subservices: [
        { name: "WAEC", variants: ["Pin/Scratch Card", "GCE Registration Pin"] },
        { name: "NECO", variants: ["Pin/Scratch Card", "GCE Registration Pin"] },
        { name: "NABTEB", variants: ["Pin/Scratch Card", "GCE Registration Pin"] },
        { name: "NBAIS", variants: ["Pin/Scratch Card", "GCE Registration Pin"] },
        { name: "JAMB", variants: ["Profile Code Retrieval", "Print Admission Letter", "Original Result", "O-Level Upload", "Check Admission Status", "Acceptance of Admission"] },
      ]
    },
    {
      category: "Verification", subservices: [
        { name: "Voters Card", variants: ["Basic Slip", "Full Card"] },
        { name: "Driver License" },
        { name: "International Passport" },
        { name: "NIN" },
        { name: "BVN" },
        { name: "Plate Number" },
        { name: "TIN" },
        { name: "CAC" },
        { name: "Phone Number" },
      ]
    },
    {
      category: "Software Development", subservices: [
        { name: "Web Application" },
        { name: "Mobile Application" },
        { name: "Custom Solution" },
      ]
    },
  ]

  for (const cat of initial) {
    for (const sub of cat.subservices) {
      const variants = sub.variants && Array.isArray(sub.variants) ? sub.variants : [""]
      for (const variant of variants) {
        const category = cat.category
        const subservice = sub.name
        const normVariant = (variant || "").trim()
        const exists = await prisma.serviceCatalog.findFirst({
          where: { category, subservice, variant: normVariant },
          select: { id: true },
        })
        if (!exists) {
          await prisma.serviceCatalog.create({ data: { category, subservice, variant: normVariant } })
        }
      }
    }
  }

  console.log("✅ Service Catalog seeded")
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })