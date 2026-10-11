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

// 4. Safe close alarm box
function close_alarm_box() {
    $('#alaram_box').hide();
    var hdn = document.getElementById('hdn_alarm');
    if (hdn && hdn.value !== '') {
        var target = document.getElementById(hdn.value);
        if (target) {
            target.focus();
        }
        hdn.value = "";
    }
}

// 4.5 Real-time National ID validation under the input field
function validateNationalIdRealtime() {
    var input = document.getElementById("txt_international_id");
    if (!input) return true;

    var group = input.closest('.input-group');
    if (!group) return true;

    var label = group.querySelector('label');
    var existingErr = group.querySelector('.error-text');
    if (existingErr) existingErr.remove();

    var val = input.value.trim();
    if (!val) {
        input.classList.remove('error', 'success');
        if (label) label.classList.remove('error-label');
        return true;
    }

    // Normalize Persian & Arabic numerals to English 0-9
    val = val.replace(/[۰-۹]/g, function (w) { return String.fromCharCode(w.charCodeAt(0) - 1728); })
             .replace(/[٠-٩]/g, function (w) { return String.fromCharCode(w.charCodeAt(0) - 1632 + 48); });

    var natVal = document.getElementById('cmd_nationality_id') ? document.getElementById('cmd_nationality_id').value : '1';
    var isForeign = (natVal === '24' || natVal === 'اتباع خارجی');

    var hasError = false;
    var errorMsg = '';

    if (isForeign) {
        var firstChar = val.substr(0, 1).toUpperCase();
        if (firstChar >= 'A' && firstChar <= 'Z') {
            if (val.length < 5) {
                hasError = true;
                errorMsg = 'شماره پاسپورت باید حداقل ۵ کاراکتر باشد';
            }
        } else {
            if (!/^\d+$/.test(val)) {
                hasError = true;
                errorMsg = 'کد فراگیر اتباع باید عددی باشد';
            } else if (val.length < 10) {
                hasError = true;
                errorMsg = 'کد فراگیر باید حداقل ۱۰ رقم باشد';
            }
        }
    } else {
        // Iranian National ID
        if (val.length < 10) {
            hasError = true;
            errorMsg = 'کد ملی باید ۱۰ رقم باشد';
        } else if (val.length === 10) {
            if (!/^\d{10}$/.test(val)) {
                hasError = true;
                errorMsg = 'کد ملی فقط باید شامل اعداد باشد';
            } else if (/^(\d)\1{9}$/.test(val)) {
                hasError = true;
                errorMsg = 'کد ملی نامعتبر است (ارقام تکراری مجاز نیست)';
            } else if (val === '0123456789' || val === '1234567890' || val === '9876543210' || val === '0987654321') {
                hasError = true;
                errorMsg = 'کد ملی نامعتبر است (ارقام متوالی مجاز نیست)';
            } else {
                var check = parseInt(val[9], 10);
                var sum = 0;
                for (var i = 0; i < 9; i++) {
                    sum += parseInt(val[i], 10) * (10 - i);
                }
                var remainder = sum % 11;
                var isValid = (remainder < 2 && check === remainder) || (remainder >= 2 && check === (11 - remainder));
                if (!isValid) {
                    hasError = true;
                    errorMsg = 'کد ملی نامعتبر است';
                }
            }
        } else if (val.length > 10) {
            hasError = true;
            errorMsg = 'طول کد ملی نباید بیشتر از ۱۰ رقم باشد';
        }
    }

    if (hasError) {
        input.classList.remove('success');
        input.classList.add('error');
        if (label) label.classList.add('error-label');

        var errSpan = document.createElement('span');
        errSpan.className = 'error-text';
        errSpan.innerHTML = '<i class="fa fa-exclamation-circle" style="margin-left: 4px;"></i>' + errorMsg;
        group.appendChild(errSpan);
        return false;
    } else if (val.length === 10) {
        input.classList.remove('error');
        input.classList.add('success');
        if (label) label.classList.remove('error-label');
        return true;
    } else {
        input.classList.remove('error', 'success');
        if (label) label.classList.remove('error-label');
        return true;
    }
}

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

    // Check National / Foreign ID Not Empty
    var intIdVal = (document.getElementById("txt_international_id") ? document.getElementById("txt_international_id").value : "").trim();
    if (intIdVal === '') {
        display_alarm2("کد ملی بازیکن وارد نشده است. ثبت اطلاعات برای فیلدهای ستاره‌دار الزامی است", "لطفا فیلدهای ستاره‌دار را وارد کنید", "txt_international_id", 0);
        return false;
    }

    // Check Nationality & National ID algorithm from footballit_script.js
    var natVal = document.getElementById('cmd_nationality_id') ? document.getElementById('cmd_nationality_id').value : '1';
    if (natVal === '24' || natVal === 'اتباع خارجی') {
        if (typeof CheckfaragirCode === 'function') {
            if (!CheckfaragirCode('txt_international_id')) {
                display_alarm('کد فراگیر را عددی وارد کنید کد وارد شده معتبر نمی‌باشد.', 'txt_international_id');
                return false;
            }
        }
    } else {
        if (typeof CheckMeliCode === 'function') {
            if (!CheckMeliCode('txt_international_id')) {
                // CheckMeliCode displays alarm internally
                return false;
            }
        }
        var rawMeli = (document.getElementById("txt_international_id") ? document.getElementById("txt_international_id").value : "").trim();
        rawMeli = rawMeli.replace(/[۰-۹]/g, function (w) { return String.fromCharCode(w.charCodeAt(0) - 1728); })
            .replace(/[٠-٩]/g, function (w) { return String.fromCharCode(w.charCodeAt(0) - 1632 + 48); });
        if (/^(\d)\1{9}$/.test(rawMeli) || rawMeli === '0123456789' || rawMeli === '1234567890' || rawMeli === '9876543210' || rawMeli === '0987654321') {
            if (typeof display_alarm === 'function') {
                display_alarm('كد ملي صحيح نمي باشد', 'txt_international_id');
            } else if (typeof display_alarm2 === 'function') {
                display_alarm2('کد ملی وارد شده صحیح نیست . لطفا کد ملی را صحیح وارد کنید.', 'خطا در ثبت کد ملی', 'txt_international_id', 0);
            }
            return false;
        }
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

// 6. Full AJAX Form Submission ("agex")
function save_data() {
    if (!check_data()) {
        return;
    }

    var form = document.getElementById('personal-info-form');
    if (!form) return;

    // Show Loader
    var loader = document.getElementById('divLoader');
    if (loader) {
        $(loader).fadeIn(150);
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

    $.ajax({
        url: "/personal-info",
        type: "POST",
        data: formData,
        dataType: 'json',
        contentType: false,
        processData: false,
        headers: {
            "X-Requested-With": "XMLHttpRequest"
        },
        success: function (response) {
            if (loader) $(loader).fadeOut(150);

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
        },
        error: function (xhr, status, error) {
            if (loader) $(loader).fadeOut(150);
            display_alarm2("در برقراری ارتباط با سرور خطایی رخ داد. لطفا اتصال اینترنت خود را بررسی نموده و مجددا سعی نمایید.", "خطا در برقراری ارتباط", "", 0);
        }
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

    // Prevent default form submit on personal-info-form
    var form = document.getElementById('personal-info-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            save_data();
            return false;
        });
    }

    // Bind Real-time validation for National ID
    var natInput = document.getElementById('txt_international_id');
    if (natInput) {
        natInput.addEventListener('input', validateNationalIdRealtime);
        natInput.addEventListener('keyup', validateNationalIdRealtime);
        natInput.addEventListener('change', validateNationalIdRealtime);
        natInput.addEventListener('blur', validateNationalIdRealtime);
    }
    var natSelect = document.getElementById('cmd_nationality_id');
    if (natSelect) {
        natSelect.addEventListener('change', validateNationalIdRealtime);
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
