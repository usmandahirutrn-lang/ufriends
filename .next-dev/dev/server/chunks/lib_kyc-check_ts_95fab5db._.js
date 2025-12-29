module.exports = [
"[project]/lib/kyc-check.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensureKyc",
    ()=>ensureKyc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
;
async function ensureKyc(userId) {
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
        where: {
            id: userId
        },
        select: {
            isKycVerified: true
        }
    });
    // If already flagged in user model, we are good
    if (user?.isKycVerified) {
        return null;
    }
    // Fallback: Check if there's an APPROVED kycRequest (in case flag is out of sync)
    const approvedKyc = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].kycRequest.findFirst({
        where: {
            userId,
            status: "APPROVED"
        }
    });
    if (approvedKyc) {
        // Self-heal: Update the flag if it was false but an approved request exists
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.update({
            where: {
                id: userId
            },
            data: {
                isKycVerified: true
            }
        });
        return null;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        error: "KYC Required",
        message: "Please complete your KYC verification to access this service.",
        code: "KYC_REQUIRED"
    }, {
        status: 403
    });
}
}),
];

//# sourceMappingURL=lib_kyc-check_ts_95fab5db._.js.map