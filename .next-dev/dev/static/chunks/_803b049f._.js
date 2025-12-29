(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/hooks/useDynamicPricing.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useDynamicPricing",
    ()=>useDynamicPricing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$client$2d$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/client-auth.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function detectRoleFromUser(user) {
    try {
        const roleStr = String(user?.role || "").toLowerCase();
        const roles = Array.isArray(user?.roles) ? user.roles.map((r)=>String(r).toLowerCase()) : [];
        const isMarketer = roleStr.includes("marketer") || roles.includes("marketer") || user?.isMarketer === true;
        return isMarketer ? "marketer" : "user";
    } catch  {
        return "user";
    }
}
async function detectRoleFallback() {
    try {
        const res = await fetch("/api/me");
        if (!res.ok) return "user";
        const data = await res.json().catch(()=>null);
        return detectRoleFromUser(data?.user || data);
    } catch  {
        return "user";
    }
}
function mapVerificationAction(category, subservice) {
    const c = category.trim().toLowerCase();
    const s = subservice.trim().toLowerCase();
    if (c === "nin") {
        if (s === "slip") return "nin.slip";
        if (s === "printout") return "nin.printout";
        if (s === "advanced" || s === "verification") return "nin.advanced";
    }
    if (c === "bvn") {
        if (s === "printout") return "bvn.printout";
        if (s === "retrieval" || s === "retrieval_phone") return "bvn.retrieval_phone";
        if (s === "advanced" || s === "verification") return "bvn.advanced";
    }
    if (c === "cac") {
        if (s === "info") return "cac.info";
        if (s === "status") return "cac.status";
    }
    if (c === "passport") {
        if (s === "verify" || s === "verification" || s === "basic") return "passport.verify";
    }
    if (c === "phone") {
        // Use advanced route for richer details
        if (s === "advanced" || s === "verification" || s === "basic") return "phone.verify_advanced";
    }
    if (c === "driver-license" || c === "drivers_license") {
        if (s === "basic" || s === "verification") return "drivers_license.verify";
    }
    if (c === "voters-card" || c === "voters") {
        if (s === "basic" || s === "full" || s === "verification") return "voters.verify";
    }
    if (c === "plate-number" || c === "plate") {
        if (s === "basic" || s === "verification") return "plate.verify";
    }
    if (c === "tin") {
        if (s === "basic" || s === "certificate" || s === "verification") return "tin.verify";
    }
    // Extend with other verification categories as needed
    return null;
}
function useDynamicPricing(category, subservice, variant, params, user) {
    _s();
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useDynamicPricing.useState": ()=>detectRoleFromUser(user)
    }["useDynamicPricing.useState"]);
    const [price, setPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [reference, setReference] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDynamicPricing.useMemo[normalized]": ()=>({
                category: String(category || "").trim(),
                subservice: String(subservice || "").trim(),
                variant: String(variant || "").trim()
            })
    }["useDynamicPricing.useMemo[normalized]"], [
        category,
        subservice,
        variant
    ]);
    // Stable key for params to avoid effect loops caused by object identity changes
    const paramsKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDynamicPricing.useMemo[paramsKey]": ()=>{
            if (!params || typeof params !== "object") return "";
            const entries = Object.entries(params).filter({
                "useDynamicPricing.useMemo[paramsKey].entries": ([_, v])=>v !== undefined && v !== null
            }["useDynamicPricing.useMemo[paramsKey].entries"]);
            if (!entries.length) return "";
            entries.sort({
                "useDynamicPricing.useMemo[paramsKey]": ([a], [b])=>a.localeCompare(b)
            }["useDynamicPricing.useMemo[paramsKey]"]);
            return entries.map({
                "useDynamicPricing.useMemo[paramsKey]": ([k, v])=>`${k}=${String(v)}`
            }["useDynamicPricing.useMemo[paramsKey]"]).join("|");
        }
    }["useDynamicPricing.useMemo[paramsKey]"], [
        params
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDynamicPricing.useEffect": ()=>{
            let cancelled = false;
            const run = {
                "useDynamicPricing.useEffect.run": async ()=>{
                    setIsLoading(true);
                    setError(null);
                    try {
                        // Resolve role if not determinable from provided user
                        const r = user ? detectRoleFromUser(user) : await detectRoleFallback();
                        if (!cancelled) setRole(r);
                        // Fetch dynamic price
                        const qpEntries = [
                            [
                                "category",
                                normalized.category
                            ],
                            [
                                "subservice",
                                normalized.subservice
                            ],
                            [
                                "variant",
                                normalized.variant
                            ],
                            [
                                "role",
                                r
                            ]
                        ];
                        if (params && typeof params === "object") {
                            const dyn = Object.entries(params).filter({
                                "useDynamicPricing.useEffect.run.dyn": ([_, v])=>v !== undefined && v !== null
                            }["useDynamicPricing.useEffect.run.dyn"]);
                            dyn.sort({
                                "useDynamicPricing.useEffect.run": ([a], [b])=>a.localeCompare(b)
                            }["useDynamicPricing.useEffect.run"]);
                            for (const [k, v] of dyn)qpEntries.push([
                                k,
                                String(v)
                            ]);
                        }
                        const qs = new URLSearchParams(qpEntries);
                        const res = await fetch(`/api/pricing?${qs.toString()}`, {
                            cache: "no-store"
                        });
                        const data = await res.json().catch({
                            "useDynamicPricing.useEffect.run": ()=>null
                        }["useDynamicPricing.useEffect.run"]);
                        if (!res.ok) {
                            throw new Error(String(data?.error || "Failed to load pricing"));
                        }
                        const p = data?.price;
                        setPrice(typeof p === "number" ? p : null);
                    } catch (err) {
                        setError(err?.message || "Failed to fetch pricing");
                        setPrice(null);
                    } finally{
                        if (!cancelled) setIsLoading(false);
                    }
                }
            }["useDynamicPricing.useEffect.run"];
            run();
            return ({
                "useDynamicPricing.useEffect": ()=>{
                    cancelled = true;
                }
            })["useDynamicPricing.useEffect"];
        }
    }["useDynamicPricing.useEffect"], [
        normalized.category,
        normalized.subservice,
        normalized.variant,
        paramsKey,
        user
    ]);
    const submitService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDynamicPricing.useCallback[submitService]": async (formData)=>{
            try {
                const body = {
                    amount: Number(formData.amount),
                    idempotencyKey: typeof formData.idempotencyKey === "string" ? formData.idempotencyKey : undefined,
                    params: {
                        ...formData || {}
                    },
                    subServiceId: normalized.variant || undefined,
                    action: mapVerificationAction(normalized.category, normalized.subservice) || undefined
                };
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$client$2d$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authFetch"])(`/api/service/${encodeURIComponent(normalized.category)}/${encodeURIComponent(normalized.subservice)}`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                });
                const data = await res.json().catch({
                    "useDynamicPricing.useCallback[submitService]": ()=>null
                }["useDynamicPricing.useCallback[submitService]"]);
                if (!res.ok) {
                    return {
                        ok: false,
                        error: String(data?.error || `Service failed (${res.status})`),
                        message: String(data?.message || "Failed"),
                        data
                    };
                }
                setReference(String(data?.reference || ""));
                return {
                    ok: true,
                    reference: String(data?.reference || ""),
                    message: String(data?.message || ""),
                    data
                };
            } catch (err) {
                return {
                    ok: false,
                    error: String(err?.message || err)
                };
            }
        }
    }["useDynamicPricing.useCallback[submitService]"], [
        normalized.category,
        normalized.subservice,
        normalized.variant
    ]);
    return {
        price,
        isLoading,
        error,
        reference,
        submitService
    };
}
_s(useDynamicPricing, "cP1a0VL5bZYDp343kArh7xULBQ4=");
const __TURBOPACK__default__export__ = useDynamicPricing;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/service-pricing.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultPrices",
    ()=>defaultPrices,
    "formatPrice",
    ()=>formatPrice,
    "getServicePrice",
    ()=>getServicePrice,
    "getServicePrices",
    ()=>getServicePrices,
    "updateServicePrice",
    ()=>updateServicePrice
]);
const STORAGE_KEY = "ufriends_service_prices";
const defaultPrices = {
    "BVN Retrieval": {
        buy: 1200,
        sell: 1500,
        serviceType: "BVN Retrieval",
        lastUpdated: new Date().toISOString()
    },
    "BVN Central Risk": {
        buy: 800,
        sell: 1000,
        serviceType: "BVN Central Risk",
        lastUpdated: new Date().toISOString()
    },
    "BVN Printout": {
        buy: 150,
        sell: 180,
        serviceType: "BVN Printout",
        lastUpdated: new Date().toISOString()
    },
    "NIN Slip Standard": {
        buy: 150,
        sell: 180,
        serviceType: "NIN Slip Standard",
        lastUpdated: new Date().toISOString()
    },
    "NIN Slip Premium": {
        buy: 150,
        sell: 180,
        serviceType: "NIN Slip Premium",
        lastUpdated: new Date().toISOString()
    },
    "NIN Slip Regular": {
        buy: 120,
        sell: 150,
        serviceType: "NIN Slip Regular",
        lastUpdated: new Date().toISOString()
    },
    "NIN Modification": {
        buy: 2000,
        sell: 2500,
        serviceType: "NIN Modification",
        lastUpdated: new Date().toISOString()
    },
    "NIN Printout": {
        buy: 150,
        sell: 180,
        serviceType: "NIN Printout",
        lastUpdated: new Date().toISOString()
    },
    "NIN Validation - Normal": {
        buy: 250,
        sell: 300,
        serviceType: "NIN Validation - Normal",
        lastUpdated: new Date().toISOString()
    },
    "NIN Validation - Photographic Error": {
        buy: 400,
        sell: 500,
        serviceType: "NIN Validation - Photographic Error",
        lastUpdated: new Date().toISOString()
    },
    "NIN Validation - SIM Registration": {
        buy: 200,
        sell: 250,
        serviceType: "NIN Validation - SIM Registration",
        lastUpdated: new Date().toISOString()
    },
    "NIN Validation - Bank Validation": {
        buy: 300,
        sell: 350,
        serviceType: "NIN Validation - Bank Validation",
        lastUpdated: new Date().toISOString()
    },
    "IPE Clearance - Normal": {
        buy: 800,
        sell: 1000,
        serviceType: "IPE Clearance - Normal",
        lastUpdated: new Date().toISOString()
    },
    "IPE Clearance - Modification": {
        buy: 1200,
        sell: 1500,
        serviceType: "IPE Clearance - Modification",
        lastUpdated: new Date().toISOString()
    },
    "JTB TIN - Individual": {
        buy: 3000,
        sell: 3500,
        serviceType: "JTB TIN - Individual",
        lastUpdated: new Date().toISOString()
    },
    "JTB TIN - Business": {
        buy: 5000,
        sell: 6000,
        serviceType: "JTB TIN - Business",
        lastUpdated: new Date().toISOString()
    },
    "ShareNSell - MTN": {
        buy: 0.97,
        sell: 0.98,
        serviceType: "ShareNSell - MTN",
        lastUpdated: new Date().toISOString()
    },
    "ShareNSell - Airtel": {
        buy: 0.96,
        sell: 0.97,
        serviceType: "ShareNSell - Airtel",
        lastUpdated: new Date().toISOString()
    },
    "ShareNSell - Glo": {
        buy: 0.95,
        sell: 0.96,
        serviceType: "ShareNSell - Glo",
        lastUpdated: new Date().toISOString()
    },
    "ShareNSell - 9mobile": {
        buy: 0.94,
        sell: 0.95,
        serviceType: "ShareNSell - 9mobile",
        lastUpdated: new Date().toISOString()
    },
    "Airtime2Cash - MTN": {
        buy: 0.93,
        sell: 0.94,
        serviceType: "Airtime2Cash - MTN",
        lastUpdated: new Date().toISOString()
    },
    "Airtime2Cash - Airtel": {
        buy: 0.91,
        sell: 0.92,
        serviceType: "Airtime2Cash - Airtel",
        lastUpdated: new Date().toISOString()
    },
    "Airtime2Cash - Glo": {
        buy: 0.89,
        sell: 0.9,
        serviceType: "Airtime2Cash - Glo",
        lastUpdated: new Date().toISOString()
    },
    "Airtime2Cash - 9mobile": {
        buy: 0.87,
        sell: 0.88,
        serviceType: "Airtime2Cash - 9mobile",
        lastUpdated: new Date().toISOString()
    },
    "VTU - MTN": {
        buy: 0.98,
        sell: 0.99,
        serviceType: "VTU - MTN",
        lastUpdated: new Date().toISOString()
    },
    "VTU - Airtel": {
        buy: 0.97,
        sell: 0.98,
        serviceType: "VTU - Airtel",
        lastUpdated: new Date().toISOString()
    },
    "VTU - Glo": {
        buy: 0.96,
        sell: 0.97,
        serviceType: "VTU - Glo",
        lastUpdated: new Date().toISOString()
    },
    "VTU - 9mobile": {
        buy: 0.95,
        sell: 0.96,
        serviceType: "VTU - 9mobile",
        lastUpdated: new Date().toISOString()
    },
    "SME Data - MTN": {
        buy: 0.95,
        sell: 0.97,
        serviceType: "SME Data - MTN",
        lastUpdated: new Date().toISOString()
    },
    "SME Data - Airtel": {
        buy: 0.94,
        sell: 0.96,
        serviceType: "SME Data - Airtel",
        lastUpdated: new Date().toISOString()
    },
    "SME Data - Glo": {
        buy: 0.93,
        sell: 0.95,
        serviceType: "SME Data - Glo",
        lastUpdated: new Date().toISOString()
    },
    "SME Data - 9mobile": {
        buy: 0.92,
        sell: 0.94,
        serviceType: "SME Data - 9mobile",
        lastUpdated: new Date().toISOString()
    },
    "Corporate Data - MTN": {
        buy: 0.96,
        sell: 0.98,
        serviceType: "Corporate Data - MTN",
        lastUpdated: new Date().toISOString()
    },
    "Corporate Data - Airtel": {
        buy: 0.95,
        sell: 0.97,
        serviceType: "Corporate Data - Airtel",
        lastUpdated: new Date().toISOString()
    },
    "Corporate Data - Glo": {
        buy: 0.94,
        sell: 0.96,
        serviceType: "Corporate Data - Glo",
        lastUpdated: new Date().toISOString()
    },
    "Corporate Data - 9mobile": {
        buy: 0.93,
        sell: 0.95,
        serviceType: "Corporate Data - 9mobile",
        lastUpdated: new Date().toISOString()
    },
    "Gift Data - MTN": {
        buy: 0.97,
        sell: 0.99,
        serviceType: "Gift Data - MTN",
        lastUpdated: new Date().toISOString()
    },
    "Gift Data - Airtel": {
        buy: 0.96,
        sell: 0.98,
        serviceType: "Gift Data - Airtel",
        lastUpdated: new Date().toISOString()
    },
    "Gift Data - Glo": {
        buy: 0.95,
        sell: 0.97,
        serviceType: "Gift Data - Glo",
        lastUpdated: new Date().toISOString()
    },
    "Gift Data - 9mobile": {
        buy: 0.94,
        sell: 0.96,
        serviceType: "Gift Data - 9mobile",
        lastUpdated: new Date().toISOString()
    },
    "Cable - DSTV": {
        buy: 0,
        sell: 0,
        serviceType: "Cable - DSTV",
        lastUpdated: new Date().toISOString()
    },
    "Cable - GOTV": {
        buy: 0,
        sell: 0,
        serviceType: "Cable - GOTV",
        lastUpdated: new Date().toISOString()
    },
    "Cable - Startimes": {
        buy: 0,
        sell: 0,
        serviceType: "Cable - Startimes",
        lastUpdated: new Date().toISOString()
    },
    "Electricity - EKEDC": {
        buy: 0,
        sell: 0,
        serviceType: "Electricity - EKEDC",
        lastUpdated: new Date().toISOString()
    },
    "Electricity - IE": {
        buy: 0,
        sell: 0,
        serviceType: "Electricity - IE",
        lastUpdated: new Date().toISOString()
    },
    "Electricity - AEDC": {
        buy: 0,
        sell: 0,
        serviceType: "Electricity - AEDC",
        lastUpdated: new Date().toISOString()
    },
    "Electricity - KEDCO": {
        buy: 0,
        sell: 0,
        serviceType: "Electricity - KEDCO",
        lastUpdated: new Date().toISOString()
    },
    "Electricity - PHED": {
        buy: 0,
        sell: 0,
        serviceType: "Electricity - PHED",
        lastUpdated: new Date().toISOString()
    },
    "Electricity - IBEDC": {
        buy: 0,
        sell: 0,
        serviceType: "Electricity - IBEDC",
        lastUpdated: new Date().toISOString()
    },
    "Electricity - EEDC": {
        buy: 0,
        sell: 0,
        serviceType: "Electricity - EEDC",
        lastUpdated: new Date().toISOString()
    }
};
function getServicePrices() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPrices));
        return defaultPrices;
    }
    return JSON.parse(stored);
}
function getServicePrice(serviceType) {
    const prices = getServicePrices();
    return prices[serviceType]?.sell || 0;
}
function updateServicePrice(serviceType, buy, sell) {
    const prices = getServicePrices();
    prices[serviceType] = {
        buy,
        sell,
        serviceType,
        lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prices));
}
function formatPrice(price) {
    return `₦${price.toLocaleString()}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/services/nin/printout/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NINPrintoutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDynamicPricing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useDynamicPricing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$service$2d$pricing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/service-pricing.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function NINPrintoutPage() {
    _s();
    const [showPrivacyWarning, setShowPrivacyWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [nin, setNin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    // Dynamic pricing for NIN printout (no variant/params)
    const { price: servicePrice, isLoading: priceLoading, error: priceError, submitService } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDynamicPricing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDynamicPricing"])("nin", "printout", "default", {});
    const handleSubmit = async ()=>{
        if (!nin || nin.length !== 11) {
            toast({
                title: "Validation Error",
                description: "Enter a valid 11-digit NIN",
                variant: "destructive"
            });
            return;
        }
        setIsProcessing(true);
        try {
            // Use standardized submitService for billing and verification
            const resp = await submitService({
                nin
            }) // Pass params as expected by backend
            ;
            if (!resp.ok) {
                const msg = resp.error || "Request failed";
                throw new Error(msg);
            }
            setData(resp.data?.data || resp.data); // Adjust based on response structure
            toast({
                title: "Success!",
                description: "NIN printout retrieved."
            });
        } catch (error) {
            const message = error?.message || error?.error || error?.detail || JSON.stringify(error);
            console.error("NIN Printout Error:", message);
            toast({
                title: "Error",
                description: message,
                variant: "destructive"
            });
        } finally{
            setIsProcessing(false);
        }
    };
    const downloadPrintoutPDF = ()=>{
        try {
            const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
            doc.setFontSize(18);
            doc.text("UFriends Information Technology", 70, 15);
            doc.setFontSize(14);
            doc.text("NIN Printout", 95, 25);
            doc.setFontSize(10);
            doc.text(`Date: ${new Date().toLocaleString()}`, 15, 40);
            doc.text(`NIN: ${nin}`, 15, 50);
            if (data?.full_name) doc.text(`Name: ${data.full_name}`, 15, 60);
            if (data?.date_of_birth) doc.text(`DOB: ${data.date_of_birth}`, 15, 70);
            doc.text("Note: This is a verification printout generated by UFriends.com.ng", 15, 250);
            doc.save(`nin-printout-${Date.now()}.pdf`);
            toast({
                title: "Download Complete",
                description: "NIN printout PDF generated."
            });
        } catch (error) {
            console.error("PDF generation error:", error?.message || JSON.stringify(error));
            toast({
                title: "Download Error",
                description: error?.message || "Failed to generate PDF.",
                variant: "destructive"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#F9F7F3] p-4 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: showPrivacyWarning,
                onOpenChange: setShowPrivacyWarning,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#3457D5] bg-[#CCCCFF]/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        className: "h-8 w-8 text-[#3457D5]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/nin/printout/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/services/nin/printout/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "text-center text-2xl font-bold",
                                    children: "Privacy & Data Protection Warning"
                                }, void 0, false, {
                                    fileName: "[project]/app/services/nin/printout/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    className: "text-center text-sm leading-relaxed text-gray-600",
                                    children: "By using this service, you confirm legal authority to process this data and accept liability for misuse."
                                }, void 0, false, {
                                    fileName: "[project]/app/services/nin/printout/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/services/nin/printout/page.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>setShowPrivacyWarning(false),
                                className: "bg-[#3457D5] px-8 text-white hover:bg-[#3457D5]/90",
                                children: "I Understand & Accept"
                            }, void 0, false, {
                                fileName: "[project]/app/services/nin/printout/page.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/services/nin/printout/page.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/services/nin/printout/page.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/services/nin/printout/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-3xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "border-[#CCCCFF]/30 shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            className: "bg-gradient-to-r from-[#3457D5]/5 to-[#CCCCFF]/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "flex items-center text-[#3457D5]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "mr-2 h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/services/nin/printout/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this),
                                    " NIN Printout"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/services/nin/printout/page.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/services/nin/printout/page.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "space-y-6 pt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "nin",
                                            children: "NIN Number"
                                        }, void 0, false, {
                                            fileName: "[project]/app/services/nin/printout/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "nin",
                                            placeholder: "Enter 11-digit NIN",
                                            maxLength: 11,
                                            value: nin,
                                            onChange: (e)=>setNin(e.target.value.replace(/\D/g, "")),
                                            className: "mt-2 border-[#CCCCFF] focus:border-[#3457D5]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/services/nin/printout/page.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/services/nin/printout/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#CCCCFF]/20 border border-[#CCCCFF]/50 rounded-lg p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-[#2c3e50]",
                                                    children: "💰 Service Price:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/nin/printout/page.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl font-bold text-[#3457D5]",
                                                    children: priceLoading ? "Loading..." : servicePrice == null ? "Not configured" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$service$2d$pricing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(Number(servicePrice || 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/services/nin/printout/page.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/services/nin/printout/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        priceError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-red-600",
                                            children: "Failed to load price. You can still submit."
                                        }, void 0, false, {
                                            fileName: "[project]/app/services/nin/printout/page.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/services/nin/printout/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleSubmit,
                                    disabled: isProcessing || nin.length !== 11 || priceLoading,
                                    className: "w-full bg-[#3457D5] py-6 text-base font-semibold text-white hover:bg-[#3457D5]/90",
                                    children: isProcessing ? "Processing..." : "Submit Request"
                                }, void 0, false, {
                                    fileName: "[project]/app/services/nin/printout/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: downloadPrintoutPDF,
                                    className: "w-full bg-green-600 py-6 text-base font-semibold text-white hover:bg-green-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "mr-2 h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/services/nin/printout/page.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this),
                                        " Download Printout (PDF)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/services/nin/printout/page.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/services/nin/printout/page.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/services/nin/printout/page.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/services/nin/printout/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/services/nin/printout/page.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(NINPrintoutPage, "xIz0KmfROKKvvshVHwiLuve7DAI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDynamicPricing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDynamicPricing"]
    ];
});
_c = NINPrintoutPage;
var _c;
__turbopack_context__.k.register(_c, "NINPrintoutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_803b049f._.js.map