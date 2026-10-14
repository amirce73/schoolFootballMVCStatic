const http = require('http');

http.get('http://localhost:5035/', res => {
  let html = '';
  const c1 = res.headers['set-cookie'] || [];
  res.on('data', c => html += c);
  res.on('end', () => {
    const m = html.match(/name="__RequestVerificationToken"\s+type="hidden"\s+value="([^"]+)"/) ||
              html.match(/name="__RequestVerificationToken"\s+value="([^"]+)"/) ||
              html.match(/value="([^"]+)"\s+name="__RequestVerificationToken"/);
    if (!m) return console.log('No token');
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
      
      // Get personal-info page to get verification token
      http.get({
        hostname: 'localhost',
        port: 5035,
        path: '/personal-info',
        headers: { 'Cookie': allCookies }
      }, res3 => {
        let pInfoHtml = '';
        res3.on('data', x => pInfoHtml += x);
        res3.on('end', () => {
          const tokMatch = pInfoHtml.match(/name="__RequestVerificationToken"\s+value="([^"]+)"/) ||
                           pInfoHtml.match(/value="([^"]+)"\s+name="__RequestVerificationToken"/);
          const pToken = tokMatch ? tokMatch[1] : token;

          // Now POST personal info with FatherJob, Occupation, IssuePlace containing no numbers
          const boundary = '----WebKitFormBoundary' + Math.random().toString(36).substring(2);
          const postFields = [
            { name: 'name', value: 'علی' },
            { name: 'family', value: 'محمدی' },
            { name: 'internationalId', value: '0012345678' },
            { name: 'gender', value: 'مرد' },
            { name: 'birthDate', value: '1390/05/15' },
            { name: 'birthDateMiladi', value: '2011/08/06' },
            { name: 'issuePlace', value: 'تهران' },
            { name: 'fatherName', value: 'رضا' },
            { name: 'fatherJob', value: 'کارمند' },
            { name: 'occupation', value: 'دانش آموز' },
            { name: 'healthStatus', value: 'سالم' },
            { name: 'nationality', value: 'ایران' },
            { name: '__RequestVerificationToken', value: pToken }
          ];

          let body = '';
          for (const f of postFields) {
            body += `--${boundary}\r\n`;
            body += `Content-Disposition: form-data; name="${f.name}"\r\n\r\n`;
            body += `${f.value}\r\n`;
          }
          body += `--${boundary}--\r\n`;

          const postReq = http.request({
            hostname: 'localhost',
            port: 5035,
            path: '/personal-info',
            method: 'POST',
            headers: {
              'Content-Type': `multipart/form-data; boundary=${boundary}`,
              'Content-Length': Buffer.byteLength(body),
              'Cookie': allCookies,
              'X-Requested-With': 'XMLHttpRequest'
            }
          }, res4 => {
            let resBody = '';
            res4.on('data', d => resBody += d);
            res4.on('end', () => {
              console.log('Save response status:', res4.statusCode);
              console.log('Save response body:', resBody);
            });
          });
          postReq.write(body);
          postReq.end();
        });
      });
    });
    req.write(data);
    req.end();
  });
});
