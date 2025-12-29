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
"[project]/lib/jwt.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sign2FAProof",
    ()=>sign2FAProof,
    "signAccessToken",
    ()=>signAccessToken,
    "signRefreshToken",
    ()=>signRefreshToken,
    "verify2FAProof",
    ()=>verify2FAProof,
    "verifyAccessToken",
    ()=>verifyAccessToken,
    "verifyRefreshToken",
    ()=>verifyRefreshToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/sign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [app-route] (ecmascript)");
;
const encoder = new TextEncoder();
function getAccessSecret() {
    const secret = process.env.JWT_SECRET || "dev_access_secret";
    return encoder.encode(secret);
}
function getRefreshSecret() {
    const secret = process.env.JWT_REFRESH_SECRET || "dev_refresh_secret";
    return encoder.encode(secret);
}
function nowSeconds() {
    return Math.floor(Date.now() / 1000);
}
async function signAccessToken(payload, expiresInSeconds = 15 * 60) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
        alg: "HS256"
    }).setIssuedAt().setExpirationTime(nowSeconds() + expiresInSeconds).sign(getAccessSecret());
}
async function signRefreshToken(payload, expiresInSeconds = 7 * 24 * 60 * 60) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
        alg: "HS256"
    }).setIssuedAt().setExpirationTime(nowSeconds() + expiresInSeconds).sign(getRefreshSecret());
}
async function verifyAccessToken(token) {
    const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, getAccessSecret());
    return payload;
}
async function verifyRefreshToken(token) {
    const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, getRefreshSecret());
    return payload;
}
async function sign2FAProof(payload, expiresInSeconds = 5 * 60) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
        alg: "HS256"
    }).setIssuedAt().setExpirationTime(nowSeconds() + expiresInSeconds).sign(getAccessSecret());
}
async function verify2FAProof(token) {
    const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, getAccessSecret());
    return payload;
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/stream/web [external] (stream/web, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream/web", () => require("stream/web"));

module.exports = mod;
}),
"[externals]/worker_threads [external] (worker_threads, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("worker_threads", () => require("worker_threads"));

module.exports = mod;
}),
"[externals]/perf_hooks [external] (perf_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("perf_hooks", () => require("perf_hooks"));

module.exports = mod;
}),
"[externals]/util/types [external] (util/types, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util/types", () => require("util/types"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[externals]/node:events [external] (node:events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}),
"[externals]/diagnostics_channel [external] (diagnostics_channel, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("diagnostics_channel", () => require("diagnostics_channel"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/string_decoder [external] (string_decoder, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("string_decoder", () => require("string_decoder"));

module.exports = mod;
}),
"[externals]/async_hooks [external] (async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("async_hooks", () => require("async_hooks"));

module.exports = mod;
}),
"[externals]/console [external] (console, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("console", () => require("console"));

module.exports = mod;
}),
"[project]/lib/security.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aj",
    ()=>aj,
    "ajWithEmail",
    ()=>ajWithEmail,
    "protect",
    ()=>protect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$next$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@arcjet/next/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/arcjet/index.js [app-route] (ecmascript)");
;
const aj = process.env.ARCJET_KEY ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$next$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    key: process.env.ARCJET_KEY,
    rules: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shield"])({
            mode: "LIVE"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["detectBot"])({
            mode: "LIVE",
            allow: [
                "CATEGORY:SEARCH_ENGINE",
                "CATEGORY:MONITOR",
                "CATEGORY:PREVIEW"
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fixedWindow"])({
            mode: "LIVE",
            window: "60s",
            max: 100
        })
    ]
}) : null;
const ajWithEmail = process.env.ARCJET_KEY ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$next$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    key: process.env.ARCJET_KEY,
    rules: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shield"])({
            mode: "LIVE"
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["detectBot"])({
            mode: "LIVE",
            allow: [
                "CATEGORY:SEARCH_ENGINE",
                "CATEGORY:MONITOR",
                "CATEGORY:PREVIEW"
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fixedWindow"])({
            mode: "LIVE",
            window: "60s",
            max: 100
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateEmail"])({
            mode: "LIVE",
            deny: [
                "DISPOSABLE",
                "INVALID",
                "NO_MX_RECORDS"
            ]
        })
    ]
}) : null;
async function protect(req, opts) {
    if (!aj) return {
        allowed: true
    };
    try {
        const decision = await (opts?.email && ajWithEmail ? ajWithEmail.protect(req, {
            email: opts.email
        }) : aj.protect(req));
        if (decision?.isDenied?.()) return {
            allowed: false
        };
        return {
            allowed: true
        };
    } catch  {
        // Fail open in dev
        return {
            allowed: true
        };
    }
}
}),
"[externals]/postcss [external] (postcss, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("postcss", () => require("postcss"));

module.exports = mod;
}),
"[project]/lib/validation.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isValidUrl",
    ()=>isValidUrl,
    "sanitizeEmail",
    ()=>sanitizeEmail,
    "sanitizePhone",
    ()=>sanitizePhone,
    "sanitizeString",
    ()=>sanitizeString,
    "sanitizer",
    ()=>sanitizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$xss$2d$sanitizer$2f$build$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod-xss-sanitizer/build/index.js [app-route] (ecmascript)");
;
;
const sanitizer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$xss$2d$sanitizer$2f$build$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodXssSanitizer"].sanitizer({
    actionLevel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2d$xss$2d$sanitizer$2f$build$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ACTION_LEVELS"].SANITIZE
});
function sanitizeEmail(input) {
    return sanitizer.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().toLowerCase().email().parse(input));
}
function sanitizeString(input) {
    return sanitizer.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).parse(input));
}
function sanitizePhone(input) {
    const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().regex(/^\+?[0-9]{10,15}$/i, {
        message: "Invalid phone"
    });
    return sanitizer.parse(schema.parse(input));
}
function isValidUrl(input) {
    const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().safeParse(input);
    return res.success;
}
}),
"[project]/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authOptions",
    ()=>authOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/security.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$joi$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/joi/lib/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validation.ts [app-route] (ecmascript)");
;
;
;
;
;
;
const isProd = ("TURBOPACK compile-time value", "development") === "production";
const authOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email"
                },
                password: {
                    label: "Password",
                    type: "password"
                },
                twoFactorProof: {
                    label: "2FA Proof",
                    type: "text"
                }
            },
            async authorize (credentials, req) {
                console.log("AUTH DEBUG: authorize called with", {
                    email: credentials?.email
                });
                // Basic input validation with Joi
                const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$joi$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].object({
                    // Allow non-public TLDs (e.g., .local) in development; enforce strict in production
                    email: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$joi$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().email({
                        tlds: {
                            allow: false
                        }
                    }).required(),
                    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$joi$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].string().min(6).required()
                });
                const { error, value } = schema.validate({
                    email: credentials?.email,
                    password: credentials?.password
                });
                if (error) {
                    console.log("AUTH DEBUG: Joi validation error", error);
                    return null;
                }
                // Sanitize email using shared sanitizer
                const safeEmail = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizer"].parse(value.email.trim().toLowerCase());
                // Centralized protection: Shield/email validation handled by shared helper
                try {
                    const sec = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protect"])(req, {
                        email: safeEmail
                    });
                    if (!sec.allowed) {
                        console.log("AUTH DEBUG: Protected by Arcjet/Security");
                        return null;
                    }
                } catch  {
                // Fail open to avoid login lockouts if Arcjet fails
                }
                // Credentials auth
                const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                    where: {
                        email: safeEmail
                    }
                });
                if (!user) {
                    console.log("AUTH DEBUG: User not found", safeEmail);
                    return null;
                }
                const ok = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(value.password, user.passwordHash);
                if (!ok) {
                    console.log("AUTH DEBUG: Password mismatch for", safeEmail);
                    return null;
                }
                // ENFORCE 2FA
                if (user.totpEnabled) {
                    if (!credentials?.twoFactorProof) {
                        console.log("AUTH DEBUG: 2FA required but proof missing");
                        throw new Error("2FA_REQUIRED");
                    }
                    try {
                        const { verify2FAProof } = await __turbopack_context__.A("[project]/lib/jwt.ts [app-route] (ecmascript, async loader)");
                        const proof = await verify2FAProof(credentials.twoFactorProof);
                        if (proof.sub !== user.id) throw new Error("INVALID_PROOF");
                    } catch (e) {
                        console.log("AUTH DEBUG: 2FA proof verification failed");
                        throw new Error("2FA_EXPIRED");
                    }
                }
                console.log("AUTH DEBUG: Auth successful for", safeEmail);
                return {
                    id: user.id,
                    email: user.email,
                    role: user.role
                };
            }
        })
    ],
    callbacks: {
        async jwt ({ token, user }) {
            if (user) {
                ;
                token.id = user.id;
                token.role = user.role;
            }
            return token;
        },
        async session ({ session, token }) {
            if (session.user) {
                ;
                session.user.id = token.id;
                session.user.role = token.role;
            }
            return session;
        }
    }
};
}),
"[project]/lib/jwt-auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAuthUser",
    ()=>getAuthUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jwt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/jwt.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-route] (ecmascript)");
;
;
;
async function getAuthUser(req) {
    // Prefer Authorization: Bearer access token
    const authHeader = req.headers?.get?.("authorization") || "";
    const [, token] = authHeader.split(" ");
    if (authHeader.toLowerCase().startsWith("bearer ") && token) {
        try {
            const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jwt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyAccessToken"])(token);
            return {
                id: payload.sub,
                email: payload.email,
                role: payload.role
            };
        } catch  {}
    }
    // Fallback to NextAuth session
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getServerSession"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authOptions"]);
        if (session?.user?.id) {
            return {
                id: session.user.id,
                email: session.user.email,
                role: session.user.role
            };
        }
    } catch  {}
    return null;
}
}),
"[project]/lib/require-auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "requireAuth",
    ()=>requireAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jwt$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/jwt-auth.ts [app-route] (ecmascript)");
;
;
;
async function requireAuth(req, options = {}) {
    const tokenUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jwt$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthUser"])(req);
    if (!tokenUser?.id) {
        return {
            ok: false,
            response: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Unauthorized"
            }, {
                status: 401
            })
        };
    }
    // Check DB for status and latest role
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
        where: {
            id: tokenUser.id
        },
        select: {
            id: true,
            email: true,
            role: true,
            status: true
        }
    });
    if (!user) {
        return {
            ok: false,
            response: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Unauthorized"
            }, {
                status: 401
            })
        };
    }
    if (user.status === "suspended") {
        return {
            ok: false,
            response: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Account suspended"
            }, {
                status: 403
            })
        };
    }
    // Enforce role check if required
    if (options.roles && user.role && !options.roles.includes(user.role)) {
        return {
            ok: false,
            response: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Forbidden"
            }, {
                status: 403
            })
        };
    }
    // Return the DB user to ensure downstream consumers have up-to-date data
    return {
        ok: true,
        user: {
            id: user.id,
            email: user.email,
            role: user.role
        }
    };
}
}),
"[project]/lib/provider-manager.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getActiveProvider",
    ()=>getActiveProvider,
    "getCategoryProviders",
    ()=>getCategoryProviders,
    "getProviderApiKey",
    ()=>getProviderApiKey,
    "getProviderApiKeys",
    ()=>getProviderApiKeys,
    "getProviderConfig",
    ()=>getProviderConfig,
    "isProviderAvailable",
    ()=>isProviderAvailable,
    "updateProviderStatus",
    ()=>updateProviderStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
;
async function getActiveProvider(category) {
    try {
        const providers = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].serviceProvider.findMany({
            where: {
                category
            },
            include: {
                apiKeys: {
                    select: {
                        id: true,
                        keyName: true,
                        keyValue: true
                    }
                }
            },
            orderBy: [
                {
                    isActive: "desc"
                },
                {
                    priority: "desc"
                },
                {
                    name: "asc"
                }
            ]
        });
        const toConfig = (p)=>({
                id: p.id,
                name: p.name,
                category: p.category,
                isActive: p.isActive,
                priority: p.priority,
                apiBaseUrl: p.apiBaseUrl,
                configJson: p.configJson,
                apiKeys: p.apiKeys
            });
        const activeProviderRaw = providers.find((p)=>p.isActive) || null;
        const fallbackProvidersRaw = providers.filter((p)=>!p.isActive && p.priority > 0);
        return {
            provider: activeProviderRaw ? toConfig(activeProviderRaw) : null,
            fallbackProviders: fallbackProvidersRaw.map(toConfig),
            hasActiveProvider: !!activeProviderRaw
        };
    } catch (error) {
        console.error(`Failed to get active provider for category ${category}:`, error);
        return {
            provider: null,
            fallbackProviders: [],
            hasActiveProvider: false
        };
    }
}
async function getProviderApiKey(providerId, keyName) {
    try {
        const apiKey = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].providerApiKey.findFirst({
            where: {
                providerId,
                keyName
            },
            select: {
                keyValue: true
            }
        });
        return apiKey?.keyValue || null;
    } catch (error) {
        console.error(`Failed to get API key ${keyName} for provider ${providerId}:`, error);
        return null;
    }
}
async function getProviderApiKeys(providerId) {
    try {
        const apiKeys = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].providerApiKey.findMany({
            where: {
                providerId
            },
            select: {
                keyName: true,
                keyValue: true
            }
        });
        return apiKeys.reduce((acc, key)=>{
            acc[key.keyName] = key.keyValue;
            return acc;
        }, {});
    } catch (error) {
        console.error(`Failed to get API keys for provider ${providerId}:`, error);
        return {};
    }
}
async function isProviderAvailable(category) {
    try {
        const activeProvider = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].serviceProvider.findFirst({
            where: {
                category,
                isActive: true
            }
        });
        return !!activeProvider;
    } catch (error) {
        console.error(`Failed to check provider availability for category ${category}:`, error);
        return false;
    }
}
async function getProviderConfig(providerId) {
    try {
        const provider = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].serviceProvider.findUnique({
            where: {
                id: providerId
            },
            include: {
                apiKeys: {
                    select: {
                        id: true,
                        keyName: true,
                        keyValue: true
                    }
                }
            }
        });
        if (!provider) return null;
        return {
            id: provider.id,
            name: provider.name,
            category: provider.category,
            isActive: provider.isActive,
            priority: provider.priority,
            apiBaseUrl: provider.apiBaseUrl,
            configJson: provider.configJson,
            apiKeys: provider.apiKeys
        };
    } catch (error) {
        console.error(`Failed to get provider config for ${providerId}:`, error);
        return null;
    }
}
async function updateProviderStatus(providerId, isActive) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].serviceProvider.update({
            where: {
                id: providerId
            },
            data: {
                isActive,
                updatedAt: new Date()
            }
        });
        return true;
    } catch (error) {
        console.error(`Failed to update provider status for ${providerId}:`, error);
        return false;
    }
}
async function getCategoryProviders(category) {
    try {
        const providers = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].serviceProvider.findMany({
            where: {
                category
            },
            include: {
                apiKeys: {
                    select: {
                        id: true,
                        keyName: true,
                        keyValue: true
                    }
                }
            },
            orderBy: [
                {
                    isActive: "desc"
                },
                {
                    priority: "desc"
                },
                {
                    name: "asc"
                }
            ]
        });
        return providers.map((p)=>({
                id: p.id,
                name: p.name,
                category: p.category,
                isActive: p.isActive,
                priority: p.priority,
                apiBaseUrl: p.apiBaseUrl,
                configJson: p.configJson,
                apiKeys: p.apiKeys
            }));
    } catch (error) {
        console.error(`Failed to get providers for category ${category}:`, error);
        return [];
    }
}
}),
"[project]/lib/services-config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UFRIENDS_SERVICES",
    ()=>UFRIENDS_SERVICES,
    "getAllServicesWithProviders",
    ()=>getAllServicesWithProviders,
    "getAllSubServices",
    ()=>getAllSubServices,
    "getAvailableServices",
    ()=>getAvailableServices,
    "getServiceById",
    ()=>getServiceById,
    "getServiceWithProvider",
    ()=>getServiceWithProvider,
    "hasActiveProvider",
    ()=>hasActiveProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$provider$2d$manager$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/provider-manager.ts [app-route] (ecmascript)");
;
const UFRIENDS_SERVICES = [
    {
        id: "airtime",
        name: "Airtime",
        description: "Buy airtime for all networks instantly",
        icon: "Smartphone",
        color: "text-blue-600",
        commission: "5-8%",
        subServices: [
            {
                id: "vtu",
                name: "VTU",
                description: "Virtual Top-Up for instant airtime recharge"
            },
            {
                id: "share-n-sell",
                name: "Share 'n Sell",
                description: "Share and sell airtime to earn commissions"
            },
            {
                id: "airtime-2-cash",
                name: "Airtime 2 Cash",
                description: "Convert excess airtime to cash"
            }
        ]
    },
    {
        id: "data",
        name: "Data",
        description: "Purchase data bundles at competitive rates",
        icon: "Wifi",
        color: "text-green-600",
        commission: "5-8%",
        subServices: [
            {
                id: "sme",
                name: "SME Data",
                description: "Affordable SME data bundles for all networks"
            },
            {
                id: "corporate",
                name: "Corporate Data",
                description: "Corporate data plans for businesses"
            },
            {
                id: "gift",
                name: "Gift Data",
                description: "Send data bundles as gifts"
            }
        ]
    },
    {
        id: "bills",
        name: "Bills",
        description: "Pay utility bills conveniently",
        icon: "Receipt",
        color: "text-orange-600",
        commission: "3-5%",
        subServices: [
            {
                id: "electricity",
                name: "Electricity",
                description: "Pay electricity bills"
            },
            {
                id: "water",
                name: "Water",
                description: "Pay water bills"
            },
            {
                id: "internet",
                name: "Internet",
                description: "Pay internet bills"
            }
        ]
    },
    {
        id: "bvn",
        name: "BVN Services",
        description: "BVN verification and related services",
        icon: "UserCheck",
        color: "text-purple-600",
        commission: "8-12%",
        subServices: [
            {
                id: "android-license",
                name: "Android License",
                description: "BVN Android license for mobile banking"
            },
            {
                id: "modification",
                name: "BVN Modification",
                description: "Update and modify BVN details"
            },
            {
                id: "retrieval",
                name: "BVN Retrieval",
                description: "Retrieve forgotten BVN"
            },
            {
                id: "central-risk",
                name: "Central Risk Management",
                description: "Check central risk status"
            },
            {
                id: "printout",
                name: "BVN Print Out",
                description: "Print BVN slip and documents"
            }
        ]
    },
    {
        id: "nin",
        name: "NIN Services",
        description: "National ID verification services",
        icon: "IdCard",
        color: "text-red-600",
        commission: "8-12%",
        subServices: [
            {
                id: "validation",
                name: "NIN Validation",
                description: "Validate National ID numbers"
            },
            {
                id: "verification",
                name: "NIN Verification",
                description: "Verify NIN details"
            }
        ]
    },
    {
        id: "cac",
        name: "CAC Registration",
        description: "Business registration and incorporation",
        icon: "Building2",
        color: "text-indigo-600",
        commission: "10-15%",
        subServices: [
            {
                id: "registration",
                name: "CAC Registration",
                description: "Register new business with CAC"
            },
            {
                id: "status-report",
                name: "Status Report",
                description: "Get CAC status report"
            },
            {
                id: "certification",
                name: "Certification",
                description: "Get CAC certification"
            }
        ]
    },
    {
        id: "education",
        name: "Education",
        description: "Educational services and resources",
        icon: "GraduationCap",
        color: "text-teal-600",
        commission: "5-10%",
        subServices: [
            {
                id: "jamb",
                name: "JAMB Services",
                description: "JAMB registration and services"
            },
            {
                id: "nysc",
                name: "NYSC Services",
                description: "NYSC registration and services"
            }
        ]
    },
    {
        id: "agency-banking",
        name: "Agency Banking",
        description: "POS and banking services",
        icon: "Banknote",
        color: "text-yellow-600",
        commission: "10-15%",
        subServices: [
            {
                id: "pos",
                name: "POS Terminals",
                description: "POS terminal acquisition and management"
            },
            {
                id: "marketer",
                name: "Marketer Program",
                description: "Become a UFriends marketer"
            }
        ]
    },
    {
        id: "verification",
        name: "Verification",
        description: "Identity and document verification",
        icon: "ShieldCheck",
        color: "text-pink-600",
        commission: "8-12%",
        subServices: [
            {
                id: "identity",
                name: "Identity Verification",
                description: "Verify identity documents"
            },
            {
                id: "document",
                name: "Document Verification",
                description: "Verify official documents"
            }
        ]
    },
    {
        id: "training",
        name: "Training",
        description: "Professional training and development",
        icon: "BookOpen",
        color: "text-cyan-600",
        commission: "5-10%",
        subServices: [
            {
                id: "online",
                name: "Online Training",
                description: "Online professional courses"
            },
            {
                id: "certification",
                name: "Certification",
                description: "Professional certifications"
            }
        ]
    },
    {
        id: "software-development",
        name: "Software Development",
        description: "Custom software solutions",
        icon: "Code",
        color: "text-violet-600",
        commission: "15-20%",
        subServices: [
            {
                id: "web",
                name: "Web Development",
                description: "Custom web applications"
            },
            {
                id: "mobile",
                name: "Mobile Development",
                description: "Mobile app development"
            }
        ]
    }
];
function getServiceById(id) {
    return UFRIENDS_SERVICES.find((service)=>service.id === id);
}
function getAllSubServices() {
    return UFRIENDS_SERVICES.flatMap((service)=>service.subServices.map((subService)=>({
                ...subService,
                parentService: service.name,
                parentId: service.id,
                commission: service.commission
            })));
}
async function getServiceWithProvider(id) {
    const service = getServiceById(id);
    if (!service) return undefined;
    try {
        const providerInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$provider$2d$manager$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getActiveProvider"])(id);
        const isAvailable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$provider$2d$manager$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isProviderAvailable"])(id);
        return {
            ...service,
            providerInfo,
            isAvailable
        };
    } catch (error) {
        console.error(`Failed to get provider info for service ${id}:`, error);
        return {
            ...service,
            isAvailable: false
        };
    }
}
async function getAllServicesWithProviders() {
    const servicesWithProviders = await Promise.all(UFRIENDS_SERVICES.map(async (service)=>{
        try {
            const providerInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$provider$2d$manager$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getActiveProvider"])(service.id);
            const isAvailable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$provider$2d$manager$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isProviderAvailable"])(service.id);
            return {
                ...service,
                providerInfo,
                isAvailable
            };
        } catch (error) {
            console.error(`Failed to get provider info for service ${service.id}:`, error);
            return {
                ...service,
                isAvailable: false
            };
        }
    }));
    return servicesWithProviders;
}
async function hasActiveProvider(serviceId) {
    try {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$provider$2d$manager$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isProviderAvailable"])(serviceId);
    } catch (error) {
        console.error(`Failed to check provider availability for service ${serviceId}:`, error);
        return false;
    }
}
async function getAvailableServices() {
    const allServices = await getAllServicesWithProviders();
    return allServices.filter((service)=>service.isAvailable);
}
}),
"[project]/app/api/wallet/spend-metrics/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$require$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/require-auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/security.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services-config.ts [app-route] (ecmascript)");
;
;
;
;
;
async function GET(req) {
    try {
        const auth = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$require$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireAuth"])(req);
        if (!auth.ok) return auth.response;
        const sec = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protect"])(req);
        if (!sec.allowed) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Forbidden"
            }, {
                status: 403
            });
        }
        const { searchParams } = new URL(req.url);
        const months = Math.min(24, Math.max(1, Number(searchParams.get("months") || 6)));
        const now = new Date();
        const since = new Date(now);
        since.setMonth(since.getMonth() - months + 1);
        const txs = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].transaction.findMany({
            where: {
                userId: auth.user.id,
                createdAt: {
                    gte: since,
                    lte: now
                },
                type: "SERVICE_PURCHASE",
                status: "SUCCESS"
            },
            select: {
                amount: true,
                createdAt: true,
                meta: true
            },
            orderBy: {
                createdAt: "asc"
            },
            take: 5000
        });
        const monthKey = (d)=>d.toLocaleString("en-US", {
                month: "short"
            });
        // Initialize months with zeros to keep chart continuity
        const monthlyOrder = [];
        const cursor = new Date(since);
        for(let i = 0; i < months; i++){
            monthlyOrder.push(monthKey(cursor));
            cursor.setMonth(cursor.getMonth() + 1);
        }
        const monthlyMap = {};
        for (const m of monthlyOrder)monthlyMap[m] = 0;
        const categoryMap = {};
        // Resolve a canonical category label from transaction meta
        const canonicalCategoryName = (id)=>{
            if (!id) return undefined;
            const norm = id.toLowerCase();
            const svc = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UFRIENDS_SERVICES"].find((s)=>s.id === norm);
            if (svc) return svc.name;
            // Common synonyms/aliases
            if (norm === "bill") return "Bills";
            if (norm === "agency-banking") return "Agency Banking";
            return undefined;
        };
        const resolveCategoryFromMeta = (meta)=>{
            const sid = meta?.serviceId;
            const subId = meta?.subServiceId;
            const action = meta?.action;
            // Prefer explicit serviceId
            const byServiceId = canonicalCategoryName(sid);
            if (byServiceId) return byServiceId;
            // Infer from subServiceId if present
            if (subId) {
                const parent = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UFRIENDS_SERVICES"].find((s)=>s.subServices?.some((ss)=>ss.id === String(subId).toLowerCase()));
                if (parent) return parent.name;
            }
            // Infer from action for common flows
            if (action) {
                const act = String(action).toLowerCase();
                // Try match action to a subService id in config
                const parentViaAction = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UFRIENDS_SERVICES"].find((s)=>s.subServices?.some((ss)=>ss.id === act));
                if (parentViaAction) return parentViaAction.name;
                // Fallback heuristics
                if (act === "vtu" || act === "airtime-2-cash" || act === "share-n-sell") return "Airtime";
                if (act === "bundle" || act === "sme" || act === "corporate" || act === "gift") return "Data";
                if (act === "electricity" || act === "water" || act === "internet") return "Bills";
                if (act === "android-license" || act === "modification" || act === "retrieval" || act === "central-risk" || act === "printout") return "BVN Services";
                if (act === "validation" || act === "verification") return "NIN Services";
                if (act === "registration" || act === "status-report" || act === "certification") return "CAC Registration";
                if (act === "jamb" || act === "nysc") return "Education";
                if (act === "pos" || act === "marketer") return "Agency Banking";
                if (act === "identity" || act === "document") return "Verification";
                if (act === "online") return "Training";
                if (act === "web" || act === "mobile") return "Software Development";
            }
            // Final fallback
            return "Others";
        };
        for (const tx of txs){
            const amt = Number(tx.amount || 0);
            const m = monthKey(tx.createdAt);
            monthlyMap[m] = (monthlyMap[m] || 0) + amt;
            const meta = tx.meta || {};
            const cat = resolveCategoryFromMeta(meta);
            categoryMap[cat] = (categoryMap[cat] || 0) + amt;
        }
        const monthly = monthlyOrder.map((m)=>({
                month: m,
                amount: monthlyMap[m] || 0
            }));
        const byCategory = Object.entries(categoryMap).map(([category, amount])=>({
                category,
                amount
            })).sort((a, b)=>b.amount - a.amount);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            monthly,
            byCategory
        });
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to compute spend metrics",
            detail: String(err)
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__761fa3f2._.js.map