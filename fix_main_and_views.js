const fs = require('fs');
const path = require('path');

console.log('--- 1. Updating main.js ---');

const mainJsPath = path.join(__dirname, 'wwwroot', 'assets', 'main.js');
let mainJsContent = fs.readFileSync(mainJsPath, 'utf8');

// Find boundary where DOMContentLoaded begins
const splitMarker = "document.addEventListener('DOMContentLoaded', () => {";
const splitIdx = mainJsContent.indexOf(splitMarker);

if (splitIdx === -1) {
    console.error('Split marker not found in main.js!');
    process.exit(1);
}

const restOfMainJs = mainJsContent.substring(splitIdx);

const newRoutingLayer = `// =====================================================
// FOOTBALL SCHOOL MVC - FRONTEND ROUTING & INTERACTION LAYER
// Matches React Router navigation and UI actions 100%
// =====================================================
(function () {
    'use strict';

    const BACK_MAP = {
        'dashboard': '/dashboard',
        'profile-hub': '/dashboard',
        'financial-hub': '/dashboard',
        'specialized-hub': '/dashboard',
        'registration': '/dashboard',
        'store': '/dashboard',
        'gallery': '/dashboard',
        'training-backpack': '/dashboard',
        'bulletin': '/dashboard',
        'financial-timeline': '/financial-hub',
        'bank-info': '/financial-hub',
        'verification': '/profile-hub',
        'personal-info': '/profile-hub',
        'contact-info': '/profile-hub',
        'passport-info': '/profile-hub',
        'sports-info': '/profile-hub',
        'club-info': '/profile-hub',
        'clothing-info': '/profile-hub',
        'documents': '/profile-hub',
        'password': '/profile-hub',
        'attendance': '/specialized-hub',
        'registration-history': '/specialized-hub',
        'talent': '/specialized-hub',
        'insurance': '/specialized-hub',
        'insurance-status': '/specialized-hub',
        'certificate': '/documents',
        'certificates': '/documents'
    };

    function getCurrentPage() {
        const clean = window.location.pathname.toLowerCase().replace(/^\\/+|\\/+$/g, '');
        const parts = clean.split('/');
        let page = parts[parts.length - 1] || 'dashboard';
        page = page.replace('.html', '').replace('.cshtml', '');
        return page || 'dashboard';
    }

    function initNavigation() {
        // 1. Back button global delegation
        document.addEventListener('click', function (e) {
            const backBtn = e.target.closest('.btn-back-top, .btn-back');
            if (backBtn) {
                const onclickAttr = backBtn.getAttribute('onclick');
                if (onclickAttr && onclickAttr.includes('window.location.href')) {
                    return;
                }
                e.preventDefault();
                e.stopPropagation();
                const page = getCurrentPage();
                const dest = BACK_MAP[page] || '/dashboard';
                window.location.href = dest;
            }
        });

        // 2. Verification shield & badge
        document.addEventListener('click', function (e) {
            const verifyTrigger = e.target.closest('.badge-verify, .btn-verify-action, a[href="/verification"]');
            if (verifyTrigger) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/verification';
                return;
            }

            // Topbar shield link fallback (in case href is '#')
            const shieldLink = e.target.closest('.profile-menu a');
            if (shieldLink && (shieldLink.querySelector('.fa-shield') || shieldLink.textContent.includes('تایید هویت'))) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/verification';
                return;
            }
        });

        // 3. Notification bell
        document.addEventListener('click', function (e) {
            const bell = e.target.closest('.btn-noti');
            if (bell) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/bulletin';
            }
        });

        // 4. Dashboard interactive cards & buttons
        document.addEventListener('click', function (e) {
            // Complete info btn-mini
            const btnMini = e.target.closest('.btn-mini');
            if (btnMini) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/profile-hub';
                return;
            }

            // Registration card
            const regCard = e.target.closest('.registration-card');
            if (regCard) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/registration';
                return;
            }

            // BMI card (top mobile)
            const bmiCard = e.target.closest('.bmi-card');
            if (bmiCard) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/personal-info';
                return;
            }

            // Stat cards
            const statCard = e.target.closest('.stat-card');
            if (statCard) {
                const text = statCard.textContent || '';
                if (statCard.querySelector('.fa-calendar-check-o') || text.includes('حضور در تمرین') || text.includes('حضور')) {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = '/attendance';
                    return;
                }
                if (statCard.querySelector('.fa-heartbeat') || text.includes('BMI') || statCard.classList.contains('school-kpi-bmi')) {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = '/personal-info';
                    return;
                }
                if (statCard.querySelector('.fa-search') || text.includes('استعدادیابی')) {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = '/talent';
                    return;
                }
                if (statCard.querySelector('.ic-orange') || text.includes('بیمه')) {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = '/insurance-status';
                    return;
                }
            }

            // Dash action cards
            const dashAction = e.target.closest('.dash-action-card');
            if (dashAction) {
                e.preventDefault();
                e.stopPropagation();
                if (dashAction.classList.contains('card-store') || dashAction.querySelector('.fa-shopping-cart')) {
                    window.location.href = '/store';
                } else if (dashAction.classList.contains('card-gallery') || dashAction.querySelector('.fa-picture-o')) {
                    window.location.href = '/gallery';
                } else if (dashAction.classList.contains('card-backpack') || dashAction.querySelector('.fa-briefcase')) {
                    window.location.href = '/training-backpack';
                }
                return;
            }

            // News card
            const newsCard = e.target.closest('.news-card');
            if (newsCard) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/bulletin';
                return;
            }
        });

        // 5. Profile Hub frame items
        document.addEventListener('click', function (e) {
            const frameItem = e.target.closest('.frame-item');
            if (frameItem) {
                const onclickAttr = frameItem.getAttribute('onclick');
                if (onclickAttr && onclickAttr.includes('window.location.href')) {
                    return;
                }
                e.preventDefault();
                e.stopPropagation();
                const text = (frameItem.textContent || '').trim();
                const icon = frameItem.querySelector('i');
                const iconClass = icon ? icon.className : '';

                if (iconClass.includes('fa-id-card-o') || text.includes('اطلاعات شخصی')) {
                    window.location.href = '/personal-info';
                } else if (iconClass.includes('fa-phone') || text.includes('اطلاعات تماس')) {
                    window.location.href = '/contact-info';
                } else if (iconClass.includes('fa-globe') || text.includes('گذرنامه')) {
                    window.location.href = '/passport-info';
                } else if (iconClass.includes('fa-star') || text.includes('مشخصات ورزشی')) {
                    window.location.href = '/sports-info';
                } else if (iconClass.includes('fa-shield') || text.includes('اطلاعات باشگاهی')) {
                    window.location.href = '/club-info';
                } else if (iconClass.includes('fa-file-image-o') || iconClass.includes('fa-file-text-o') || 
                           iconClass.includes('fa-certificate') || iconClass.includes('fa-plus-circle') || 
                           text.includes('کارت ملی') || text.includes('شناسنامه') || text.includes('مجوز ورزشی') || text.includes('مدارک و سایر')) {
                    window.location.href = '/documents';
                } else if (iconClass.includes('fa-lock') || text.includes('تغییر رمز عبور')) {
                    window.location.href = '/password';
                }
                return;
            }
        });

        // 6. Specialized Hub spec items
        document.addEventListener('click', function (e) {
            // Chart "مشاهده" button
            const specChartBtn = e.target.closest('#view-specialized-hub button');
            if (specChartBtn && specChartBtn.textContent.trim() === 'مشاهده') {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/attendance';
                return;
            }

            const specItem = e.target.closest('.spec-item');
            if (specItem) {
                const onclickAttr = specItem.getAttribute('onclick');
                if (onclickAttr && (onclickAttr.includes('window.location.href') || onclickAttr.includes('alert'))) {
                    return;
                }
                e.preventDefault();
                e.stopPropagation();
                const text = (specItem.textContent || '').trim();
                const icon = specItem.querySelector('i');
                const iconClass = icon ? icon.className : '';

                if (iconClass.includes('fa-calendar-check-o') || text.includes('گزارش حضور') || text.includes('حضور')) {
                    window.location.href = '/attendance';
                } else if (iconClass.includes('fa-map-marker') || text.includes('GPS')) {
                    alert('باز کردن فرم اطلاعات GPS...');
                } else if (iconClass.includes('fa-history') || text.includes('ثبت‌نام') || text.includes('سوابق ثبت‌نام')) {
                    window.location.href = '/registration-history';
                } else if (iconClass.includes('fa-search') || text.includes('استعداد')) {
                    window.location.href = '/talent';
                } else if (iconClass.includes('fa-trophy') || text.includes('مسابقه')) {
                    alert('گزارش عملکرد مسابقه...');
                } else if (iconClass.includes('fa-line-chart') || text.includes('تمرین')) {
                    alert('گزارش عملکرد تمرین...');
                } else if (iconClass.includes('fa-medkit') || text.includes('بیمه')) {
                    window.location.href = '/insurance-status';
                } else if (iconClass.includes('fa-graduation-cap') || text.includes('گواهی')) {
                    window.location.href = '/certificate';
                } else if (iconClass.includes('fa-user-md') || text.includes('پزشکی')) {
                    alert('باز کردن فرم پزشکی...');
                } else if (iconClass.includes('fa-id-card') || text.includes('کارت عضویت')) {
                    alert('کارت عضویت شما در حال دانلود است...');
                }
                return;
            }
        });

        // 7. Financial Hub items
        document.addEventListener('click', function (e) {
            const hubBtn = e.target.closest('.hub-btn');
            if (hubBtn) {
                const onclickAttr = hubBtn.getAttribute('onclick');
                if (onclickAttr && (onclickAttr.includes('window.location.href') || onclickAttr.includes('alert'))) {
                    return;
                }
                e.preventDefault();
                e.stopPropagation();
                const text = (hubBtn.textContent || '').trim();
                const icon = hubBtn.querySelector('i');
                const iconClass = icon ? icon.className : '';

                if (iconClass.includes('fa-bank') || text.includes('حساب‌های بانکی') || text.includes('حساب بانکی')) {
                    window.location.href = '/bank-info';
                } else if (iconClass.includes('fa-credit-card') || text.includes('پرداخت شهریه')) {
                    alert('انتقال به درگاه پرداخت...');
                } else if (iconClass.includes('fa-bar-chart') || text.includes('تایم‌لاین') || text.includes('گزارشات')) {
                    window.location.href = '/financial-timeline';
                }
                return;
            }
        });

        // 8. Other subpage buttons
        document.addEventListener('click', function (e) {
            // Documents: "ثبت سایر مدارک"
            const docCertBtn = e.target.closest('#view-documents .btn-top-action:not(.btn-back-top)');
            if (docCertBtn && docCertBtn.textContent.includes('ثبت سایر مدارک')) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/certificate';
                return;
            }

            // Registration: "مشاهده تایم‌لاین مالی تراکنش‌ها"
            const regTimelineBtn = e.target.closest('#view-registration button');
            if (regTimelineBtn && regTimelineBtn.textContent.includes('تایم‌لاین مالی')) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/financial-timeline';
                return;
            }

            // Verification: "بازگشت به پروفایل"
            const verifBackProfile = e.target.closest('#view-verification .btn-app-primary');
            if (verifBackProfile && verifBackProfile.textContent.includes('بازگشت به پروفایل')) {
                e.preventDefault();
                e.stopPropagation();
                window.location.href = '/profile-hub';
                return;
            }

            // Store: Add to cart button
            const storeBuyBtn = e.target.closest('.btn-buy');
            if (storeBuyBtn) {
                e.preventDefault();
                e.stopPropagation();
                alert('به سبد خرید اضافه شد.');
                return;
            }

            // Talent: Print button
            const talentPrintBtn = e.target.closest('#view-talent .btn-icon');
            if (talentPrintBtn && talentPrintBtn.querySelector('.fa-print')) {
                e.preventDefault();
                e.stopPropagation();
                alert('در حال آماده سازی فایل برای چاپ...');
                return;
            }

            // Certificate: Add cert button
            const certAddBtn = e.target.closest('#view-certificate .btn-submit-top');
            if (certAddBtn) {
                e.preventDefault();
                e.stopPropagation();
                alert('فرم افزودن مدرک باز می‌شود');
                return;
            }

            // Delete buttons (BankInfo, Certificate)
            const trashBtn = e.target.closest('.btn-icon');
            if (trashBtn && trashBtn.querySelector('.fa-trash')) {
                e.preventDefault();
                e.stopPropagation();
                alert('حذف در این نسخه آزمایشی غیرفعال است');
                return;
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavigation);
    } else {
        initNavigation();
    }
})();

`;

const updatedMainJs = newRoutingLayer + restOfMainJs;
fs.writeFileSync(mainJsPath, updatedMainJs, 'utf8');
console.log('main.js updated successfully!');

console.log('--- 2. Auditing and updating Razor views ---');
const viewsDir = path.join(__dirname, 'Views', 'Pages');
const files = fs.readdirSync(viewsDir).filter(f => f.endsWith('.cshtml'));

const VIEW_BACK_MAP = {
    'attendance': '/specialized-hub',
    'bank-info': '/financial-hub',
    'bulletin': '/dashboard',
    'certificate': '/documents',
    'clothing-info': '/profile-hub',
    'club-info': '/profile-hub',
    'contact-info': '/profile-hub',
    'dashboard': null,
    'documents': '/profile-hub',
    'financial-hub': '/dashboard',
    'financial-timeline': '/financial-hub',
    'gallery': '/dashboard',
    'index': null,
    'insurance-status': '/specialized-hub',
    'insurance': '/specialized-hub',
    'passport-info': '/profile-hub',
    'password': '/profile-hub',
    'personal-info': '/profile-hub',
    'profile-hub': '/dashboard',
    'registration-history': '/specialized-hub',
    'registration': '/dashboard',
    'specialized-hub': '/dashboard',
    'sports-info': '/profile-hub',
    'store': '/dashboard',
    'talent': '/specialized-hub',
    'training-backpack': '/dashboard',
    'verification': '/profile-hub'
};

files.forEach(file => {
    const pageName = file.replace('.cshtml', '');
    const filePath = path.join(viewsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // 1. Fix Topbar Shield Link: if it is href="#" or href="/logout"
    if (content.includes('fa-shield')) {
        const shieldRegex = /<a[^>]+href=["'](?:#|\/logout)["'][^>]*>(\s*<i class=["']fa fa-shield["']><\/i>[^<]*<\/a>)/g;
        if (shieldRegex.test(content)) {
            content = content.replace(shieldRegex, '<a href="/verification" style="color: rgb(51, 65, 85);">$1');
            modified = true;
        }
    }

    // 2. Fix Topbar Notification Bell: ensure it navigates to /bulletin
    const bellRegex = /<button class=["']btn-noti["'][^>]*title=["']اعلان‌ها["'][^>]*>/g;
    if (bellRegex.test(content)) {
        content = content.replace(bellRegex, '<button class="btn-noti" title="اعلان‌ها" onclick="window.location.href=\'/bulletin\'" style="cursor: pointer;">');
        modified = true;
    }

    // 3. Fix Topbar Badge Unverified: ensure onclick navigates to /verification
    const unverifiedRegex = /<div style=["'][^"']*cursor:\s*pointer[^"']*["'][^>]*onclick=["']window\.location\.href=['"]\/verification['"]["'][^>]*><span class=["']badge-verify unverified["']/g;
    if (!unverifiedRegex.test(content)) {
        const oldBadgeWrapRegex = /(<div style=["'][^"']*display:\s*flex;\s*justify-content:\s*center;?["'])(>[\s\n]*<span class=["']badge-verify unverified["'])/g;
        if (oldBadgeWrapRegex.test(content)) {
            content = content.replace(oldBadgeWrapRegex, '$1 cursor: pointer;" onclick="window.location.href=\'/verification\'"$2');
            modified = true;
        }
    }

    // 4. Ensure Back button destination is exact
    const expectedBack = VIEW_BACK_MAP[pageName];
    if (expectedBack) {
        const backBtnRegex = /<button([^>]+class=["'][^"']*(?:btn-back-top|btn-back)[^"']*["'][^>]*)>/g;
        content = content.replace(backBtnRegex, (match, attrs) => {
            // Remove existing onclick
            let cleanAttrs = attrs.replace(/\s*onclick=["'][^"']*["']/g, '');
            modified = true;
            return `<button${cleanAttrs} onclick="window.location.href='${expectedBack}'">`;
        });
    }

    // 5. Page-specific button fixes:
    if (pageName === 'bank-info') {
        // Fix delete button
        const trashRegex = /<button class=["']btn-icon["'][^>]*title=["']حذف["'][^>]*>/g;
        content = content.replace(trashRegex, '<button class="btn-icon" title="حذف" onclick="alert(\'حذف در این نسخه آزمایشی غیرفعال است\')">');
        modified = true;
    }

    if (pageName === 'certificate') {
        // Fix add cert button
        const addCertRegex = /<button class=["']btn-top-action btn-submit-top["'][^>]*>/g;
        content = content.replace(addCertRegex, '<button class="btn-top-action btn-submit-top" onclick="alert(\'فرم افزودن مدرک باز می‌شود\')">');
        // Fix delete button
        const trashRegex = /<button class=["']btn-icon["'][^>]*title=["']حذف["'][^>]*>/g;
        content = content.replace(trashRegex, '<button class="btn-icon" title="حذف" onclick="alert(\'حذف در این نسخه آزمایشی غیرفعال است\')">');
        modified = true;
    }

    if (pageName === 'store') {
        const buyRegex = /<button class=["']btn-buy["'][^>]*>/g;
        content = content.replace(buyRegex, '<button class="btn-buy" onclick="alert(\'به سبد خرید اضافه شد.\')">');
        modified = true;
    }

    if (pageName === 'talent') {
        const printRegex = /<button class=["']btn-icon["'][^>]*title=["']چاپ فرم استعدادیابی["'][^>]*>/g;
        content = content.replace(printRegex, '<button class="btn-icon" title="چاپ فرم استعدادیابی" onclick="alert(\'در حال آماده سازی فایل برای چاپ...\')">');
        modified = true;
    }

    if (pageName === 'documents') {
        const otherDocsRegex = /<button class=["']btn-top-action["'][^>]*onclick=["'][^"']*["'][^>]*>/g;
        if (!content.includes("onclick=\"window.location.href='/certificate'\"")) {
            content = content.replace(/<button class=["']btn-top-action["'][^>]*>/g, '<button class="btn-top-action" onclick="window.location.href=\'/certificate\'" style="background: transparent; color: var(--primary-color); border: 1px solid var(--primary-color); cursor: pointer;">');
            modified = true;
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated view: ${file}`);
    } else {
        console.log(`No changes needed for: ${file}`);
    }
});

console.log('All updates completed successfully!');
