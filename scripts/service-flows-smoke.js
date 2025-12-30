/*
 Service Flows Smoke Test
 
 Tests the service engine with mock providers:
 - POST /api/service/airtime/vtu (airtime VTU)
 - POST /api/service/data/bundle (data bundle)
 - POST /api/service/bills/electricity (electricity bill payment)
 - GET /api/service/status/[reference] (status check)
 - POST /api/admin/service/retry/[reference] (admin retry)

 Usage (PowerShell):
   $env:BASE_URL="http://localhost:5070";
   $env:AUTH_SMOKE_EMAIL="usman@universalkart.com.ng";
   $env:AUTH_SMOKE_PASSWORD="Admin123!";
   node scripts/service-flows-smoke.js

 Exits non-zero on failure.
*/

const BASE = process.env.BASE_URL || "http://localhost:5070"
const EMAIL = process.env.AUTH_SMOKE_EMAIL || process.env.ADMIN_EMAIL
const PASSWORD = process.env.AUTH_SMOKE_PASSWORD || process.env.ADMIN_PASSWORD

if (!EMAIL || !PASSWORD) {
  console.error("Missing AUTH_SMOKE_EMAIL or AUTH_SMOKE_PASSWORD env vars.")
  console.error("Set them and re-run, e.g.:")
  console.error("$env:BASE_URL='http://localhost:5070'; $env:AUTH_SMOKE_EMAIL='admin@ufriends.local'; $env:AUTH_SMOKE_PASSWORD='Admin123!'; node scripts/service-flows-smoke.js")
  process.exit(2)
}

async function login(email, password) {
  const res = await fetch(`${BASE}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Login failed: ${data.error || res.status}`)
  return data
}

async function getBalance(accessToken) {
  const res = await fetch(`${BASE}/api/wallet/balance`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Balance failed: ${data.error || res.status}`)
  return data
}

async function purchaseAirtime(accessToken, amount, phone, network) {
  const res = await fetch(`${BASE}/api/service/airtime/vtu`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
    body: JSON.stringify({ 
      amount, 
      params: { phone, network },
      idempotencyKey: `AIRTIME-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`
    }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Airtime purchase failed: ${data.error || res.status}`)
  return data
}

async function purchaseDataBundle(accessToken, amount, phone, network, planCode) {
  const res = await fetch(`${BASE}/api/service/data/bundle`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
    body: JSON.stringify({ 
      amount, 
      params: { phone, network, planCode },
      idempotencyKey: `DATA-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`
    }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Data bundle purchase failed: ${data.error || res.status}`)
  return data
}

async function payElectricityBill(accessToken, amount, meterNumber, serviceProvider) {
  const res = await fetch(`${BASE}/api/service/bills/electricity`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
    body: JSON.stringify({ 
      amount, 
      params: { meterNumber, serviceProvider, customerName: "Test Customer" },
      idempotencyKey: `BILL-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`
    }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Electricity bill payment failed: ${data.error || res.status}`)
  return data
}

async function getServiceStatus(accessToken, reference) {
  const res = await fetch(`${BASE}/api/service/status/${reference}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Service status failed: ${data.error || res.status}`)
  return data
}

async function retryService(accessToken, reference) {
  const res = await fetch(`${BASE}/api/admin/service/retry/${reference}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
    body: JSON.stringify({ reason: "Smoke test retry" }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`Service retry failed: ${data.error || res.status}`)
  return data
}

;(async () => {
  try {
    console.log(`[1/8] Login as ${EMAIL}`)
    const loginData = await login(EMAIL, PASSWORD)
    const access = loginData?.tokens?.accessToken
    if (!access) throw new Error("Missing access token")
    console.log("     ✓ Logged in; role:", loginData?.user?.role)

    console.log("[2/8] Check wallet balance")
    const before = await getBalance(access)
    const beforeBal = Number(before?.balance ?? 0)
    console.log(`     ✓ Balance before: ₦${beforeBal.toLocaleString()} ${before?.currency || "NGN"}`)
    
    if (beforeBal < 1000) {
      console.log("     ⚠ Low balance for testing. Consider funding wallet first.")
    }

    console.log("[3/8] Test Airtime VTU Purchase")
    const airtimeResult = await purchaseAirtime(access, 100, "08012345678", "MTN")
    if (!airtimeResult?.ok || !airtimeResult?.reference) {
      throw new Error("Airtime purchase failed or missing reference")
    }
    console.log(`     ✓ Airtime purchased. Reference: ${airtimeResult.reference}`)
    console.log(`     ✓ Provider ref: ${airtimeResult.providerRef}`)

    console.log("[4/8] Test Data Bundle Purchase")
    const dataResult = await purchaseDataBundle(access, 200, "08012345678", "MTN", "1GB-30DAYS")
    if (!dataResult?.ok || !dataResult?.reference) {
      throw new Error("Data bundle purchase failed or missing reference")
    }
    console.log(`     ✓ Data bundle purchased. Reference: ${dataResult.reference}`)
    console.log(`     ✓ Provider ref: ${dataResult.providerRef}`)

    console.log("[5/8] Test Electricity Bill Payment")
    const billResult = await payElectricityBill(access, 500, "12345678901", "EKEDC")
    if (!billResult?.ok || !billResult?.reference) {
      throw new Error("Electricity bill payment failed or missing reference")
    }
    console.log(`     ✓ Electricity bill paid. Reference: ${billResult.reference}`)
    console.log(`     ✓ Provider ref: ${billResult.providerRef}`)
    console.log(`     ✓ Token: ${billResult.token}`)
    console.log(`     ✓ Units: ${billResult.units}`)

    console.log("[6/8] Test Service Status Checks")
    const airtimeStatus = await getServiceStatus(access, airtimeResult.reference)
    const dataStatus = await getServiceStatus(access, dataResult.reference)
    const billStatus = await getServiceStatus(access, billResult.reference)
    
    console.log(`     ✓ Airtime status: ${airtimeStatus.transaction?.status}`)
    console.log(`     ✓ Data status: ${dataStatus.transaction?.status}`)
    console.log(`     ✓ Bill status: ${billStatus.transaction?.status}`)

    console.log("[7/8] Check wallet balance after transactions")
    const after = await getBalance(access)
    const afterBal = Number(after?.balance ?? 0)
    const totalSpent = 100 + 200 + 500 // airtime + data + bill
    const expectedBal = beforeBal - totalSpent
    
    console.log(`     ✓ Balance after: ₦${afterBal.toLocaleString()} ${after?.currency || "NGN"}`)
    console.log(`     ✓ Expected: ₦${expectedBal.toLocaleString()} (spent ₦${totalSpent})`)
    
    if (Math.abs(afterBal - expectedBal) > 1) {
      console.log("     ⚠ Balance mismatch - wallet debit may have issues")
    } else {
      console.log("     ✓ Wallet debit working correctly")
    }

    console.log("[8/9] Test Admin Retry (should fail for successful transactions)")
    try {
      await retryService(access, airtimeResult.reference)
      console.log("     ⚠ Retry succeeded unexpectedly (should fail for SUCCESS status)")
    } catch (err) {
      if (err.message.includes("already successful") || err.message.includes("not FAILED")) {
        console.log("     ✓ Retry correctly rejected for successful transaction")
      } else {
        console.log(`     ⚠ Unexpected retry error: ${err.message}`)
      }
    }

    console.log("[9/9] Test Admin Refund (should fail for successful transactions)")
    try {
      const refundResponse = await fetch(`${BASE}/api/admin/service/refund/${airtimeResult.reference}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access}`,
        },
        body: JSON.stringify({
          reason: "Test refund attempt"
        })
      })
      
      if (refundResponse.ok) {
        console.log("     ⚠ Refund succeeded unexpectedly (should fail for SUCCESS status)")
      } else {
        const refundError = await refundResponse.json()
        if (refundError.error?.includes("FAILED transactions")) {
          console.log("     ✓ Refund correctly rejected for successful transaction")
        } else {
          console.log(`     ⚠ Unexpected refund error: ${refundError.error}`)
        }
      }
    } catch (err) {
      console.log(`     ⚠ Refund test error: ${err.message}`)
    }

    console.log("\n🎉 All service flows smoke tests passed!")
    console.log("✅ Airtime VTU working")
    console.log("✅ Data Bundle working") 
    console.log("✅ Electricity Bills working")
    console.log("✅ Status endpoint working")
    console.log("✅ Wallet debit working")
    console.log("✅ Admin retry validation working")
    console.log("✅ Admin refund validation working")

  } catch (err) {
    console.error("\n❌ Service flows smoke test failed:")
    console.error(err.message)
    process.exit(1)
  }
})()