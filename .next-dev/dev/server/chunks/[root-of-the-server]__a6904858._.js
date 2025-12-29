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
"[project]/app/api/templates/resolve/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$require$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/require-auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
;
;
;
function titleCase(s) {
    return s.replace(/(^|\s)([a-z])/g, (m)=>m.toUpperCase());
}
function nameFor(action, slipType) {
    const t = (slipType || "").toLowerCase();
    switch(action){
        case "nin.slip":
            return `NIN Slip - ${titleCase(t || "Basic")}`;
        case "nin.printout":
            return t ? `NIN Printout - ${titleCase(t)}` : `NIN Printout - Basic Data Slip`;
        case "bvn.advanced":
            return `BVN Advanced Slip`;
        case "bvn.printout":
            return t === "plastic" ? `BVN Plastic Slip` : `BVN Printout`;
        case "bvn.retrieval_phone":
            return t === "plastic" ? `BVN Plastic Slip` : `BVN Printout`;
        case "cac.info":
            return `CAC Info Slip`;
        case "cac.status":
            return `CAC Status Certificate`;
        case "tin.verify":
            return t === "certificate" ? `TIN Certificate` : `TIN Slip - ${titleCase(t || "Basic")}`;
        case "passport.verify":
            return `Passport Slip`;
        case "drivers_license.verify":
            return `Drivers License Slip`;
        case "phone.verify_advanced":
            return `Phone Slip`;
        case "plate.verify":
            return `Plate Slip`;
        case "voters.verify":
            return `Voters Card Slip - ${titleCase(t || "Basic")}`;
        default:
            return `${action} Slip`;
    }
}
function htmlFor(action, name, slipType) {
    if (action === "voters.verify") {
        const t = String(slipType || "basic").toLowerCase();
        if (t === "full") {
            const frontBg = "/assets/voters-card-front.jpg";
            const backBg = "/assets/voters-card-back.jpg";
            const base = `<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <style>
      html, body { margin:0; padding:0; }
      body { font-family: Segoe UI, Arial, sans-serif; color: #000; }
      .wrap { width: 1024px; margin: 0 auto; }
      .card { position: relative; width: 1024px; height: 640px; margin: 12px 0; }
      .bg { position:absolute; inset:0; width:100%; height:100%; object-fit: cover; }
      .txt { position:absolute; color:#000; font-weight:700; }
      .small { font-weight:600; font-size: 20px; }
      .med { font-weight:700; font-size: 26px; }
      .big { font-weight:800; font-size: 32px; }
      .vin { left: 360px; top: 96px; }
      .name { left: 360px; top: 200px; }
      .dob { left: 360px; top: 260px; }
      .gender { left: 760px; top: 260px; }
      .addr { left: 360px; top: 360px; width: 580px; }
      .delim { left: 360px; top: 150px; }
      .code { left: 64px; top: 96px; }
      .photo { position:absolute; left: 64px; top: 160px; width: 260px; height: 320px; object-fit: cover; border: 2px solid #333; background: #fff; }
      .footer { text-align:center; font-size:12px; color:#333; margin: 4px 0 8px; }
    </style>
  </head>
  <body>
    <div class='wrap'>
      <div class='footer'>Generated: {{generated_at}}</div>
      <div class='card'>
        <img class='bg' src='${frontBg}' alt='Front'>
        <div class='txt small code'>CODE: {{code}}</div>
        <div class='txt small delim'>DELIM: {{lga}} | {{state}}</div>
        <div class='txt med vin'>VIN: {{number}}{{vin}}</div>
        <div class='txt big name'>{{full_name}}{{first_name}} {{last_name}}</div>
        <div class='txt small dob'>DATE OF BIRTH {{dob}}</div>
        <div class='txt small gender'>GENDER {{gender}}</div>
        <div class='txt small addr'>ADDRESS {{address}}</div>
        <img class='photo' src='{{photo}}' alt='Photo' onerror='this.style.display="none"'>
      </div>
      <div class='card'>
        <img class='bg' src='${backBg}' alt='Back'>
      </div>
    </div>
  </body>
</html>`;
            return base;
        }
    }
    if (action === "bvn.printout" || action === "bvn.retrieval_phone") {
        const t = String(slipType || "basic").toLowerCase();
        if (t === "plastic") {
            const bg = `/assets/bvn-plastic.jpeg?v=${new Date().getTime()}`;
            const plastic = `<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <style>
      html, body { margin:0; padding:0; }
      body { font-family: Segoe UI, Arial, sans-serif; color: #000; }
      .wrap { width: 794px; margin: 0 auto; }
      .header-text { text-align:center; font-size: 18px; color:#333; margin: 12px 0 12px; }
      
      /* Card Layout */
      .stack { position: relative; width: 85.6mm; height: calc(53.98mm * 2); margin: 0 auto; border: 2px solid #000; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.15); background: #fff; }
      .inner { position:absolute; left:0; top:0; width: 1011px; height: 639px; transform: scale(0.32); transform-origin: top left; }
      .card { position:absolute; left:0; width:1011px; height:639px; }
      .top { top:0; }
      .bottom { top:650px; background:#fff; }
      .bg-layer { position:absolute; left:0; top:0; width:100%; height:100%; background-image: url('${bg}'); background-size: 100% auto; background-repeat: no-repeat; }
      .front-bg { background-position: top center; }
      .back-bg { background-position: bottom center; }
      
      /* Text Styles */
      .txt { position:absolute; font-weight: 800; color: #000; text-transform: uppercase; z-index: 10; }
      .lbl { position:absolute; font-weight: 700; color: #000; font-size: 18px; text-transform: uppercase; z-index: 10; }
      
      /* Header Brand */
      .brand-box { position:absolute; left: 40px; top: 40px; }
      .brand-title { color: #2a3375; font-weight: 800; font-size: 24px; line-height: 1.1; font-family: sans-serif; }

      /* Photo */
      .photo { 
        position:absolute; 
        left: 40px; 
        top: 150px; 
        width: 220px; 
        height: 280px; 
        object-fit: cover; 
        border-radius: 4px;
        background: #eee;
      }
      
      /* Fields */
      .l-surname { left: 290px; top: 155px; }
      .v-surname { left: 290px; top: 180px; font-size: 32px; color: #000; }
      
      .l-firstname { left: 290px; top: 235px; }
      .v-firstname { left: 290px; top: 260px; font-size: 32px; color: #000; }
      
      .l-dob { left: 290px; top: 315px; }
      .v-dob { left: 290px; top: 340px; font-size: 28px; color: #000; }
      
      .l-gender { left: 560px; top: 315px; }
      .v-gender { left: 560px; top: 340px; font-size: 28px; color: #000; }
      
      .l-issued { left: 780px; top: 375px; font-size: 18px; text-align: center; width: 150px; }
      .v-issued { left: 780px; top: 398px; font-size: 22px; text-align: center; width: 150px; font-weight: 800; }
      
      /* Fingerprint/NGA */
      .nga {
        position: absolute;
        left: 790px;
        top: 300px;
        font-size: 42px;
        font-weight: 900;
        color: #009933;
        text-align: center;
        width: 140px;
      }

      /* BVN Footer */
      .bvn-title {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 120px;
        text-align: center;
        font-size: 22px;
        color: #2a3375;
        font-weight: 700;
        text-transform: uppercase;
      }
      .bvn-val { 
        position:absolute; 
        left: 0;
        right: 0;
        bottom: 40px; 
        text-align: center;
        font-size: 64px; 
        font-weight: 800; 
        letter-spacing: 4px;
        color: #000;
        font-family: monospace;
      }

      .qr[src=""], .photo[src=""] { display:none }
    </style>
  </head>
  <body>
    <div class='wrap'>
      <div class='header-text'>Please find below your BVN Plastic Slip</div>
      <div class='stack'>
        <div class='inner'>
          <!-- Front -->
          <div class='card top'>
            <div class='bg-layer front-bg'></div>
            
            <img class='photo' src='{{image}}' alt='' onerror='this.style.display="none"'>
            
            <div class='lbl l-surname'>SURNAME</div>
            <div class='txt v-surname'>{{surname}}</div>
            
            <div class='lbl l-firstname'>FIRSTNAME/OTHER NAMES</div>
            <div class='txt v-firstname'>{{first_name}} {{middle_name}}</div>
            
            <div class='lbl l-dob'>DATE OF BIRTH</div>
            <div class='txt v-dob'>{{dob}}</div>
            
            <div class='lbl l-gender'>GENDER</div>
            <div class='txt v-gender'>{{gender}}</div>
            
            <div class='lbl l-issued'>ISSUE DATE</div>
            <div class='txt v-issued'>{{issue_date}}</div>
            
            <div class='nga'>NGA</div>
            
            <div class='bvn-title'>BANK VERIFICATION NUMBER (BVN)</div>
            <div class='bvn-val'>{{bvn}}</div>
          </div>
          
          <div class='card bottom'>
             <div class='bg-layer back-bg'></div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>`;
            return plastic;
        }
        const logo = '/assets/bvn-printout.png';
        const base = `<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <style>
      body { font-family: Segoe UI, Arial, sans-serif; color: #000; }
      .wrap { width: 794px; margin: 0 auto; }
      .header { border: 2px solid #777; padding: 0; display: grid; grid-template-columns: 230px 1fr; align-items: center; min-height: 64px; }
      .brand { display: flex; align-items: stretch; height: 100%; width: 100%; }
      .brand img { height: 100%; width: 100%; object-fit: contain; display: block; margin: 0; }
      .msg { text-align: center; font-size: 13px; }
      .date { text-align: right; font-size: 12px; margin: 4px 0; }
      .grid { display: grid; grid-template-columns: 360px 1fr; gap: 16px; margin-top: 12px; }
      .photo { width: 360px; height: 320px; border: 1px solid #b3b3b3; object-fit: cover; }
      .card { border: 1px solid #8f8f8f; }
      .card-title { background: #f1f1f1; padding: 6px; text-align: center; font-weight: 600; border-bottom: 2px solid #8f8f8f; font-size: 13px; }
      table { width: 100%; border-collapse: collapse; }
      td { border: 1px solid #a8a8a8; padding: 6px 8px; font-size: 12px; }
      .label { width: 42%; }
      .caps { text-transform: uppercase; }
      .note { margin-top: 10px; font-size: 12px; }
    </style>
  </head>
  <body>
    <div class='wrap'>
      <div class='header'>
        <div class='brand'>
          <img src='${logo}' alt='Bank Verification Number'>
        </div>
        <div class='msg'>The Bank Verification Number has successfully been verified.</div>
      </div>
      <div class='grid'>
        <img class='photo' src='{{image}}' alt='Photo'>
        <div>
          <div class='date'>Date: {{generated_at}}</div>
          <div class='card'>
            <div class='card-title'>Personal Information</div>
            <table>
              <tr><td class='label'>BVN</td><td>{{bvn}}</td></tr>
              <tr><td class='label'>NIN</td><td>{{nin}}</td></tr>
              <tr><td class='label'>First Name</td><td class='caps'>{{first_name}}</td></tr>
              <tr><td class='label'>Last Name</td><td class='caps'>{{last_name}}</td></tr>
              <tr><td class='label'>Middle Name</td><td class='caps'>{{middle_name}}</td></tr>
              <tr><td class='label'>Phone</td><td>{{phone_number}}</td></tr>
              <tr><td class='label'>Email</td><td>{{email}}</td></tr>
              <tr><td class='label'>Date of birth</td><td>{{dob}}</td></tr>
              <tr><td class='label'>Gender</td><td class='caps'>{{gender}}</td></tr>
              <tr><td class='label'>Enrollment Bank</td><td>{{enrollment_bank}}</td></tr>
              <tr><td class='label'>Enrollment Branch</td><td>{{enrollment_branch}}</td></tr>
              <tr><td class='label'>Registration Date</td><td>{{registration_date}}</td></tr>
              <tr><td class='label'>Address</td><td>{{residential_address}}</td></tr>
              <tr><td class='label'>State</td><td>{{state_of_residence}}</td></tr>
            </table>
          </div>
        </div>
      </div>
      <div class='note'>NOTE: ..</div>
    </div>
  </body>
</html>`;
        return base;
    }
    if (action === "nin.printout" || action === "nin.advanced" || action === "nin.slip") {
        const t = String(slipType || "basic").toLowerCase();
        if (t === "premium") {
            const bg = "/assets/premium-blank.jpg";
            const premium = `<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <style>
      html, body { margin:0; padding:0; }
      body { font-family: Segoe UI, Arial, sans-serif; color: #000; }
      .wrap { width: 794px; margin: 0 auto; }
      .header-text { text-align:center; font-size: 18px; color:#333; margin: 12px 0 12px; }
      /* ID-1 physical card size: 85.60mm × 53.98mm */
      .stack { position: relative; width: 85.6mm; height: calc(53.98mm * 2); margin: 0 auto; border: 2px solid #000; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.15); background: #fff; }
      .inner { position:absolute; left:0; top:0; width: 1080px; height: 1388px; transform: scale(0.299); transform-origin: top left; }
      .card { position:absolute; left:0; width:1080px; height:674px; }
      .top { top:0; }
      .bottom { top:714px; background:#fff; }
      .bg { position:absolute; left:0; top:0; width:100%; height:100%; object-fit: cover; }
      .value { position:absolute; font-size: 26px; font-weight: 700; text-transform: uppercase; color:#222; }
      .label { position:absolute; font-size: 26px; color:#5a5a5a }
      .header { position:absolute; left: 38px; top: 18px; color:#0a7a43; font-weight: 800; font-size: 45px; letter-spacing:1px }
      .subheader { position:absolute; left: 38px; top: 68px; color:#0a7a43; font-weight: 600; font-size: 30px }
      .photo { position:absolute; left: 46px; top: 120px; width: 260px; height: 320px; object-fit: cover; border:0; }
      .qr { position:absolute; left: 748px; top: 84px; width: 236px; height: 236px; object-fit: contain; }
      .nga { position:absolute; left: 748px; top: 342px; width: 236px; text-align: center; font-weight: 800; font-size: 45px; letter-spacing:2px; }
      .lab-issue { position:absolute; left: 748px; top: 400px; width: 236px; text-align: center; font-size: 27px; font-weight: 700; color:#5a5a5a; z-index: 2 }
      .issue { position:absolute; left: 748px; top: 440px; width: 236px; text-align: center; font-size: 27px; font-weight: 800; letter-spacing:1px; z-index: 2 }
      .lab-surname { left: 320px; top: 150px }
      .lab-given { left: 320px; top: 229px }
      .lab-dob { left: 320px; top: 313px }
      .lab-gender { left: 577px; top: 318px }
      .surname { left: 320px; top: 187px }
      .given { left: 320px; top: 266px }
      .dob { left: 320px; top: 350px }
      .gender { left: 577px; top: 355px }
      .nin-label { position:absolute; left: 0; right: 0; bottom: 118px; text-align: center; font-size: 34px; font-weight: 700; color:#333 }
      .nin { position:absolute; left: 0; right: 0; bottom: 36px; text-align: center; font-size: 72px; font-weight: 800; letter-spacing:7.2px }
      .disc-wrap { position:absolute; inset:0; display:flex; align-items:center; justify-content:center }
      .disc { width: 880px; color:#222; transform: rotate(180deg); }
      .disc h3 { text-align:center; font-size: 42px; font-weight: 800; margin: 0 0 8px }
      .disc h4 { text-align:center; font-size: 26px; font-weight: 600; margin: 0 0 12px; font-style: italic }
      .disc p { font-size: 26px; line-height: 1.45; margin: 8px 0 }
      .disc .caution { text-align:center; font-size: 26px; font-weight: 800; margin: 10px 0 }
      .qr[src=""], .photo[src=""] { display:none }
    </style>
  </head>
  <body>
    <div class='wrap'>
      <div class='header-text'>Please find below your Improved NIN Slip</div>
      <div class='header-text'>You may cut it out of the paper, fold and laminate as desired.</div>
      <div class='header-text'>For your security & privacy, please DO NOT permit others to make photocopies of this slip.</div>
      <div class='stack'>
      <div class='inner'>
      <div class='card top'>
        <img class='bg' src='${bg}' alt='NIN Premium Slip Background'>
        <div class='header'>FEDERAL REPUBLIC OF NIGERIA</div>
        <div class='subheader'>DIGITAL NIN SLIP</div>
        <img class='photo' src='{{image}}' alt='' onerror='this.style.display="none"'>
        <img class='qr' src='{{qr_code}}' alt='' onerror='this.style.display="none"'>
      <div class='value nga'>NGA</div>
      <div class='label lab-issue'>ISSUE DATE</div>
        <div class='issue'>{{issue_date}}</div>
        <div class='label lab-surname'>SURNAME/NOM</div>
        <div class='label lab-given'>GIVEN NAMES/PRENOMS</div>
        <div class='label lab-dob'>DATE OF BIRTH</div>
        <div class='label lab-gender'>SEX/SEXE</div>
        <div class='value surname'>{{surname}}</div>
        <div class='value given'>{{given_names}},</div>
        <div class='value dob'>{{dob}}</div>
        <div class='value gender'>{{gender}}</div>
        <div class='nin-label'>National Identification Number (NIN)</div>
        <div class='nin'>{{nin_spaced}}</div>
      </div>
      <div class='card bottom'>
        <div class='disc-wrap'>
          <div class='disc'>
            <h3>DISCLAIMER</h3>
            <h4>Trust, but verify</h4>
            <p>Kindly ensure each time this ID is presented, that you verify the credentials using a Government APPROVED verification resource.</p>
            <p>The details on the front of this NIN Slip must EXACTLY match the verification result.</p>
            <div class='caution'>CAUTION!</div>
            <p>If this NIN was not issued to the person on the front of this document, please DO NOT attempt to scan, photocopy or replicate the personal data contained herein.</p>
            <p>You are only permitted to scan the barcode for the purpose of identity verification.</p>
            <p>The FEDERAL GOVERNMENT OF NIGERIA assumes no responsibility if you accept any variance on the scan result or do not scan the 2D barcode overleaf.</p>
      </div>
      </div>
    </div>
    </div>
  </body>
</html>`;
            return premium;
        }
        if (t === "standard") {
            const bg = "/assets/standard-blank.jpg";
            const standard = `<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <style>
      html, body { margin:0; padding:0; }
      body { font-family: Segoe UI, Arial, sans-serif; color: #000; }
      .wrap { width: 794px; margin: 0 auto; }
      .header-text { text-align:center; font-size: 18px; color:#333; margin: 12px 0 12px; }
      .stack { position: relative; width: 85.6mm; height: calc(53.98mm * 2); margin: 0 auto; border: 2px solid #000; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.15); background: #fff; }
      .inner { position:absolute; left:0; top:0; width: 1080px; height: 1388px; transform: scale(0.299); transform-origin: top left; }
      .card { position:absolute; left:0; width:1080px; height:674px; }
      .top { top:0; }
      .bottom { top:714px; background:#fff; }
      .bg { position:absolute; left:0; top:0; width:100%; height:100%; object-fit: cover; }
      .value { position:absolute; font-size: 24px; font-weight: 700; text-transform: uppercase; color:#222; }
      .label { position:absolute; font-size: 24px; color:#5a5a5a }
      .photo { position:absolute; left: 48px; top: 140px; width: 240px; height: 300px; object-fit: cover; border:0; }
      .qr { position:absolute; left: 756px; top: 120px; width: 216px; height: 216px; object-fit: contain; }
      .nga { position:absolute; left: 756px; top: 356px; width: 216px; text-align: center; font-weight: 800; font-size: 45px; letter-spacing:2px; }
      .lab-issue { position:absolute; left: 756px; top: 412px; width: 216px; text-align: center; font-size: 26px; font-weight: 700; color:#5a5a5a }
      .issue { position:absolute; left: 756px; top: 455px; width: 216px; text-align: center; font-size: 26px; font-weight: 800 }
      .lab-surname { left: 322px; top: 160px; font-size: 22px; color:#666 }
      .lab-given { left: 322px; top: 230px; font-size: 22px; color:#666 }
      .lab-dob { left: 322px; top: 300px; font-size: 22px; color:#666 }
      .lab-gender { left: 560px; top: 305px; font-size: 22px; color:#666 }
      .surname { left: 322px; top: 193px }
      .given { left: 322px; top: 263px }
      .dob { left: 322px; top: 333px }
      .gender { left: 560px; top: 338px }
      .nin-label { position:absolute; left: 0; right: 0; bottom: 132px; text-align: center; font-size: 30px; font-weight: 700; color:#333 }
      .nin { position:absolute; left: 0; right: 0; bottom: 58px; text-align: center; font-size: 68px; font-weight: 800; letter-spacing:6.8px }
      .nin-note { position:absolute; left:0; right:0; bottom: 52px; text-align:center; font-size: 18px; font-style: italic; color:#666 }
      .disc-wrap { position:absolute; inset:0; display:flex; align-items:center; justify-content:center }
      .disc { width: 880px; color:#222; transform: rotate(180deg); }
      .disc h3 { text-align:center; font-size: 42px; font-weight: 800; margin: 0 0 8px }
      .disc h4 { text-align:center; font-size: 26px; font-weight: 600; margin: 0 0 12px; font-style: italic }
      .disc p { font-size: 22px; line-height: 1.45; margin: 8px 0 }
      .disc .caution { text-align:center; font-size: 26px; font-weight: 800; margin: 10px 0 }
      .qr[src=""], .photo[src=""] { display:none }
    </style>
  </head>
  <body>
    <div class='wrap'>
      <div class='header-text'>Please find below your Improved NIN Slip</div>
      <div class='header-text'>You may cut it out of the paper, fold and laminate as desired.</div>
      <div class='header-text'>For your security & privacy, please DO NOT permit others to make photocopies of this slip.</div>
      <div class='stack'>
      <div class='inner'>
      <div class='card top'>
        <img class='bg' src='${bg}' alt='NIN Standard Slip Background'>
        <img class='photo' src='{{image}}' alt='' onerror='this.style.display="none"'>
        <img class='qr' src='{{qr_code}}' alt='' onerror='this.style.display="none"'>
        <div class='value nga'>NGA</div>
        <div class='label lab-issue'>ISSUE DATE</div>
        <div class='issue'>{{issue_date}}</div>
        <div class='label lab-surname'>Surname/Nom</div>
        <div class='label lab-given'>Given Names/Prenoms</div>
        <div class='label lab-dob'>Date of Birth</div>
        <div class='label lab-gender'>Sex/Sexe</div>
        <div class='value surname'>{{surname}}</div>
        <div class='value given'>{{given_names}}</div>
        <div class='value dob'>{{dob}}</div>
        <div class='value gender'>{{gender}}</div>
        <div class='nin-label'>National Identification Number (NIN)</div>
        <div class='nin'>{{nin_spaced}}</div>
        <div class='nin-note'>Kindly ensure you scan the barcode to verify the credentials.</div>
      </div>
      <div class='card bottom'>
        <div class='disc-wrap'>
          <div class='disc'>
            <h3>DISCLAIMER</h3>
            <h4>Trust, but verify</h4>
            <p>Kindly ensure each time this ID is presented, that you verify the credentials using a Government APPROVED verification resource.</p>
            <p>The details on the front of this NIN Slip must EXACTLY match the verification result.</p>
            <div class='caution'>CAUTION!</div>
            <p>If this NIN was not issued to the person on the front of this document, please DO NOT attempt to scan, photocopy or replicate the personal data contained herein.</p>
            <p>You are only permitted to scan the barcode for the purpose of identity verification.</p>
            <p>The FEDERAL GOVERNMENT OF NIGERIA assumes no responsibility if you accept any variance on the scan result or do not scan the 2D barcode overleaf.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </body>
</html>`;
            return standard;
        }
        if (t === "regular") {
            const bg = "/assets/regular-blank.jpg";
            const regular = `<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <style>
      @page { size: 1024px 478px; margin: 0; }
      html, body { margin:0; padding:0; }
      body { font-family: Segoe UI, Arial, sans-serif; color: #000; }
      .page { position: relative; width: 1024px; height: 478px; }
      .bg { position:absolute; left:0; top:0; width:100%; height:100%; object-fit: cover; }
      /* Header elements are part of background image; no extra overlays */

      .panel { position:absolute; left: 40px; right: 40px; top: 120px; height: 260px; display:grid; grid-template-columns: 320px 320px 1fr; grid-template-rows: 64px 64px 64px 64px; }
      .cell { position: relative; display:flex; align-items:center; padding: 0 12px; font-size: 15px; }
      .cell.lab { font-weight: 500; color:#222 }
      .cell.val { font-weight: 500; color:#222 }
      .cell.val.name-val { text-transform: uppercase }
      .cell.val.meta { position:absolute; right: 12px; bottom: 8px; }
      .cell.lab.meta { position:absolute; right: 12px; top: 8px; }
      .pair { display:flex; align-items:center; justify-content:flex-start; padding: 0 12px; }
      .pair .lab { margin-left: 0; transform: translateX(-85px) }
      .pair .val { margin-left: 0; margin-right: 0; transform: translateX(-69px); text-transform: uppercase }
      .c4 .val { transform: translateX(-59px) }
      /* lines are provided by background image; no extra borders */

      /* Assign cells to grid */
      .t-lab { grid-column: 1; grid-row: 1; margin-top: 22px; padding-left: 2px }
      .t-val { grid-column: 2; grid-row: 1; margin-top: 22px }
      .c1 { grid-column: 2; grid-row: 1; margin-top: 22px }

      .nin-lab { grid-column: 1; grid-row: 2; padding-left: 2px }
      .nin-val { grid-column: 2; grid-row: 2; font-size: 15px; font-weight: 500; letter-spacing: 0.3px; margin-left: -240px }
      .t-val, .issue-val { margin-left: -240px }
      .c2 { grid-column: 2; grid-row: 2 }

      .issue-lab { grid-column: 1; grid-row: 3; margin-top: -30px; padding-left: 2px }
      .issue-val { grid-column: 2; grid-row: 3; margin-top: -30px }
      .c3 { grid-column: 2; grid-row: 3; margin-top: -30px }

      .c4 { grid-column: 2; grid-row: 4; margin-top: -70px }

      .addr { grid-column: 3; grid-row: 1 / span 3; padding: 12px; font-size: 14px; position: relative; }
      .addr .lab { font-weight: 700; margin-top: 10px; color:#222 }
      .addr .lines { margin-top: 9px; margin-right: 160px }
      .addr .lines div { margin: 6px 0; font-weight: 600; text-transform: uppercase; font-size: 12px; color:#222 }
      .addr .lines div:nth-child(2) { margin-top: 58px }
      .addr .lines div:nth-child(3) { margin-top: 18px }
      .addr .addr-photo { position:absolute; right: 12px; top: 19px; width: 140px; height: 188px; border: 1px solid #777; object-fit: cover; transform: translateX(15px) }

      /* Bottom text/icons are present in background image; avoid overlays */
      .qr[src=""], .photo[src=""] { display:none }
    </style>
  </head>
  <body>
    <div class='page'>
      <img class='bg' src='${bg}' alt='NIN Regular Slip Background'>
      <div class='panel'>
        <div class='cell lab t-lab'>Tracking ID</div>
        <div class='cell val t-val col2'>{{tracking_id}}</div>

        <div class='cell lab nin-lab row2'>NIN</div>
        <div class='cell val nin-val row2 col2'>{{nin}}</div>

        <div class='cell lab issue-lab row3'>Issue Date</div>
        <div class='cell val issue-val row3 col2'>{{issue_date}}</div>

        <div class='cell pair c1'><div class='lab'>Surname</div><div class='val name-val'>{{surname}}</div></div>

        <div class='cell pair c2 row2'><div class='lab'>First Name</div><div class='val name-val'>{{first_name}}</div></div>

        <div class='cell pair c3 row3'><div class='lab'>Middle Name</div><div class='val name-val'>{{middle_name}}</div></div>

        <div class='cell pair c4 row4'><div class='lab'>Gender</div><div class='val'>{{gender}}</div></div>

        <div class='addr col3'>
            <div class='lab'>Address:</div>
          <div class='lines'>
            <div>{{residence_address}}{{address}}</div>
            <div>{{residence_town}}</div>
            <div>{{residence_state}}</div>
          </div>
          <img class='addr-photo' src='{{image}}' alt='Photo' onerror='this.style.display="none"'>
        </div>
      </div>
      
    </div>
  </body>
</html>`;
            return regular;
        }
        const coat = '/assets/coat-of-arms.png';
        const nimc = '/assets/nimc-logo.png';
        const base = `<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <style>
      body { font-family: Segoe UI, Arial, sans-serif; color: #000; }
      .wrap { width: 794px; margin: 0 auto; }
      .head { display: grid; grid-template-columns: 140px 1fr 160px; align-items: center; margin-top: 8px; }
      .head img { object-fit: contain; display: block; }
      .title { text-align: center; }
      .title .top { font-weight: 600; font-size: 18px; }
      .title .sub { font-weight: 600; font-size: 16px; }
      .verified { color: #1f7a36; font-size: 24px; font-weight: 600; margin-top: 12px; }
      .grid { display: grid; grid-template-columns: 1fr 280px; gap: 16px; margin-top: 16px; }
      .photo { width: 120px; height: 140px; border: 1px solid #999; object-fit: cover; }
      .labels { font-size: 13px; }
      .labels .row { display: grid; grid-template-columns: 180px 1fr; gap: 8px; margin: 6px 0; }
      .labels .name { font-weight: 600; }
      .right { font-size: 12px; color: #333; }
      .right .note { margin-top: 8px; }
      .right ul { margin: 8px 0 0 16px; }
      .right ul li { margin: 4px 0; }
      .red { color: #d32f2f; font-weight: 600; }
    </style>
  </head>
  <body>
    <div class='wrap'>
      <div class='head'>
        <img src='${coat}' alt='Coat of Arms' style='height: 64px;'>
        <div class='title'>
          <div class='top'>Federal Republic of Nigeria</div>
          <div class='sub'>Verified NIN Details</div>
        </div>
        <img src='${nimc}' alt='NIMC' style='height: 48px;'>
      </div>

      <div class='grid'>
        <div>
          <div class='labels'>
            <div class='row'><div class='name'>First Name:</div><div>{{first_name}}</div></div>
            <div class='row'><div class='name'>Middle Name:</div><div>{{middle_name}}</div></div>
            <div class='row'><div class='name'>Last Name:</div><div>{{surname}}</div></div>
            <div class='row'><div class='name'>Date of birth:</div><div>{{dob}}{{dateOfBirth}}</div></div>
            <div class='row'><div class='name'>Gender:</div><div>{{gender}}</div></div>
            <div class='row'><div class='name'>NIN Number:</div><div>{{nin}}</div></div>
            <div class='row'><div class='name'>Tracking ID:</div><div>{{tracking_id}}{{trackingId}}</div></div>
            <div class='row'><div class='name'>Phone Number:</div><div>{{phone_number}}</div></div>
            <div class='row'><div class='name'>Email:</div><div>{{email}}</div></div>
            <div class='row'><div class='name'>Employment Status:</div><div>{{employment_status}}</div></div>
            <div class='row'><div class='name'>Marital Status:</div><div>{{marital_status}}</div></div>
            <div class='row'><div class='name'>Education Level:</div><div>{{educational_level}}</div></div>
            <div class='row'><div class='name'>Residence State:</div><div>{{residence_state}}</div></div>
            <div class='row'><div class='name'>Residence LGA/Town:</div><div>{{residence_town}}</div></div>
            <div class='row'><div class='name'>Birth State:</div><div>{{birth_state}}</div></div>
            <div class='row'><div class='name'>Birth LGA:</div><div>{{birth_lga}}</div></div>
            <div class='row'><div class='name'>Birth Country:</div><div>{{birth_country}}</div></div>
            <div class='row'><div class='name'>Height:</div><div>{{height}}</div></div>
            <div class='row'><div class='name'>Parent First Name:</div><div>{{parent_first_name}}</div></div>
            <div class='row'><div class='name'>Spoken Language:</div><div>{{spoken_language}}</div></div>
            <div class='row'><div class='name'>Central ID:</div><div>{{central_id}}</div></div>
            <div class='row'><div class='name'>Address:</div><div>{{address}}</div></div>
            <div class='row'><div class='name'>NOK First Name:</div><div>{{nok_firstname}}</div></div>
            <div class='row'><div class='name'>NOK Middle Name:</div><div>{{nok_middlename}}</div></div>
            <div class='row'><div class='name'>NOK Surname:</div><div>{{nok_surname}}</div></div>
            <div class='row'><div class='name'>NOK Address 1:</div><div>{{nok_address1}}</div></div>
            <div class='row'><div class='name'>NOK Address 2:</div><div>{{nok_address2}}</div></div>
            <div class='row'><div class='name'>NOK State:</div><div>{{nok_state}}</div></div>
            <div class='row'><div class='name'>NOK LGA/Town:</div><div>{{nok_lga_town}}</div></div>
            <div class='row'><div class='name'>NOK Postal Code:</div><div>{{nok_postalcode}}</div></div>
          </div>
          <img class='photo' src='{{image}}' alt='Photo' />
        </div>
        <div class='right'>
          <div class='verified'>Verified</div>
          <div class='note'>This is a property of National Identity Management Commission (NIMC), Nigeria.
            If found, please return to the nearest NIMC's office or contact +234 815 769 1214, +234 815 769 1071
          </div>
          <ul>
            <li>This NIN slip remains the property of the Federal Republic of Nigeria, and MUST be surrendered on demand;</li>
            <li>This NIN slip does not imply nor confer citizenship of the Federal Republic of Nigeria on the individual the document is issued to;</li>
            <li>This NIN slip is valid for the lifetime of the holder and <span class='red'>DOES NOT EXPIRE.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </body>
</html>`;
        return base;
    }
    const base = `<div style='font-family:Arial,sans-serif;padding:24px'>
  <h2 style='text-align:center;margin:0;'>UFriends Information Technology</h2>
  <h3 style='text-align:center;margin:8px 0;'>${name}</h3>
  <div style='margin-top:16px;font-size:12px;'>
    <div>Date: {{date_of_birth}}{{dob}}</div>
    <div>Name: {{full_name}}{{first_name}} {{last_name}}</div>
    <div>NIN: {{nin}}</div>
    <div>BVN: {{bvn}}</div>
    <div>Passport No: {{passport_number}}</div>
    <div>Driver License: {{licenseNumber}}{{license_number}}</div>
    <div>Phone: {{phoneNumber}}{{phone}}</div>
    <div>Plate: {{plate_number}}{{plateNumber}}</div>
    <div>VIN: {{number}}{{vin}}</div>
    <div>RC/BN: {{rc_number}}{{rcNumber}}</div>
    <div>Entity: {{company_name}}{{name}}</div>
    <div>TIN: {{tin}}</div>
  </div>
  <div style='position:fixed;bottom:24px;font-size:10px;'>Note: Generated by UFriends.com.ng</div>
</div>`;
    return `<!DOCTYPE html><html><head><meta charset='utf-8'></head><body>${base}</body></html>`;
}
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
        const body = await req.json().catch(()=>({}));
        const action = String(body?.action || "").trim();
        const slipType = String(body?.slipType || "").trim() || undefined;
        if (!action) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Missing action"
        }, {
            status: 400
        });
        const name = nameFor(action, slipType);
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].ninTemplate.findFirst({
            where: {
                name
            }
        });
        const html = htmlFor(action, name, slipType);
        const matches = Array.from(html.matchAll(/\{\{\s*([a-zA-Z0-9_\.]+)\s*\}\}/g)).map((m)=>`{{${m[1]}}}`);
        const placeholders = [
            ...new Set(matches)
        ];
        if (existing && existing.isActive) {
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].ninTemplate.update({
                where: {
                    id: existing.id
                },
                data: {
                    templateContent: html,
                    placeholders
                }
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true,
                templateId: updated.id,
                name
            });
        }
        const created = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].ninTemplate.upsert({
            where: {
                id: existing?.id || ""
            },
            update: {
                name,
                type: "digital",
                templateContent: html,
                placeholders,
                isActive: true
            },
            create: {
                name,
                type: "digital",
                templateContent: html,
                placeholders,
                isActive: true,
                createdBy: auth.user.id
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            templateId: created.id,
            name
        });
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: String(err?.message || err)
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a6904858._.js.map