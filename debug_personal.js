const http = require('http');

async function request(url, options = {}, postData = null) {
    return new Promise((resolve, reject) => {
        const u = new URL(url);
        const reqOptions = {
            hostname: u.hostname,
            port: u.port,
            path: u.pathname + u.search,
            method: options.method || 'GET',
            headers: options.headers || {}
        };

        const req = http.request(reqOptions, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                resolve({
                    statusCode: res.statusCode,
                    headers: res.headers,
                    body: body
                });
            });
        });

        req.on('error', reject);
        if (postData) {
            req.write(postData);
        }
        req.end();
    });
}

async function run() {
    const loginPage = await request('http://localhost:5035/');
    const tokenMatch = loginPage.body.match(/name="__RequestVerificationToken"\s+type="hidden"\s+value="([^"]+)"/);
    const token = tokenMatch ? tokenMatch[1] : '';

    const postBody = `Mobile=09123456789&__RequestVerificationToken=${encodeURIComponent(token)}`;
    const loginRes = await request('http://localhost:5035/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postBody),
            'Cookie': (loginPage.headers['set-cookie'] || []).join('; ')
        }
    }, postBody);

    const cookies = (loginRes.headers['set-cookie'] || []).concat(loginPage.headers['set-cookie'] || []).join('; ');

    const res = await request('http://localhost:5035/personal-info', { headers: { 'Cookie': cookies } });
    const navIdx = res.body.indexOf('<nav class="top-navbar">');
    console.log(res.body.substring(navIdx, navIdx + 2000));
}

run().catch(console.error);
