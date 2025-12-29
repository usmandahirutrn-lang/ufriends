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
    "signAccessToken",
    ()=>signAccessToken,
    "signRefreshToken",
    ()=>signRefreshToken,
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
        })
    ]
}) : null;
const ajWithEmail = process.env.ARCJET_KEY ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$next$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    key: process.env.ARCJET_KEY,
    rules: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["shield"])({
            mode: "LIVE"
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
"[project]/lib/http-client.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildAuthHeaders",
    ()=>buildAuthHeaders,
    "fetchJsonWithRetry",
    ()=>fetchJsonWithRetry
]);
async function withTimeout(promise, ms) {
    return new Promise((resolve, reject)=>{
        const timer = setTimeout(()=>reject(new Error(`Request timed out after ${ms}ms`)), ms);
        promise.then((val)=>{
            clearTimeout(timer);
            resolve(val);
        }).catch((err)=>{
            clearTimeout(timer);
            reject(err);
        });
    });
}
function sleep(ms) {
    return new Promise((r)=>setTimeout(r, ms));
}
async function fetchJsonWithRetry(input, init = {}, opts = {}) {
    const { retries = 3, baseDelayMs = 300, maxDelayMs = 3000, timeoutMs = 8000, retryOnStatuses = [
        408,
        429,
        500,
        502,
        503,
        504
    ] } = opts;
    let attempt = 0;
    let lastError;
    while(attempt <= retries){
        try {
            const res = await withTimeout(fetch(input, init), timeoutMs);
            let data = null;
            try {
                data = await res.json();
            } catch  {
                data = null;
            }
            if (!res.ok && retryOnStatuses.includes(res.status) && attempt < retries) {
                const delay = Math.min(maxDelayMs, baseDelayMs * Math.pow(2, attempt));
                await sleep(delay);
                attempt++;
                continue;
            }
            return {
                res,
                data
            };
        } catch (err) {
            lastError = err;
            if (attempt < retries) {
                const delay = Math.min(maxDelayMs, baseDelayMs * Math.pow(2, attempt));
                await sleep(delay);
                attempt++;
                continue;
            }
            throw err;
        }
    }
    throw lastError;
}
function buildAuthHeaders(apiKey, extra) {
    const headers = {
        'Content-Type': 'application/json',
        ...extra || {}
    };
    if (apiKey) {
        headers['Authorization'] = `Bearer ${apiKey}`;
        headers['x-api-key'] = apiKey;
    }
    return headers;
}
}),
"[project]/lib/providers/airtime-ported.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendAirtimeViaPorted",
    ()=>sendAirtimeViaPorted
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$http$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/http-client.ts [app-route] (ecmascript)");
;
async function sendAirtimeViaPorted(req, provider) {
    const apiBase = provider?.apiBaseUrl || process.env.PORTEDSIM_BASE_URL || "";
    const apiKey = (provider?.apiKeys || []).find((k)=>k.keyName.toLowerCase() === "apikey")?.keyValue || process.env.PORTEDSIM_API_KEY || "";
    const vtuPath = provider?.configJson?.endpoints?.vtu || "/airtime/vtu";
    const url = `${apiBase}${vtuPath}`;
    if (!apiBase || !apiKey) {
        return {
            ok: false,
            code: "MISSING_CONFIG",
            message: "Missing provider base URL or API key"
        };
    }
    if (!req.params?.phone || !req.params?.network) {
        return {
            ok: false,
            code: "BAD_INPUT",
            message: "Missing phone or network"
        };
    }
    try {
        const payload = {
            phone: req.params.phone,
            network: req.params.network,
            amount: req.amount,
            subServiceId: req.subServiceId
        };
        const { res, data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$http$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchJsonWithRetry"])(url, {
            method: "POST",
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$http$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildAuthHeaders"])(apiKey),
            body: JSON.stringify(payload)
        }, {
            retries: 3,
            baseDelayMs: 400,
            timeoutMs: 10000
        });
        if (!res.ok) {
            const message = data?.message || data?.error || `Provider error (${res.status})`;
            const code = data?.code || "PROVIDER_ERROR";
            return {
                ok: false,
                code,
                message
            };
        }
        const providerReference = data?.reference || data?.providerRef || data?.transactionId;
        if (!providerReference) {
            return {
                ok: false,
                code: "NO_REFERENCE",
                message: "Missing provider reference"
            };
        }
        return {
            ok: true,
            providerReference,
            message: data?.message || "Airtime delivered"
        };
    } catch (err) {
        return {
            ok: false,
            code: "NETWORK_ERROR",
            message: String(err)
        };
    }
}
}),
"[project]/lib/providers/airtime-subandgain.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendAirtimeViaSubAndGain",
    ()=>sendAirtimeViaSubAndGain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$http$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/http-client.ts [app-route] (ecmascript)");
;
// Normalize common Nigerian network names to SubAndGain-expected values
function normalizeNetwork(input) {
    const n = input.trim().toUpperCase();
    if (!n) return n;
    if (n === "ETISALAT") return "9MOBILE";
    if (n === "9 MOBILE" || n === "9-MOBILE") return "9MOBILE";
    if (n === "AIRTEL NG") return "AIRTEL";
    return n;
}
async function sendAirtimeViaSubAndGain(req, provider) {
    const apiBase = provider?.apiBaseUrl || process.env.SUBANDGAIN_BASE_URL || "https://subandgain.com";
    const apiKey = (provider?.apiKeys || []).find((k)=>k.keyName.toLowerCase() === "apikey")?.keyValue || process.env.SUBANDGAIN_API_KEY || "";
    const username = (provider?.apiKeys || []).find((k)=>k.keyName.toLowerCase() === "username")?.keyValue || process.env.SUBANDGAIN_USERNAME || "";
    if (!apiBase || !apiKey || !username) {
        return {
            ok: false,
            code: "MISSING_CONFIG",
            message: "Missing provider base URL, username, or API key"
        };
    }
    const phoneNumber = String(req.params?.phone || req.params?.phoneNumber || "").trim();
    const rawNetwork = String(req.params?.network || "");
    const normalizedNetwork = normalizeNetwork(rawNetwork);
    if (!phoneNumber || !normalizedNetwork || !(req.amount > 0)) {
        return {
            ok: false,
            code: "BAD_INPUT",
            message: "Missing phone, network, or amount"
        };
    }
    const validNetworks = [
        "MTN",
        "GLO",
        "AIRTEL",
        "9MOBILE"
    ];
    if (!validNetworks.includes(normalizedNetwork)) {
        return {
            ok: false,
            code: "INVALID_NETWORK",
            message: `Unsupported network: ${rawNetwork}`
        };
    }
    try {
        const network = normalizedNetwork;
        // Ensure amount is an integer Naira value
        const amount = Math.round(Number(req.amount));
        const airtimePath = "/api/airtime.php";
        const url = `${apiBase}${airtimePath}?username=${encodeURIComponent(username)}&apiKey=${encodeURIComponent(apiKey)}&network=${encodeURIComponent(network)}&amount=${encodeURIComponent(String(amount))}&phoneNumber=${encodeURIComponent(phoneNumber)}`;
        const { res, data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$http$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchJsonWithRetry"])(url, {
            method: "GET"
        }, {
            retries: 3,
            baseDelayMs: 400,
            timeoutMs: 10000
        });
        // Robust provider error detection: treat "0" or 0 as success
        const rawErr = data?.error;
        const errStr = typeof rawErr === "string" ? rawErr.trim().toLowerCase() : rawErr;
        const looksSuccessText = String(data?.api_response || data?.message || "").toLowerCase();
        const isProviderError = !res.ok || rawErr != null && errStr !== 0 && errStr !== "0" && errStr !== "" && errStr !== "ok" && errStr !== "success" && !/success/.test(looksSuccessText);
        if (isProviderError) {
            const errorCode = data?.error || "PROVIDER_ERROR";
            const message = data?.description || data?.message || data?.api_response || `Provider error (${res.status})`;
            switch(errorCode){
                case "ERR200":
                    return {
                        ok: false,
                        code: "INVALID_USERNAME",
                        message: "Username field is empty"
                    };
                case "ERR201":
                    return {
                        ok: false,
                        code: "INVALID_CREDENTIALS",
                        message: "Invalid username or API key"
                    };
                case "ERR202":
                    return {
                        ok: false,
                        code: "INVALID_PHONE",
                        message: "Invalid recipient phone number"
                    };
                case "ERR203":
                    return {
                        ok: false,
                        code: "INSUFFICIENT_BALANCE",
                        message: "Insufficient balance to complete transaction"
                    };
                case "ERR204":
                    return {
                        ok: false,
                        code: "INVALID_NETWORK",
                        message: "Invalid network provider specified"
                    };
                case "ERR206":
                    return {
                        ok: false,
                        code: "TRANSACTION_FAILED",
                        message: "Order could not be processed. Please try again later"
                    };
                default:
                    return {
                        ok: false,
                        code: String(errorCode),
                        message
                    };
            }
        }
        const providerReference = data?.trans_id || data?.reference || data?.transactionId || data?.transaction_id;
        if (!providerReference) {
            return {
                ok: false,
                code: "NO_REFERENCE",
                message: "Missing provider reference"
            };
        }
        return {
            ok: true,
            providerReference,
            message: data?.api_response || data?.message || "Airtime delivered"
        };
    } catch (err) {
        return {
            ok: false,
            code: "NETWORK_ERROR",
            message: String(err)
        };
    }
}
}),
"[project]/lib/providers/data-ported.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendDataBundleViaPorted",
    ()=>sendDataBundleViaPorted
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$http$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/http-client.ts [app-route] (ecmascript)");
;
async function sendDataBundleViaPorted(req, provider) {
    const apiBase = provider?.apiBaseUrl || process.env.PORTEDSIM_BASE_URL || "";
    const apiKey = (provider?.apiKeys || []).find((k)=>k.keyName.toLowerCase() === "apikey")?.keyValue || process.env.PORTEDSIM_API_KEY || "";
    const bundlePath = provider?.configJson?.endpoints?.bundle || "/data/bundle";
    const url = `${apiBase}${bundlePath}`;
    if (!apiBase || !apiKey) {
        return {
            ok: false,
            code: "MISSING_CONFIG",
            message: "Missing provider base URL or API key"
        };
    }
    if (!req.params?.phone || !req.params?.network || !req.params?.planCode) {
        return {
            ok: false,
            code: "BAD_INPUT",
            message: "Missing phone, network, or planCode"
        };
    }
    try {
        const payload = {
            phone: req.params.phone,
            network: req.params.network,
            planCode: req.params.planCode,
            amount: req.amount,
            subServiceId: req.subServiceId
        };
        const { res, data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$http$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchJsonWithRetry"])(url, {
            method: "POST",
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$http$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildAuthHeaders"])(apiKey),
            body: JSON.stringify(payload)
        }, {
            retries: 3,
            baseDelayMs: 400,
            timeoutMs: 10000
        });
        if (!res.ok) {
            const message = data?.message || data?.error || `Provider error (${res.status})`;
            const code = data?.code || "PROVIDER_ERROR";
            return {
                ok: false,
                code,
                message
            };
        }
        const providerReference = data?.reference || data?.providerRef || data?.transactionId;
        if (!providerReference) {
            return {
                ok: false,
                code: "NO_REFERENCE",
                message: "Missing provider reference"
            };
        }
        return {
            ok: true,
            providerReference,
            message: data?.message || "Data bundle activated"
        };
    } catch (err) {
        return {
            ok: false,
            code: "NETWORK_ERROR",
            message: String(err)
        };
    }
}
}),
"[project]/lib/providers/data-subandgain.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendDataBundleViaSubAndGain",
    ()=>sendDataBundleViaSubAndGain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$http$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/http-client.ts [app-route] (ecmascript)");
;
// Normalize common Nigerian network names to SubAndGain-expected values
function normalizeNetwork(input) {
    const n = input.trim().toUpperCase();
    if (!n) return n;
    if (n === "ETISALAT") return "9MOBILE";
    if (n === "9 MOBILE" || n === "9-MOBILE") return "9MOBILE";
    if (n === "AIRTEL NG") return "AIRTEL";
    return n;
}
async function sendDataBundleViaSubAndGain(req, provider) {
    const apiBase = provider?.apiBaseUrl || process.env.SUBANDGAIN_BASE_URL || "https://subandgain.com";
    const apiKey = (provider?.apiKeys || []).find((k)=>k.keyName.toLowerCase() === "apikey")?.keyValue || process.env.SUBANDGAIN_API_KEY || "";
    const username = (provider?.apiKeys || []).find((k)=>k.keyName.toLowerCase() === "username")?.keyValue || process.env.SUBANDGAIN_USERNAME || "";
    if (!apiBase || !apiKey || !username) {
        return {
            ok: false,
            code: "MISSING_CONFIG",
            message: "Missing provider base URL, username, or API key"
        };
    }
    const phoneNumber = String(req.params?.phone || req.params?.phoneNumber || "").trim();
    const rawNetwork = String(req.params?.network || "");
    const normalizedNetwork = normalizeNetwork(rawNetwork);
    const planCode = String(req.params?.planCode || req.params?.plan || req.params?.dataPlan || "").trim();
    if (!phoneNumber || !normalizedNetwork || !planCode) {
        return {
            ok: false,
            code: "BAD_INPUT",
            message: "Missing phone, network, or planCode"
        };
    }
    const validNetworks = [
        "MTN",
        "GLO",
        "AIRTEL",
        "9MOBILE"
    ];
    if (!validNetworks.includes(normalizedNetwork)) {
        return {
            ok: false,
            code: "INVALID_NETWORK",
            message: `Unsupported network: ${rawNetwork}`
        };
    }
    try {
        const network = normalizedNetwork;
        const dataPlan = planCode;
        const dataPath = "/api/data.php";
        const url = `${apiBase}${dataPath}?username=${encodeURIComponent(username)}&apiKey=${encodeURIComponent(apiKey)}&network=${encodeURIComponent(network)}&dataPlan=${encodeURIComponent(dataPlan)}&phoneNumber=${encodeURIComponent(phoneNumber)}`;
        const { res, data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$http$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchJsonWithRetry"])(url, {
            method: "GET"
        }, {
            retries: 3,
            baseDelayMs: 400,
            timeoutMs: 10000
        });
        if (!res.ok || data?.error) {
            const errorCode = data?.error || "PROVIDER_ERROR";
            let message = data?.description || data?.message || data?.error || `Provider error (${res.status})`;
            // Map SubAndGain specific error codes to user-friendly messages
            switch(errorCode){
                case "ERR200":
                    return {
                        ok: false,
                        code: "INVALID_USERNAME",
                        message: "Username field is empty"
                    };
                case "ERR201":
                    return {
                        ok: false,
                        code: "INVALID_CREDENTIALS",
                        message: "Invalid username or API key"
                    };
                case "ERR202":
                    return {
                        ok: false,
                        code: "INVALID_PHONE",
                        message: "Invalid recipient phone number"
                    };
                case "ERR203":
                    return {
                        ok: false,
                        code: "INSUFFICIENT_BALANCE",
                        message: "Insufficient balance to complete transaction"
                    };
                case "ERR204":
                    return {
                        ok: false,
                        code: "INVALID_NETWORK",
                        message: "Invalid network provider specified"
                    };
                case "ERR206":
                    return {
                        ok: false,
                        code: "TRANSACTION_FAILED",
                        message: "Order could not be processed. Please try again later"
                    };
                case "ERR207":
                    return {
                        ok: false,
                        code: "INVALID_PLAN",
                        message: "Invalid data plan selected"
                    };
                default:
                    return {
                        ok: false,
                        code: errorCode,
                        message
                    };
            }
        }
        const providerReference = data?.trans_id || data?.reference || data?.transactionId;
        if (!providerReference) {
            return {
                ok: false,
                code: "NO_REFERENCE",
                message: "Missing provider reference"
            };
        }
        return {
            ok: true,
            providerReference,
            message: data?.api_response || data?.message || "Data bundle activated"
        };
    } catch (err) {
        return {
            ok: false,
            code: "NETWORK_ERROR",
            message: String(err)
        };
    }
}
}),
"[project]/lib/providers/bills-subandgain.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "payBillViaSubAndGain",
    ()=>payBillViaSubAndGain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$http$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/http-client.ts [app-route] (ecmascript)");
;
async function payBillViaSubAndGain(req, provider) {
    const apiBase = provider?.apiBaseUrl || process.env.SUBANDGAIN_BASE_URL || "https://subandgain.com";
    const apiKey = (provider?.apiKeys || []).find((k)=>k.keyName.toLowerCase() === "apikey")?.keyValue || process.env.SUBANDGAIN_API_KEY || "";
    const purchasePath = provider?.configJson?.endpoints?.purchase || "/electricity/purchase";
    const url = `${apiBase}${purchasePath}`;
    if (!apiBase || !apiKey) {
        return {
            ok: false,
            code: "MISSING_CONFIG",
            message: "Missing provider base URL or API key"
        };
    }
    // Basic validation mirroring the mock adapter
    if (!req.params?.meterNumber || !req.params?.serviceProvider) {
        return {
            ok: false,
            code: "BAD_INPUT",
            message: "Missing meter number or service provider"
        };
    }
    try {
        const payload = {
            meterNumber: req.params.meterNumber,
            disco: req.params.serviceProvider,
            amount: req.amount,
            // Additional optional fields
            customerName: req.params.customerName,
            customerAddress: req.params.customerAddress,
            // Pass through subServiceId if upstream supports variants
            subServiceId: req.subServiceId
        };
        const { res, data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$http$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchJsonWithRetry"])(url, {
            method: "POST",
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$http$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildAuthHeaders"])(apiKey),
            body: JSON.stringify(payload)
        }, {
            retries: 3,
            baseDelayMs: 400,
            timeoutMs: 10000
        });
        if (!res.ok) {
            const errorCode = data?.error || "PROVIDER_ERROR";
            let message = data?.message || data?.error || `Provider error (${res.status})`;
            // Map SubAndGain specific error codes to user-friendly messages
            switch(errorCode){
                case "ERR200":
                    return {
                        ok: false,
                        code: "INVALID_USERNAME",
                        message: "Username field is empty"
                    };
                case "ERR201":
                    return {
                        ok: false,
                        code: "INVALID_CREDENTIALS",
                        message: "Invalid username or API key"
                    };
                case "ERR203":
                    return {
                        ok: false,
                        code: "INSUFFICIENT_BALANCE",
                        message: "Insufficient balance to complete transaction"
                    };
                case "ERR206":
                    return {
                        ok: false,
                        code: "TRANSACTION_FAILED",
                        message: "Order could not be processed. Please try again later"
                    };
                case "ERR208":
                    return {
                        ok: false,
                        code: "INVALID_METER",
                        message: "Invalid meter number provided"
                    };
                case "ERR209":
                    return {
                        ok: false,
                        code: "INVALID_DISCO",
                        message: "Invalid electricity provider specified"
                    };
                case "ERR210":
                    return {
                        ok: false,
                        code: "INVALID_AMOUNT",
                        message: "Invalid amount specified"
                    };
                default:
                    return {
                        ok: false,
                        code: errorCode || data?.code || "PROVIDER_ERROR",
                        message
                    };
            }
        }
        // Map common fields from provider response
        const providerReference = data?.reference || data?.providerRef || data?.transactionId;
        const token = data?.token || data?.tokenUnits || data?.unitsToken;
        const units = data?.units || (data?.energyUnits ? `${data.energyUnits} kWh` : undefined);
        if (!providerReference) {
            return {
                ok: false,
                code: "NO_REFERENCE",
                message: "Missing provider reference"
            };
        }
        return {
            ok: true,
            providerReference,
            token,
            units,
            message: data?.message || "Electricity purchase successful"
        };
    } catch (err) {
        return {
            ok: false,
            code: "NETWORK_ERROR",
            message: String(err)
        };
    }
}
}),
"[project]/lib/providers/education-subandgain.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "payEducationViaSubAndGain",
    ()=>payEducationViaSubAndGain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$http$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/http-client.ts [app-route] (ecmascript)");
;
async function payEducationViaSubAndGain(req, provider) {
    const apiBase = provider?.apiBaseUrl || process.env.SUBANDGAIN_BASE_URL || "https://subandgain.com";
    const apiKey = (provider?.apiKeys || []).find((k)=>k.keyName.toLowerCase() === "apikey")?.keyValue || process.env.SUBANDGAIN_API_KEY || "";
    const username = (provider?.apiKeys || []).find((k)=>k.keyName.toLowerCase() === "username")?.keyValue || process.env.SUBANDGAIN_USERNAME || "";
    if (!apiBase || !apiKey || !username) {
        return {
            ok: false,
            code: "MISSING_CONFIG",
            message: "Missing provider base URL, username, or API key"
        };
    }
    if (!req.params?.eduType) {
        return {
            ok: false,
            code: "BAD_INPUT",
            message: "Missing eduType"
        };
    }
    try {
        const eduType = String(req.params.eduType).toUpperCase();
        const eduPath = "/api/education.php";
        const url = `${apiBase}${eduPath}?username=${encodeURIComponent(username)}&apiKey=${encodeURIComponent(apiKey)}&eduType=${encodeURIComponent(eduType)}`;
        const { res, data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$http$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchJsonWithRetry"])(url, {
            method: "GET"
        }, {
            retries: 3,
            baseDelayMs: 400,
            timeoutMs: 10000
        });
        if (!res.ok || data?.error) {
            const errorCode = data?.error || "PROVIDER_ERROR";
            let message = data?.description || data?.message || data?.error || `Provider error (${res.status})`;
            // Map SubAndGain specific error codes to user-friendly messages
            switch(errorCode){
                case "ERR200":
                    return {
                        ok: false,
                        code: "INVALID_USERNAME",
                        message: "Username field is empty"
                    };
                case "ERR201":
                    return {
                        ok: false,
                        code: "INVALID_CREDENTIALS",
                        message: "Invalid username or API key"
                    };
                case "ERR203":
                    return {
                        ok: false,
                        code: "INSUFFICIENT_BALANCE",
                        message: "Insufficient balance to complete transaction"
                    };
                case "ERR206":
                    return {
                        ok: false,
                        code: "TRANSACTION_FAILED",
                        message: "Order could not be processed. Please try again later"
                    };
                case "ERR207":
                    return {
                        ok: false,
                        code: "INVALID_EDU_TYPE",
                        message: "Invalid education type specified"
                    };
                default:
                    return {
                        ok: false,
                        code: errorCode,
                        message
                    };
            }
        }
        const providerReference = data?.trans_id || data?.reference || data?.transactionId;
        const token = data?.token;
        if (!providerReference) {
            return {
                ok: false,
                code: "NO_REFERENCE",
                message: "Missing provider reference"
            };
        }
        return {
            ok: true,
            providerReference,
            token,
            message: data?.message || "Education token purchase successful"
        };
    } catch (err) {
        return {
            ok: false,
            code: "NETWORK_ERROR",
            message: String(err)
        };
    }
}
}),
"[project]/lib/providers/cable-subandgain.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "payCableViaSubAndGain",
    ()=>payCableViaSubAndGain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$http$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/http-client.ts [app-route] (ecmascript)");
;
async function payCableViaSubAndGain(req, provider) {
    const apiBase = provider?.apiBaseUrl || process.env.SUBANDGAIN_BASE_URL || "https://subandgain.com";
    const apiKey = (provider?.apiKeys || []).find((k)=>k.keyName.toLowerCase() === "apikey")?.keyValue || process.env.SUBANDGAIN_API_KEY || "";
    const purchasePath = provider?.configJson?.endpoints?.cable || "/cable/purchase";
    const url = `${apiBase}${purchasePath}`;
    if (!apiBase || !apiKey) {
        return {
            ok: false,
            code: "MISSING_CONFIG",
            message: "Missing provider base URL or API key"
        };
    }
    if (!req.params?.smartcardNumber || !req.params?.provider || !req.params?.planId) {
        return {
            ok: false,
            code: "BAD_INPUT",
            message: "Missing smartcard number, provider, or plan ID"
        };
    }
    try {
        const payload = {
            smartcardNumber: req.params.smartcardNumber,
            provider: req.params.provider,
            plan: req.params.planId,
            amount: req.amount,
            customerName: req.params.customerName
        };
        const { res, data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$http$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchJsonWithRetry"])(url, {
            method: "POST",
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$http$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildAuthHeaders"])(apiKey),
            body: JSON.stringify(payload)
        }, {
            retries: 3,
            baseDelayMs: 400,
            timeoutMs: 10000
        });
        if (!res.ok) {
            const errorCode = data?.error || "PROVIDER_ERROR";
            const message = data?.message || data?.error || `Provider error (${res.status})`;
            return {
                ok: false,
                code: errorCode || data?.code || "PROVIDER_ERROR",
                message
            };
        }
        const providerReference = data?.reference || data?.providerRef || data?.transactionId;
        if (!providerReference) {
            return {
                ok: false,
                code: "NO_REFERENCE",
                message: "Missing provider reference"
            };
        }
        return {
            ok: true,
            providerReference,
            message: data?.message || "Cable subscription successful"
        };
    } catch (err) {
        return {
            ok: false,
            code: "NETWORK_ERROR",
            message: String(err)
        };
    }
}
}),
"[project]/lib/providers/verification-prembly.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "verifyNINViaPrembly",
    ()=>verifyNINViaPrembly
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$http$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/http-client.ts [app-route] (ecmascript)");
;
async function verifyNINViaPrembly(req, provider) {
    const apiBase = provider?.apiBaseUrl || process.env.PREMBLY_BASE_URL || "https://api.prembly.com";
    const apiKey = (provider?.apiKeys || []).find((k)=>k.keyName.toLowerCase() === "api_key")?.keyValue || process.env.PREMBLY_API_KEY || "";
    const appId = (provider?.apiKeys || []).find((k)=>k.keyName.toLowerCase() === "app_id")?.keyValue || process.env.PREMBLY_APP_ID || "";
    // Primary endpoint from provider config or default (use advanced by default)
    const configuredPath = provider?.configJson?.endpoints?.nin || "/verification/nin/advanced";
    // Known fallbacks for Prembly API variations. We try these if we get a 404 from the primary.
    const candidatePaths = [
        configuredPath,
        "/verification/nin/advanced",
        "/verification/nin/printout",
        "/verification/nin",
        "/v1/verifications/identity/nin/advanced",
        "/v1/verifications/identity/nin/printout",
        "/v1/verifications/identity/nin",
        "/v1/verifications/identities/nin/printout"
    ];
    if (!apiBase || !apiKey || !appId) {
        return {
            ok: false,
            code: "MISSING_CONFIG",
            message: "Missing provider base URL, API key, or app id"
        };
    }
    if (!req.nin || req.nin.length !== 11) {
        return {
            ok: false,
            code: "BAD_INPUT",
            message: "Invalid NIN format. NIN must be 11 digits"
        };
    }
    const payload = {
        nin: req.nin,
        phone: req.phone,
        firstName: req.firstName,
        lastName: req.lastName,
        dateOfBirth: req.dateOfBirth,
        gender: req.gender
    };
    let lastError = null;
    for (const path of candidatePaths){
        const url = `${apiBase}${path}`;
        try {
            const { res, data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$http$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchJsonWithRetry"])(url, {
                method: "POST",
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$http$2d$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildAuthHeaders"])(apiKey, {
                    Accept: "application/json",
                    "app-id": appId
                }),
                body: JSON.stringify(payload)
            }, {
                retries: 2,
                baseDelayMs: 400,
                timeoutMs: 12000
            });
            if (!res.ok) {
                const message = data?.message || data?.error || res.statusText || "Unknown error";
                const errResp = {
                    ok: false,
                    code: `HTTP_${res.status}`,
                    message: `Prembly API error: ${res.status} ${message} (endpoint: ${path})`
                };
                // For 404, try next candidate endpoint
                if (res.status === 404) {
                    lastError = errResp;
                    continue;
                }
                // For auth errors or other non-retryable statuses, return immediately
                return errResp;
            }
            // Handle Prembly response format
            if (data?.status === "success" || data?.success === true || data?.status === true) {
                return {
                    ok: true,
                    data: {
                        nin: data.data?.nin || req.nin,
                        firstName: data.data?.firstName || data.data?.first_name || "",
                        lastName: data.data?.lastName || data.data?.last_name || "",
                        middleName: data.data?.middleName || data.data?.middle_name || "",
                        dateOfBirth: data.data?.dateOfBirth || data.data?.date_of_birth || "",
                        gender: data.data?.gender || "",
                        phone: data.data?.phone || data.data?.phoneNumber || "",
                        address: data.data?.address || "",
                        photo: data.data?.photo || data.data?.image || "",
                        trackingId: data.data?.trackingId || data.data?.tracking_id || "",
                        issueDate: data.data?.issueDate || data.data?.issue_date || "",
                        signature: data.data?.signature || "",
                        stateOfOrigin: data.data?.stateOfOrigin || data.data?.state_of_origin || "",
                        lga: data.data?.lga || "",
                        maritalStatus: data.data?.maritalStatus || data.data?.marital_status || "",
                        profession: data.data?.profession || "",
                        religion: data.data?.religion || "",
                        bloodGroup: data.data?.bloodGroup || data.data?.blood_group || "",
                        height: data.data?.height || "",
                        nextOfKin: data.data?.nextOfKin || data.data?.next_of_kin || "",
                        nextOfKinPhone: data.data?.nextOfKinPhone || data.data?.next_of_kin_phone || "",
                        nextOfKinAddress: data.data?.nextOfKinAddress || data.data?.next_of_kin_address || ""
                    },
                    reference: data.reference || data.transactionId,
                    transactionId: data.transactionId || data.reference
                };
            }
            // Non-successful payload
            return {
                ok: false,
                code: data?.code || "VERIFICATION_FAILED",
                message: data?.message || data?.error || "NIN verification failed"
            };
        } catch (error) {
            // Network error; move to next path if any
            lastError = {
                ok: false,
                code: "NETWORK_ERROR",
                message: `Network error on ${path}: ${String(error)}`
            };
            continue;
        }
    }
    // If we exhausted all candidates, return the last error captured
    return lastError || {
        ok: false,
        code: "UNKNOWN_ERROR",
        message: "NIN verification failed for unknown reasons"
    };
} /**
 * Mock NIN verification for local testing
 */  // Mock NIN verification removed; platform now enforces real provider integration
}),
"[project]/lib/prembly.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Prembly API Client
 * Documentation: https://docs.prembly.com/docs/welcome-to-prembly-documentation
 */ __turbopack_context__.s([
    "PremblyClient",
    ()=>PremblyClient,
    "default",
    ()=>__TURBOPACK__default__export__,
    "premblyClient",
    ()=>premblyClient
]);
const PREMBLY_BASE_URL = process.env.PREMBLY_BASE_URL || 'https://api.prembly.com';
class PremblyClient {
    apiKey;
    appId;
    constructor(config){
        this.apiKey = config.apiKey;
        this.appId = config.appId;
    }
    async makeRequest(endpoint, method, data) {
        try {
            if ("TURBOPACK compile-time truthy", 1) {
                console.log('[Prembly] env check', {
                    baseUrl: PREMBLY_BASE_URL,
                    endpoint,
                    hasApiKey: !!this.apiKey,
                    hasAppId: !!this.appId
                });
            }
            const response = await fetch(`${PREMBLY_BASE_URL}${endpoint}`, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'x-api-key': this.apiKey,
                    'app-id': this.appId
                },
                body: data ? JSON.stringify(data) : undefined
            });
            const contentType = response.headers.get('content-type') || '';
            let result;
            if (contentType.includes('application/json')) {
                result = await response.json();
            } else {
                const text = await response.text();
                throw new Error(`Unexpected response from Prembly (${response.status}): ${text.slice(0, 200)}...`);
            }
            if (!response.ok) {
                const msg = typeof result?.error === 'string' ? result.error : typeof result?.detail === 'string' ? result.detail : typeof result?.message === 'string' ? result.message : 'Failed to process request';
                throw new Error(msg);
            }
            return result;
        } catch (error) {
            console.error('Prembly API Error:', error);
            return {
                status: false,
                detail: error.message || 'An error occurred while processing your request',
                error: error.message
            };
        }
    }
    // NIN Services
    async getNINPrintout(params) {
        const payload = {
            number_nin: params.nin
        };
        return this.makeRequest('/verification/vnin', 'POST', payload);
    }
    async getNINSlip(params) {
        const payload = {
            number_nin: params.nin
        };
        return this.makeRequest('/verification/vnin', 'POST', payload);
    }
    async getNINAdvanced(params) {
        const payload = {
            number_nin: params.nin
        };
        if (params.phoneNumber) payload.phone_number = params.phoneNumber;
        if (params.firstName) payload.first_name = params.firstName;
        if (params.lastName) payload.last_name = params.lastName;
        if (params.dateOfBirth) payload.date_of_birth = params.dateOfBirth;
        if (params.gender) payload.gender = params.gender;
        return this.makeRequest('/verification/vnin', 'POST', payload);
    }
    // BVN Services (use documented endpoints)
    async getBVNPrintout(params) {
        const payload = {
            number: params.bvn
        };
        return this.makeRequest('/verification/bvn', 'POST', payload);
    }
    async getBVNByPhone(params) {
        // Per docs: POST /verification/bvn_with_phone_advance with payload { phone_number }
        const payload = {
            phone_number: params.phoneNumber
        };
        return this.makeRequest('/verification/bvn_with_phone_advance', 'POST', payload);
    }
    async getBVNAdvanced(params) {
        return this.makeRequest('/verification/bvn/advance', 'POST', params);
    }
    // Phone Number (Advanced)
    async verifyPhoneAdvanced(params) {
        const payload = {
            phone_number: params.phoneNumber
        };
        return this.makeRequest('/verification/phone_number/advance', 'POST', payload);
    }
    // TIN
    async verifyTIN(params) {
        return this.makeRequest('/verification/global/tin-check', 'POST', params);
    }
    // Driver's License (Advanced)
    async verifyDriversLicenseAdvanced(params) {
        const payload = {};
        if (params.licenseNumber) payload.license_number = params.licenseNumber;
        if (params.expiryDate) payload.expiry_date = params.expiryDate;
        if (params.firstName) payload.first_name = params.firstName;
        if (params.lastName) payload.last_name = params.lastName;
        if (params.dob) payload.dob = params.dob;
        return this.makeRequest('/verification/drivers_license/advance/v2', 'POST', payload);
    }
    // Voters Card
    async verifyVotersCard(params) {
        const payload = {
            number: params.number
        };
        if (params.lastName) payload.last_name = params.lastName;
        if (params.firstName) payload.first_name = params.firstName;
        if (params.dob) payload.dob = params.dob;
        if (params.lga) payload.lga = params.lga;
        if (params.state) payload.state = params.state;
        return this.makeRequest('/verification/voters_card', 'POST', payload);
    }
    // CAC Services (Advance)
    async getCACInfo(params) {
        // Docs: POST /verification/cac/advance with rc_number, company_type, company_name
        const payload = {};
        if (params.number) payload.rc_number = String(params.number);
        if (params.companyType) payload.company_type = String(params.companyType);
        if (params.companyName) payload.company_name = String(params.companyName);
        return this.makeRequest('/verification/cac/advance', 'POST', payload);
    }
    async getCACAdvanced(params) {
        const payload = {};
        if (params.number) payload.rc_number = String(params.number);
        if (params.companyType) payload.company_type = String(params.companyType);
        if (params.companyName) payload.company_name = String(params.companyName);
        return this.makeRequest('/verification/cac/advance', 'POST', payload);
    }
    async getCACStatusReport(params) {
        const payload = {};
        if (params.number) payload.rc_number = String(params.number);
        if (params.companyType) payload.company_type = String(params.companyType);
        if (params.companyName) payload.company_name = String(params.companyName);
        return this.makeRequest('/verification/cac/advance', 'POST', payload);
    }
    // International Passport v2
    async verifyInternationalPassportV2(params) {
        const payload = {
            passport_number: params.passportNumber
        };
        if (params.lastName) payload.last_name = params.lastName;
        return this.makeRequest('/verification/national_passport_v2', 'POST', payload);
    }
    // Plate Number
    async verifyPlateNumber(params) {
        const payload = {
            plate_number: params.plateNumber
        };
        return this.makeRequest('/verification/vehicle', 'POST', payload);
    }
}
const premblyClient = new PremblyClient({
    apiKey: process.env.PREMBLY_API_KEY || '',
    appId: process.env.PREMBLY_APP_ID || ''
});
const __TURBOPACK__default__export__ = premblyClient;
}),
"[project]/lib/prembly-sdk-adapter.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getPrembly",
    ()=>getPrembly
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prembly$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prembly.ts [app-route] (ecmascript)");
// Optional SDK imports. We keep usage minimal and fallback to HTTP client when unsupported.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prembly$2d$pass$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/prembly-pass/dist/index.js [app-route] (ecmascript)");
;
;
// Shape normalization helper to keep the same response contract our routes expect
function ok(data, detail = "OK") {
    return {
        status: true,
        detail,
        data
    };
}
function fail(message) {
    return {
        status: false,
        detail: message,
        error: message
    };
}
// Singleton SDK instances (created lazily)
let dataVerification = null;
let generalVerification = null;
let documentVerification = null;
let globalBusinessVerification = null;
function ensureSdkInstances() {
    const apiKey = process.env.PREMBLY_API_KEY || "";
    const appId = process.env.PREMBLY_APP_ID || "";
    if (!apiKey || !appId) return false;
    try {
        if (!dataVerification) dataVerification = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prembly$2d$pass$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PremblyDataVerification"](apiKey, appId);
        if (!generalVerification) generalVerification = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prembly$2d$pass$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PremblyGeneralVerification"](apiKey, appId);
        if (!documentVerification) documentVerification = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prembly$2d$pass$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PremblyDocumentVerification"](apiKey, appId);
        if (!globalBusinessVerification) globalBusinessVerification = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prembly$2d$pass$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PremblyGlobalBusinessVerification"](apiKey, appId);
        return true;
    } catch (e) {
        return false;
    }
}
// Adapter exposing the same methods as our HTTP client. Unknowns fall back to HTTP client.
const sdkBackedClient = {
    // Delegate to original HTTP client's private fields through the instance we import
    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prembly$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    // Plate Number via SDK (Data Verification)
    async verifyPlateNumber (params) {
        try {
            if (ensureSdkInstances()) {
                const res = await dataVerification.verifyPlateNumber(params.plateNumber);
                // Normalize into our standard response
                return ok(res);
            }
        } catch (e) {
            return fail(e?.message || String(e));
        }
        // Fallback to HTTP client
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prembly$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verifyPlateNumber(params);
    },
    // Everything else falls back to the HTTP client for now
    async getBVNPrintout (params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prembly$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].getBVNPrintout(params);
    },
    async getBVNByPhone (params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prembly$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].getBVNByPhone(params);
    },
    async getBVNAdvanced (params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prembly$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].getBVNAdvanced(params);
    },
    async getNINPrintout (params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prembly$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].getNINPrintout(params);
    },
    async getNINSlip (params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prembly$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].getNINSlip(params);
    },
    async getNINAdvanced (params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prembly$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].getNINAdvanced(params);
    },
    async getCACInfo (params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prembly$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].getCACInfo(params);
    },
    async getCACAdvanced (params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prembly$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].getCACAdvanced(params);
    },
    async getCACStatusReport (params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prembly$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].getCACStatusReport(params);
    },
    async verifyInternationalPassportV2 (params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prembly$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verifyInternationalPassportV2(params);
    },
    async verifyTIN (params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prembly$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verifyTIN(params);
    },
    async verifyVotersCard (params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prembly$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verifyVotersCard(params);
    },
    async verifyPhoneAdvanced (params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prembly$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verifyPhoneAdvanced(params);
    }
};
function getPrembly() {
    const useSdk = String(process.env.USE_PREMBLY_SDK || "").toLowerCase() === "true";
    return useSdk ? sdkBackedClient : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prembly$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
}
const __TURBOPACK__default__export__ = getPrembly;
}),
"[project]/lib/service-utils.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleServiceError",
    ()=>handleServiceError,
    "isManualService",
    ()=>isManualService
]);
function isManualService(serviceId, subServiceId) {
    const sId = serviceId.toLowerCase();
    const subId = subServiceId?.toLowerCase();
    // BVN: printout, advanced, retrieval_phone are automated
    if (sId === "bvn") {
        const auto = [
            "printout",
            "retrieval"
        ];
        return !subId || !auto.includes(subId);
    }
    // NIN: slip, printout, advanced are automated
    if (sId === "nin") {
        const auto = [
            "slip",
            "printout",
            "advanced"
        ];
        return !subId || !auto.includes(subId);
    }
    // CAC: status-report, certification, info, status are automated
    if (sId === "cac") {
        const auto = [
            "status-report",
            "certification",
            "status",
            "info"
        ];
        return !subId || !auto.includes(subId);
    }
    // POS and Software: Always manual
    if (sId === "pos-requests" || sId === "software-development") return true;
    return false;
}
function handleServiceError(resp, toast, title = "Error") {
    const message = resp.error || resp.message || "An unexpected error occurred";
    toast({
        title,
        description: message,
        variant: "destructive"
    });
}
}),
"[project]/app/api/service/[category]/[action]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$require$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/require-auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/security.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$provider$2d$manager$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/provider-manager.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$providers$2f$airtime$2d$ported$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/providers/airtime-ported.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$providers$2f$airtime$2d$subandgain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/providers/airtime-subandgain.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$providers$2f$data$2d$ported$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/providers/data-ported.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$providers$2f$data$2d$subandgain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/providers/data-subandgain.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$providers$2f$bills$2d$subandgain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/providers/bills-subandgain.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$providers$2f$education$2d$subandgain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/providers/education-subandgain.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$providers$2f$cable$2d$subandgain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/providers/cable-subandgain.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$providers$2f$verification$2d$prembly$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/providers/verification-prembly.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prembly$2d$sdk$2d$adapter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prembly-sdk-adapter.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$service$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/service-utils.ts [app-route] (ecmascript)");
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
;
;
;
;
;
async function POST(req, ctx) {
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
        const { category, action } = await ctx.params;
        const serviceId = decodeURIComponent(category);
        const actionId = decodeURIComponent(action);
        const body = await req.json();
        const Schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            amount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive(),
            idempotencyKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(8).optional(),
            params: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any()).default({}),
            subServiceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
            pin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().length(4).regex(/^\d+$/)
        });
        const parsed = Schema.safeParse(body);
        if (!parsed.success) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid request",
                detail: parsed.error.flatten()
            }, {
                status: 400
            });
        }
        const { amount, idempotencyKey, params, subServiceId, pin } = parsed.data;
        const reference = idempotencyKey || `SRV-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        // Transaction PIN Verification
        const userWithPin = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
            where: {
                id: auth.user.id
            },
            select: {
                transactionPin: true
            }
        });
        if (!userWithPin?.transactionPin) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Transaction PIN not set"
            }, {
                status: 403
            });
        }
        const { compare } = await __turbopack_context__.A("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript, async loader)");
        const isPinValid = await compare(pin || "", userWithPin.transactionPin);
        if (!isPinValid) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid transaction PIN"
            }, {
                status: 401
            });
        }
        // KYC Check: Exempt airtime, data, bills, education. Enforce for others (NIN, BVN, CAC, verification, etc.)
        const exemptCategories = [
            "airtime",
            "data",
            "bills",
            "education"
        ];
        if (!exemptCategories.includes(serviceId.toLowerCase())) {
            const { ensureKyc } = await __turbopack_context__.A("[project]/lib/kyc-check.ts [app-route] (ecmascript, async loader)");
            const kycError = await ensureKyc(auth.user.id);
            if (kycError) return kycError;
        }
        // Manual Service Check
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$service$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isManualService"])(serviceId, actionId)) {
            const wallet = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].wallet.findUnique({
                where: {
                    userId: auth.user.id
                }
            });
            if (!wallet || Number(wallet.balance) < amount) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Insufficient wallet balance"
                }, {
                    status: 402
                });
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].transaction.create({
                    data: {
                        userId: auth.user.id,
                        type: "SERVICE_REQUEST",
                        amount,
                        status: "SUBMITTED",
                        reference,
                        category: serviceId,
                        subservice: actionId,
                        meta: {
                            serviceId,
                            action: actionId,
                            subServiceId,
                            params,
                            manual: true
                        }
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].wallet.update({
                    where: {
                        userId: auth.user.id
                    },
                    data: {
                        balance: {
                            decrement: amount
                        }
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                    data: {
                        actorId: auth.user.id,
                        action: "MANUAL_SERVICE_REQUEST",
                        resourceType: "Transaction",
                        resourceId: reference,
                        diffJson: {
                            amount,
                            serviceId,
                            action: actionId,
                            subServiceId,
                            params,
                            status: "SUBMITTED"
                        }
                    }
                })
            ]);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                reference,
                status: "SUBMITTED",
                message: "Service request submitted. Admin will review shortly."
            });
        }
        // Idempotency: short-circuit on existing transaction
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].transaction.findUnique({
            where: {
                reference
            }
        }).catch(()=>null);
        if (existing) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                idempotent: true,
                reference,
                transaction: existing
            });
        }
        // Lightweight service: NIN flows (no external provider required) - slip/printout/advanced
        if (serviceId.toLowerCase() === "nin" && [
            "slip",
            "printout",
            "advanced"
        ].includes(actionId.toLowerCase())) {
            const wallet = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].wallet.findUnique({
                where: {
                    userId: auth.user.id
                }
            });
            if (!wallet || Number(wallet.balance) < amount) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Insufficient wallet balance"
                }, {
                    status: 402
                });
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].transaction.create({
                    data: {
                        userId: auth.user.id,
                        type: "SERVICE_PURCHASE",
                        amount,
                        status: "PENDING",
                        reference,
                        category: serviceId,
                        subservice: actionId,
                        meta: {
                            serviceId,
                            subServiceId,
                            action: actionId,
                            params
                        }
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                    data: {
                        actorId: auth.user.id,
                        action: "SERVICE_REQUEST_INIT",
                        resourceType: "Transaction",
                        resourceId: reference,
                        diffJson: {
                            amount,
                            serviceId,
                            action: actionId,
                            subServiceId,
                            params
                        }
                    }
                })
            ]);
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].transaction.update({
                    where: {
                        reference
                    },
                    data: {
                        status: "SUCCESS",
                        meta: {
                            slip: "nin",
                            variant: subServiceId
                        }
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].wallet.update({
                    where: {
                        userId: auth.user.id
                    },
                    data: {
                        balance: {
                            decrement: amount
                        }
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                    data: {
                        actorId: auth.user.id,
                        action: "SERVICE_REQUEST_SUCCESS",
                        resourceType: "Transaction",
                        resourceId: reference,
                        diffJson: {
                            amount,
                            serviceId,
                            action: actionId,
                            subServiceId,
                            params
                        }
                    }
                })
            ]);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                reference
            });
        }
        // BVN services (printout, advanced, retrieval_phone) via Prembly; debit wallet on success
        if (serviceId.toLowerCase() === "bvn") {
            const wallet = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].wallet.findUnique({
                where: {
                    userId: auth.user.id
                }
            });
            if (!wallet || Number(wallet.balance) < amount) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Insufficient wallet balance"
                }, {
                    status: 402
                });
            }
            const premblyClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prembly$2d$sdk$2d$adapter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
            let res = null;
            try {
                if (actionId.toLowerCase() === "printout") {
                    res = await premblyClient.getBVNPrintout({
                        bvn: String(params?.bvn || "")
                    });
                } else if (actionId.toLowerCase() === "advanced") {
                    res = await premblyClient.getBVNAdvanced({
                        bvn: String(params?.bvn || "")
                    });
                } else if (actionId.toLowerCase() === "retrieval_phone") {
                    res = await premblyClient.getBVNByPhone({
                        phoneNumber: String(params?.phoneNumber || "")
                    });
                } else {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: `Unsupported BVN action: ${actionId}`
                    }, {
                        status: 400
                    });
                }
            } catch (e) {
                res = {
                    status: false,
                    error: e?.message || String(e),
                    detail: e?.message || String(e)
                };
            }
            if (!res?.status) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction([
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].transaction.create({
                        data: {
                            userId: auth.user.id,
                            type: "SERVICE_PURCHASE",
                            amount,
                            status: "FAILED",
                            reference,
                            category: serviceId,
                            subservice: actionId,
                            meta: {
                                serviceId,
                                action: actionId,
                                params,
                                error: res?.error || res?.detail
                            }
                        }
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                        data: {
                            actorId: auth.user.id,
                            action: "SERVICE_REQUEST_FAILED",
                            resourceType: "Transaction",
                            resourceId: reference,
                            diffJson: {
                                amount,
                                serviceId,
                                action: actionId,
                                reason: res?.error || res?.detail,
                                params
                            }
                        }
                    })
                ]);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    ok: false,
                    reference,
                    error: res?.error || res?.detail || "BVN request failed"
                }, {
                    status: 400
                });
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].transaction.create({
                    data: {
                        userId: auth.user.id,
                        type: "SERVICE_PURCHASE",
                        amount,
                        status: "SUCCESS",
                        reference,
                        category: serviceId,
                        subservice: actionId,
                        meta: {
                            serviceId,
                            action: actionId,
                            params
                        }
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].wallet.update({
                    where: {
                        userId: auth.user.id
                    },
                    data: {
                        balance: {
                            decrement: amount
                        }
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                    data: {
                        actorId: auth.user.id,
                        action: "SERVICE_REQUEST_SUCCESS",
                        resourceType: "Transaction",
                        resourceId: reference,
                        diffJson: {
                            amount,
                            serviceId,
                            action: actionId,
                            params
                        }
                    }
                })
            ]);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                reference,
                data: res?.data
            });
        }
        // Provider selection (for services that require an external provider)
        const providerInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$provider$2d$manager$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getActiveProvider"])(serviceId);
        if (!providerInfo.provider) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No active provider for service",
                serviceId,
                fallbackProviders: providerInfo.fallbackProviders
            }, {
                status: 503
            });
        }
        // Wallet check (outline)
        const wallet = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].wallet.findUnique({
            where: {
                userId: auth.user.id
            }
        });
        if (!wallet || Number(wallet.balance) < amount) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Insufficient wallet balance"
            }, {
                status: 402
            });
        }
        // Create initial transaction and audit
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction([
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].transaction.create({
                data: {
                    userId: auth.user.id,
                    type: "SERVICE_PURCHASE",
                    amount,
                    status: "PENDING",
                    reference,
                    category: serviceId,
                    subservice: subServiceId || actionId,
                    meta: {
                        serviceId,
                        subServiceId,
                        action: actionId,
                        providerId: providerInfo.provider.id,
                        params
                    }
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                data: {
                    actorId: auth.user.id,
                    action: "SERVICE_REQUEST_INIT",
                    resourceType: "Transaction",
                    resourceId: reference,
                    diffJson: {
                        amount,
                        serviceId,
                        action: actionId,
                        subServiceId,
                        providerId: providerInfo.provider.id,
                        params
                    }
                }
            })
        ]);
        // For airtime/vtu, use live adapters (SubAndGain or Ported SIM); add failover to fallback providers
        if (serviceId === "airtime" && actionId === "vtu") {
            const adapterName = String(providerInfo.provider.configJson?.adapter || "").toLowerCase();
            const providerName = providerInfo.provider.name.toLowerCase();
            const isSubAndGain = adapterName.includes("subandgain") || providerName.includes("subandgain");
            const isPorted = adapterName.includes("ported") || providerName.includes("ported");
            const isMock = adapterName.includes("mock") || providerName.includes("mock");
            let res = isSubAndGain ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$providers$2f$airtime$2d$subandgain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendAirtimeViaSubAndGain"])({
                amount,
                params: {
                    phone: String(params?.phone || ""),
                    network: String(params?.network || "")
                },
                providerId: providerInfo.provider.id,
                subServiceId
            }, providerInfo.provider) : isPorted ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$providers$2f$airtime$2d$ported$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendAirtimeViaPorted"])({
                amount,
                params: {
                    phone: String(params?.phone || ""),
                    network: String(params?.network || "")
                },
                providerId: providerInfo.provider.id,
                subServiceId
            }, providerInfo.provider) : isMock ? {
                ok: true,
                providerReference: `mock_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                message: "Mock airtime purchase successful"
            } : {
                ok: false,
                code: "UNSUPPORTED_ADAPTER",
                message: "Unsupported airtime adapter (expected subandgain, ported, or mock)"
            };
            // Failover: if primary fails and we have fallback providers, try them sequentially
            let usedProvider = providerInfo.provider;
            if (!res.ok && providerInfo.fallbackProviders.length > 0) {
                for (const fb of providerInfo.fallbackProviders){
                    const fbAdapter = String(fb.configJson?.adapter || fb.name || "").toLowerCase();
                    const fbIsPorted = fbAdapter.includes("ported") || fbAdapter.includes("portedsim");
                    const fbIsSAG = fbAdapter.includes("subandgain");
                    const supportsAirtime = fb.category === "airtime";
                    if (!supportsAirtime || !fbIsPorted && !fbIsSAG) continue;
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                        data: {
                            actorId: auth.user.id,
                            action: "SERVICE_FAILOVER_ATTEMPT",
                            resourceType: "Transaction",
                            resourceId: reference,
                            diffJson: {
                                fromProviderId: usedProvider?.id,
                                toProviderId: fb.id,
                                category: serviceId
                            }
                        }
                    });
                    const attempt = fbIsPorted ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$providers$2f$airtime$2d$ported$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendAirtimeViaPorted"])({
                        amount,
                        params: {
                            phone: String(params?.phone || ""),
                            network: String(params?.network || "")
                        },
                        providerId: fb.id,
                        subServiceId
                    }, fb) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$providers$2f$airtime$2d$subandgain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendAirtimeViaSubAndGain"])({
                        amount,
                        params: {
                            phone: String(params?.phone || ""),
                            network: String(params?.network || "")
                        },
                        providerId: fb.id,
                        subServiceId
                    }, fb);
                    if (attempt.ok) {
                        res = attempt;
                        usedProvider = fb;
                        break;
                    }
                }
            }
            if (!res.ok) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction([
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].transaction.update({
                        where: {
                            reference
                        },
                        data: {
                            status: "FAILED",
                            meta: {
                                error: res.message,
                                code: res.code
                            }
                        }
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                        data: {
                            actorId: auth.user.id,
                            action: "SERVICE_REQUEST_FAILED",
                            resourceType: "Transaction",
                            resourceId: reference,
                            diffJson: {
                                amount,
                                serviceId,
                                action: actionId,
                                subServiceId,
                                reason: res.message,
                                code: res.code,
                                params
                            }
                        }
                    })
                ]);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    ok: false,
                    reference,
                    error: res.message,
                    code: res.code
                }, {
                    status: 400
                });
            }
            // Success: mark transaction and debit wallet atomically
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].transaction.update({
                    where: {
                        reference
                    },
                    data: {
                        status: "SUCCESS",
                        meta: {
                            providerRef: res.providerReference,
                            providerId: usedProvider?.id
                        }
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].wallet.update({
                    where: {
                        userId: auth.user.id
                    },
                    data: {
                        balance: {
                            decrement: amount
                        }
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                    data: {
                        actorId: auth.user.id,
                        action: "SERVICE_REQUEST_SUCCESS",
                        resourceType: "Transaction",
                        resourceId: reference,
                        diffJson: {
                            amount,
                            serviceId,
                            action: actionId,
                            subServiceId,
                            providerRef: res.providerReference,
                            providerId: usedProvider?.id
                        }
                    }
                })
            ]);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                reference,
                provider: usedProvider,
                providerRef: res.providerReference
            });
        }
        // For data/bundle, use live adapters (SubAndGain or Ported SIM); add failover to fallback providers
        if (serviceId === "data" && actionId === "bundle") {
            const adapterName = String(providerInfo.provider.configJson?.adapter || "").toLowerCase();
            const providerName = providerInfo.provider.name.toLowerCase();
            const isSubAndGain = adapterName.includes("subandgain") || providerName.includes("subandgain");
            const isPorted = adapterName.includes("ported") || providerName.includes("ported");
            let res = isSubAndGain ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$providers$2f$data$2d$subandgain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendDataBundleViaSubAndGain"])({
                amount,
                params: {
                    phone: String(params?.phone || ""),
                    network: String(params?.network || ""),
                    planCode: String(params?.planCode || "")
                },
                providerId: providerInfo.provider.id,
                subServiceId
            }, providerInfo.provider) : isPorted ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$providers$2f$data$2d$ported$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendDataBundleViaPorted"])({
                amount,
                params: {
                    phone: String(params?.phone || ""),
                    network: String(params?.network || ""),
                    planCode: String(params?.planCode || "")
                },
                providerId: providerInfo.provider.id,
                subServiceId
            }, providerInfo.provider) : {
                ok: false,
                code: "UNSUPPORTED_ADAPTER",
                message: "Unsupported data adapter (expected subandgain or ported)"
            };
            // Failover: if primary fails and we have fallback providers, try them sequentially
            let usedProvider = providerInfo.provider;
            if (!res.ok && providerInfo.fallbackProviders.length > 0) {
                for (const fb of providerInfo.fallbackProviders){
                    const fbAdapter = String(fb.configJson?.adapter || fb.name || "").toLowerCase();
                    const fbIsPorted = fbAdapter.includes("ported") || fbAdapter.includes("portedsim");
                    const fbIsSAG = fbAdapter.includes("subandgain");
                    const supportsData = fb.category === "data";
                    if (!supportsData || !fbIsPorted && !fbIsSAG) continue;
                    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                        data: {
                            actorId: auth.user.id,
                            action: "SERVICE_FAILOVER_ATTEMPT",
                            resourceType: "Transaction",
                            resourceId: reference,
                            diffJson: {
                                fromProviderId: usedProvider?.id,
                                toProviderId: fb.id,
                                category: serviceId
                            }
                        }
                    });
                    const attempt = fbIsPorted ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$providers$2f$data$2d$ported$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendDataBundleViaPorted"])({
                        amount,
                        params: {
                            phone: String(params?.phone || ""),
                            network: String(params?.network || ""),
                            planCode: String(params?.planCode || "")
                        },
                        providerId: fb.id,
                        subServiceId
                    }, fb) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$providers$2f$data$2d$subandgain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendDataBundleViaSubAndGain"])({
                        amount,
                        params: {
                            phone: String(params?.phone || ""),
                            network: String(params?.network || ""),
                            planCode: String(params?.planCode || "")
                        },
                        providerId: fb.id,
                        subServiceId
                    }, fb);
                    if (attempt.ok) {
                        res = attempt;
                        usedProvider = fb;
                        break;
                    }
                }
            }
            if (!res.ok) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction([
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].transaction.update({
                        where: {
                            reference
                        },
                        data: {
                            status: "FAILED",
                            meta: {
                                error: res.message,
                                code: res.code
                            }
                        }
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                        data: {
                            actorId: auth.user.id,
                            action: "SERVICE_REQUEST_FAILED",
                            resourceType: "Transaction",
                            resourceId: reference,
                            diffJson: {
                                amount,
                                serviceId,
                                action: actionId,
                                subServiceId,
                                reason: res.message,
                                code: res.code,
                                params
                            }
                        }
                    })
                ]);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    ok: false,
                    reference,
                    error: res.message,
                    code: res.code
                }, {
                    status: 400
                });
            }
            // Success: mark transaction and debit wallet atomically
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].transaction.update({
                    where: {
                        reference
                    },
                    data: {
                        status: "SUCCESS",
                        meta: {
                            providerRef: res.providerReference,
                            providerId: usedProvider?.id
                        }
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].wallet.update({
                    where: {
                        userId: auth.user.id
                    },
                    data: {
                        balance: {
                            decrement: amount
                        }
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                    data: {
                        actorId: auth.user.id,
                        action: "SERVICE_REQUEST_SUCCESS",
                        resourceType: "Transaction",
                        resourceId: reference,
                        diffJson: {
                            amount,
                            serviceId,
                            action: actionId,
                            subServiceId,
                            providerRef: res.providerReference,
                            providerId: usedProvider?.id
                        }
                    }
                })
            ]);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                reference,
                provider: usedProvider,
                providerRef: res.providerReference
            });
        }
        // For bills/electricity, use SubAndGain live adapter only; remove mock
        if (serviceId === "bills" && actionId === "electricity") {
            const adapterName = String(providerInfo.provider.configJson?.adapter || "").toLowerCase();
            const providerName = providerInfo.provider.name.toLowerCase();
            const isSubAndGain = adapterName.includes("subandgain") || providerName.includes("subandgain");
            const res = isSubAndGain ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$providers$2f$bills$2d$subandgain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["payBillViaSubAndGain"])({
                amount,
                params: {
                    meterNumber: String(params?.meterNumber || ""),
                    serviceProvider: String(params?.serviceProvider || ""),
                    customerName: String(params?.customerName || ""),
                    customerAddress: String(params?.customerAddress || "")
                },
                providerId: providerInfo.provider.id,
                subServiceId
            }, providerInfo.provider) : {
                ok: false,
                code: "UNSUPPORTED_ADAPTER",
                message: "Unsupported bills adapter (expected subandgain)"
            };
            if (!res.ok) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction([
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].transaction.update({
                        where: {
                            reference
                        },
                        data: {
                            status: "FAILED",
                            meta: {
                                error: res.message,
                                code: res.code
                            }
                        }
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                        data: {
                            actorId: auth.user.id,
                            action: "SERVICE_REQUEST_FAILED",
                            resourceType: "Transaction",
                            resourceId: reference,
                            diffJson: {
                                amount,
                                serviceId,
                                action: actionId,
                                subServiceId,
                                reason: res.message,
                                code: res.code,
                                params
                            }
                        }
                    })
                ]);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    ok: false,
                    reference,
                    error: res.message,
                    code: res.code
                }, {
                    status: 400
                });
            }
            // Success: mark transaction and debit wallet atomically
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].transaction.update({
                    where: {
                        reference
                    },
                    data: {
                        status: "SUCCESS",
                        meta: {
                            providerRef: res.providerReference,
                            token: res.token,
                            units: res.units
                        }
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].wallet.update({
                    where: {
                        userId: auth.user.id
                    },
                    data: {
                        balance: {
                            decrement: amount
                        }
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                    data: {
                        actorId: auth.user.id,
                        action: "SERVICE_REQUEST_SUCCESS",
                        resourceType: "Transaction",
                        resourceId: reference,
                        diffJson: {
                            amount,
                            serviceId,
                            action: actionId,
                            subServiceId,
                            providerRef: res.providerReference,
                            token: res.token,
                            units: res.units,
                            params
                        }
                    }
                })
            ]);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                reference,
                provider: providerInfo.provider,
                providerRef: res.providerReference,
                token: res.token,
                units: res.units
            });
        }
        // For bills/cable, use SubAndGain live adapter
        if (serviceId === "bills" && actionId === "cable") {
            const adapterName = String(providerInfo.provider.configJson?.adapter || "").toLowerCase();
            const providerName = providerInfo.provider.name.toLowerCase();
            const isSubAndGain = adapterName.includes("subandgain") || providerName.includes("subandgain");
            const res = isSubAndGain ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$providers$2f$cable$2d$subandgain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["payCableViaSubAndGain"])({
                amount,
                params: {
                    smartcardNumber: String(params?.smartcardNumber || ""),
                    provider: String(params?.provider || ""),
                    planId: String(params?.planId || ""),
                    customerName: String(params?.customerName || "")
                },
                providerId: providerInfo.provider.id,
                subServiceId
            }, providerInfo.provider) : {
                ok: false,
                code: "UNSUPPORTED_ADAPTER",
                message: "Unsupported cable adapter (expected subandgain)"
            };
            if (!res.ok) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction([
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].transaction.update({
                        where: {
                            reference
                        },
                        data: {
                            status: "FAILED",
                            meta: {
                                error: res.message,
                                code: res.code
                            }
                        }
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                        data: {
                            actorId: auth.user.id,
                            action: "SERVICE_REQUEST_FAILED",
                            resourceType: "Transaction",
                            resourceId: reference,
                            diffJson: {
                                amount,
                                serviceId,
                                action: actionId,
                                subServiceId,
                                reason: res.message,
                                code: res.code,
                                params
                            }
                        }
                    })
                ]);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    ok: false,
                    reference,
                    error: res.message,
                    code: res.code
                }, {
                    status: 400
                });
            }
            // Success: mark transaction and debit wallet atomically
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].transaction.update({
                    where: {
                        reference
                    },
                    data: {
                        status: "SUCCESS",
                        meta: {
                            providerRef: res.providerReference
                        }
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].wallet.update({
                    where: {
                        userId: auth.user.id
                    },
                    data: {
                        balance: {
                            decrement: amount
                        }
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                    data: {
                        actorId: auth.user.id,
                        action: "SERVICE_REQUEST_SUCCESS",
                        resourceType: "Transaction",
                        resourceId: reference,
                        diffJson: {
                            amount,
                            serviceId,
                            action: actionId,
                            subServiceId,
                            providerRef: res.providerReference,
                            params
                        }
                    }
                })
            ]);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                reference,
                provider: providerInfo.provider,
                providerRef: res.providerReference
            });
        }
        // For education tokens/pins, use SubAndGain live adapter. Support sub-endpoints for exams
        if (serviceId === "education") {
            const adapterName = String(providerInfo.provider.configJson?.adapter || "").toLowerCase();
            const providerName = providerInfo.provider.name.toLowerCase();
            const isSubAndGain = adapterName.includes("subandgain") || providerName.includes("subandgain");
            const isMock = adapterName.includes("mock") || providerName.includes("mock");
            // Map action to eduType if action represents a specific exam
            const actionToEduType = {
                neco: "NECO",
                waec: "WAEC",
                nabteb: "NABTEB",
                nbais: "NBAIS",
                token: String(params?.eduType || "")
            };
            // Normalize UI labels like "WAEC Pin" -> "WAEC"; prioritize params.eduType
            const incomingEduTypeRaw = String(params?.eduType || "");
            const normalizedLabel = incomingEduTypeRaw.trim().toUpperCase();
            let mappedEduType = "";
            if (normalizedLabel) {
                if (normalizedLabel.includes("WAEC") || normalizedLabel.includes("GCE")) mappedEduType = "WAEC";
                else if (normalizedLabel.includes("NECO")) mappedEduType = "NECO";
                else if (normalizedLabel.includes("NABTEB")) mappedEduType = "NABTEB";
                else if (normalizedLabel.includes("NBAIS")) mappedEduType = "NBAIS";
                else mappedEduType = normalizedLabel;
            } else {
                mappedEduType = actionToEduType[actionId] || "";
            }
            let res = isSubAndGain ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$providers$2f$education$2d$subandgain$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["payEducationViaSubAndGain"])({
                amount,
                params: {
                    eduType: mappedEduType
                },
                providerId: providerInfo.provider.id,
                subServiceId
            }, providerInfo.provider) : isMock ? {
                ok: true,
                providerReference: `mock_edu_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                token: `EDU-${mappedEduType || 'TOKEN'}-${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
                message: `Mock education token purchase successful for ${mappedEduType || 'education service'}`
            } : {
                ok: false,
                code: "UNSUPPORTED_ADAPTER",
                message: "Unsupported education adapter (expected subandgain or mock)"
            };
            if (!res.ok) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction([
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].transaction.update({
                        where: {
                            reference
                        },
                        data: {
                            status: "FAILED",
                            meta: {
                                error: res.message,
                                code: res.code
                            }
                        }
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                        data: {
                            actorId: auth.user.id,
                            action: "SERVICE_REQUEST_FAILED",
                            resourceType: "Transaction",
                            resourceId: reference,
                            diffJson: {
                                amount,
                                serviceId,
                                action: actionId,
                                subServiceId,
                                reason: res.message,
                                code: res.code,
                                params
                            }
                        }
                    })
                ]);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    ok: false,
                    reference,
                    error: res.message,
                    message: res.message,
                    code: res.code
                }, {
                    status: 400
                });
            }
            // Success
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].transaction.update({
                    where: {
                        reference
                    },
                    data: {
                        status: "SUCCESS",
                        meta: {
                            providerRef: res.providerReference,
                            token: res.token
                        }
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].wallet.update({
                    where: {
                        userId: auth.user.id
                    },
                    data: {
                        balance: {
                            decrement: amount
                        }
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                    data: {
                        actorId: auth.user.id,
                        action: "SERVICE_REQUEST_SUCCESS",
                        resourceType: "Transaction",
                        resourceId: reference,
                        diffJson: {
                            amount,
                            serviceId,
                            action: actionId,
                            subServiceId,
                            providerRef: res.providerReference,
                            token: res.token,
                            params
                        }
                    }
                })
            ]);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                reference,
                provider: providerInfo.provider,
                providerRef: res.providerReference,
                token: res.token
            });
        }
        // For verification/nin, call Prembly API when configured; no mock fallback
        if (serviceId === "verification" && actionId === "nin") {
            const useReal = String(providerInfo.provider.configJson?.adapter || "").toLowerCase().includes("prembly") || providerInfo.provider.name.toLowerCase().includes("prembly");
            if (!useReal) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: "Unsupported verification provider. Prembly required."
                }, {
                    status: 503
                });
            }
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$providers$2f$verification$2d$prembly$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyNINViaPrembly"])({
                nin: String(params?.nin || ""),
                phone: String(params?.phone || ""),
                firstName: String(params?.firstName || ""),
                lastName: String(params?.lastName || ""),
                dateOfBirth: String(params?.dateOfBirth || ""),
                gender: String(params?.gender || "")
            }, providerInfo.provider);
            if (!res.ok) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction([
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].transaction.update({
                        where: {
                            reference
                        },
                        data: {
                            status: "FAILED",
                            meta: {
                                error: res.message,
                                code: res.code
                            }
                        }
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                        data: {
                            actorId: auth.user.id,
                            action: "SERVICE_REQUEST_FAILED",
                            resourceType: "Transaction",
                            resourceId: reference,
                            diffJson: {
                                amount,
                                serviceId,
                                action: actionId,
                                subServiceId,
                                reason: res.message,
                                code: res.code,
                                params
                            }
                        }
                    })
                ]);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    ok: false,
                    reference,
                    error: res.message,
                    code: res.code
                }, {
                    status: 400
                });
            }
            // Success: mark transaction and debit wallet atomically
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction([
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].transaction.update({
                    where: {
                        reference
                    },
                    data: {
                        status: "SUCCESS",
                        meta: {
                            providerRef: res.reference,
                            transactionId: res.transactionId,
                            verificationData: res.data
                        }
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].wallet.update({
                    where: {
                        userId: auth.user.id
                    },
                    data: {
                        balance: {
                            decrement: amount
                        }
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].auditLog.create({
                    data: {
                        actorId: auth.user.id,
                        action: "SERVICE_REQUEST_SUCCESS",
                        resourceType: "Transaction",
                        resourceId: reference,
                        diffJson: {
                            amount,
                            serviceId,
                            action: actionId,
                            subServiceId,
                            providerRef: res.reference,
                            transactionId: res.transactionId,
                            nin: params?.nin,
                            params
                        }
                    }
                })
            ]);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                reference,
                provider: providerInfo.provider,
                providerRef: res.reference,
                transactionId: res.transactionId,
                data: res.data
            });
        }
        // Default: queued (awaiting provider processing)
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            reference,
            provider: providerInfo.provider,
            message: "Queued"
        });
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Service request failed",
            detail: String(err)
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4838a241._.js.map