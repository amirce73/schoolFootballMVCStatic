const fs = require('fs');
const cssPath = 'e:/amirce73/FootballSchoolMVC/wwwroot/css/player.css';
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Ensure .card allows overflow when containing custom-select-wrapper
if (!css.includes('.card.has-select') && !css.includes('.card:has(.custom-select-wrapper)')) {
    css += `\n/* Custom Select Overflow & Stacking Fixes */
.card:has(.custom-select-wrapper),
.card.has-select {
    overflow: visible !important;
}

.input-group:has(.custom-select-wrapper.open),
.input-group.has-open-select {
    z-index: 1000 !important;
}

.custom-select-wrapper {
    position: relative;
    width: 100%;
}

.custom-select-wrapper.open {
    z-index: 1001 !important;
}

.custom-select-wrapper.open .custom-select-dropdown {
    z-index: 99999 !important;
    display: block !important;
}

.custom-select-dropdown {
    border: 1px solid #cbd5e1 !important;
    border-radius: 10px !important;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.22), 0 4px 10px rgba(0, 0, 0, 0.08) !important;
    z-index: 99999 !important;
    background: #ffffff !important;
    max-height: 240px !important;
    position: absolute !important;
    top: calc(100% + 4px) !important;
    left: 0 !important;
    right: 0 !important;
    overflow-y: auto !important;
    -webkit-overflow-scrolling: touch !important;
}
`;
    console.log('Appended custom select stacking rules to player.css');
}

fs.writeFileSync(cssPath, css, 'utf8');
console.log('player.css updated successfully!');
