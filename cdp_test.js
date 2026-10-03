const http = require('http');
const fs = require('fs');
const { spawn } = require('child_process');

async function getDebuggerUrl(port) {
    for (let i = 0; i < 30; i++) {
        try {
            const data = await new Promise((resolve, reject) => {
                http.get(`http://127.0.0.1:${port}/json/version`, res => {
                    let b = '';
                    res.on('data', c => b += c);
                    res.on('end', () => resolve(JSON.parse(b)));
                }).on('error', reject);
            });
            if (data && data.webSocketDebuggerUrl) return data.webSocketDebuggerUrl;
        } catch (e) {
            await new Promise(r => setTimeout(r, 500));
        }
    }
    throw new Error('Could not connect to Chrome debugger');
}

class CDPClient {
    constructor(wsUrl) {
        this.ws = new WebSocket(wsUrl);
        this.id = 1;
        this.callbacks = new Map();
        this.events = new Map();

        this.ready = new Promise((resolve, reject) => {
            this.ws.onopen = resolve;
            this.ws.onerror = reject;
        });

        this.ws.onmessage = (msg) => {
            const res = JSON.parse(msg.data);
            if (res.id && this.callbacks.has(res.id)) {
                const cb = this.callbacks.get(res.id);
                this.callbacks.delete(res.id);
                if (res.error) cb.reject(res.error);
                else cb.resolve(res.result);
            }
        };
    }

    async send(method, params = {}) {
        await this.ready;
        const id = this.id++;
        return new Promise((resolve, reject) => {
            this.callbacks.set(id, { resolve, reject });
            this.ws.send(JSON.stringify({ id, method, params }));
        });
    }

    async evaluate(expr) {
        const res = await this.send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
        return res.result ? res.result.value : null;
    }

    async screenshot(filepath) {
        const res = await this.send('Page.captureScreenshot', { format: 'png' });
        fs.writeFileSync(filepath, Buffer.from(res.data, 'base64'));
        console.log(`Saved screenshot: ${filepath}`);
    }

    close() {
        this.ws.close();
    }
}

async function main() {
    console.log('1. Launching Chrome headless with remote debugging on port 9222...');
    const userDataDir = 'e:\\amirce73\\FootballSchoolMVC\\.chrome_data';
    const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
        '--headless=new',
        '--remote-debugging-port=9222',
        `--user-data-dir=${userDataDir}`,
        '--window-size=1440,900',
        'about:blank'
    ], { stdio: 'ignore' });

    try {
        const wsUrl = await getDebuggerUrl(9222);
        console.log('Connected to Chrome:', wsUrl);

        // Create new tab/target
        const client = new CDPClient(wsUrl);
        const target = await client.send('Target.createTarget', { url: 'about:blank' });
        const targetWsUrl = `ws://127.0.0.1:9222/devtools/page/${target.targetId}`;
        const pageClient = new CDPClient(targetWsUrl);

        await pageClient.send('Page.enable');
        await pageClient.send('Runtime.enable');

        console.log('\n2. Navigating to http://localhost:5035/ ...');
        await pageClient.send('Page.navigate', { url: 'http://localhost:5035/' });
        await new Promise(r => setTimeout(r, 2000));

        let currentUrl = await pageClient.evaluate('window.location.href');
        console.log('Current URL:', currentUrl);

        // Enter mobile number and submit
        console.log('\n3. Logging in with 09123456789...');
        await pageClient.evaluate(`
            const inp = document.getElementById('mobileInput') || document.querySelector('input[name="Mobile"]');
            if (inp) { inp.value = '09123456789'; }
            const form = document.querySelector('form');
            if (form) { form.submit(); }
        `);

        await new Promise(r => setTimeout(r, 3000));
        currentUrl = await pageClient.evaluate('window.location.href');
        console.log('URL after login:', currentUrl);

        if (currentUrl.includes('/dashboard')) {
            console.log('SUCCESS: Landed on Dashboard!');
            await pageClient.screenshot('e:\\amirce73\\FootballSchoolMVC\\dashboard_view.png');

            // 4. Test button clicks on dashboard:
            // a. Click "تکمیل اطلاعات"
            console.log('\n--- Testing Dashboard -> Profile Hub ---');
            await pageClient.evaluate(`
                const btn = document.querySelector('.btn-mini');
                if (btn) btn.click();
            `);
            await new Promise(r => setTimeout(r, 1500));
            console.log('URL after clicking "تکمیل اطلاعات":', await pageClient.evaluate('window.location.href'));

            // Click Personal info
            console.log('\n--- Testing Profile Hub -> Personal Info ---');
            await pageClient.evaluate(`
                const items = document.querySelectorAll('.frame-item');
                if (items[0]) items[0].click();
            `);
            await new Promise(r => setTimeout(r, 1500));
            console.log('URL after clicking "اطلاعات شخصی":', await pageClient.evaluate('window.location.href'));

            // Click Back
            console.log('\n--- Testing Personal Info -> Back ---');
            await pageClient.evaluate(`
                const back = document.querySelector('.btn-back-top');
                if (back) back.click();
            `);
            await new Promise(r => setTimeout(r, 1500));
            console.log('URL after back:', await pageClient.evaluate('window.location.href'));

            // Click Back to Dashboard
            console.log('\n--- Testing Profile Hub -> Back to Dashboard ---');
            await pageClient.evaluate(`
                const back = document.querySelector('.btn-back-top');
                if (back) back.click();
            `);
            await new Promise(r => setTimeout(r, 1500));
            console.log('URL after back:', await pageClient.evaluate('window.location.href'));

            // Click Registration Card
            console.log('\n--- Testing Dashboard -> Registration ---');
            await pageClient.evaluate(`
                const reg = document.querySelector('.registration-card');
                if (reg) reg.click();
            `);
            await new Promise(r => setTimeout(r, 1500));
            console.log('URL after clicking "ثبت‌نام آنلاین":', await pageClient.evaluate('window.location.href'));

            // Click Financial Timeline from registration
            console.log('\n--- Testing Registration -> Financial Timeline ---');
            await pageClient.evaluate(`
                const btns = Array.from(document.querySelectorAll('button'));
                const timelineBtn = btns.find(b => b.textContent.includes('تایم‌لاین مالی'));
                if (timelineBtn) timelineBtn.click();
            `);
            await new Promise(r => setTimeout(r, 1500));
            console.log('URL after clicking timeline button:', await pageClient.evaluate('window.location.href'));

            // Click Back to Financial Hub
            console.log('\n--- Testing Financial Timeline -> Back ---');
            await pageClient.evaluate(`
                const back = document.querySelector('.btn-back-top');
                if (back) back.click();
            `);
            await new Promise(r => setTimeout(r, 1500));
            console.log('URL after back:', await pageClient.evaluate('window.location.href'));

            // Click Specialized Nav
            console.log('\n--- Testing Sidebar -> Specialized Hub ---');
            await pageClient.evaluate(`
                const specNav = Array.from(document.querySelectorAll('.dnav-item, .bnav-item')).find(a => a.href.includes('specialized-hub'));
                if (specNav) specNav.click();
            `);
            await new Promise(r => setTimeout(r, 1500));
            console.log('URL after clicking Specialized nav:', await pageClient.evaluate('window.location.href'));

            // Click Attendance card
            console.log('\n--- Testing Specialized Hub -> Attendance ---');
            await pageClient.evaluate(`
                const items = Array.from(document.querySelectorAll('.spec-item'));
                const attItem = items.find(i => i.textContent.includes('حضور'));
                if (attItem) attItem.click();
            `);
            await new Promise(r => setTimeout(r, 1500));
            console.log('URL after clicking Attendance:', await pageClient.evaluate('window.location.href'));

            // Click Back to Specialized Hub
            console.log('\n--- Testing Attendance -> Back ---');
            await pageClient.evaluate(`
                const back = document.querySelector('.btn-back-top');
                if (back) back.click();
            `);
            await new Promise(r => setTimeout(r, 1500));
            console.log('URL after back:', await pageClient.evaluate('window.location.href'));

            // Click Topbar Bell
            console.log('\n--- Testing Topbar Bell -> Bulletin ---');
            await pageClient.evaluate(`
                const bell = document.querySelector('.btn-noti');
                if (bell) bell.click();
            `);
            await new Promise(r => setTimeout(r, 1500));
            console.log('URL after clicking Bell:', await pageClient.evaluate('window.location.href'));

            // Click Back to Dashboard
            console.log('\n--- Testing Bulletin -> Back ---');
            await pageClient.evaluate(`
                const back = document.querySelector('.btn-back-top');
                if (back) back.click();
            `);
            await new Promise(r => setTimeout(r, 1500));
            console.log('URL after back:', await pageClient.evaluate('window.location.href'));
        }

        pageClient.close();
        client.close();
    } finally {
        chrome.kill();
        console.log('\nChrome process terminated.');
    }
}

main().catch(err => {
    console.error('Error in CDP test:', err);
});
