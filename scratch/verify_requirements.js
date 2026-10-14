const http = require('http');

http.get('http://localhost:5035/', res => {
  let html = '';
  const c1 = res.headers['set-cookie'] || [];
  res.on('data', c => html += c);
  res.on('end', () => {
    const m = html.match(/name="__RequestVerificationToken"\s+type="hidden"\s+value="([^"]+)"/) ||
              html.match(/name="__RequestVerificationToken"\s+value="([^"]+)"/) ||
              html.match(/value="([^"]+)"\s+name="__RequestVerificationToken"/);
    if (!m) {
      console.log('No token found');
      return;
    }
    const token = m[1];
    const data = 'Mobile=09121111111&__RequestVerificationToken=' + encodeURIComponent(token);
    const req = http.request({
      hostname: 'localhost',
      port: 5035,
      path: '/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data),
        'Cookie': c1.map(x => x.split(';')[0]).join('; ')
      }
    }, res2 => {
      const c2 = res2.headers['set-cookie'] || [];
      const allCookies = c1.concat(c2).map(x => x.split(';')[0]).join('; ');
      
      http.get({
        hostname: 'localhost',
        port: 5035,
        path: '/personal-info',
        headers: {
          'Cookie': allCookies
        }
      }, res3 => {
        let b = '';
        res3.on('data', x => b += x);
        res3.on('end', () => {
            console.log('/personal-info GET status:', res3.statusCode);

            // 1. Check txt_location_id
            const locMatch = b.match(/<input[^>]*id="txt_location_id"[^>]*>/);
            console.log('\n[1] txt_location_id:\n', locMatch ? locMatch[0] : 'NOT FOUND');

            // 2. Check txt_father_job
            const fJobMatch = b.match(/<input[^>]*id="txt_father_job"[^>]*>/);
            console.log('\n[2] txt_father_job:\n', fJobMatch ? fJobMatch[0] : 'NOT FOUND');

            // 3. Check txt_job
            const jobMatch = b.match(/<input[^>]*id="txt_job"[^>]*>/);
            console.log('\n[3] txt_job:\n', jobMatch ? jobMatch[0] : 'NOT FOUND');

            // 4. Check txt_birth_date_miladi
            const miladiMatch = b.match(/<input[^>]*id="txt_birth_date_miladi"[^>]*>/);
            console.log('\n[4] txt_birth_date_miladi:\n', miladiMatch ? miladiMatch[0] : 'NOT FOUND');

            // 5. Check lbl_age
            const ageMatch = b.match(/<input[^>]*id="lbl_age"[^>]*>/);
            console.log('\n[5] lbl_age:\n', ageMatch ? ageMatch[0] : 'NOT FOUND');
        });
      });
    });
    req.write(data);
    req.end();
  });
});
