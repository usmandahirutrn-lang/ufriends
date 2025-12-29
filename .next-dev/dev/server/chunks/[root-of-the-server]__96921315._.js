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
                if (error) return null;
                // Sanitize email using shared sanitizer
                const safeEmail = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizer"].parse(value.email.trim().toLowerCase());
                // Centralized protection: Shield/email validation handled by shared helper
                try {
                    const sec = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$security$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protect"])(req, {
                        email: safeEmail
                    });
                    if (!sec.allowed) return null;
                } catch  {
                // Fail open to avoid login lockouts if Arcjet fails
                }
                // Credentials auth
                const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                    where: {
                        email: safeEmail
                    }
                });
                if (!user) return null;
                const ok = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(value.password, user.passwordHash);
                if (!ok) return null;
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
"[externals]/puppeteer [external] (puppeteer, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("puppeteer");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/lib/pdf.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "renderHtmlToPdfBuffer",
    ()=>renderHtmlToPdfBuffer
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer__$5b$external$5d$__$28$puppeteer$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/puppeteer [external] (puppeteer, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer__$5b$external$5d$__$28$puppeteer$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer__$5b$external$5d$__$28$puppeteer$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
async function renderHtmlToPdfBuffer(html, opts = {}) {
    const browser = await __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer__$5b$external$5d$__$28$puppeteer$2c$__esm_import$29$__["default"].launch({
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage",
            "--disable-accelerated-2d-canvas",
            "--no-zygote",
            "--no-first-run"
        ],
        executablePath: process.env.PUPPETEER_EXECUTABLE_PATH
    });
    try {
        const page = await browser.newPage();
        // Allow relative asset URLs (e.g., /assets/logo.png)
        const base = opts.baseUrl || process.env.APP_BASE_URL || "http://localhost:3000";
        let htmlToRender = html;
        if (/<head[^>]*>/i.test(htmlToRender)) {
            htmlToRender = htmlToRender.replace(/<head[^>]*>/i, (m)=>`${m}<base href="${base}">`);
        } else {
            htmlToRender = `<!DOCTYPE html><html><head><base href="${base}"><meta charset=\"utf-8\"></head><body>${html}</body></html>`;
        }
        await page.setContent(htmlToRender, {
            waitUntil: [
                "load",
                "networkidle0"
            ],
            timeout: 30000
        });
        const pdf = await page.pdf({
            preferCSSPageSize: true,
            printBackground: true,
            margin: {
                top: "24px",
                right: "24px",
                bottom: "24px",
                left: "24px"
            },
            ...opts
        });
        await page.close();
        return Buffer.from(pdf);
    } finally{
        await browser.close();
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
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
"[project]/app/api/pdf/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$require$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/require-auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdf.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prembly$2d$sdk$2d$adapter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prembly-sdk-adapter.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
async function POST(req) {
    try {
        const auth = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$require$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requireAuth"])(req, {
            roles: [
                "ADMIN",
                "AGENT",
                "USER"
            ]
        });
        if (!auth.ok) return auth.response;
        const reqBody = await req.json().catch(()=>({}));
        const { templateId, action, params, fileName, data: directData } = reqBody || {};
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                console.log("[PDF] request", {
                    action,
                    templateId,
                    hasDirectData: !!directData,
                    paramsKeys: params && typeof params === "object" ? Object.keys(params) : []
                });
            } catch  {}
        }
        if (!templateId || typeof templateId !== "string") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing templateId"
            }, {
                status: 400
            });
        }
        if (!action || typeof action !== "string") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing action"
            }, {
                status: 400
            });
        }
        // Fetch template
        const tpl = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].ninTemplate.findUnique({
            where: {
                id: templateId
            }
        });
        if (!tpl || !tpl.isActive) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Template not found or inactive"
            }, {
                status: 404
            });
        }
        const premblyClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prembly$2d$sdk$2d$adapter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        // If direct verification data provided, skip upstream call
        let result;
        let data = null;
        if (directData && typeof directData === "object") {
            result = {
                status: true,
                data: directData
            };
            data = directData;
        } else {
            // Call Prembly via our client based on action (reusing mapping in /api/verification)
            switch(action){
                case "bvn.printout":
                    result = await premblyClient.getBVNPrintout({
                        bvn: String(params?.bvn || "")
                    });
                    break;
                case "bvn.retrieval_phone":
                    result = await premblyClient.getBVNByPhone({
                        phoneNumber: String(params?.phoneNumber || "")
                    });
                    break;
                case "bvn.advanced":
                    result = await premblyClient.getBVNAdvanced({
                        bvn: String(params?.bvn || "")
                    });
                    break;
                case "nin.printout":
                    result = await premblyClient.getNINPrintout({
                        nin: String(params?.nin || "")
                    });
                    break;
                case "nin.slip":
                    result = await premblyClient.getNINSlip({
                        nin: String(params?.nin || "")
                    });
                    break;
                case "nin.advanced":
                    result = await premblyClient.getNINAdvanced({
                        nin: String(params?.nin || ""),
                        phoneNumber: params?.phoneNumber,
                        firstName: params?.firstName,
                        lastName: params?.lastName,
                        dateOfBirth: params?.dateOfBirth,
                        gender: params?.gender
                    });
                    break;
                case "cac.info":
                    result = await premblyClient.getCACInfo({
                        number: String(params?.number ?? params?.rcNumber ?? ""),
                        companyType: params?.companyType ? String(params.companyType).toUpperCase() : undefined,
                        companyName: params?.companyName ? String(params.companyName) : undefined
                    });
                    break;
                case "cac.status":
                    result = await premblyClient.getCACStatusReport({
                        number: String(params?.number ?? params?.rcNumber ?? ""),
                        companyType: params?.companyType ? String(params.companyType).toUpperCase() : undefined,
                        companyName: params?.companyName ? String(params.companyName) : undefined
                    });
                    break;
                case "passport.verify":
                    result = await premblyClient.verifyInternationalPassportV2({
                        passportNumber: String(params?.passportNumber || ""),
                        lastName: params?.lastName
                    });
                    break;
                case "tin.verify":
                    result = await premblyClient.verifyTIN({
                        tin: String(params?.tin || "")
                    });
                    break;
                case "voters.verify":
                    result = await premblyClient.verifyVotersCard({
                        number: String(params?.number ?? params?.vin ?? ""),
                        lastName: params?.lastName ? String(params.lastName) : undefined,
                        firstName: params?.firstName ? String(params.firstName) : undefined,
                        dob: params?.dob ? String(params.dob) : undefined,
                        lga: params?.lga ? String(params.lga) : undefined,
                        state: params?.state ? String(params.state) : undefined
                    });
                    break;
                case "plate.verify":
                    result = await premblyClient.verifyPlateNumber({
                        plateNumber: String(params?.plateNumber || "")
                    });
                    break;
                case "phone.verify_advanced":
                    result = await premblyClient.verifyPhoneAdvanced({
                        phoneNumber: String(params?.phoneNumber || "")
                    });
                    break;
                case "drivers_license.verify":
                    result = await premblyClient.verifyDriversLicenseAdvanced({
                        licenseNumber: params?.licenseNumber ? String(params.licenseNumber) : undefined,
                        expiryDate: params?.expiryDate ? String(params.expiryDate) : undefined,
                        firstName: params?.firstName ? String(params.firstName) : undefined,
                        lastName: params?.lastName ? String(params.lastName) : undefined,
                        dob: params?.dob ? String(params.dob) : undefined
                    });
                    break;
                default:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: `Unsupported action: ${action}`
                    }, {
                        status: 400
                    });
            }
            if (!result?.status) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: result?.detail || result?.error || "Upstream verification failed"
                }, {
                    status: 400
                });
            }
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    console.log("[PDF] upstream status", {
                        status: !!result?.status,
                        detail: result?.detail || result?.error
                    });
                } catch  {}
            }
            // Create a simple placeholder substitution from templateContent
            data = result?.data || result?.result || {};
        }
        if (data && typeof data === "object") {
            if (data.data) data = data.data;
            if (data.nin_data) data = data.nin_data;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                const src = data || {};
                const rawImg = src.photo || src.image || src.imageUrl || src.base64Image || src.image_base64 || src.imageBase64 || src.photo_base64 || src.photoBase64 || "";
                const head = typeof rawImg === "string" ? String(rawImg).slice(0, 120) : "";
                console.log("[PDF] data keys", Object.keys(src));
                console.log("[PDF] data image preview", head);
            } catch  {}
        }
        const aliases = {};
        if (action.startsWith("nin.")) {
            const src = data || {};
            const firstName = src.first_name || src.firstname || src.firstName || src.given_names || src.givenNames || src.given_name || "";
            const lastName = src.last_name || src.lastname || src.lastName || src.surname || "";
            const middleName = src.middle_name || src.middlename || src.middleName || src.other_names || src.otherNames || "";
            const givenNames = src.given_names || src.givenNames || [
                firstName,
                middleName
            ].filter(Boolean).join(" ");
            const sex = src.sex || src.gender || "";
            const gender = src.gender || src.sex || "";
            const nin = src.nin || src.nin_number || src.ninNumber || "";
            const address = src.address || src.residential_address || src.homeAddress || src.residentialAddress || "";
            const trackingId = src.tracking_id || src.trackingId || src.nimc_trackingId || "";
            const phoneNumber = src.phone_number || src.phoneNumber || src.msisdn || src.telephoneno || "";
            const residenceState = src.residence_state || src.stateOfResidence || src.residential_state || "";
            const residenceTown = src.residence_town || src.residence_lga || src.lga || src.lgaOfResidence || "";
            const birthState = src.birth_state || src.stateOfOrigin || src.state_of_origin || src.birthstate || "";
            const birthLga = src.birth_lga || src.lgaOfOrigin || src.lga_of_origin || src.birthlga || "";
            let image = src.photo || src.photoUrl || src.image || src.imageUrl || src.base64Image || src.image_base64 || src.imageBase64 || src.photo_base64 || src.photoBase64 || "";
            const _imgRaw = typeof image === "string" ? String(image) : "";
            const _imgCompact = _imgRaw.replace(/\s+/g, "").trim();
            image = _imgCompact || image;
            const looksLikeDataUrl = typeof image === "string" && /^data:image\/(png|jpeg|jpg);base64,/i.test(String(image));
            const looksLikeHttp = typeof image === "string" && /^(https?:\/\/|\/)/i.test(String(image));
            const base64Candidate = typeof image === "string" && !looksLikeDataUrl && !looksLikeHttp && /^[A-Za-z0-9+/=]+$/.test(String(image)) && String(image).length > 30;
            if (base64Candidate) {
                const raw = String(image);
                const isPng = /^iVBOR/.test(raw);
                const isJpg = /^\/9j\//.test(raw);
                const mime = isPng ? "image/png" : "image/jpeg";
                image = `data:${mime};base64,${raw}`;
            } else if (!image && typeof src.photo === "string" && src.photo.length > 30) {
                const raw = String(src.photo).replace(/\s+/g, "").trim();
                const isPng = /^iVBOR/.test(raw);
                const mime = isPng ? "image/png" : "image/jpeg";
                image = `data:${mime};base64,${raw}`;
            } else if (!image && typeof src.base64Image === "string" && src.base64Image.length > 30) {
                const raw = String(src.base64Image).replace(/\s+/g, "").trim();
                const isPng = /^iVBOR/.test(raw);
                const mime = isPng ? "image/png" : "image/jpeg";
                image = `data:${mime};base64,${raw}`;
            } else if (!image && typeof src.image_base64 === "string" && src.image_base64.length > 30) {
                const raw = String(src.image_base64).replace(/\s+/g, "").trim();
                const isPng = /^iVBOR/.test(raw);
                const mime = isPng ? "image/png" : "image/jpeg";
                image = `data:${mime};base64,${raw}`;
            } else if (!image && typeof src.imageBase64 === "string" && src.imageBase64.length > 30) {
                const raw = String(src.imageBase64).replace(/\s+/g, "").trim();
                const isPng = /^iVBOR/.test(raw);
                const mime = isPng ? "image/png" : "image/jpeg";
                image = `data:${mime};base64,${raw}`;
            }
            if (!image) {
                const pick = (v)=>{
                    const s = typeof v === "string" ? String(v).replace(/\s+/g, "").trim() : "";
                    const isDataUrl = /^data:image\/(png|jpeg|jpg);base64,/i.test(s);
                    const isHttp = /^(https?:\/\/|\/)/i.test(s);
                    const isBase64 = !isDataUrl && !isHttp && /^[A-Za-z0-9+/=]+$/.test(s) && s.length > 30;
                    if (isDataUrl || isHttp) return s;
                    if (isBase64) {
                        const isPng = /^iVBOR/.test(s);
                        const mime = isPng ? "image/png" : "image/jpeg";
                        return `data:${mime};base64,${s}`;
                    }
                    return "";
                };
                for (const [k, v] of Object.entries(src)){
                    if (!image && typeof v === "string" && /(image|photo|portrait)/i.test(k)) {
                        const cand = pick(v);
                        if (cand) {
                            image = cand;
                            break;
                        }
                    } else if (!image && v && typeof v === "object") {
                        for (const [k2, v2] of Object.entries(v)){
                            if (typeof v2 === "string" && /(image|photo|portrait|base64)/i.test(k2)) {
                                const cand2 = pick(v2);
                                if (cand2) {
                                    image = cand2;
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            const issueDate = src.issue_date || src.issueDate || new Date().toISOString().slice(0, 10);
            let qrCode = src.qr_code || src.qrCode || "";
            const email = src.email || "";
            const employmentStatus = src.employmentstatus || src.employment_status || "";
            const maritalStatus = src.maritalstatus || src.marital_status || "";
            const educationalLevel = src.educationallevel || src.education_level || "";
            const birthCountry = src.birthcountry || src.birth_country || "";
            const height = src.heigth || src.height || "";
            const parentFirstName = src.pfirstname || src.parent_firstname || "";
            const spokenLanguage = src.ospokenlang || src.spoken_language || "";
            const centralId = src.centralID || src.central_id || "";
            const nokFirst = src.nok_firstname || "";
            const nokMiddle = src.nok_middlename || "";
            const nokSurname = src.nok_surname || "";
            const nokAddress1 = src.nok_address1 || "";
            const nokAddress2 = src.nok_address2 || "";
            const nokState = src.nok_state || "";
            const nokLgaTown = src.nok_town || src.nok_lga || "";
            const nokPostalCode = src.nok_postalcode || "";
            aliases.surname = lastName;
            aliases.first_name = firstName;
            aliases.middle_name = middleName;
            aliases.given_names = givenNames;
            aliases.sex = sex;
            aliases.gender = gender;
            aliases.nin = nin;
            const dobRaw = src.birthdate || src.date_of_birth || src.dob || src.dateOfBirth || "";
            const fmtDate = (v)=>{
                const s = String(v || "").trim();
                if (!s) return "";
                let d = null;
                if (/^\d{4}-\d{2}-\d{2}/.test(s)) {
                    d = new Date(s);
                } else if (/^\d{2}[\/-]\d{2}[\/-]\d{4}$/.test(s)) {
                    const [a, b, c] = s.split(/[\/-]/).map(Number);
                    d = new Date(c, (b || 1) - 1, a);
                } else if (!isNaN(Date.parse(s))) {
                    d = new Date(Date.parse(s));
                }
                if (!d || isNaN(d.getTime())) return s;
                const months = [
                    "JAN",
                    "FEB",
                    "MAR",
                    "APR",
                    "MAY",
                    "JUN",
                    "JUL",
                    "AUG",
                    "SEP",
                    "OCT",
                    "NOV",
                    "DEC"
                ];
                const dd = String(d.getDate()).padStart(2, "0");
                const mmm = months[d.getMonth()] || "";
                const yyyy = d.getFullYear();
                return `${dd} ${mmm} ${yyyy}`;
            };
            aliases.dob = fmtDate(dobRaw);
            const ninDigits = String(nin || "").replace(/\D+/g, "");
            const ninSpaced = ninDigits.length === 11 ? `${ninDigits.slice(0, 4)} ${ninDigits.slice(4, 7)} ${ninDigits.slice(7)}` : nin;
            aliases.nin_spaced = ninSpaced;
            aliases.address = address;
            aliases.image = image;
            aliases.photo = "";
            aliases.imageUrl = "";
            aliases.photoUrl = "";
            if (typeof image === "string" && /^data:image\/(png|jpeg|jpg);base64,/i.test(String(image))) {
                aliases.base64Image = image.replace(/^data:image\/(png|jpeg|jpg);base64,/i, "").replace(/\s+/g, "");
            } else if (typeof image === "string" && /^[A-Za-z0-9+/=]+$/.test(String(image)) && String(image).length > 50) {
                aliases.base64Image = String(image).replace(/\s+/g, "").trim();
                aliases.image = `data:image/jpeg;base64,${aliases.base64Image}`;
                aliases.photo = "";
                aliases.imageUrl = "";
                aliases.photoUrl = "";
            }
            try {
                if (typeof aliases.image === "string" && aliases.image) {
                    data.image = aliases.image;
                    data.photo = aliases.image;
                    data.imageUrl = aliases.image;
                    data.photoUrl = aliases.image;
                }
            } catch  {}
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const imh = typeof aliases.image === "string" ? String(aliases.image).slice(0, 120) : "";
                    const b64len = typeof aliases.base64Image === "string" ? String(aliases.base64Image).length : 0;
                    console.log("[PDF] nin aliases", {
                        imageHead: imh,
                        base64Len: b64len,
                        qr: !!aliases.qr_code
                    });
                } catch  {}
            }
            aliases.tracking_id = trackingId;
            aliases.trackingId = trackingId;
            aliases.phone_number = phoneNumber;
            aliases.phoneNumber = phoneNumber;
            aliases.residence_state = residenceState;
            aliases.residence_town = residenceTown;
            aliases.birth_state = birthState;
            aliases.birth_lga = birthLga;
            aliases.issue_date = fmtDate(issueDate);
            // Fallback QR generation if missing
            if (!qrCode) {
                try {
                    const payload = JSON.stringify({
                        nin,
                        surname: lastName,
                        given_names: givenNames,
                        dob: aliases.dob || src.birthdate || src.date_of_birth || src.dob || src.dateOfBirth || "",
                        issue_date: issueDate
                    });
                    const url = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(payload)}`;
                    const resp = await fetch(url);
                    if (resp.ok) {
                        const buf = Buffer.from(await resp.arrayBuffer());
                        qrCode = `data:image/png;base64,${buf.toString("base64")}`;
                    }
                } catch  {}
            }
            aliases.qr_code = qrCode;
            aliases.email = email;
            aliases.employment_status = employmentStatus;
            aliases.marital_status = maritalStatus;
            aliases.educational_level = educationalLevel;
            aliases.birth_country = birthCountry;
            aliases.height = height;
            aliases.parent_first_name = parentFirstName;
            aliases.spoken_language = spokenLanguage;
            aliases.central_id = centralId;
            aliases.nok_firstname = nokFirst;
            aliases.nok_middlename = nokMiddle;
            aliases.nok_surname = nokSurname;
            aliases.nok_address1 = nokAddress1;
            aliases.nok_address2 = nokAddress2;
            aliases.nok_state = nokState;
            aliases.nok_lga_town = nokLgaTown;
            aliases.nok_postalcode = nokPostalCode;
            try {
                const rawImage = src.image || src.photo || src.imageUrl || src.photoUrl || src.base64Image || src.image_base64 || src.imageBase64 || src.photo_base64 || src.photoBase64 || "";
                const rawPreview = typeof rawImage === "string" ? rawImage.slice(0, 120) : "";
                const finalPreview = typeof aliases.image === "string" ? String(aliases.image).slice(0, 120) : "";
                console.log("[PDF] NIN debug", {
                    action,
                    hasData: !!data,
                    dataKeys: Object.keys(src || {}),
                    rawImagePreview: rawPreview,
                    finalImagePreview: finalPreview,
                    hasQr: !!aliases.qr_code
                });
            } catch  {}
        } else if (action.startsWith("bvn.")) {
            const src = data || {};
            const firstName = src.first_name || src.firstName || "";
            const lastName = src.last_name || src.lastName || "";
            const middleName = src.middle_name || src.middleName || src.other_names || src.otherNames || src.middleName || "";
            const fullName = src.full_name || src.fullName || [
                firstName,
                middleName,
                lastName
            ].filter(Boolean).join(" ");
            const bvn = src.bvn || src.number || src.bvn_number || "";
            const dob = src.date_of_birth || src.dob || src.birth_date || src.dateOfBirth || "";
            const phone = src.phone_number || src.phoneNumber || src.phoneNumber1 || src.phoneNumber2 || "";
            const gender = src.gender || src.sex || "";
            const email = src.email || "";
            const enrollmentBank = src.enrollment_bank || src.enrollmentBank || "";
            const enrollmentBranch = src.enrollment_branch || src.enrollmentBranch || "";
            const registrationDate = src.registration_date || src.registrationDate || "";
            const residentialAddress = src.residential_address || src.residentialAddress || "";
            const stateOfResidence = src.state_of_residence || src.stateOfResidence || "";
            const nin = src.nin || src.nin_number || src.ninNumber || "";
            let image = src.photo || src.photoUrl || src.image || src.imageUrl || "";
            if (!image && src.base64Image) {
                image = `data:image/jpeg;base64,${String(src.base64Image)}`;
            }
            aliases.first_name = firstName;
            aliases.middle_name = middleName;
            aliases.last_name = lastName;
            aliases.surname = lastName;
            aliases.full_name = fullName;
            aliases.bvn = bvn;
            aliases.nin = nin;
            aliases.dob = dob;
            aliases.phone_number = phone;
            aliases.phoneNumber = phone;
            aliases.gender = gender;
            aliases.email = email;
            aliases.enrollment_bank = enrollmentBank;
            aliases.enrollment_branch = enrollmentBranch;
            aliases.registration_date = registrationDate;
            aliases.residential_address = residentialAddress;
            aliases.state_of_residence = stateOfResidence;
            // Format Issue Date
            const today = new Date();
            const months = [
                "JAN",
                "FEB",
                "MAR",
                "APR",
                "MAY",
                "JUN",
                "JUL",
                "AUG",
                "SEP",
                "OCT",
                "NOV",
                "DEC"
            ];
            aliases.issue_date = `${today.getDate().toString().padStart(2, "0")}-${months[today.getMonth()]}-${today.getFullYear()}`;
            aliases.image = image;
            aliases.base64Image = src.base64Image || "";
            aliases["data.bvn"] = bvn;
            aliases["data.nin"] = nin;
            aliases["data.firstName"] = firstName;
            aliases["data.lastName"] = lastName;
            aliases["data.middleName"] = middleName;
            aliases["data.gender"] = gender;
            aliases["data.email"] = email;
            aliases["data.enrollmentBank"] = enrollmentBank;
            aliases["data.enrollmentBranch"] = enrollmentBranch;
            aliases["data.registrationDate"] = registrationDate;
            aliases["data.residentialAddress"] = residentialAddress;
            aliases["data.stateOfResidence"] = stateOfResidence;
        } else if (action.startsWith("voters.")) {
            const src = data || {};
            const firstName = src.first_name || src.firstName || "";
            const lastName = src.last_name || src.lastName || "";
            const fullName = src.full_name || `${firstName} ${lastName}`.trim();
            const vin = src.number || src.votersCardNumber || src.vin || params?.number || params?.vin || "";
            const dob = src.dob || src.date_of_birth || src.dateOfBirth || "";
            const gender = src.gender || src.sex || "";
            const state = src.state || src.residence_state || params?.state || "";
            const lga = src.lga || src.residence_town || src.residence_lga || params?.lga || "";
            let address = src.address || src.residential_address || "";
            if (!address) address = [
                lga,
                state
            ].filter(Boolean).join(", ");
            let photo = src.photo || src.photoUrl || src.image || src.imageUrl || "";
            const looksLikeDataUrl2 = typeof photo === "string" && /^data:image\/(png|jpeg);base64,/i.test(String(photo));
            const looksLikeHttp2 = typeof photo === "string" && /^(https?:\/\/|\/)/i.test(String(photo));
            const base64Candidate2 = typeof photo === "string" && !looksLikeDataUrl2 && !looksLikeHttp2 && /^[A-Za-z0-9+/=]+$/.test(String(photo).trim()) && String(photo).length > 100;
            if (base64Candidate2) photo = `data:image/jpeg;base64,${String(photo).trim()}`;
            aliases.first_name = firstName;
            aliases.last_name = lastName;
            aliases.full_name = fullName;
            aliases.vin = vin;
            aliases.number = vin;
            aliases.dob = dob;
            aliases.gender = gender;
            aliases.state = state;
            aliases.lga = lga;
            aliases.address = address;
            aliases.photo = photo;
        }
        // Common aliases
        aliases.generated_at = new Date().toLocaleString();
        let html = tpl.templateContent;
        html = html.replace(/\{\{\s*([a-zA-Z0-9_\.]+)\s*\}\}/g, (_, key)=>{
            const path = String(key);
            const val = path.split(".").reduce((acc, k)=>acc && acc[k] !== undefined ? acc[k] : undefined, data) ?? (aliases[path] !== undefined ? aliases[path] : undefined);
            return val !== undefined && val !== null ? String(val) : "";
        });
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                console.log("[PDF] html has data:image", /data:image\/(png|jpeg|jpg);base64,/.test(html));
            } catch  {}
        }
        // Normalize paths and relative asset URLs to absolute using request origin
        try {
            const origin = req.nextUrl?.origin || "";
            if (origin) {
                // Convert any backslashes to forward slashes in HTML paths
                html = html.replace(/\\+/g, "/");
                html = html.replace(/(<img\s+[^>]*src=["'])\/(?!\/)([^"']+)(["'][^>]*>)/gi, `$1${origin}/$2$3`);
            }
        } catch  {}
        const pdf = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["renderHtmlToPdfBuffer"])(html);
        const defaultBase = (()=>{
            switch(String(action)){
                case "bvn.retrieval_phone":
                    return "bvn-by-phone-printout";
                case "bvn.printout":
                    return "bvn-printout";
                default:
                    return `${action}-slip`;
            }
        })();
        const fname = (fileName && typeof fileName === "string" ? fileName : `${defaultBase}-${Date.now()}`).replace(/[^a-zA-Z0-9._-]+/g, "-");
        const pdfBody = pdf instanceof Buffer ? new Uint8Array(pdf) : pdf;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](pdfBody, {
            status: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": `attachment; filename="${fname}.pdf"`
            }
        });
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to generate PDF",
            detail: String(err?.message || err)
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__96921315._.js.map