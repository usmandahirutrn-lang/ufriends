/**
 * Update service prices for BVN, NIN, and CAC services
 * Run with: node scripts/update-service-prices.js
 */
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

function stableParamsKey(params) {
    if (!params || typeof params !== "object" || Array.isArray(params)) return ""
    const entries = Object.entries(params).filter(([_, v]) => v !== undefined && v !== null)
    if (!entries.length) return ""
    entries.sort(([a], [b]) => a.localeCompare(b))
    return entries.map(([k, v]) => `${k}=${String(v)}`).join("|")
}

async function upsertPrice({ category, subservice, variant = "", basePrice, userPrice, marketerPrice, parameters }) {
    const paramsKey = stableParamsKey(parameters)
    const data = {
        category,
        subservice,
        variant: variant || "",
        basePrice: Number(basePrice),
        userPrice: Number(userPrice),
        marketerPrice: Number(marketerPrice),
        parameters,
        paramsKey,
    }

    try {
        const pricing = await prisma.catalogPricing.upsert({
            where: {
                catalog_pricing_category_subservice_variant_paramsKey_unique: {
                    category,
                    subservice,
                    variant: variant || "",
                    paramsKey,
                },
            },
            update: data,
            create: data,
        })
        return pricing
    } catch (err) {
        console.error(`Failed to upsert ${category}/${subservice}/${variant}:`, err.message)
        return null
    }
}

async function main() {
    console.log("Updating service prices...\n")

    // ========================================
    // BVN Android Licensed
    // Base: 2000, User: 5000, Marketer: 3000
    // ========================================
    console.log("📱 Updating BVN Android License prices...")
    await upsertPrice({
        category: "bvn",
        subservice: "android-license",
        variant: "enrollment",
        basePrice: 2000,
        userPrice: 5000,
        marketerPrice: 3000,
    })
    // Also update state-specific entries
    for (const state of ["lagos", "abuja", "unknown"]) {
        await upsertPrice({
            category: "bvn",
            subservice: "android-license",
            variant: "enrollment",
            basePrice: 2000,
            userPrice: 5000,
            marketerPrice: 3000,
            parameters: { state },
        })
    }
    console.log("✅ BVN Android License prices updated\n")

    // ========================================
    // BVN Modification
    // ========================================
    console.log("📝 Updating BVN Modification prices...")

    // Name Correction, DOB, Phone, Address, Gender, Email: Base 3000, User 5000, Marketer 4000
    const bvnModStandardTypes = [
        "name_correction",
        "date_of_birth_correction",
        "phone_number_update",
        "address_update",
        "gender_correction",
        "email_correction",
    ]

    const verificationTypes = ["NIN", "Voter's Card", "Driver's License", "International Passport"]

    // Fallback entry (no params)
    await upsertPrice({
        category: "bvn",
        subservice: "modification",
        variant: "basic",
        basePrice: 3000,
        userPrice: 5000,
        marketerPrice: 4000,
    })

    for (const mt of bvnModStandardTypes) {
        await upsertPrice({
            category: "bvn",
            subservice: "modification",
            variant: "basic",
            basePrice: 3000,
            userPrice: 5000,
            marketerPrice: 4000,
            parameters: { modificationType: mt },
        })
        // Also with verification types
        for (const vt of verificationTypes) {
            await upsertPrice({
                category: "bvn",
                subservice: "modification",
                variant: "basic",
                basePrice: 3000,
                userPrice: 5000,
                marketerPrice: 4000,
                parameters: { modificationType: mt, verificationType: vt },
            })
        }
    }

    // Others: Base 4000, User 8000, Marketer 6500
    await upsertPrice({
        category: "bvn",
        subservice: "modification",
        variant: "basic",
        basePrice: 4000,
        userPrice: 8000,
        marketerPrice: 6500,
        parameters: { modificationType: "others" },
    })
    for (const vt of verificationTypes) {
        await upsertPrice({
            category: "bvn",
            subservice: "modification",
            variant: "basic",
            basePrice: 4000,
            userPrice: 8000,
            marketerPrice: 6500,
            parameters: { modificationType: "others", verificationType: vt },
        })
    }
    console.log("✅ BVN Modification prices updated\n")

    // ========================================
    // NIN Modification
    // ========================================
    console.log("📝 Updating NIN Modification prices...")

    // Name, Phone, Address, Gender: Base 4000, User 6000, Marketer 5500
    const ninModStandardTypes = ["name", "phone", "address", "gender"]

    // Fallback entry
    await upsertPrice({
        category: "nin",
        subservice: "modification",
        variant: "basic",
        basePrice: 4000,
        userPrice: 6000,
        marketerPrice: 5500,
    })

    for (const mt of ninModStandardTypes) {
        await upsertPrice({
            category: "nin",
            subservice: "modification",
            variant: "basic",
            basePrice: 4000,
            userPrice: 6000,
            marketerPrice: 5500,
            parameters: { modificationType: mt },
        })
    }

    // Date of Birth: Base 30000, User 40000, Marketer 36000
    await upsertPrice({
        category: "nin",
        subservice: "modification",
        variant: "basic",
        basePrice: 30000,
        userPrice: 40000,
        marketerPrice: 36000,
        parameters: { modificationType: "dob" },
    })

    // Other: use standard pricing
    await upsertPrice({
        category: "nin",
        subservice: "modification",
        variant: "basic",
        basePrice: 4000,
        userPrice: 6000,
        marketerPrice: 5500,
        parameters: { modificationType: "other" },
    })
    console.log("✅ NIN Modification prices updated\n")

    // ========================================
    // CAC Registration
    // ========================================
    console.log("🏢 Updating CAC Registration prices...")

    // Limited Liability (RC): Base 30000, User 40000, Marketer 35000
    await upsertPrice({
        category: "cac",
        subservice: "registration",
        variant: "rc",
        basePrice: 30000,
        userPrice: 40000,
        marketerPrice: 35000,
    })

    // Also update with directorsCount and businessType parameters
    for (const d of [0, 1, 2, 3, 4]) {
        await upsertPrice({
            category: "cac",
            subservice: "registration",
            variant: "rc",
            basePrice: 30000,
            userPrice: 40000,
            marketerPrice: 35000,
            parameters: { directorsCount: d },
        })
    }

    const businessTypes = [
        "sole proprietorship",
        "partnership",
        "limited liability company",
        "public limited company",
        "ngo",
        "incorporated trustees",
    ]
    for (const bt of businessTypes) {
        await upsertPrice({
            category: "cac",
            subservice: "registration",
            variant: "rc",
            basePrice: 30000,
            userPrice: 40000,
            marketerPrice: 35000,
            parameters: { businessType: bt },
        })
    }

    // Business Name (BN): Base 22000, User 30000, Marketer 25000
    await upsertPrice({
        category: "cac",
        subservice: "registration",
        variant: "bn",
        basePrice: 22000,
        userPrice: 30000,
        marketerPrice: 25000,
    })

    for (const d of [0, 1, 2, 3, 4]) {
        await upsertPrice({
            category: "cac",
            subservice: "registration",
            variant: "bn",
            basePrice: 22000,
            userPrice: 30000,
            marketerPrice: 25000,
            parameters: { directorsCount: d },
        })
    }

    for (const bt of businessTypes) {
        await upsertPrice({
            category: "cac",
            subservice: "registration",
            variant: "bn",
            basePrice: 22000,
            userPrice: 30000,
            marketerPrice: 25000,
            parameters: { businessType: bt },
        })
    }
    console.log("✅ CAC Registration prices updated\n")

    console.log("🎉 All service prices updated successfully!")
}

main()
    .catch((e) => {
        console.error("❌ Update failed:", e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
