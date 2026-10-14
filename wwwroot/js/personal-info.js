/**
 * FootballSchool - Personal Info Script
 * Validations using TaskHelpFiles/footballit_script.js
 * Full AJAX Form Submission (No page reload)
 */

// 1. Image Preview
function previewImage(input) {
    if (input.files && input.files[0]) {
        var file = input.files[0];

        // Validate extension
        var ext = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
        var allowed = ['.jpg', '.jpeg', '.png', '.webp', '.tiff'];
        if (!allowed.includes(ext)) {
            if (typeof display_alarm2 === 'function') {
                display_alarm2("فرمت فایل انتخابی مجاز نیست. لطفا فایل با پسوند jpg, jpeg, png, webp یا tiff انتخاب فرمایید.", "خطا در بارگذاری تصویر", "", 0);
            } else {
                alert("فرمت فایل انتخابی مجاز نیست.");
            }
            input.value = '';
            return;
        }

        // Validate max size 5MB
        if (file.size > 5 * 1024 * 1024) {
            if (typeof display_alarm2 === 'function') {
                display_alarm2("حجم تصویر نباید بیشتر از ۵ مگابایت باشد.", "خطا در بارگذاری تصویر", "", 0);
            } else {
                alert("حجم تصویر نباید بیشتر از ۵ مگابایت باشد.");
            }
            input.value = '';
            return;
        }

        var lbl = document.getElementById('lbl_FileUpload');
        if (lbl) lbl.innerText = file.name;

        var reader = new FileReader();
        reader.onload = function (e) {
            var docPic = document.getElementById('doc_pic');
            if (docPic) docPic.src = e.target.result;
            var topbarAvatar = document.getElementById('topbar_user_avatar');
            if (topbarAvatar) topbarAvatar.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// 2. Jalali to Gregorian conversion calculation
function jalaliToGregorianCalc(jy, jm, jd) {
    var sal_a, gy, gm, gd, days;
    jy += 1595;
    days = -355668 + (365 * jy) + (~~(jy / 33) * 8) + ~~(((jy % 33) + 3) / 4) + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
    gy = 400 * ~~(days / 146097);
    days %= 146097;
    if (days > 36524) {
        gy += 100 * ~~(--days / 36524);
        days %= 36524;
        if (days >= 365) days++;
    }
    gy += 4 * ~~(days / 1461);
    days %= 1461;
    if (days > 365) {
        gy += ~~((days - 1) / 365);
        days = (days - 1) % 365;
    }
    gd = days + 1;
    sal_a = [0, 31, ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
    return { year: gy, month: gm, day: gd };
}

// 3. Synchronize Shamsi Date, Miladi Date, and Age
function syncBirthDetails() {
    var hiddenInput = document.getElementById('hidden_birthDate');
    var val = hiddenInput ? hiddenInput.value : '';
    if (!val) {
        var dpSpan = document.querySelector('#birthDate span');
        if (dpSpan && dpSpan.textContent.includes('/')) val = dpSpan.textContent.trim();
    }
    if (val && val.includes('/')) {
        var clean = val.replace(/[۰-۹]/g, function (w) { return String.fromCharCode(w.charCodeAt(0) - 1728); });
        var parts = clean.split('/');
        if (parts.length === 3) {
            var jy = parseInt(parts[0], 10);
            var jm = parseInt(parts[1], 10);
            var jd = parseInt(parts[2], 10);
            if (jy > 1300 && jm >= 1 && jm <= 12 && jd >= 1 && jd <= 31) {
                // Ensure date format is YYYY/MM/DD
                var formattedShamsi = jy + '/' + String(jm).padStart(2, '0') + '/' + String(jd).padStart(2, '0');
                if (hiddenInput) hiddenInput.value = formattedShamsi;
                var shamsiEl = document.getElementById('birth_date_shamsi');
                if (shamsiEl) shamsiEl.value = formattedShamsi;

                var g = jalaliToGregorianCalc(jy, jm, jd);
                var miladiInput = document.getElementById('txt_birth_date_miladi');
                if (miladiInput) {
                    miladiInput.value = g.year + '/' + String(g.month).padStart(2, '0') + '/' + String(g.day).padStart(2, '0');
                }
                var today = new Date();
                var age = today.getFullYear() - g.year;
                var m = (today.getMonth() + 1) - g.month;
                if (m < 0 || (m === 0 && today.getDate() < g.day)) age--;
                var ageInput = document.getElementById('lbl_age');
                if (ageInput) {
                    ageInput.value = (age >= 0 ? age : 0) + ' سال';
                }
            }
        }
    }
}

// 4. Ultra-Modern Alarm Modal Controller (Vanilla JS - no jQuery needed)
var _alarmTimer = null;

function close_alarm_box() {
    if (_alarmTimer) {
        clearTimeout(_alarmTimer);
        _alarmTimer = null;
    }
    var box = document.getElementById('alaram_box');
    if (!box) return;
    box.style.opacity = '0';
    box.style.transition = 'opacity 0.2s ease';
    document.body.classList.remove('fs-modal-open');
    setTimeout(function () {
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
    setTimeout(function () { box.style.opacity = '1'; }, 10);

    // Auto-close after 4 seconds
    if (_alarmTimer) clearTimeout(_alarmTimer);
    _alarmTimer = setTimeout(function () { close_alarm_box(); }, 4000);
}

window.close_alarm_box = close_alarm_box;
window.display_alarm2 = display_alarm2;
window.display_alarm = function (alarm_text, obj) {
    display_alarm2(alarm_text, 'خطا در اطلاعات ورودی', obj, 0);
};

// Global keydown listener for Escape key to close modal
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
        close_alarm_box();
    }
});

// 4.5 Set_value_numeric from TaskHelpFiles/footballit_script.js
function Set_value_numeric(obj, max_len) {
    var elem = document.getElementById(obj);
    if (!elem) return;
    var str = elem.value;
    var temp = '';
    var str_checked = '';
    for (var i = 0; i < str.length; i++) {
        temp = str.substring(i, i + 1);
        switch (temp.charCodeAt(0)) {
            case 1777: temp = "1"; break;
            case 1778: temp = "2"; break;
            case 1779: temp = "3"; break;
            case 1780: temp = "4"; break;
            case 1781: temp = "5"; break;
            case 1782: temp = "6"; break;
            case 1783: temp = "7"; break;
            case 1784: temp = "8"; break;
            case 1785: temp = "9"; break;
            case 1776: temp = "0"; break;
            default:
                temp = temp;
        }

        if (48 <= temp.charCodeAt(0) && temp.charCodeAt(0) <= 57) {
            str_checked = str_checked + temp;
        }
        temp = "";
    }
    if (str_checked.length > max_len) {
        str_checked = str_checked.substring(0, max_len);
    }
    elem.value = str_checked;
}

// 4.6 CheckMeliCode - exact method from TaskHelpFiles/footballit_script.js
var msg = "";
function CheckMeliCode(obj) {
    var elem = document.getElementById(obj);
    var meli_code = (elem && elem.value) ? elem.value.trim() : "";
    var flag = "";
    if (meli_code != '') {
        var temp = meli_code.substr(0, 1).toUpperCase();
        if (temp >= 'A' && temp <= 'Z') {
            for (var i = 2; i < meli_code.length; i++) {
                switch (meli_code.charCodeAt(i)) {
                    case 1777: temp = "1"; break;
                    case 1778: temp = "2"; break;
                    case 1779: temp = "3"; break;
                    case 1780: temp = "4"; break;
                    case 1781: temp = "5"; break;
                    case 1782: temp = "6"; break;
                    case 1783: temp = "7"; break;
                    case 1784: temp = "8"; break;
                    case 1785: temp = "9"; break;
                    case 1776: temp = "0"; break;
                    default:
                        temp = meli_code.substr(i, 1);
                }
                if (temp != '0' && temp != '9' && temp != '8'
                    && temp != '7' && temp != '6' && temp != '5'
                    && temp != '4' && temp != '3' && temp != '2' && temp != '1') {
                    flag = '***';
                }
            }
            if (flag != '***') {
                return true;
            } else {
                msg = 'شماره کد ملی یا پاسپورت صحيح نمي باشد';
                display_alarm(msg, obj);
                return false;
            }
        } else {
            var temp2 = "";
            for (var i = 0; i < meli_code.length; i++) {
                switch (meli_code.charCodeAt(i)) {
                    case 1777: temp = "1"; break;
                    case 1778: temp = "2"; break;
                    case 1779: temp = "3"; break;
                    case 1780: temp = "4"; break;
                    case 1781: temp = "5"; break;
                    case 1782: temp = "6"; break;
                    case 1783: temp = "7"; break;
                    case 1784: temp = "8"; break;
                    case 1785: temp = "9"; break;
                    case 1776: temp = "0"; break;
                    default:
                        temp = meli_code.substr(i, 1);
                }
                temp2 += temp;
            }
            meli_code = temp2;
            if (meli_code.length == 10) {
                if (/^(\d)\1{9}$/.test(meli_code) ||
                    meli_code == '1111111111' ||
                    meli_code == '0000000000' ||
                    meli_code == '2222222222' ||
                    meli_code == '3333333333' ||
                    meli_code == '4444444444' ||
                    meli_code == '5555555555' ||
                    meli_code == '6666666666' ||
                    meli_code == '7777777777' ||
                    meli_code == '8888888888' ||
                    meli_code == '9999999999' ||
                    meli_code == '0123456789' ||
                    meli_code == '1234567890' ||
                    meli_code == '9876543210' ||
                    meli_code == '0987654321'
                ) {
                    msg = 'كد ملي صحيح نمي باشد';
                    display_alarm(msg, obj);
                    return false;
                }

                var c = parseInt(meli_code.charAt(9), 10);
                var n = parseInt(meli_code.charAt(0), 10) * 10 +
                    parseInt(meli_code.charAt(1), 10) * 9 +
                    parseInt(meli_code.charAt(2), 10) * 8 +
                    parseInt(meli_code.charAt(3), 10) * 7 +
                    parseInt(meli_code.charAt(4), 10) * 6 +
                    parseInt(meli_code.charAt(5), 10) * 5 +
                    parseInt(meli_code.charAt(6), 10) * 4 +
                    parseInt(meli_code.charAt(7), 10) * 3 +
                    parseInt(meli_code.charAt(8), 10) * 2;
                var r = n - parseInt(n / 11, 10) * 11;
                if ((r == 0 && r == c) || (r == 1 && c == 1) || (r > 1 && c == (11 - r))) {
                    return true;
                } else {
                    msg = 'كد ملي صحيح نمي باشد';
                    display_alarm(msg, obj);
                    return false;
                }
            } else {
                msg = 'طول کد ملی وارد شده باید 10 کاراکتر باشد';
                display_alarm(msg, obj);
                return false;
            }
        }
    } else {
        msg = 'ثبت کد ملی الزامی است';
        display_alarm(msg, obj);
        return false;
    }
}

window.CheckMeliCode = CheckMeliCode;
window.Set_value_numeric = Set_value_numeric;

// 5. Validation using footballit_script.js rules
function check_data() {
    syncBirthDetails();

    // Check Name
    var nameVal = (document.getElementById("txt_name") ? document.getElementById("txt_name").value : "").trim();
    if (nameVal === '') {
        display_alarm2("نام بازیکن وارد نشده است. ثبت اطلاعات برای فیلدهای ستاره‌دار الزامی است", "لطفا فیلدهای ستاره‌دار را وارد کنید", "txt_name", 0);
        return false;
    }

    // Check Family
    var famVal = (document.getElementById("txt_family") ? document.getElementById("txt_family").value : "").trim();
    if (famVal === '') {
        display_alarm2("نام خانوادگی بازیکن وارد نشده است. ثبت اطلاعات برای فیلدهای ستاره‌دار الزامی است", "لطفا فیلدهای ستاره‌دار را وارد کنید", "txt_family", 0);
        return false;
    }

    // Check National / Foreign ID using CheckMeliCode from TaskHelpFiles/footballit_script.js
    if (!CheckMeliCode('txt_international_id')) {
        return false;
    }

    // Check Gender
    var genderVal = document.getElementById("cmd_gender") ? document.getElementById("cmd_gender").value : '';
    if (!genderVal) {
        display_alarm2("جنسیت بازیکن انتخاب نشده است. ثبت اطلاعات برای فیلدهای ستاره‌دار الزامی است", "لطفا فیلدهای ستاره‌دار را وارد کنید", "cmd_gender", 0);
        return false;
    }

    // Check Shamsi Birth Date
    var shamsiEl = document.getElementById("birth_date_shamsi") || document.getElementById("hidden_birthDate");
    var shamsiVal = (shamsiEl ? shamsiEl.value : "").trim();
    if (shamsiVal === '') {
        display_alarm2("تاریخ تولد شمسی وارد نشده است. ثبت اطلاعات برای فیلدهای ستاره‌دار الزامی است", "لطفا فیلدهای ستاره‌دار را وارد کنید", "birthDate", 0);
        return false;
    }

    if (typeof checkdate === 'function') {
        // Temporary ensure element id is accessible
        if (!shamsiEl.id) shamsiEl.id = "birth_date_shamsi";
        if (!checkdate(shamsiEl.id)
            || shamsiVal.length !== 10
            || shamsiVal.substr(4, 1) !== '/'
            || shamsiVal.substr(7, 1) !== '/') {
            display_alarm2("تاریخ وارد شده صحیح نیست . لطفا تاریخ تولد شمسی را با فرمت YYYY/MM/DD وارد کنید.", "خطا در ثبت تاریخ تولد شمسی", shamsiEl.id, 0);
            return false;
        }
    }

    // Check Gregorian Birth Date if filled
    var miladiEl = document.getElementById("txt_birth_date_miladi");
    var miladiVal = (miladiEl ? miladiEl.value : "").trim();
    if (miladiVal !== '' && typeof checkdate_miladi === 'function') {
        if (!checkdate_miladi('txt_birth_date_miladi')
            || miladiVal.length !== 10
            || miladiVal.substr(4, 1) !== '/'
            || miladiVal.substr(7, 1) !== '/') {
            display_alarm2("تاریخ وارد شده صحیح نیست . لطفا تاریخ تولد میلادی را با فرمت YYYY/MM/DD وارد کنید.", "خطا در ثبت تاریخ تولد میلادی", "txt_birth_date_miladi", 0);
            return false;
        }
    }

    // Check Health Status
    var healthVal = document.getElementById("cmd_health_status") ? document.getElementById("cmd_health_status").value : '';
    if (!healthVal) {
        display_alarm2("وضعیت سلامت بازیکن انتخاب نشده است. لطفا وضعیت سلامت را انتخاب نمایید.", "لطفا فیلدهای ستاره‌دار را وارد کنید", "cmd_health_status", 0);
        return false;
    }

    // Note: Religion field is optional as requested (no validation check)

    return true;
}

// Disallow entering numbers in txt_location_id, txt_father_job, txt_job
function setupNoNumbersValidation() {
    var fieldIds = ['txt_location_id', 'txt_father_job', 'txt_job'];
    var digitRegex = /[0-9۰-۹٠-٩\u0660-\u0669\u06F0-\u06F9]/g;
    var singleDigitRegex = /[0-9۰-۹٠-٩\u0660-\u0669\u06F0-\u06F9]/;

    function sanitizeField(el) {
        if (!el) return;
        var curVal = el.value || '';
        if (digitRegex.test(curVal)) {
            el.value = curVal.replace(digitRegex, '');
        }
    }

    fieldIds.forEach(function (id) {
        var el = document.getElementById(id);
        if (!el) return;

        // Clean initial value
        sanitizeField(el);

        // Block digit keystrokes
        el.addEventListener('keydown', function (e) {
            if (e.key && singleDigitRegex.test(e.key)) {
                e.preventDefault();
                return false;
            }
        });

        el.addEventListener('keypress', function (e) {
            var charCode = (typeof e.which === 'number') ? e.which : e.keyCode;
            var charStr = String.fromCharCode(charCode);
            if (singleDigitRegex.test(charStr) || (e.key && singleDigitRegex.test(e.key))) {
                e.preventDefault();
                return false;
            }
        });

        // Instant cleanup on any input (typing, mobile IME, virtual keyboard, autocomplete, drag-drop)
        el.addEventListener('input', function () {
            sanitizeField(this);
        });

        // Intercept paste
        el.addEventListener('paste', function (e) {
            var pasteData = (e.clipboardData || window.clipboardData) ? (e.clipboardData || window.clipboardData).getData('text') : '';
            if (pasteData && digitRegex.test(pasteData)) {
                e.preventDefault();
                var cleaned = pasteData.replace(digitRegex, '');
                if (document.queryCommandSupported && document.queryCommandSupported('insertText')) {
                    document.execCommand('insertText', false, cleaned);
                } else {
                    var start = this.selectionStart || 0;
                    var end = this.selectionEnd || 0;
                    this.value = this.value.substring(0, start) + cleaned + this.value.substring(end);
                    this.selectionStart = this.selectionEnd = start + cleaned.length;
                }
            }
        });

        el.addEventListener('blur', function () {
            sanitizeField(this);
        });
    });

    // Enforce display-only / readonly on Gregorian birth date
    var miladiInput = document.getElementById('txt_birth_date_miladi');
    if (miladiInput) {
        miladiInput.readOnly = true;
        miladiInput.tabIndex = -1;
        miladiInput.addEventListener('keydown', function (e) {
            e.preventDefault();
            return false;
        });
        miladiInput.addEventListener('focus', function () {
            this.blur();
        });
    }

    var ageInput = document.getElementById('lbl_age');
    if (ageInput) {
        ageInput.readOnly = true;
        ageInput.tabIndex = -1;
        ageInput.addEventListener('keydown', function (e) {
            e.preventDefault();
            return false;
        });
        ageInput.addEventListener('focus', function () {
            this.blur();
        });
    }
}

// 6. Full AJAX Form Submission ("agex")
function save_data() {
    if (!check_data()) {
        return;
    }

    var form = document.getElementById('personal-info-form');
    if (!form) return;

    // Sanitize no-digit fields before submitting
    ['txt_location_id', 'txt_father_job', 'txt_job'].forEach(function (id) {
        var el = document.getElementById(id);
        if (el && el.value) {
            el.value = el.value.replace(/[0-9۰-۹٠-٩\u0660-\u0669\u06F0-\u06F9]/g, '');
        }
    });

    // Show Loader
    var loader = document.getElementById('divLoader');
    if (loader) {
        if (loader.parentNode !== document.body) {
            document.body.appendChild(loader);
        }
        loader.style.display = 'flex';
    }

    // Prepare FormData
    var formData = new FormData(form);

    // Ensure profilePhoto file is included
    var fileInput = document.getElementById('FileUpload');
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
        formData.set("profilePhoto", fileInput.files[0]);
        formData.set("FileUpload", fileInput.files[0]);
    }

    // Ensure Shamsi date is sent
    var shamsiVal = (document.getElementById("birth_date_shamsi") ? document.getElementById("birth_date_shamsi").value : "") ||
        (document.getElementById("hidden_birthDate") ? document.getElementById("hidden_birthDate").value : "");
    if (shamsiVal) {
        formData.set("birthDate", shamsiVal);
    }

    fetch("/personal-info", {
        method: "POST",
        body: formData,
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        }
    })
        .then(function (res) { return res.json(); })
        .then(function (response) {
            if (loader) loader.style.display = 'none';

            if (response && (response.success === true || response.errorcode === "0")) {
                var successMsg = response.message || "اطلاعات با موفقیت ذخیره شد.";
                display_alarm2(successMsg, "ثبت اطلاعات", "", 1);

                // Update Profile Photo if returned
                if (response.file_logo) {
                    var docPic = document.getElementById('doc_pic');
                    if (docPic) docPic.src = response.file_logo;
                    var topAvatar = document.getElementById('topbar_user_avatar');
                    if (topAvatar) topAvatar.src = response.file_logo;
                }
            } else {
                var errorMsg = (response && response.message) ? response.message : "در ثبت اطلاعات با خطائی مواجه شده‌اید. لطفا مجددا سعی نمائید.";
                if (response && response.errorcode) {
                    switch (response.errorcode) {
                        case "1": errorMsg = "شما مدت زیادی است که از سیستم استفاده نکرده‌اید. لطفا مجددا وارد شوید."; break;
                        case "2": errorMsg = "کد ملی وارد شده تکراری است!"; break;
                        case "3": errorMsg = "لازم است شما مجددا در سیستم وارد شوید."; break;
                        case "6": errorMsg = response.message || "خطا در بارگذاری تصویر بازیکن."; break;
                        case "10": errorMsg = response.message || "در ثبت اطلاعات با خطائی مواجه شده‌اید. لطفا مجددا سعی نمائید."; break;
                    }
                }
                display_alarm2(errorMsg, "خطا در ثبت اطلاعات", "", 0);
            }
        })
        .catch(function () {
            if (loader) loader.style.display = 'none';
            display_alarm2("در برقراری ارتباط با سرور خطایی رخ داد. لطفا اتصال اینترنت خود را بررسی نموده و مجددا سعی نمایید.", "خطا در برقراری ارتباط", "", 0);
        });
}

// 7. Page Load Listeners
document.addEventListener('DOMContentLoaded', function () {
    var dpInput = document.getElementById('birthDate');
    if (dpInput) {
        dpInput.addEventListener('change', syncBirthDetails);
        var observer = new MutationObserver(syncBirthDetails);
        observer.observe(dpInput, { childList: true, subtree: true, characterData: true });
    }
    var hiddenBirth = document.getElementById('hidden_birthDate');
    if (hiddenBirth) {
        hiddenBirth.addEventListener('change', syncBirthDetails);
    }
    syncBirthDetails();
    setupNoNumbersValidation();

    // Prevent default form submit on personal-info-form
    var form = document.getElementById('personal-info-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            save_data();
            return false;
        });
    }

    // Bind submit buttons (Top Bar for laptop, Sticky Bottom for mobile)
    var topSubmitBtn = document.querySelector('.btn-submit-top');
    if (topSubmitBtn) {
        topSubmitBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            save_data();
            return false;
        });
    }

    var stickySubmitBtn = document.querySelector('.sticky-submit-btn');
    if (stickySubmitBtn) {
        stickySubmitBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            save_data();
            return false;
        });
    }

    // Keyboard-aware positioning for sticky submit button on mobile devices
    var updateStickySubmitPosition = function () {
        if (window.innerWidth > 768) return;
        var wrapper = document.querySelector('.sticky-submit-wrapper');
        if (!wrapper) return;
        var vv = window.visualViewport;
        if (!vv) return;
        var isKeyboard = (window.innerHeight - vv.height) > 100;
        var bottomNav = document.querySelector('.bottom-nav');
        if (isKeyboard) {
            var h = wrapper.offsetHeight || 65;
            wrapper.style.top = (vv.offsetTop + vv.height - h) + 'px';
            wrapper.style.bottom = 'auto';
            if (bottomNav) bottomNav.style.display = 'none';
        } else {
            wrapper.style.top = 'auto';
            wrapper.style.bottom = '65px';
            if (bottomNav) bottomNav.style.display = '';
        }
    };

    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', updateStickySubmitPosition);
        window.visualViewport.addEventListener('scroll', updateStickySubmitPosition);
    }
    window.addEventListener('resize', updateStickySubmitPosition);
    window.addEventListener('scroll', updateStickySubmitPosition);
});
