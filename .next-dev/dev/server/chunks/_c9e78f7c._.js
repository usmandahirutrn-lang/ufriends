module.exports = [
"[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
    });
});
}),
"[project]/lib/kyc-check.ts [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/lib_kyc-check_ts_95fab5db._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/lib/kyc-check.ts [app-route] (ecmascript)");
    });
});
}),
];