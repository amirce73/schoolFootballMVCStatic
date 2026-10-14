const fs = require('fs');

const pInfoPath = 'e:/amirce73/FootballSchoolMVC/wwwroot/js/personal-info.js';
const playerJsPath = 'e:/amirce73/FootballSchoolMVC/wwwroot/js/player.js';

const pInfoContent = fs.readFileSync(pInfoPath, 'utf8');
let playerContent = fs.readFileSync(playerJsPath, 'utf8');

const startMarker = '/* ===== START: wwwroot/js/personal-info.js ===== */';
const endMarker = '/* ===== END: wwwroot/js/personal-info.js ===== */';

const startIdx = playerContent.indexOf(startMarker);
const endIdx = playerContent.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
    // Find where the content starts after startMarker (look for next semicolon or newline)
    let contentStart = playerContent.indexOf(';', startIdx + startMarker.length);
    if (contentStart === -1 || contentStart > startIdx + startMarker.length + 5) {
        contentStart = startIdx + startMarker.length;
    } else {
        contentStart += 1; // skip ';'
    }
    
    // Find where the content ends before endMarker (look backwards for ';' or newline)
    let contentEnd = playerContent.lastIndexOf(';', endIdx);
    if (contentEnd === -1 || contentEnd < startIdx) {
        contentEnd = endIdx;
    }

    const before = playerContent.substring(0, contentStart);
    const after = playerContent.substring(contentEnd);
    playerContent = before + '\r\n' + pInfoContent + '\r\n';
    if (after.startsWith(';')) {
        playerContent += after;
    } else {
        playerContent += ';' + after;
    }
    fs.writeFileSync(playerJsPath, playerContent, 'utf8');
    console.log('Successfully synced personal-info.js into player.js bundle!');
} else {
    console.error('Markers not found! startIdx:', startIdx, 'endIdx:', endIdx);
}
