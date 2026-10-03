/**
 * FootballSchool - Personal Info Page Script
 * Fully separated and modularized JavaScript
 */

// Image preview handler
function previewImage(input) {
    if (input.files && input.files[0]) {
        var file = input.files[0];
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

// Age calculation and auto-defaults matching TaskHelpFiles
function set_age_param() {
    if (typeof set_age === 'function') {
        set_age('birth_date_shamsi', 'lbl_age');
    }

    var ageEl = document.getElementById('lbl_age');
    if (!ageEl) return;

    var ageText = (ageEl.innerText || ageEl.innerHTML || '').replace(/[^0-9]/g, '');
    var temp = parseInt(ageText);
    if (!isNaN(temp) && temp > 0) {
        ageEl.innerText = temp + " سال";
        if (temp < 18) {
            var mil = document.getElementById("cmd_military_service_status");
            if (mil && (mil.value == '0' || mil.value == '' || mil.value == '-1')) {
                mil.value = '5'; // محصل
            }
            var mar = document.getElementById("cmd_marital_status");
            if (mar && (mar.value == '' || mar.value == '-1')) {
                mar.value = '0'; // مجرد
            }
        }
    }
}

// Close alarm modal box
function close_alarm_box() {
    var box = document.getElementById('alaram_box');
    if (box) {
        box.style.display = 'none';
    }
}

// Display alarm modal box with title, message, status (false=error, true=success)
function display_alarm_modal(title, message, isSuccess) {
    var box = document.getElementById('alaram_box');
    var td1 = document.getElementById('td1');
    var td2 = document.getElementById('td2');
    var lbl1 = document.getElementById('lbl1');
    var lbl2 = document.getElementById('lbl2');
    var btn = document.getElementById('alarm_btn');

    if (!box) {
        alert(message);
        return;
    }

    if (lbl1) lbl1.innerText = title;
    if (lbl2) lbl2.innerText = message;

    if (isSuccess) {
        if (td1) td1.style.backgroundColor = '#16a34a';
        if (td2) td2.style.backgroundColor = '#16a34a';
        if (btn) btn.className = 'btn-success';
    } else {
        if (td1) td1.style.backgroundColor = '#dc2626';
        if (td2) td2.style.backgroundColor = '#dc2626';
        if (btn) btn.className = 'btn-Pcustome-alarm';
    }

    box.style.display = 'block';
}

// Compatibility fallbacks for legacy function calls from footballit_script.js
function display_alarm(message, obj) {
    display_alarm_modal("خطا در ورود اطلاعات", message, false);
}

function display_alarm2(message, title, obj, flag) {
    display_alarm_modal(title || "خطا در ثبت اطلاعات", message, false);
}

// Client-side validation matching legacy check_data()
function check_data() {
    if (typeof jalali_to_gregorian === 'function') {
        jalali_to_gregorian('birth_date_shamsi', 'txt_birth_date_miladi');
    }
    set_age_param();

    var nameVal = (document.getElementById("txt_name")?.value || "").trim();
    if (nameVal === '') {
        display_alarm_modal("لطفا فیلدهای ستاره‌دار را وارد کنید", "نام بازیکن وارد نشده است. ثبت اطلاعات برای فیلدهای ستاره‌دار الزامی است", false);
        return false;
    }

    var famVal = (document.getElementById("txt_family")?.value || "").trim();
    if (famVal === '') {
        display_alarm_modal("لطفا فیلدهای ستاره‌دار را وارد کنید", "نام خانوادگی بازیکن وارد نشده است. ثبت اطلاعات برای فیلدهای ستاره‌دار الزامی است", false);
        return false;
    }

    var intIdVal = (document.getElementById("txt_international_id")?.value || "").trim();
    if (intIdVal === '') {
        display_alarm_modal("لطفا فیلدهای ستاره‌دار را وارد کنید", "کد ملی بازیکن وارد نشده است. ثبت اطلاعات برای فیلدهای ستاره‌دار الزامی است", false);
        return false;
    }

    var natVal = document.getElementById('cmd_nationality_id')?.value || '1';
    if (natVal !== '24') {
        if (typeof CheckMeliCode === 'function' && !CheckMeliCode('txt_international_id')) {
            display_alarm_modal("خطا در ثبت کد ملی", "کد ملی وارد شده معتبر نمی‌باشد.", false);
            return false;
        }
    } else {
        if (typeof CheckfaragirCode === 'function' && !CheckfaragirCode('txt_international_id')) {
            display_alarm_modal("خطا در ثبت کد فراگیر", "کد فراگیر را عددی وارد کنید، کد وارد شده معتبر نمی‌باشد.", false);
            return false;
        }
    }

    var shamsiVal = (document.getElementById("birth_date_shamsi")?.value || "").trim();
    if (typeof checkdate === 'function') {
        if (!checkdate('birth_date_shamsi')
            || shamsiVal.length !== 10
            || shamsiVal.substr(4, 1) !== '/'
            || shamsiVal.substr(7, 1) !== '/') {
            display_alarm_modal("خطا در ثبت تاریخ تولد شمسی", "تاریخ وارد شده صحیح نیست. لطفا تاریخ تولد شمسی را با فرمت YYYY/MM/DD وارد کنید.", false);
            return false;
        }
    }

    var miladiVal = (document.getElementById("txt_birth_date_miladi")?.value || "").trim();
    if (typeof checkdate_miladi === 'function') {
        if (!checkdate_miladi('txt_birth_date_miladi')
            || miladiVal.length !== 10
            || miladiVal.substr(4, 1) !== '/'
            || miladiVal.substr(7, 1) !== '/') {
            display_alarm_modal("خطا در ثبت تاریخ تولد میلادی", "تاریخ وارد شده صحیح نیست. لطفا تاریخ تولد میلادی را با فرمت YYYY/MM/DD وارد کنید.", false);
            return false;
        }
    }

    return true;
}

// AJAX Form submission
function save_data() {
    var form = document.getElementById('personal-info-form');
    if (!form) return;

    var formData = new FormData(form);

    var fileInput = document.getElementById("FileUpload");
    if (fileInput && fileInput.files.length > 0) {
        formData.set("FileUpload", fileInput.files[0]);
    }

    var soccerEl = document.getElementById('cmb_soccer');
    if (soccerEl) {
        formData.set('soccer_id', soccerEl.value);
    }

    var loader = document.getElementById('divLoader');
    if (loader) loader.style.display = 'flex';

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
            if (loader) loader.style.display = 'none';

            if (response && response.errorcode === "0") {
                display_alarm_modal("ثبت اطلاعات", "اطلاعات با موفقیت ذخیره شد.", true);
                if (response.file_logo) {
                    var pic = document.getElementById('doc_pic');
                    if (pic) pic.src = "/Uploadfiles/Images/" + response.file_logo;
                    var topbarAvatar = document.getElementById('topbar_user_avatar');
                    if (topbarAvatar) topbarAvatar.src = "/Uploadfiles/Images/" + response.file_logo;
                }
                if (response.complete_percent !== undefined) {
                    var percentBadge = document.getElementById('lbl_complete_percent');
                    if (percentBadge) percentBadge.innerText = response.complete_percent + "٪";
                }
            } else {
                var msg = "در ثبت اطلاعات با خطائی مواجه شده‌اید. لطفا مجددا سعی نمائید.";
                var code = response ? response.errorcode : "";
                switch (code) {
                    case "1": msg = "شما مدت زیادی است که از سیستم استفاده نکرده‌اید. لطفا مجددا وارد شوید."; break;
                    case "2": msg = "کد ملی وارد شده تکراری است!"; break;
                    case "3": msg = "لازم است شما مجددا در سیستم وارد شوید."; break;
                    case "6": msg = "خطا در بارگذاری تصویر بازیکن. لطفا فرمت مجاز (jpg, jpeg, png, tiff) انتخاب فرمایید."; break;
                    case "10": msg = "در ثبت اطلاعات با خطائی مواجه شده‌اید. لطفا مجددا سعی نمائید."; break;
                }
                display_alarm_modal("خطا در ثبت اطلاعات", msg, false);
            }
        },
        error: function () {
            if (loader) loader.style.display = 'none';
            display_alarm_modal("خطا در برقراری ارتباط", "در برقراری ارتباط با سرور خطایی رخ داد. لطفا مجددا سعی نمایید.", false);
        }
    });
}

// Player selection change handler
function set_data(flag) {
    var soccerEl = document.getElementById('cmb_soccer');
    if (!soccerEl) return;

    var soccer_id = soccerEl.value;
    var loader = document.getElementById('divLoader');
    if (loader) loader.style.display = 'flex';

    $.ajax({
        url: "/FootballschoolPerson/view_person2",
        type: "GET",
        data: { soccer_id: soccer_id, flag: flag },
        success: function (response) {
            if (response && response.model) {
                var m = response.model;
                if (m.person_id && document.getElementById('person_id')) document.getElementById('person_id').value = m.person_id;
                if (m.user_id_FK && document.getElementById('user_id_FK')) document.getElementById('user_id_FK').value = m.user_id_FK;
                if (document.getElementById('txt_name')) document.getElementById('txt_name').value = m.name || '';
                if (document.getElementById('txt_family')) document.getElementById('txt_family').value = m.family || '';
                if (document.getElementById('txt_eng_name')) document.getElementById('txt_eng_name').value = m.eng_name || '';
                if (document.getElementById('txt_eng_family')) document.getElementById('txt_eng_family').value = m.eng_family || '';
                if (document.getElementById('txt_international_id')) document.getElementById('txt_international_id').value = m.international_id || '';
                if (document.getElementById('txt_id_no')) document.getElementById('txt_id_no').value = m.id_no || '';
                if (document.getElementById('txt_serial_id')) document.getElementById('txt_serial_id').value = m.serial_id || '';
                if (document.getElementById('txt_location_id')) document.getElementById('txt_location_id').value = m.location_id || '';
                if (document.getElementById('txt_father_name')) document.getElementById('txt_father_name').value = m.father_name || '';
                if (document.getElementById('txt_father_job')) document.getElementById('txt_father_job').value = m.father_job || '';
                if (document.getElementById('birth_date_shamsi')) document.getElementById('birth_date_shamsi').value = m.birth_date_shamsi || '';
                if (document.getElementById('txt_birth_date_miladi')) document.getElementById('txt_birth_date_miladi').value = m.birth_date_miladi || '';
                if (document.getElementById('cmd_nationality_id') && m.nationality_id_FK2) document.getElementById('cmd_nationality_id').value = m.nationality_id_FK2;
                if (document.getElementById('cmd_citizenship') && m.citizenship2) document.getElementById('cmd_citizenship').value = m.citizenship2;
                if (document.getElementById('cmd_health_status') && m.health_status2) document.getElementById('cmd_health_status').value = m.health_status2;
                if (document.getElementById('cmd_blood_type') && m.blood_type2) document.getElementById('cmd_blood_type').value = m.blood_type2;
                if (document.getElementById('txt_Height')) document.getElementById('txt_Height').value = m.Height || '';
                if (document.getElementById('txt_weight')) document.getElementById('txt_weight').value = m.weight || '';
                if (document.getElementById('cmd_gender') && m.gender2 !== null && m.gender2 !== undefined) document.getElementById('cmd_gender').value = m.gender2;
                if (document.getElementById('cmd_marital_status') && m.marital_status2 !== null && m.marital_status2 !== undefined) document.getElementById('cmd_marital_status').value = m.marital_status2;
                if (document.getElementById('cmd_military_service_status') && m.military_service_status2 !== null && m.military_service_status2 !== undefined) document.getElementById('cmd_military_service_status').value = m.military_service_status2;
                if (document.getElementById('txt_job')) document.getElementById('txt_job').value = m.job || '';
                if (document.getElementById('cmd_religion') && m.religion2 !== null && m.religion2 !== undefined) document.getElementById('cmd_religion').value = m.religion2;
                if (document.getElementById('txt_description')) document.getElementById('txt_description').value = m.description || '';
                if (document.getElementById('doc_pic') && m.pictuer) document.getElementById('doc_pic').src = m.pictuer;
                set_age_param();
            }
            if (loader) loader.style.display = 'none';
        },
        error: function () {
            if (loader) loader.style.display = 'none';
        }
    });
}

// Navigation on Enter key
function enter_to_tab2(nextId) {
    if (window.event && window.event.keyCode === 13) {
        window.event.preventDefault();
        var nextEl = document.getElementById(nextId);
        if (nextEl) nextEl.focus();
    }
}

// Page load initialization
document.addEventListener('DOMContentLoaded', function () {
    var bs = document.getElementById("birth_date_shamsi");
    if (bs && bs.value !== '') {
        set_age_param();
    }
});

// Periodic or mouseover synchronization
window.onmouseover = function () {
    var bs = document.getElementById('birth_date_shamsi');
    if (bs && bs.value.length === 10) {
        if (typeof jalali_to_gregorian === 'function') {
            jalali_to_gregorian('birth_date_shamsi', 'txt_birth_date_miladi');
        }
        set_age_param();
    }
};
