const fs = require('fs');

// --- 1. Update personal-info.js ---
const pInfoPath = 'e:/amirce73/FootballSchoolMVC/wwwroot/js/personal-info.js';
let pInfo = fs.readFileSync(pInfoPath, 'utf8');

// Replace close_alarm_box & display_alarm2 block
const pInfoModalBlockRegex = /function close_alarm_box\(\)\s*\{[\s\S]*?_alarmTimer = setTimeout\(function\(\)\s*\{\s*close_alarm_box\(\);\s*\}, 4000\);\s*\}/;

const newModalFunctions = `function close_alarm_box() {
    if (_alarmTimer) {
        clearTimeout(_alarmTimer);
        _alarmTimer = null;
    }
    var box = document.getElementById('alaram_box');
    if (!box) return;
    box.style.opacity = '0';
    box.style.transition = 'opacity 0.2s ease';
    document.body.classList.remove('fs-modal-open');
    setTimeout(function() {
        box.style.display = 'none';
        box.style.opacity = '';
        box.style.transition = '';
        var hdn = document.getElementById('hdn_alarm');
        if (hdn) {
            hdn.value = '';
        }
    }, 200);
}

function display_alarm2(alarm_text, titel, obj, flag) {
    var isSuccess = (flag === 1 || flag === '1');
    var isWarning = (flag === 2 || flag === '2');
    var defaultTitle = isSuccess ? 'ثبت موفق اطلاعات' : (isWarning ? 'هشدار سیستم' : 'خطا در ثبت اطلاعات');
    var finalTitle = titel || defaultTitle;

    // Dismiss mobile virtual keyboard if open
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
        document.activeElement.blur();
    }

    var card = document.getElementById('alarm_card');
    var icon = document.getElementById('alarm_icon');
    var titleEl = document.getElementById('lbl1');
    var textEl = document.getElementById('lbl2');
    var hdn = document.getElementById('hdn_alarm');
    var box = document.getElementById('alaram_box');

    if (!box) return;

    // Ensure modal is direct child of body (bypasses any parent transforms/overflows)
    if (box.parentNode !== document.body) {
        document.body.appendChild(box);
    }

    if (hdn) hdn.value = obj || '';
    if (titleEl) titleEl.textContent = finalTitle;
    if (textEl) textEl.textContent = alarm_text || '';

    if (card) {
        card.classList.remove('is-success', 'is-error', 'is-warning');
        if (isSuccess) {
            card.classList.add('is-success');
            if (icon) icon.className = 'fa fa-check';
        } else if (isWarning) {
            card.classList.add('is-warning');
            if (icon) icon.className = 'fa fa-exclamation-triangle';
        } else {
            card.classList.add('is-error');
            if (icon) icon.className = 'fa fa-times';
        }
    }

    // Lock body scroll and show modal centered in current viewport
    document.body.classList.add('fs-modal-open');
    box.style.display = 'flex';
    box.style.opacity = '0';
    box.style.transition = 'opacity 0.25s ease';
    setTimeout(function() { box.style.opacity = '1'; }, 10);

    // Auto-close after 4 seconds
    if (_alarmTimer) clearTimeout(_alarmTimer);
    _alarmTimer = setTimeout(function() { close_alarm_box(); }, 4000);
}`;

if (pInfoModalBlockRegex.test(pInfo)) {
    pInfo = pInfo.replace(pInfoModalBlockRegex, newModalFunctions);
    console.log('Successfully updated modal functions in personal-info.js');
} else {
    console.error('Failed to match modal functions in personal-info.js');
}

// Update loader check in personal-info.js save_data
const oldLoaderCode = `    // Show Loader\n    var loader = document.getElementById('divLoader');\n    if (loader) {\n        loader.style.display = 'flex';\n    }`;
const newLoaderCode = `    // Show Loader\n    var loader = document.getElementById('divLoader');\n    if (loader) {\n        if (loader.parentNode !== document.body) {\n            document.body.appendChild(loader);\n        }\n        loader.style.display = 'flex';\n    }`;

if (pInfo.includes(oldLoaderCode)) {
    pInfo = pInfo.replace(oldLoaderCode, newLoaderCode);
    console.log('Successfully updated loader code in personal-info.js');
} else {
    console.log('Loader code already updated or not matched in personal-info.js');
}

fs.writeFileSync(pInfoPath, pInfo, 'utf8');

// --- 2. Update player.js ---
const playerJsPath = 'e:/amirce73/FootballSchoolMVC/wwwroot/js/player.js';
let playerJs = fs.readFileSync(playerJsPath, 'utf8');

// Update legacy display_alarm in player.js (around line 530)
const legacyDisplayAlarmRegex = /function display_alarm\(alarm_text, obj\)\s*\{[\s\S]*?document\.documentElement\.scrollTop = 0;\s*\}/;
const newLegacyDisplayAlarm = `function display_alarm(alarm_text, obj) {
    display_alarm2(alarm_text, 'خطا در ثبت اطلاعات', obj, 0);
}`;

if (legacyDisplayAlarmRegex.test(playerJs)) {
    playerJs = playerJs.replace(legacyDisplayAlarmRegex, newLegacyDisplayAlarm);
    console.log('Successfully updated legacy display_alarm in player.js (removed scrollTop = 0)');
} else {
    console.log('Legacy display_alarm pattern not matched or already updated in player.js');
}

// Update bundled modal functions in player.js (around line 4110)
const playerModalBlockRegex = /function close_alarm_box\(\)\s*\{[\s\S]*?_alarmTimer = setTimeout\(function\(\)\s*\{\s*close_alarm_box\(\);\s*\}, 4000\);\s*\}/;
if (playerModalBlockRegex.test(playerJs)) {
    playerJs = playerJs.replace(playerModalBlockRegex, newModalFunctions);
    console.log('Successfully updated bundled modal functions in player.js');
} else {
    console.log('Bundled modal functions pattern not matched in player.js');
}

if (playerJs.includes(oldLoaderCode)) {
    playerJs = playerJs.replace(oldLoaderCode, newLoaderCode);
    console.log('Successfully updated loader code in player.js');
}

fs.writeFileSync(playerJsPath, playerJs, 'utf8');
console.log('All JS updates complete!');
