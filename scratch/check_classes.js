const fs = require('fs');
const html = fs.readFileSync('Views/Pages/personal-info.cshtml', 'utf8');
const css = fs.readFileSync('wwwroot/css/player.css', 'utf8');
const classRegex = /class="([^"]+)"/g;
let match;
const classes = new Set();
while ((match = classRegex.exec(html)) !== null) {
  match[1].split(/\s+/).filter(Boolean).forEach(c => classes.add(c));
}
console.log('Classes in personal-info.cshtml:', Array.from(classes));
const missing = [];
for (const c of classes) {
  if (!css.includes('.' + c)) missing.push(c);
}
console.log('Missing from player.css:', missing);
