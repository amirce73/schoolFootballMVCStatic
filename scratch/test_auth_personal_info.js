const http = require('http');

http.get('http://localhost:5035/', res => {
  let html = '';
  const c1 = res.headers['set-cookie'] || [];
  res.on('data', c => html += c);
  res.on('end', () => {
    console.log('/ status:', res.statusCode);
    const m = html.match(/name="__RequestVerificationToken"\s+type="hidden"\s+value="([^"]+)"/) ||
              html.match(/name="__RequestVerificationToken"\s+value="([^"]+)"/) ||
              html.match(/value="([^"]+)"\s+name="__RequestVerificationToken"/);
    if (!m) {
      console.log('No token found in /, HTML snippet:', html.substr(html.indexOf('AntiForgeryToken'), 300));
      return;
    }
    const token = m[1];
    console.log('Found token:', token.substring(0, 15) + '...');
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
      console.log('POST status:', res2.statusCode, 'location:', res2.headers['location']);
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
        console.log('/personal-info GET status:', res3.statusCode);
        let b = '';
        res3.on('data', x => b += x);
        res3.on('end', () => {
          console.log('Rendered HTML length:', b.length);
          console.log('Has #alaram_box:', b.includes('id="alaram_box"'));
          console.log('Has #divLoader:', b.includes('id="divLoader"'));
          console.log('Has alarm_progress_bar:', b.includes('alarm_progress_bar'));
          console.log('Has fs-modal-backdrop:', b.includes('fs-modal-backdrop'));
          console.log('Has CheckMeliCode:', b.includes('CheckMeliCode'));
          
          // Check position of alaram_box relative to <body> and scripts
          const bodyEndIdx = b.indexOf('</body>');
          const alarmIdx = b.indexOf('id="alaram_box"');
          const scriptIdx = b.indexOf('src="/js/personal-info.js"');
          console.log('alaram_box index:', alarmIdx, 'script index:', scriptIdx, 'body end:', bodyEndIdx);
          if (alarmIdx !== -1 && bodyEndIdx !== -1) {
              console.log('alaram_box is located near bottom of body before scripts:', alarmIdx < bodyEndIdx);
          }
        });
      });
    });
    req.write(data);
    req.end();
  });
});
