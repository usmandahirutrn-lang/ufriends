module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/lib/mailer.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mailer",
    ()=>mailer,
    "sendEmail",
    ()=>sendEmail,
    "sendOtpEmail",
    ()=>sendOtpEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nodemailer/lib/nodemailer.js [app-route] (ecmascript)");
;
const host = process.env.EMAIL_SERVER_HOST;
const port = Number(process.env.EMAIL_SERVER_PORT || 465);
const user = process.env.EMAIL_SERVER_USER;
const pass = process.env.EMAIL_SERVER_PASSWORD;
const from = process.env.EMAIL_FROM || "UFriends IT <no-reply@ufriends.com>";
const mailer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createTransport({
    host,
    port,
    secure: port === 465,
    auth: user && pass ? {
        user,
        pass
    } : undefined
});
async function sendEmail({ to, subject, text, html }) {
    try {
        await mailer.sendMail({
            from,
            to,
            subject,
            text,
            html
        });
        return {
            success: true
        };
    } catch (error) {
        console.error("Email sending failed:", error);
        return {
            success: false,
            error
        };
    }
}
async function sendOtpEmail(to, code) {
    const subject = "Your UFriends verification code";
    const text = `Your verification code is ${code}. It expires in 5 minutes.`;
    const html = `<p>Your verification code is <strong>${code}</strong>.</p><p>It expires in 5 minutes.</p>`;
    return sendEmail({
        to,
        subject,
        text,
        html
    });
}
}),
"[project]/lib/notifications.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendAdminNotification",
    ()=>sendAdminNotification,
    "sendNotification",
    ()=>sendNotification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mailer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mailer.ts [app-route] (ecmascript)");
;
;
async function sendNotification({ userId, type, title, body, email }) {
    try {
        // 1. Create In-App Notification
        const notification = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].notification.create({
            data: {
                userId,
                type,
                title,
                body
            }
        });
        // 2. Send Email Notification if requested
        if (email) {
            const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                where: {
                    id: userId
                },
                select: {
                    email: true
                }
            });
            if (user?.email) {
                // We don't await email to prevent blocking the main flow, 
                // but it's already handled in sendEmail with catch
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mailer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendEmail"])({
                    to: user.email,
                    subject: email.subject,
                    html: email.html,
                    text: email.text || body
                });
            }
        }
        return notification;
    } catch (error) {
        console.error("Failed to send notification:", error);
        return null;
    }
}
async function sendAdminNotification({ type, title, body, email }) {
    try {
        // Find all admins
        const admins = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findMany({
            where: {
                role: "ADMIN"
            },
            select: {
                id: true,
                email: true
            }
        });
        const results = await Promise.all(admins.map(async (admin)=>{
            // Create In-App Notification for each admin
            const notif = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].notification.create({
                data: {
                    userId: admin.id,
                    type,
                    title,
                    body
                }
            });
            // Send Email to each admin
            if (email) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mailer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendEmail"])({
                    to: admin.email,
                    subject: email.subject,
                    html: email.html,
                    text: email.text || body
                });
            }
            return notif;
        }));
        return results;
    } catch (error) {
        console.error("Failed to send admin notification:", error);
        return null;
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__453ca7d8._.js.map