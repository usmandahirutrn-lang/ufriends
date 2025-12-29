const { SignJWT } = require("jose")

function nowSeconds() {
  return Math.floor(Date.now() / 1000)
}

async function main() {
  const sub = process.env.SUB || "cmh8y9ip70000vvu46e8tnhgn"
  const email = process.env.EMAIL || "admin@ufriends.local"
  const role = process.env.ROLE || "ADMIN"
  const exp = parseInt(process.env.EXP_SECONDS || "900", 10)
  const secret = new TextEncoder().encode(process.env.JWT_SECRET || "dev_access_secret")

  const token = await new SignJWT({ sub, email, role })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt(nowSeconds())
    .setExpirationTime(nowSeconds() + exp)
    .sign(secret)

  console.log(token)
}

main().catch((err) => {
  console.error("Failed to mint token:", err)
  process.exit(1)
})