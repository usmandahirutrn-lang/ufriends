const https = require('http');

const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjbWg4eTlpcDcwMDAwdnZ1NDZlOHRuaGduIiwiZW1haWwiOiJhZG1pbkB1ZnJpZW5kcy5sb2NhbCIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MjAzMjQ3NCwiZXhwIjoxNzYyMDMzMzc0fQ.SdBkLxByQ79eSP3xY-PGtVc_eR_bx17AKchHd9E8l9Y";

const data = JSON.stringify({
  amount: 100,
  params: {
    phone: "08012345678",
    network: "mtn"
  }
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/service/airtime/vtu',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    'Content-Length': Buffer.byteLength(data)
  }
};

const req = https.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Headers: ${JSON.stringify(res.headers)}`);
  
  let body = '';
  res.on('data', (chunk) => {
    body += chunk;
  });
  
  res.on('end', () => {
    console.log('Response Body:', body);
    try {
      const parsed = JSON.parse(body);
      console.log('Parsed Response:', JSON.stringify(parsed, null, 2));
    } catch (e) {
      console.log('Could not parse JSON response');
    }
  });
});

req.on('error', (e) => {
  console.error(`Request error: ${e.message}`);
});

req.write(data);
req.end();