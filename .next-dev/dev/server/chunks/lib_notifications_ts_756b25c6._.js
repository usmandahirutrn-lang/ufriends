module.exports = [
"[project]/lib/notifications.ts [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/node_modules_nodemailer_f0e2e4c8._.js",
  "server/chunks/[root-of-the-server]__453ca7d8._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/lib/notifications.ts [app-route] (ecmascript)");
    });
});
}),
];