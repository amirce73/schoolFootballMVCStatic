const fs = require('fs');
const path = 'e:/amirce73/FootballSchoolMVC/wwwroot/css/player.css';

let content = fs.readFileSync(path, 'utf8');

// 1. Fix @keyframes fadeIn: transform: translateY(0) -> transform: none
const oldFadeIn = /(@keyframes\s+fadeIn\s*\{[\s\S]*?to\s*\{[\s\S]*?transform:\s*)translateY\(0\)/;
if (oldFadeIn.test(content)) {
    content = content.replace(oldFadeIn, '$1none');
    console.log('Successfully updated @keyframes fadeIn to transform: none');
} else {
    console.log('FadeIn pattern not matched or already updated');
}

// 2. Add body.fs-modal-open rule if not present
if (!content.includes('body.fs-modal-open')) {
    content += '\nbody.fs-modal-open {\n    overflow: hidden !important;\n}\n';
    console.log('Added body.fs-modal-open');
}

// 3. Update #alaram_box, .fs-modal-backdrop and #divLoader to have rock-solid viewport positioning
const oldModalBox = /#alaram_box,\s*\.fs-modal-backdrop\s*\{[\s\S]*?\n\}/;
const newModalBox = `#alaram_box,
.fs-modal-backdrop {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    width: 100% !important;
    height: 100vh !important;
    height: 100dvh !important;
    max-height: 100vh !important;
    margin: 0 !important;
    padding: 16px !important;
    z-index: 2147483647 !important;
    display: none;
    align-items: center !important;
    justify-content: center !important;
    box-sizing: border-box !important;
    background: rgba(15, 23, 42, 0.65) !important;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    overflow-x: hidden !important;
    overflow-y: auto !important;
    -webkit-overflow-scrolling: touch;
}`;

if (oldModalBox.test(content)) {
    content = content.replace(oldModalBox, newModalBox);
    console.log('Successfully updated #alaram_box, .fs-modal-backdrop');
} else {
    console.log('Modal box pattern not matched');
}

const oldLoaderBox = /#divLoader\s*\{[\s\S]*?\n\}/;
const newLoaderBox = `#divLoader {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    width: 100% !important;
    height: 100vh !important;
    height: 100dvh !important;
    max-height: 100vh !important;
    margin: 0 !important;
    padding: 16px !important;
    z-index: 2147483647 !important;
    display: none;
    align-items: center !important;
    justify-content: center !important;
    box-sizing: border-box !important;
    background: rgba(15, 23, 42, 0.6) !important;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    overflow: hidden !important;
}`;

if (oldLoaderBox.test(content)) {
    content = content.replace(oldLoaderBox, newLoaderBox);
    console.log('Successfully updated #divLoader');
} else {
    console.log('Loader pattern not matched');
}

// 4. Update .fs-modal-card to ensure it's centered with margin: auto
const oldCard = /\.fs-modal-card\s*\{[\s\S]*?\n\}/;
const newCard = `.fs-modal-card {
    background: #ffffff;
    border-radius: 24px;
    width: 100%;
    max-width: 420px;
    margin: auto !important;
    padding: 30px 22px 24px;
    text-align: center;
    box-shadow: 0 30px 70px -15px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.5);
    position: relative;
    direction: rtl;
    font-family: inherit;
    box-sizing: border-box;
    animation: fsModalCardPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    border: 1px solid rgba(226, 232, 240, 0.8);
}`;

if (oldCard.test(content)) {
    content = content.replace(oldCard, newCard);
    console.log('Successfully updated .fs-modal-card');
} else {
    console.log('Card pattern not matched');
}

fs.writeFileSync(path, content, 'utf8');
console.log('Done!');
