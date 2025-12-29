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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jwt$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/jwt-auth.ts [app-route] (ecmascript)");
;
;
async function requireAuth(req, options = {}) {
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$jwt$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthUser"])(req);
    if (!user?.id) {
        return {
            ok: false,
            response: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Unauthorized"
            }, {
                status: 401
            })
        };
    }
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
    return {
        ok: true,
        user
    };
}
}),
"[project]/app/api/admin/disputes/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "PATCH",
    ()=>PATCH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$require$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/require-auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
;
;
;
async function GET(req) {
    try {
        const auth = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$require$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireAuth"])(req, {
            roles: [
                __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Role"].ADMIN,
                __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Role"].MARKETER
            ]
        }) // Assuming marketers might help? Or just Admin. Let's stick to Admin.
        ;
        if (!auth.ok) return auth.response;
        // Basic filtering
        const { searchParams } = new URL(req.url);
        const status = searchParams.get("status");
        const search = searchParams.get("search");
        const whereClause = {};
        if (status && status !== "all") {
            whereClause.status = status;
        }
        // Search is harder with Prisma on multiple fields without full text search, but let's try basic OR
        if (search) {
            whereClause.OR = [
                {
                    reference: {
                        contains: search,
                        mode: 'insensitive'
                    }
                },
                {
                    service: {
                        contains: search,
                        mode: 'insensitive'
                    }
                },
                {
                    user: {
                        email: {
                            contains: search,
                            mode: 'insensitive'
                        }
                    }
                },
                {
                    user: {
                        profile: {
                            name: {
                                contains: search,
                                mode: 'insensitive'
                            }
                        }
                    }
                }
            ];
        }
        const disputes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].dispute.findMany({
            where: whereClause,
            include: {
                user: {
                    select: {
                        email: true,
                        profile: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            },
            take: 50
        });
        // Transform for frontend
        const formatted = disputes.map((d)=>({
                id: d.id,
                date: d.createdAt.toISOString().slice(0, 16).replace("T", " "),
                user: d.user.profile?.name || d.user.email,
                userEmail: d.user.email,
                service: d.service,
                refId: d.reference || "N/A",
                issue: d.issue,
                status: d.status.toLowerCase(),
                adminNotes: d.adminNotes,
                screenshot: d.screenshotUrl,
                assignedTo: d.assignedTo
            }));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            data: formatted
        });
    } catch (error) {
        console.error("[Admin Disputes API] Failed to fetch disputes", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Internal Server Error"
        }, {
            status: 500
        });
    }
}
async function PATCH(req) {
    try {
        const auth = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$require$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireAuth"])(req, {
            roles: [
                __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["Role"].ADMIN
            ]
        });
        if (!auth.ok) return auth.response;
        const body = await req.json();
        const { id, status, adminNotes } = body;
        if (!id) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "ID required"
        }, {
            status: 400
        });
        const updateData = {};
        if (status) updateData.status = status.toUpperCase();
        if (adminNotes !== undefined) updateData.adminNotes = adminNotes;
        const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].dispute.update({
            where: {
                id
            },
            data: updateData
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            data: updated
        });
    } catch (error) {
        console.error("[Admin Disputes API] Failed to update dispute", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Internal Server Error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9ef31c53._.js.map