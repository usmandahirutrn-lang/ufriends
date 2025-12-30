// Simple smoke tests for admin providers endpoints (unauthenticated -> 401)
const BASE_URL = process.env.SMOKE_BASE_URL || "http://localhost:5070";

async function run() {
  const tests = [
    { name: "GET /api/admin/providers", path: "/api/admin/providers", method: "GET" },
    { name: "PATCH /api/admin/providers/:id", path: "/api/admin/providers/test-id", method: "PATCH", body: { name: "X", category: "wallet" } },
    { name: "PATCH /api/admin/providers/category/:category", path: "/api/admin/providers/category/wallet", method: "PATCH", body: { activeProviderId: "test-id" } },
    { name: "POST /api/admin/providers/:id/api-key", path: "/api/admin/providers/test-id/api-key", method: "POST", body: { keyName: "demo", keyValue: "secret" } },
    { name: "DELETE /api/admin/providers/:id/api-key", path: "/api/admin/providers/test-id/api-key?keyId=key-1", method: "DELETE" },
  ];

  const results = [];
  for (const t of tests) {
    try {
      const res = await fetch(`${BASE_URL}${t.path}`,
        {
          method: t.method,
          headers: { "Content-Type": "application/json" },
          body: t.body ? JSON.stringify(t.body) : undefined,
        }
      );
      const ok = res.status === 401;
      results.push({ name: t.name, status: res.status, pass: ok });
      console.log(`${ok ? "PASS" : "FAIL"} ${t.name} -> ${res.status}`);
      if (!ok) {
        const text = await res.text().catch(() => "<no body>");
        console.log(`  Response: ${text.slice(0, 200)}`);
      }
    } catch (err) {
      results.push({ name: t.name, error: String(err), pass: false });
      console.log(`ERROR ${t.name}:`, err);
    }
  }

  const passCount = results.filter(r => r.pass).length;
  console.log(`\n${passCount}/${results.length} tests passed.`);
  const failed = results.filter(r => !r.pass);
  if (failed.length > 0) {
    process.exitCode = 1;
  }
}

run();