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
    console.log('=== Starting Verification of Frontend Navigation and Routes ===\n');

    // 1. Login
    console.log('1. Logging in via HTTP POST / ...');
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
    console.log(`Login status: ${loginRes.statusCode}, Received cookies: ${cookies ? 'YES' : 'NO'}`);

    const pagesToTest = [
        { name: 'dashboard', backExpected: null },
        { name: 'profile-hub', backExpected: '/dashboard' },
        { name: 'financial-hub', backExpected: '/dashboard' },
        { name: 'specialized-hub', backExpected: '/dashboard' },
        { name: 'registration', backExpected: '/dashboard' },
        { name: 'store', backExpected: '/dashboard' },
        { name: 'gallery', backExpected: '/dashboard' },
        { name: 'training-backpack', backExpected: '/dashboard' },
        { name: 'financial-timeline', backExpected: '/financial-hub' },
        { name: 'verification', backExpected: '/profile-hub' },
        { name: 'registration-history', backExpected: '/specialized-hub' },
        { name: 'personal-info', backExpected: '/profile-hub' },
        { name: 'contact-info', backExpected: '/profile-hub' },
        { name: 'passport-info', backExpected: '/profile-hub' },
        { name: 'bank-info', backExpected: '/financial-hub' },
        { name: 'sports-info', backExpected: '/profile-hub' },
        { name: 'club-info', backExpected: '/profile-hub' },
        { name: 'clothing-info', backExpected: '/profile-hub' },
        { name: 'documents', backExpected: '/profile-hub' },
        { name: 'password', backExpected: '/profile-hub' },
        { name: 'attendance', backExpected: '/specialized-hub' },
        { name: 'talent', backExpected: '/specialized-hub' },
        { name: 'insurance', backExpected: '/specialized-hub' },
        { name: 'insurance-status', backExpected: '/specialized-hub' },
        { name: 'certificate', backExpected: '/documents' },
        { name: 'bulletin', backExpected: '/dashboard' }
    ];

    let passedCount = 0;
    let failedCount = 0;

    for (const p of pagesToTest) {
        const url = `http://localhost:5035/${p.name}`;
        const res = await request(url, { headers: { 'Cookie': cookies } });

        if (res.statusCode !== 200) {
            console.error(`[FAIL] ${p.name} returned status ${res.statusCode}`);
            failedCount++;
            continue;
        }

        const html = res.body;

        // Check Back Button
        if (p.backExpected) {
            const hasExpectedBack = html.includes(`window.location.href='${p.backExpected}'`) ||
                                   html.includes(`window.location.href="${p.backExpected}"`);
            if (!hasExpectedBack) {
                console.error(`[FAIL BACK] ${p.name}: Back button destination mismatch! Expected ${p.backExpected}`);
                failedCount++;
            }
        }

        // Check Topbar Verification Shield link
        const hasVerificationLink = html.includes('href="/verification"') || html.includes("window.location.href='/verification'");
        if (!hasVerificationLink) {
            console.error(`[FAIL TOPBAR] ${p.name}: Missing /verification link`);
            failedCount++;
        }

        // Check Topbar Bulletin Bell button
        const hasBulletinBell = html.includes('window.location.href=\'/bulletin\'') || html.includes('href="/bulletin"');
        if (!hasBulletinBell) {
            console.error(`[FAIL BELL] ${p.name}: Missing /bulletin bell button`);
            failedCount++;
        }

        console.log(`[PASS] ${p.name.padEnd(22)}: HTTP 200 | Back -> ${p.backExpected || '(root)'} | Topbar OK`);
        passedCount++;
    }

    console.log('\n--- Specific Hub & Interactive Element Verifications ---');

    // Test Dashboard Elements
    const dashRes = await request('http://localhost:5035/dashboard', { headers: { 'Cookie': cookies } });
    const dashHtml = dashRes.body;
    const dashChecks = [
        { name: 'Profile Complete btn-mini', target: '/profile-hub' },
        { name: 'Registration Card', target: '/registration' },
        { name: 'Attendance Card', target: '/attendance' },
        { name: 'BMI Card', target: '/personal-info' },
        { name: 'Talent Card', target: '/talent' },
        { name: 'Insurance Card', target: '/insurance-status' },
        { name: 'Store Card', target: '/store' },
        { name: 'Gallery Card', target: '/gallery' },
        { name: 'Backpack Card', target: '/training-backpack' },
        { name: 'Bulletin News Card', target: '/bulletin' }
    ];
    dashChecks.forEach(c => {
        if (dashHtml.includes(c.target)) {
            console.log(`[DASHBOARD OK] ${c.name} -> ${c.target}`);
        } else {
            console.error(`[DASHBOARD FAIL] ${c.name} missing target ${c.target}`);
            failedCount++;
        }
    });

    // Test Profile Hub Frame Elements
    const profRes = await request('http://localhost:5035/profile-hub', { headers: { 'Cookie': cookies } });
    const profHtml = profRes.body;
    const profChecks = [
        { name: 'Personal Info', target: '/personal-info' },
        { name: 'Contact Info', target: '/contact-info' },
        { name: 'Passport Info', target: '/passport-info' },
        { name: 'Sports Info', target: '/sports-info' },
        { name: 'Club Info', target: '/club-info' },
        { name: 'Documents', target: '/documents' },
        { name: 'Password', target: '/password' },
        { name: 'Verification Banner', target: '/verification' }
    ];
    profChecks.forEach(c => {
        if (profHtml.includes(c.target)) {
            console.log(`[PROFILE HUB OK] ${c.name} -> ${c.target}`);
        } else {
            console.error(`[PROFILE HUB FAIL] ${c.name} missing target ${c.target}`);
            failedCount++;
        }
    });

    // Test Specialized Hub Elements
    const specRes = await request('http://localhost:5035/specialized-hub', { headers: { 'Cookie': cookies } });
    const specHtml = specRes.body;
    const specChecks = [
        { name: 'Attendance Item', target: '/attendance' },
        { name: 'Registration History', target: '/registration-history' },
        { name: 'Talent Item', target: '/talent' },
        { name: 'Insurance Status', target: '/insurance-status' },
        { name: 'Certificate Item', target: '/certificate' }
    ];
    specChecks.forEach(c => {
        if (specHtml.includes(c.target)) {
            console.log(`[SPECIALIZED HUB OK] ${c.name} -> ${c.target}`);
        } else {
            console.error(`[SPECIALIZED HUB FAIL] ${c.name} missing target ${c.target}`);
            failedCount++;
        }
    });

    // Test Financial Hub Elements
    const finRes = await request('http://localhost:5035/financial-hub', { headers: { 'Cookie': cookies } });
    const finHtml = finRes.body;
    const finChecks = [
        { name: 'Bank Accounts', target: '/bank-info' },
        { name: 'Financial Timeline', target: '/financial-timeline' }
    ];
    finChecks.forEach(c => {
        if (finHtml.includes(c.target)) {
            console.log(`[FINANCIAL HUB OK] ${c.name} -> ${c.target}`);
        } else {
            console.error(`[FINANCIAL HUB FAIL] ${c.name} missing target ${c.target}`);
            failedCount++;
        }
    });

    console.log(`\n=== Verification Summary: ${passedCount} Pages Verified, ${failedCount} Failures ===`);
}

run().catch(console.error);
