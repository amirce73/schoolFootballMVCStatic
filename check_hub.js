const fs = require('fs');
const s = fs.readFileSync('wwwroot/assets/main.js', 'utf8');
const idx = s.indexOf("window.location.href = '/bank-info'");
if (idx !== -1) {
    console.log(s.substring(idx - 200, idx + 400));
}
