module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const globalForPrisma = /*TURBOPACK member replacement*/ __turbopack_context__.g;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
    log: [
        "error",
        "warn"
    ]
});
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}),
"[project]/app/api/pricing/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
;
;
function buildParamsFromSearch(searchParams) {
    const known = new Set([
        "category",
        "subservice",
        "variant",
        "role",
        "tier",
        "serviceSlug"
    ]) // exclude aliases from dynamic params
    ;
    const params = {};
    for (const [k, v] of searchParams.entries()){
        if (!known.has(k)) params[k] = v;
    }
    return params;
}
function stableParamsKey(params) {
    const keys = Object.keys(params);
    if (!keys.length) return "";
    keys.sort();
    return keys.map((k)=>`${k}=${params[k]}`).join("|");
}
// Normalize params for case-insensitive comparison
function toLowerParams(params) {
    const out = {};
    for (const [k, v] of Object.entries(params)){
        out[k] = String(v).toLowerCase();
    }
    return out;
}
function stableParamsKeyLower(params) {
    const lower = toLowerParams(params);
    const keys = Object.keys(lower);
    if (!keys.length) return "";
    keys.sort();
    return keys.map((k)=>`${k}=${lower[k]}`).join("|");
}
async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        let category = (searchParams.get("category") || "").trim();
        let subservice = (searchParams.get("subservice") || "").trim();
        let variant = (searchParams.get("variant") || "").trim();
        const tier = (searchParams.get("tier") || "").trim().toLowerCase();
        let role = (searchParams.get("role") || tier || "user").trim().toLowerCase();
        const serviceSlug = (searchParams.get("serviceSlug") || "").trim();
        // Allow serviceSlug alias: e.g., bills.cable.dstv.padi => category=bills, subservice=cable, variant=dstv.padi
        if (serviceSlug && (!category || !subservice)) {
            const parts = serviceSlug.split(".").filter(Boolean);
            if (parts.length >= 2) {
                category = parts[0];
                subservice = parts[1];
                variant = parts.slice(2).join(".");
            }
        }
        const dynParams = buildParamsFromSearch(searchParams);
        const paramsKey = stableParamsKey(dynParams);
        const paramsKeyLower = stableParamsKeyLower(dynParams);
        if (!category || !subservice) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "category and subservice are required"
            }, {
                status: 400
            });
        }
        // Fallback hierarchy search order:
        // 1) Exact: category + subservice + variant
        // 2) Variant fallback: category + subservice + ""
        // 3) Subservice fallback: category + "" + "" (category-level)
        // Expand known aliases for subservice to improve match robustness (e.g., CAC pages)
        const expandSubserviceAliases = (cat, sub)=>{
            const c = String(cat || "").trim().toLowerCase();
            const s = String(sub || "").trim().toLowerCase();
            // Only alias within CAC to avoid cross-category noise
            if (c === "cac") {
                const infoAliases = [
                    "info",
                    "certificate",
                    "certification",
                    "retrieval",
                    "retrieval of certification",
                    "retrieval-of-certification"
                ];
                const statusAliases = [
                    "status",
                    "status report",
                    "status-report",
                    "statusreport",
                    "retrieval status",
                    "retrieval-status",
                    "retrieval-status-report"
                ];
                if (infoAliases.includes(s)) return infoAliases;
                if (statusAliases.includes(s)) return statusAliases;
            }
            // BVN: support common aliases for central risk management
            if (c === "bvn") {
                const centralRiskAliases = [
                    "central-risk",
                    "central risk",
                    "central_risk",
                    "crm",
                    "centralrisk"
                ];
                if (centralRiskAliases.includes(s)) return centralRiskAliases;
            }
            return [
                sub
            ];
        };
        const subAliases = expandSubserviceAliases(category, subservice);
        const variantToUse = variant || "";
        const searchOrder = [];
        // Build search order for each alias with standard fallbacks
        for (const sub of subAliases){
            searchOrder.push({
                where: {
                    category,
                    subservice: sub,
                    variant: variantToUse
                }
            });
            searchOrder.push({
                where: {
                    category,
                    subservice: sub,
                    variant: ""
                }
            });
        }
        // Category-level fallback (no subservice/variant)
        searchOrder.push({
            where: {
                category,
                subservice: "",
                variant: ""
            }
        });
        let foundPricing = null;
        let foundCatalog = null;
        for (const level of searchOrder){
            // Load candidates for this level
            const candidates = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].catalogPricing.findMany({
                where: {
                    category: {
                        equals: level.where.category,
                        mode: "insensitive"
                    },
                    subservice: {
                        equals: level.where.subservice,
                        mode: "insensitive"
                    },
                    variant: {
                        equals: level.where.variant,
                        mode: "insensitive"
                    }
                },
                orderBy: {
                    updatedAt: "desc"
                }
            });
            if (!candidates.length) {
                continue;
            }
            // Exact match by paramsKey (case-insensitive via normalized recompute)
            let pricing = candidates.find((p)=>{
                const pParams = p.parameters || {};
                const normalized = {};
                for (const [k, v] of Object.entries(pParams))normalized[k] = String(v).toLowerCase();
                const pKeyLower = stableParamsKeyLower(normalized);
                return pKeyLower === paramsKeyLower;
            });
            // Best-match fallback: choose the entry whose parameters are a subset and has the highest match count
            if (!pricing) {
                let best;
                let bestScore = -1;
                for (const p of candidates){
                    const paramsObj = p.parameters || {};
                    const keys = Object.keys(paramsObj);
                    if (!keys.length) {
                        // Base entry with no parameters: score 0
                        if (bestScore < 0) {
                            best = p;
                            bestScore = 0;
                        }
                        continue;
                    }
                    // Count matching key=value pairs
                    let score = 0;
                    for (const k of keys){
                        const reqVal = dynParams[k];
                        const candVal = paramsObj[k];
                        if (reqVal !== undefined && String(reqVal).toLowerCase() === String(candVal).toLowerCase()) {
                            score += 1;
                        } else {
                            // Required param mismatch; penalize heavily
                            score = -1;
                            break;
                        }
                    }
                    if (score >= 0 && score > bestScore) {
                        best = p;
                        bestScore = score;
                    }
                }
                pricing = best;
            }
            if (pricing) {
                foundPricing = pricing;
                // Resolve catalog for the selected level to return metadata
                // Catalog lookup may be case-sensitive; attempt insensitive fallback
                foundCatalog = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].serviceCatalog.findFirst({
                    where: {
                        category: {
                            equals: level.where.category,
                            mode: "insensitive"
                        },
                        subservice: {
                            equals: level.where.subservice,
                            mode: "insensitive"
                        },
                        variant: {
                            equals: level.where.variant,
                            mode: "insensitive"
                        }
                    }
                }).catch(()=>null);
                break;
            }
        }
        if (!foundPricing) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                price: null,
                detail: "No matching price for given parameters"
            });
        }
        const selected = role === "marketer" ? Number(foundPricing.marketerPrice) : Number(foundPricing.userPrice);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            catalog: foundCatalog ? {
                id: foundCatalog.id,
                category: foundCatalog.category,
                subservice: foundCatalog.subservice,
                variant: foundCatalog.variant
            } : {
                id: null,
                category,
                subservice,
                variant: variant || ""
            },
            pricing: {
                basePrice: Number(foundPricing.basePrice),
                userPrice: Number(foundPricing.userPrice),
                marketerPrice: Number(foundPricing.marketerPrice),
                updatedAt: foundPricing.updatedAt
            },
            role,
            parameters: foundPricing.parameters ?? null,
            paramsKey: String(foundPricing.paramsKey || ""),
            price: selected
        });
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch pricing",
            detail: String(err)
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__42e14fc5._.js.map