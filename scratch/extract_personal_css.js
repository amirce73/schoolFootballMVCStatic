const fs = require('fs');

const pCss = fs.readFileSync('wwwroot/css/personal-info.css', 'utf8');
const playerCss = fs.readFileSync('wwwroot/css/player.css', 'utf8');

// Find all rules in personal-info.css
const ruleRegex = /([^{}]+)\{([^{}]+)\}/g;
let match;
const rules = [];
while ((match = ruleRegex.exec(pCss)) !== null) {
    const sel = match[1].trim();
    const body = match[2].trim();
    if (sel.startsWith('@font-face') || sel.startsWith('@keyframes') || sel === ':root' || sel.startsWith('*') || sel === 'html' || sel === 'body' || sel === 'a' || sel === 'img') {
        continue;
    }
    rules.push({ selector: sel, body });
}

console.log('Total selectors in personal-info.css:', rules.length);
const notInPlayer = [];
for (const r of rules) {
    const firstSel = r.selector.split(',')[0].trim();
    if (!playerCss.includes(firstSel)) {
        notInPlayer.push(r.selector);
    }
}
console.log('Selectors not in player.css:', notInPlayer);
