
function enter_to_tab2(object) {
    var obj = document.getElementById(object);
    var key = window.event.keyCode;
    if (key == 13) {
        var form = event.target.form;
        var index = Array.prototype.indexOf.call(form, event.target);
        form.elements[index + 1].focus();
        event.preventDefault();
        obj.focus()
    }
    return false;
}
function ett(object,index) {
    var obj = document.getElementById(object);
    var key = window.event.keyCode;
    if (key == 13) {
       // alert(index);
        var form = event.target.form;
        form.elements[index].focus();
        event.preventDefault();
    }
    return false;
}
function enter_to_tab(object) {
    var obj = document.getElementById(object);
    //alert( document.getElementById(object).tabIndex);
    var key = window.event.keyCode;    
    if (key == 13) {
        obj.focus(); 
    }

    return false;
}
function checktime(obj)
{

    var str = document.getElementById(obj).value;
   
    if (str == '') 
    {
        display_alarm('ساعت وارد نشده است.', '');
        return false;
    }
    if (str.length == 4 && str.indexOf(':')==-1)
    {
        str = str.substr(0, 2) + ':' + str.substr(2, 2);
        document.getElementById(obj).value = str;
    }
   
    if (str.length < 5) {
        str = str + ':00';
        document.getElementById(obj).value = str;
    }
    var regex = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    var result = regex.test(str);
    if (result == false) {
        display_alarm('فرمت ساعت وارد شده معتبر نیست. لطفا ساعت را با فرمت صحیح وارد نمائید.', obj);
        return false;
        //document.getElementById(flag).value = "0";
    }
    else {
        return true;
        //document.getElementById(flag).value = "1";
    }

}
function checkdate(obj) {
    var str = document.getElementById(obj).value;
    var mds_str = "";
   
    if (str == '') 
    {
        display_alarm('تاریخ وارد نشده است.', '');
        return false;
    }
    for (var i = 0; i < str.length ; i++)
    { 
        switch (str.charCodeAt(i)) {
            case 1777: mds_str = mds_str + "1"; break;
            case 1778: mds_str = mds_str + "2"; break;
            case 1779: mds_str = mds_str + "3"; break;
            case 1780: mds_str = mds_str + "4"; break;
            case 1781: mds_str = mds_str + "5"; break;
            case 1782: mds_str = mds_str + "6"; break;
            case 1783: mds_str = mds_str + "7"; break;
            case 1784: mds_str = mds_str + "8"; break;
            case 1785: mds_str = mds_str + "9"; break;
            case 1776: mds_str = mds_str + "0"; break;
            case 47: mds_str = mds_str + "/"; break;
            default:
                mds_str = mds_str + str.substr(i, 1); 
            //       alert(mds_str + '****' + str.substr(i, 1)+'****'+i); break;
        }
    }
        
    var patt = /(13|14|19|20)([0-9][0-9])\/(((0?[1-6])\/((0?[1-9])|([12][0-9])|(3[0-1])))|(((0?[7-9])|(1[0-2]))\/((0?[1-9])|([12][0-9])|(30))))/g;
    var result = patt.test(mds_str);
    if (result) {
        var pos = str.indexOf('/');
        var year = str.substring(0, pos);
        var nextPos = str.indexOf('/', pos + 1);
        var month = str.substring(pos + 1, nextPos);
        var day = str.substring(nextPos + 1);
        if (month == 12 && (year + 1) % 4 != 0 && day == 30) { // kabise = 1379, 1383, 1387,... (year +1) divides on 4 remains 0
            result = false;
        }
    }
    if (result == false) {
        display_alarm('فرمت تاریخ شمسی وارد شده معتبر نیست. لطفا تاریخ را با فرمت YYYY/MM/DD وارد نمائید.', obj);
        return false;
        //document.getElementById(flag).value = "0";
    }
    else
    {
        return true;
        //document.getElementById(flag).value = "1";
    }
}
function checkdate2(obj) {
    var str = document.getElementById(obj).value;
    var mds_str = "";

    for (var i = 0; i < str.length ; i++) {
        switch (str.charCodeAt(i)) {
            case 1777: mds_str = mds_str + "1"; break;
            case 1778: mds_str = mds_str + "2"; break;
            case 1779: mds_str = mds_str + "3"; break;
            case 1780: mds_str = mds_str + "4"; break;
            case 1781: mds_str = mds_str + "5"; break;
            case 1782: mds_str = mds_str + "6"; break;
            case 1783: mds_str = mds_str + "7"; break;
            case 1784: mds_str = mds_str + "8"; break;
            case 1785: mds_str = mds_str + "9"; break;
            case 1776: mds_str = mds_str + "0"; break;
            case 47: mds_str = mds_str + "/"; break;
            default:
                mds_str = mds_str + str.substr(i, 1);
                //       alert(mds_str + '****' + str.substr(i, 1)+'****'+i); break;
        }
    }

    var patt = /(13|14|19|20)([0-9][0-9])\/(((0?[1-6])\/((0?[1-9])|([12][0-9])|(3[0-1])))|(((0?[7-9])|(1[0-2]))\/((0?[1-9])|([12][0-9])|(30))))/g;
    var result = patt.test(mds_str);
    if (result) {
        var pos = str.indexOf('/');
        var year = str.substring(0, pos);
        var nextPos = str.indexOf('/', pos + 1);
        var month = str.substring(pos + 1, nextPos);
        var day = str.substring(nextPos + 1);
        if (month == 12 && (year + 1) % 4 != 0 && day == 30) { // kabise = 1379, 1383, 1387,... (year +1) divides on 4 remains 0
            result = false;
        }
    }
    if (result == false) {
        display_alarm('فرمت تاریخ شمسی وارد شده معتبر نیست. لطفا تاریخ را با فرمت YYYY/MM/DD وارد نمائید.', obj);
        return false;
        //document.getElementById(flag).value = "0";
    }
    else {
        return true;
        //document.getElementById(flag).value = "1";
    }
}
function CheckDateNew(obj) {
    var str = document.getElementById(obj).value;
    var mds_str = "";

    if (str == '') {
        DisplayModal('تاریخ وارد نشده است.', 'خطا', 4);
        return false;
    }
    for (var i = 0; i < str.length; i++) {
        switch (str.charCodeAt(i)) {
            case 1777: mds_str = mds_str + "1"; break;
            case 1778: mds_str = mds_str + "2"; break;
            case 1779: mds_str = mds_str + "3"; break;
            case 1780: mds_str = mds_str + "4"; break;
            case 1781: mds_str = mds_str + "5"; break;
            case 1782: mds_str = mds_str + "6"; break;
            case 1783: mds_str = mds_str + "7"; break;
            case 1784: mds_str = mds_str + "8"; break;
            case 1785: mds_str = mds_str + "9"; break;
            case 1776: mds_str = mds_str + "0"; break;
            case 47: mds_str = mds_str + "/"; break;
            default:
                mds_str = mds_str + str.substr(i, 1);
            //       alert(mds_str + '****' + str.substr(i, 1)+'****'+i); break;
        }
    }

    var patt = /(13|14|19|20)([0-9][0-9])\/(((0?[1-6])\/((0?[1-9])|([12][0-9])|(3[0-1])))|(((0?[7-9])|(1[0-2]))\/((0?[1-9])|([12][0-9])|(30))))/g;
    var result = patt.test(mds_str);
    if (result) {
        var pos = mds_str.indexOf('/');
        var year = mds_str.substring(0, pos);
        var nextPos = mds_str.indexOf('/', pos + 1);
        var month = mds_str.substring(pos + 1, nextPos);
        var day = mds_str.substring(nextPos + 1);
        if (month == 12 && (year + 1) % 4 != 0 && day == 30) { // kabise = 1379, 1383, 1387,... (year +1) divides on 4 remains 0
            result = false;
        }
        if ((month > 6 && month < 12) && day >= 31) {
            result = false;
        }
    }
    if (result == false) {
        DisplayModal('فرمت تاریخ شمسی وارد شده معتبر نیست. لطفا تاریخ را با فرمت YYYY/MM/DD وارد نمائید.', 'خطا', 4);
        return false;
        //document.getElementById(flag).value = "0";
    }
    else {
        return true;
        //document.getElementById(flag).value = "1";
    }
}

function close_alarm_box() {
    $('#alaram_box').hide();
    var obj = document.getElementById('hdn_alarm').value;
    if(obj!=''){document.getElementById(obj).focus();}
    document.getElementById("hdn_alarm").value = "";
}
function checkEmail(obj) {
    var emailAddress = document.getElementById(obj).value;
    if (emailAddress != '') {
        var sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
        var sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
        var sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
        var sQuotedPair = '\\x5c[\\x00-\\x7f]';
        var sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
        var sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
        var sDomain_ref = sAtom;
        var sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
        var sWord = '(' + sAtom + '|' + sQuotedString + ')';
        var sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
        var sLocalPart = sWord + '(\\x2e' + sWord + ')*';
        var sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
        var sValidEmail = '^' + sAddrSpec + '$'; // as whole string

        var reValidEmail = new RegExp(sValidEmail);
        if (reValidEmail.test(emailAddress) == false && emailAddress != '') {
            display_alarm('ایمیل وارد شده معتبر نیست .  لطفا ایمیل خود را با فرمت xx@xxx.xxx وارد کنید .', 'txt_email');
            return false;
        }
    }
    return true;

}
function Set_value_numeric(obj, max_len) {

    var str = document.getElementById(obj).value;
    var temp = ''; //alert(str);
    var str_checked = '';
    for (i = 0; i < str.length; i++) {
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
            str_checked = str_checked + temp
        }
        temp = "";
    }
    if (str.length > max_len) {
        str_checked = str_checked.substring(0, max_len);
    }
    document.getElementById(obj).value = str_checked;
}
function Set_value_numeric2(obj, max_len) {
    
    var str = document.getElementById(obj).value;
    var temp = ''; 
    var str_checked = '';
    for (i = 0; i < str.length; i++) {
        temp = str.substring(i, i + 1);

        //alert(temp.charCodeAt(0));


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


        if ((48 <= temp.charCodeAt(0) && temp.charCodeAt(0) <= 57) || temp == '.' || temp == '/') {
            if (temp == '/')
                temp = '.';

            if (temp == '.' && !str_checked.includes(".")) str_checked = str_checked + temp
            if (temp != '.') str_checked = str_checked + temp

        }
        temp = "";
    }
    if (str.length > max_len) {
        str_checked = str_checked.substring(0, max_len);
    }
    if (str_checked == '.') str_checked = "";
    document.getElementById(obj).value = str_checked;
}
function Set_value_numeric3(obj, max_len) {

    var str = document.getElementById(obj).value;
    var temp = '';
    var str_checked = '';
    for (i = 0; i < str.length; i++) {
        temp = str.substring(i, i + 1);

        //alert(temp.charCodeAt(0));


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


        if ((48 <= temp.charCodeAt(0) && temp.charCodeAt(0) <= 57) || temp == '+' || temp == '-') {

            str_checked = str_checked + temp

        }
        temp = "";
    }
    if (str.length > max_len) {
        str_checked = str_checked.substring(0, max_len);
    }
    if (str_checked == '.') str_checked = "";
    document.getElementById(obj).value = str_checked;
}

var msg = "";
function CheckMeliCode(obj) {
    var meli_code = document.getElementById(obj).value;
    var flag = "";
    if (meli_code != '') {
        var temp = meli_code.substr(0, 1).toUpperCase();
        if (temp >= 'A' && temp <= 'Z')
        {
            
            for(i=2;i<meli_code.length;i++)
            {
                
                switch (meli_code.charCodeAt(i)) {
                    case 1777: temp =  "1"; break;
                    case 1778: temp =  "2"; break;
                    case 1779: temp =  "3"; break;
                    case 1780: temp =  "4"; break;
                    case 1781: temp =  "5"; break;
                    case 1782: temp =  "6"; break;
                    case 1783: temp =  "7"; break;
                    case 1784: temp =  "8"; break;
                    case 1785: temp =  "9"; break;
                    case 1776: temp =  "0"; break;
                    default:
                        temp = meli_code.substr(i, 1);
                }
                if (temp != '0' && temp != '9' && temp != '8'
                    && temp != '7' && temp != '6' && temp != '5'
                    && temp != '4' && temp != '3' && temp != '2' && temp != '1')
                {
                    flag = '***';
                }
            } 
            if (flag != '***')
            {
                
                return true;
            }
            else
            {
                msg = 'شماره کد ملی یا پاسپورت صحيح نمي باشد';
                //document.getElementById(flag).value = "0";
                display_alarm(msg, obj);
                return false;
            }
        }
        else
        {
            temp2 = "";
            for (i = 0; i < meli_code.length; i++) {
                //alert(meli_code.charCodeAt(i));
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
            //alert(meli_code);
            if (meli_code.length == 10) {

                if (meli_code == '1111111111' ||
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
                    meli_code == '1234567890'
                    ) {
                    msg = 'كد ملي صحيح نمي باشد';
                    //document.getElementById(flag).value = "0";
                    display_alarm(msg, obj);
                    return false;
                }

                c = parseInt(meli_code.charAt(9));
                n = parseInt(meli_code.charAt(0)) * 10 +
                    parseInt(meli_code.charAt(1)) * 9 +
                    parseInt(meli_code.charAt(2)) * 8 +
                    parseInt(meli_code.charAt(3)) * 7 +
                    parseInt(meli_code.charAt(4)) * 6 +
                    parseInt(meli_code.charAt(5)) * 5 +
                    parseInt(meli_code.charAt(6)) * 4 +
                    parseInt(meli_code.charAt(7)) * 3 +
                    parseInt(meli_code.charAt(8)) * 2;
                r = n - parseInt(n / 11) * 11;
                if ((r == 0 && r == c) || (r == 1 && c == 1) || (r > 1 && c == 11 - r)) {
                    //document.getElementById(flag).value = "1";
                    return true;
                }
                else {

                    msg = 'كد ملي صحيح نمي باشد';
                    //document.getElementById(flag).value = "0";
                    display_alarm(msg, obj);
                    return false;
                }
            }
            else {

                msg = 'طول کد ملی وارد شده باید 10 کاراکتر باشد';
                //document.getElementById(flag).value = "0";
                display_alarm(msg, obj);
                //alert(document.getElementById(flag).value+'****'+flag);

                return false;
            }
        }
    }    
    else
    {
        msg = 'ثبت کد ملی الزامی است';
        //document.getElementById(flag).value = "0";
        display_alarm(msg, obj);
        //alert(document.getElementById(flag).value+'****'+flag);

        return false;
    }

    //document.getElementById(flag).value = "1";
}
function display_alarm(alarm_text, obj) {
    $('#alaram_box').hide().fadeIn(1000);
    $('#alaram_box').className = "alarm_box";
    document.getElementById('td1').style.backgroundColor = '#ff0000';
    document.getElementById('td2').style.backgroundColor = '#ff0000';
    document.getElementById('lbl1').innerHTML = 'خطا در ثبت اطلاعات';
    document.getElementById('lbl2').innerHTML = alarm_text;
    document.getElementById("alarm_pic").src = '/Content/images/Cancel-128.png';
    document.getElementById('hdn_alarm').value = obj;
    document.getElementById('alarm_btn').className="btn-Pcustome-alarm";
    document.getElementById('alaram_box').className = "alarm_box";
    document.documentElement.scrollTop = 0;
}
function display_alarm2(alarm_text, titel, obj, flag) {
   
    if (flag == 1)
    {
        document.getElementById('td1').style.backgroundColor = "green";
        document.getElementById('td2').style.backgroundColor = "green";
        document.getElementById('td3').style.color = "green";
        document.getElementById('lbl1').innerHTML = titel;
        document.getElementById('lbl2').innerHTML = alarm_text;
        document.getElementById("alarm_pic").src = "/Content/images/ok1.jpg";
        document.getElementById('hdn_alarm').value = obj;
        document.getElementById('alarm_btn').className = "btn btn-success";
        document.getElementById('alaram_box').className = "inform_box";
        $('#alaram_box').className = "alarm_box";
        
    }
    if (flag == 0)
    {
        document.getElementById('td1').style.backgroundColor = '#ff0000';
        document.getElementById('td2').style.backgroundColor = '#ff0000';
        document.getElementById('td3').style.color = "red";
        document.getElementById('lbl1').innerHTML = titel;
        document.getElementById('lbl2').innerHTML = alarm_text;
        
        document.getElementById("alarm_pic").src = '/Content/images/Cancel-128.png';
        document.getElementById('hdn_alarm').value = obj;
        document.getElementById('alarm_btn').className = "btn-Pcustome-alarm";
        document.getElementById('alaram_box').className = "alarm_box";
        $('#alaram_box').className = "alarm_box";
    }
    if (flag == 2) {
        document.getElementById('td1').style.backgroundColor = '#ff0000';
        document.getElementById('td2').style.backgroundColor = '#ff0000';
        document.getElementById('td3').style.color = "red";
        document.getElementById('lbl1').innerHTML = titel;
        document.getElementById('lbl2').innerHTML = alarm_text;
        document.getElementById("alarm_pic").src = '/Content/images/Cancel-128.png';
        document.getElementById('hdn_alarm').value = obj;
        document.getElementById('alarm_btn').className = "btn-Pcustome-alarm";
        document.getElementById('alaram_box').className = "alarm_box";
        $('#alaram_box').className = "question_box";
    }
    $('#alaram_box').hide().fadeIn(1000);
    document.documentElement.scrollTop = 0;

}
function jalali_to_gregorian(obj1, obj2) {
    var date_shamsi = document.getElementById(obj1).value;
    mds_str = "";
    if (date_shamsi != '' && date_shamsi.length==10) {
        if (date_shamsi.substr(0,2)=='19' || date_shamsi.substr(0,2)=='20')
        {
            document.getElementById(obj2).value=document.getElementById(obj1).value;
        }
        else
        {
            for (var i = 0; i < date_shamsi.length ; i++) {
                //alert(date_shamsi.charCodeAt(i));
                switch (date_shamsi.charCodeAt(i)) {
                    case 1777: mds_str = mds_str + "1"; break;
                    case 1778: mds_str = mds_str + "2"; break;
                    case 1779: mds_str = mds_str + "3"; break;
                    case 1780: mds_str = mds_str + "4"; break;
                    case 1781: mds_str = mds_str + "5"; break;
                    case 1782: mds_str = mds_str + "6"; break;
                    case 1783: mds_str = mds_str + "7"; break;
                    case 1784: mds_str = mds_str + "8"; break;
                    case 1785: mds_str = mds_str + "9"; break;
                    case 1776: mds_str = mds_str + "0"; break;
                    case 47: mds_str = mds_str + "/"; break;
                    default:
                        mds_str = mds_str + date_shamsi.substr(i, 1);
                        //alert(mds_str + '****' + date_shamsi.substr(i, 1) + '****' + i); break;
                }
            }
        
            jy = parseInt(mds_str.substr(0, 4));
            jm = parseInt(mds_str.substr(5, 2));
            jd = parseInt(mds_str.substr(8, 2));
            if (jy > 979) {
                gy = 1600;
                jy -= 979;
            } else {
                gy = 621;
            }
            days = (365 * jy) + ((parseInt(jy / 33)) * 8) + (parseInt(((jy % 33) + 3) / 4)) + 78 + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
            gy += 400 * (parseInt(days / 146097));
            days %= 146097;
            if (days > 36524) {
                gy += 100 * (parseInt(--days / 36524));
                days %= 36524;
                if (days >= 365) days++;
            }
            gy += 4 * (parseInt(days / 1461));
            days %= 1461;
            if (days > 365) {
                gy += parseInt((days - 1) / 365);
                days = (days - 1) % 365;
            }
            gd = days + 1;
            sal_a = [0, 31, ((gy % 4 == 0 && gy % 100 != 0) || (gy % 400 == 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            for (gm = 0; gm < 13; gm++) {
                v = sal_a[gm];
                if (gd <= v) break;
                gd -= v;
            }
         
            var g_month=gm.toString();
            if(gm.toString().length==1)
                g_month = '0' + g_month

            var g_day = gd.toString();
            if (g_day.length == 1)
                g_day = '0' + g_day

            document.getElementById(obj2).value = gy.toString() + '/' + g_month + '/' + g_day;
        }

    }
}
function ginj(year, month, day, f) {
    year = set_char(year);
    month = set_char(month);
    day = set_char(day);
    var $g_days_in_month = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    var $j_days_in_month = new Array(31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29);

    $gy = year - 1600;
    $gm = month - 1;
    $gd = day - 1;

    $g_day_no = 365 * $gy + div($gy + 3, 4) - div($gy + 99, 100) + div($gy + 399, 400);

    for ($i = 0; $i < $gm; ++$i)
        $g_day_no += $g_days_in_month[$i];
    if ($gm > 1 && (($gy % 4 == 0 && $gy % 100 != 0) || ($gy % 400 == 0)))
        /* leap and after Feb */
        $g_day_no++;
    $g_day_no += $gd;

    $j_day_no = $g_day_no - 79;

    $j_np = div($j_day_no, 12053); /* 12053 = 365*33 + 32/4 */
    $j_day_no = $j_day_no % 12053;

    $jy = 979 + 33 * $j_np + 4 * div($j_day_no, 1461); /* 1461 = 365*4 + 4/4 */

    $j_day_no %= 1461;

    if ($j_day_no >= 366) {
        $jy += div($j_day_no - 1, 365);
        $j_day_no = ($j_day_no - 1) % 365;
    }

    for ($i = 0; $i < 11 && $j_day_no >= $j_days_in_month[$i]; ++$i)
        $j_day_no -= $j_days_in_month[$i];
    $jm = $i + 1;
    $jd = $j_day_no + 1;

    function div(x, y) {
        return Math.floor(x / y);


    }
    var jy = $jy.toString();
    var jm = $jm.toString();
    var jd = $jd.toString();
    if (jm.length == 1)
    {
        jm = '0' + jm
    }
    if (jd.length == 1) {
        jd = '0' + jd
    }
    //alert(jy + '/' + jm + '/' + jd);
    //if (!f || f == undefined)
    //    return { y: $jy, m: $jm, d: $jd }
    //else
        return jy + '/' + jm + '/' + jd;





}
function set_age(obj1,obj2) {
    var date_shamsi = document.getElementById(obj1).value;
    mds_str = "";
    
    if (date_shamsi != '' && date_shamsi.length == 10) {
        if (date_shamsi.substr(0, 2) == '19' || date_shamsi.substr(0, 2) == '20')
        {
            date_shamsi = ginj(date_shamsi.substr(0, 4), date_shamsi.substr(5, 2), date_shamsi.substr(8, 2));
            //alert(date_shamsi);
        }
        for (var i = 0; i < date_shamsi.length ; i++) {
            //alert(date_shamsi.charCodeAt(i));
            switch (date_shamsi.charCodeAt(i)) {
                case 1777: mds_str = mds_str + "1"; break;
                case 1778: mds_str = mds_str + "2"; break;
                case 1779: mds_str = mds_str + "3"; break;
                case 1780: mds_str = mds_str + "4"; break;
                case 1781: mds_str = mds_str + "5"; break;
                case 1782: mds_str = mds_str + "6"; break;
                case 1783: mds_str = mds_str + "7"; break;
                case 1784: mds_str = mds_str + "8"; break;
                case 1785: mds_str = mds_str + "9"; break;
                case 1776: mds_str = mds_str + "0"; break;
                case 47: mds_str = mds_str + "/"; break;
                default:
                    mds_str = mds_str + date_shamsi.substr(i, 1);
                    //alert(mds_str + '****' + date_shamsi.substr(i, 1) + '****' + i); break;
            }
        }

        jy = parseInt(mds_str.substr(0, 4));
        jm = parseInt(mds_str.substr(5, 2));
        jd = parseInt(mds_str.substr(8, 2));
        if (jy > 979) {
            gy = 1600;
            jy -= 979;
        } else {
            gy = 621;
        }
        days = (365 * jy) + ((parseInt(jy / 33)) * 8) + (parseInt(((jy % 33) + 3) / 4)) + 78 + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
        gy += 400 * (parseInt(days / 146097));
        days %= 146097;
        if (days > 36524) {
            gy += 100 * (parseInt(--days / 36524));
            days %= 36524;
            if (days >= 365) days++;
        }
        gy += 4 * (parseInt(days / 1461));
        days %= 1461;
        if (days > 365) {
            gy += parseInt((days - 1) / 365);
            days = (days - 1) % 365;
        }
        gd = days + 1;
        sal_a = [0, 31, ((gy % 4 == 0 && gy % 100 != 0) || (gy % 400 == 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        for (gm = 0; gm < 13; gm++) {
            v = sal_a[gm];
            if (gd <= v) break;
            gd -= v;
        }


        var year = new Date().getFullYear()
        result = year - gy;
        
        document.getElementById(obj2).innerHTML = result.toString();

    }
}
function monthDiff(d1, d2) {

    var months = 0;
    d1 = set_ascii_date2(d1);
    d2 = set_ascii_date2(d2);
    months = (d2.substr(0, 4) - d1.substr(0, 4)) * 12;
    months -= d1.substr(5, 2);
    months += parseInt(d2.substr(5, 2)); 
    return months <= 0 ? 0 : months;
}
function checkdate_miladi(obj) {
    var str = document.getElementById(obj).value;
    result = true;
    if (str != '')
    {
        var regEx = /(19|20)([0-9][0-9])\/(((0?[1-6])\/((0?[1-9])|([12][0-9])|(3[0-1])))|(((0?[7-9])|(1[0-2]))\/((0?[1-9])|([12][0-9])|(30))))/g;
 
        if (!str.match(regEx))
            result= false;  // Invalid format
        var d;
        if (!((d = new Date(str)) | 0))
            result = false; // Invalid date (or this could be epoch)
            //return d.toISOString().slice(0, 10) == dateString;
    }
    if (result == false) {
        //document.getElementById(flag).value = "0";
        display_alarm('فرمت تاریخ میلادی وارد شده معتبر نیست. لطفا تاریخ را با فرمت YYYY/MM/DD وارد نمائید.', obj);
        return false;
    }
    else
    {
        return true;
        //document.getElementById(flag).value = "1";
    }
}
function checkdate_sequence(obj1, obj2) {
    var date1 = document.getElementById(obj1).value;
    var date2 = document.getElementById(obj2).value;
    if (date2 != '') {
        if (date1 == '' && date2 != '') {
            display_alarm('تاریخ شروع وارد نشده است.', obj);
            return false;
        }
        var mds_str1 = "";
        var mds_str2 = "";
        if (date1 != '') {
            //
            for (var i = 0; i < date1.length ; i++) {
                switch (date1.charCodeAt(i)) {
                    case 1777: mds_str1 = mds_str1 + "1"; break;
                    case 1778: mds_str1 = mds_str1 + "2"; break;
                    case 1779: mds_str1 = mds_str1 + "3"; break;
                    case 1780: mds_str1 = mds_str1 + "4"; break;
                    case 1781: mds_str1 = mds_str1 + "5"; break;
                    case 1782: mds_str1 = mds_str1 + "6"; break;
                    case 1783: mds_str1 = mds_str1 + "7"; break;
                    case 1784: mds_str1 = mds_str1 + "8"; break;
                    case 1785: mds_str1 = mds_str1 + "9"; break;
                    case 1776: mds_str1 = mds_str1 + "0"; break;
                    case 47: mds_str1 = mds_str1; break;
                    default:
                        mds_str1 = mds_str1 + date1.substr(i, 1);
                        //       alert(mds_str + '****' + str.substr(i, 1)+'****'+i); break;
                }
            }

        }


        if (date2 != '') {
            //
            for (var i = 0; i < date2.length ; i++) {
                switch (date2.charCodeAt(i)) {
                    case 1777: mds_str2 = mds_str2 + "1"; break;
                    case 1778: mds_str2 = mds_str2 + "2"; break;
                    case 1779: mds_str2 = mds_str2 + "3"; break;
                    case 1780: mds_str2 = mds_str2 + "4"; break;
                    case 1781: mds_str2 = mds_str2 + "5"; break;
                    case 1782: mds_str2 = mds_str2 + "6"; break;
                    case 1783: mds_str2 = mds_str2 + "7"; break;
                    case 1784: mds_str2 = mds_str2 + "8"; break;
                    case 1785: mds_str2 = mds_str2 + "9"; break;
                    case 1776: mds_str2 = mds_str2 + "0"; break;
                    case 47: mds_str2 = mds_str2; break;
                    default:
                        mds_str2 = mds_str2 + date2.substr(i, 1);
                        //       alert(mds_str + '****' + str.substr(i, 1)+'****'+i); break;
                }
            }

        }

        if (mds_str2 <= mds_str1) {
            display_alarm('تاریخ خاتمه باید بعد از تاریخ شروع باشد.', obj2);
            return false;
        }
        else {
            return true;
        }
    }
    else
    { return true;}
}
function checkages_not_empty(obj)
{ 
    var str = document.getElementById(obj).value;
   if (str == '' || str == '-1' || str == '0') {
        //document.getElementById(flag).value = "0";
        display_alarm('لطفا رده سنی مورد نظر خود را وارد کنید', obj);
        return false;

    }
    return true;
}
function set_weekday(obj1, obj2, obj3,obj4) {
    if (document.getElementById(obj1).value!='')
    {
        var weekday='';
        var date = document.getElementById(obj1).value;
        jalali_to_gregorian(obj1, obj2); 
        var MyDate = new Date(document.getElementById(obj2).value);
        switch (MyDate.getDay())
        {
            case 0 : weekday='یکشنبه' ; break;
            case 1 : weekday='دوشنبه' ; break;
            case 2 : weekday='سه‌شنبه' ; break;
            case 3 : weekday='چهارشنبه' ; break;
            case 4 : weekday='پنجشنبه' ; break;
            case 5 : weekday='جمعه' ; break;
            case 6 : weekday='شنبه' ; break;
        } 
        document.getElementById(obj3).innerText = weekday;
        document.getElementById(obj4).value = MyDate.getDay();

    }


}
function set_weekday_full(obj1, obj2, obj3, obj4) {
    if (document.getElementById(obj1).value != '') {
        var weekday = '';
        var date = document.getElementById(obj1).value;
        jalali_to_gregorian(obj1, obj2);
        var MyDate = new Date(document.getElementById(obj2).value);
        switch (MyDate.getDay()) {
            case 0: weekday = 'یکشنبه/Saturday'; break;
            case 1: weekday = 'دوشنبه/Monday'; break;
            case 2: weekday = 'سه‌شنبه/Tuesday'; break;
            case 3: weekday = 'چهارشنبه/Wednesday'; break;
            case 4: weekday = 'پنجشنبه/Thursday'; break;
            case 5: weekday = 'جمعه/Friday'; break;
            case 6: weekday = 'شنبه/Sunday'; break;
        }
        document.getElementById(obj3).innerText = weekday;
        document.getElementById(obj4).value = MyDate.getDay();

    }


}
function set_ascii_date(str)
{
    var mds_str1 = "";
    if (str != '') {
        //
        for (var i = 0; i < str.length ; i++) {
            switch (str.charCodeAt(i)) {
                case 1777: mds_str1 = mds_str1 + "1"; break;
                case 1778: mds_str1 = mds_str1 + "2"; break;
                case 1779: mds_str1 = mds_str1 + "3"; break;
                case 1780: mds_str1 = mds_str1 + "4"; break;
                case 1781: mds_str1 = mds_str1 + "5"; break;
                case 1782: mds_str1 = mds_str1 + "6"; break;
                case 1783: mds_str1 = mds_str1 + "7"; break;
                case 1784: mds_str1 = mds_str1 + "8"; break;
                case 1785: mds_str1 = mds_str1 + "9"; break;
                case 1776: mds_str1 = mds_str1 + "0"; break;
                case 47: mds_str1 = mds_str1; break;
                default:
                    mds_str1 = mds_str1 + str.substr(i, 1);
                    //       alert(mds_str + '****' + str.substr(i, 1)+'****'+i); break;
            }
        }
    }
    return mds_str1;
}
function set_ascii_date2(str) {
    var mds_str1 = "";
    if (str != '') {
        //
        for (var i = 0; i < str.length ; i++) {
            switch (str.charCodeAt(i)) {
                case 1777: mds_str1 = mds_str1 + "1"; break;
                case 1778: mds_str1 = mds_str1 + "2"; break;
                case 1779: mds_str1 = mds_str1 + "3"; break;
                case 1780: mds_str1 = mds_str1 + "4"; break;
                case 1781: mds_str1 = mds_str1 + "5"; break;
                case 1782: mds_str1 = mds_str1 + "6"; break;
                case 1783: mds_str1 = mds_str1 + "7"; break;
                case 1784: mds_str1 = mds_str1 + "8"; break;
                case 1785: mds_str1 = mds_str1 + "9"; break;
                case 1776: mds_str1 = mds_str1 + "0"; break;
                case 47: mds_str1 = mds_str1 + "/"; break;
                default:
                    mds_str1 = mds_str1 + str.substr(i, 1);
                    //       alert(mds_str + '****' + str.substr(i, 1)+'****'+i); break;
            }
        }
    }
    return mds_str1;
}
function set_curency_format(obj) {


    var str = document.getElementById(obj).value.replace(',','');
    var temp = '';
    var str_checked = '';
    for (i = 0; i < str.length; i++) {
        temp = str.substring(i, i + 1);

        //alert(temp.charCodeAt(0));


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


        if ((48 <= temp.charCodeAt(0) && temp.charCodeAt(0) <= 57) || temp=='-') {

           str_checked = str_checked + temp

        }
        temp = "";
    }

    var num = str_checked.replace(/,/g, "", -1);
    document.getElementById(obj).value = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
function set_curency_format_value(str)
{
    var temp = str.replace(/,/g, "", -1);
    return temp.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")

}
function CheckfaragirCode(obj) {
    var faragir_code = document.getElementById(obj).value;
    var flag = "";
    if(faragir_code!='')
    {
        for (i = 2; i < faragir_code.length; i++) {
            switch (faragir_code.charCodeAt(i)) {
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
                    temp = faragir_code.substr(i, 1);
            }
            if (temp != '0' && temp != '9' && temp != '8'
                && temp != '7' && temp != '6' && temp != '5'
                && temp != '4' && temp != '3' && temp != '2' && temp != '1') {
                flag = '***';
            }
        }
        if (flag != '***') {

            return true;
        }
        else {
            msg = 'شماره کد فراگیر صحيح نمي باشد';
            display_alarm(msg, obj);
            return false;
        }
    }
    else {
        msg = 'ثبت کد فراگیر الزامی است';
        //document.getElementById(flag).value = "0";
        display_alarm(msg, obj);
        //alert(document.getElementById(flag).value+'****'+flag);

        return false;
    }

    //document.getElementById(flag).value = "1";
}
function set_char(str)
{
    var temp = "";
    for (var i = 0; i < str.length ; i++) {
        switch (str.charCodeAt(i)) {
            case 1777: temp = temp + "1"; break;
            case 1778: temp = temp + "2"; break;
            case 1779: temp = temp + "3"; break;
            case 1780: temp = temp + "4"; break;
            case 1781: temp = temp + "5"; break;
            case 1782: temp = temp + "6"; break;
            case 1783: temp = temp + "7"; break;
            case 1784: temp = temp + "8"; break;
            case 1785: temp = temp + "9"; break;
            case 1776: temp = temp + "0"; break;
            case 47: temp = temp + "/"; break;
            default:
                temp = temp + str.substr(i, 1);
                //       alert(mds_str + '****' + str.substr(i, 1)+'****'+i); break;
        }
    }
    if (temp != '')
        str = temp;
    return str;
}
function jalali_to_gregorian2(date_shamsi) {
    mds_str = "";
    if (date_shamsi != '' && date_shamsi.length == 10) {
        if (date_shamsi.substr(0, 2) == '19' || date_shamsi.substr(0, 2) == '20') {
            document.getElementById(obj2).value = document.getElementById(obj1).value;
        }
        else {
            for (var i = 0; i < date_shamsi.length; i++) {
                //alert(date_shamsi.charCodeAt(i));
                switch (date_shamsi.charCodeAt(i)) {
                    case 1777: mds_str = mds_str + "1"; break;
                    case 1778: mds_str = mds_str + "2"; break;
                    case 1779: mds_str = mds_str + "3"; break;
                    case 1780: mds_str = mds_str + "4"; break;
                    case 1781: mds_str = mds_str + "5"; break;
                    case 1782: mds_str = mds_str + "6"; break;
                    case 1783: mds_str = mds_str + "7"; break;
                    case 1784: mds_str = mds_str + "8"; break;
                    case 1785: mds_str = mds_str + "9"; break;
                    case 1776: mds_str = mds_str + "0"; break;
                    case 47: mds_str = mds_str + "/"; break;
                    default:
                        mds_str = mds_str + date_shamsi.substr(i, 1);
                        //alert(mds_str + '****' + date_shamsi.substr(i, 1) + '****' + i); break;
                }
            }

            jy = parseInt(mds_str.substr(0, 4));
            jm = parseInt(mds_str.substr(5, 2));
            jd = parseInt(mds_str.substr(8, 2));
            if (jy > 979) {
                gy = 1600;
                jy -= 979;
            } else {
                gy = 621;
            }
            days = (365 * jy) + ((parseInt(jy / 33)) * 8) + (parseInt(((jy % 33) + 3) / 4)) + 78 + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
            gy += 400 * (parseInt(days / 146097));
            days %= 146097;
            if (days > 36524) {
                gy += 100 * (parseInt(--days / 36524));
                days %= 36524;
                if (days >= 365) days++;
            }
            gy += 4 * (parseInt(days / 1461));
            days %= 1461;
            if (days > 365) {
                gy += parseInt((days - 1) / 365);
                days = (days - 1) % 365;
            }
            gd = days + 1;
            sal_a = [0, 31, ((gy % 4 == 0 && gy % 100 != 0) || (gy % 400 == 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            for (gm = 0; gm < 13; gm++) {
                v = sal_a[gm];
                if (gd <= v) break;
                gd -= v;
            }

            var g_month = gm.toString();
            if (gm.toString().length == 1)
                g_month = '0' + g_month

            var g_day = gd.toString();
            if (g_day.length == 1)
                g_day = '0' + g_day
            return (gy.toString() + '/' + g_month + '/' + g_day);
        }

    }
}
function gregorian_to_jalali(date_miladi) {
    year = set_char(date_miladi.substr(0, 4));
    month = set_char(date_miladi.substr(5, 2));
    day = set_char(date_miladi.substr(8, 2));
    var $g_days_in_month = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    var $j_days_in_month = new Array(31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29);

    $gy = year - 1600;
    $gm = month - 1;
    $gd = day - 1;

    $g_day_no = 365 * $gy + div($gy + 3, 4) - div($gy + 99, 100) + div($gy + 399, 400);

    for ($i = 0; $i < $gm; ++$i)
        $g_day_no += $g_days_in_month[$i];
    if ($gm > 1 && (($gy % 4 == 0 && $gy % 100 != 0) || ($gy % 400 == 0)))
        /* leap and after Feb */
        $g_day_no++;
    $g_day_no += $gd;

    $j_day_no = $g_day_no - 79;

    $j_np = div($j_day_no, 12053); /* 12053 = 365*33 + 32/4 */
    $j_day_no = $j_day_no % 12053;

    $jy = 979 + 33 * $j_np + 4 * div($j_day_no, 1461); /* 1461 = 365*4 + 4/4 */

    $j_day_no %= 1461;

    if ($j_day_no >= 366) {
        $jy += div($j_day_no - 1, 365);
        $j_day_no = ($j_day_no - 1) % 365;
    }

    for ($i = 0; $i < 11 && $j_day_no >= $j_days_in_month[$i]; ++$i)
        $j_day_no -= $j_days_in_month[$i];
    $jm = $i + 1;
    $jd = $j_day_no + 1;

    function div(x, y) {
        return Math.floor(x / y);


    }
    var jy = $jy.toString();
    var jm = $jm.toString();
    var jd = $jd.toString();
    if (jm.length == 1) {
        jm = '0' + jm
    }
    if (jd.length == 1) {
        jd = '0' + jd
    }
    //alert(jy + '/' + jm + '/' + jd);
    //if (!f || f == undefined)
    //    return { y: $jy, m: $jm, d: $jd }
    //else
    return jy + '/' + jm + '/' + jd;





}
function CheckCellPhone(obj) {


    var CellPhone = document.getElementById(obj).value;
    CellPhone = set_char(CellPhone);
    if (CellPhone.length != 11) {
        display_alarm2('لطفا شماره تلفن همراه را صحیح وارد فرمائید', 'اشکال در تلفن همراه وارد شده', "", 0);
        return false;
    }

    if (CellPhone.substr(0, 2) != '09') {
        display_alarm2('لطفا از کیبرد انگلیسی استفاده نمائید', 'اشکال در تلفن همراه وارد شده', "", 0);
        return false;
    }

    if (CellPhone == '09111111111'
        || CellPhone == '09222222222'
        || CellPhone == '09131111111'
        || CellPhone == '09333333333'
        || CellPhone == '09444444444'
        || CellPhone == '09555555555'
        || CellPhone == '09666666666'
        || CellPhone == '09777777777'
        || CellPhone == '09888888888'
        || CellPhone == '09999999999'
        || CellPhone == '09000000000') {
        display_alarm('تلفن همراه وارد شده معتبر نمیباشد', 'اشکال در تلفن همراه وارد شده');
        return false;
    }
    return true;

}
function CheckStrLenght(obj, len) {

    var str = document.getElementById(obj).value;
    if (str.length > len) {
        document.getElementById(obj).value = str.substring(0, len);
    }
}

function CheckPhoneNew(fieldId) {
    var phoneField = document.getElementById(fieldId);
    var phoneValue = phoneField.value;
    var errorMessageId = fieldId + "-error";
    var phonePattern = /^09\d{9}$/; // این الگو برای شماره‌های 10 رقمی است (مثلاً 09123456789)

    if (phonePattern.test(phoneValue)) {
        // اگر شماره تلفن معتبر است
        phoneField.style.borderColor = "green";
        document.getElementById(errorMessageId).innerText = '';
        document.getElementById(errorMessageId).style.visibility = 'hidden';
        return true;
    }
    else if (phoneValue !== '') {
        phoneField.style.borderColor = "red";
        document.getElementById(errorMessageId).innerText = 'شماره تلفن معتبر نیست';
        document.getElementById(errorMessageId).style.visibility = 'visible';
        return false;
    }
    if (phoneValue == '09111111111'
        || phoneValue == '09222222222'
        || phoneValue == '09131111111'
        || phoneValue == '09333333333'
        || phoneValue == '09444444444'
        || phoneValue == '09555555555'
        || phoneValue == '09666666666'
        || phoneValue == '09777777777'
        || phoneValue == '09888888888'
        || phoneValue == '09999999999'
        || phoneValue == '09000000000') {
        phoneField.style.borderColor = "red";
        document.getElementById(errorMessageId).innerText = 'شماره تلفن معتبر نیست';
        document.getElementById(errorMessageId).style.visibility = 'visible';
        return false;
    }
    if (phoneValue == '') {
        phoneField.style.borderColor = "red";
        document.getElementById(errorMessageId).innerText = 'شماره تلفن واردنشده است ';
        document.getElementById(errorMessageId).style.visibility = 'visible';
        return false;
    }

}
function CheckLandingphoneNew(fieldId) {
    var phoneField = document.getElementById(fieldId);
    var phoneValue = phoneField.value;
    var errorMessageId = fieldId + "-error";
    var phonePattern = /^0\d{10}$/; // این الگو برای شماره‌های 10 رقمی است (مثلاً 03138472099)
    if (phonePattern.test(phoneValue)) {
        // اگر شماره تلفن معتبر است
        phoneField.style.borderColor = "green";
        document.getElementById(errorMessageId).innerText = '';
        document.getElementById(errorMessageId).style.visibility = 'hidden';
        return true;
    }
    else if (phoneValue !== '') {
        phoneField.style.borderColor = "red";
        document.getElementById(errorMessageId).innerText = 'شماره تلفن معتبر نیست';
        document.getElementById(errorMessageId).style.visibility = 'visible';
        return false;
    }
    if (phoneValue == '00000000000'
        || phoneValue == '03222222222'
        || phoneValue == '02111111111'
        || phoneValue == '021333333333'
        || phoneValue == '03144444444'
        || phoneValue == '02155555555'
        || phoneValue == '03166666666'
        || phoneValue == '03177777777'
        || phoneValue == '03188888888'
        || phoneValue == '03199999999'
        || phoneValue == '03100000000'
        || phoneValue.substr(0, 2) == '09' && phoneValue !== '') {
        phoneField.style.borderColor = "red";
        document.getElementById(errorMessageId).innerText = 'شماره معتبر نیست';
        document.getElementById(errorMessageId).style.visibility = 'visible';
        return false;
    }
    if (phoneValue == '') {
        phoneField.style.borderColor = "red";
        document.getElementById(errorMessageId).innerText = 'شماره تلفن واردنشده است';
        document.getElementById(errorMessageId).style.visibility = 'visible';
        return false;
    }


}
function CheckPostalcodNew(fieldId) {
    var postalfield = document.getElementById(fieldId);
    var postalvalue = postalfield.value;
    var errorMessageId = fieldId + "-error";
    var postalCodeRegex = /^(\d{10})?$/;
    if (!postalCodeRegex.test(postalvalue)) {
        postalfield.style.borderColor = "red";
        document.getElementById(errorMessageId).innerText = 'کد پستی معتبر نیست. لطفاً ۱۰ رقم وارد کنید.';
        document.getElementById(errorMessageId).style.visibility = 'visible';
        return false;
    }
    else {
        postalfield.style.borderColor = "green";
        document.getElementById(errorMessageId).innerText = '';
        document.getElementById(errorMessageId).style.visibility = 'hidden';
        return true;
    }
    return true;
}
function CheckEmailNew(fieldId) {
    emailfield = document.getElementById(fieldId);
    var emailAddress = emailfield.value;
    var sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
    var sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
    var sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
    var sQuotedPair = '\\x5c[\\x00-\\x7f]';
    var sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
    var sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
    var sDomain_ref = sAtom;
    var sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
    var sWord = '(' + sAtom + '|' + sQuotedString + ')';
    var sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
    var sLocalPart = sWord + '(\\x2e' + sWord + ')*';
    var sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
    var sValidEmail = '^' + sAddrSpec + '$'; // as whole string
    var reValidEmail = new RegExp(sValidEmail);
    if (reValidEmail.test(emailAddress) == false && emailAddress != '') {
        emailfield.style.borderColor = "red";
        document.getElementById('txt_email_error').innerText = 'ایمیل وارد شده معتبر نیست .  لطفا ایمیل خود را با فرمت xx@xxx.xxx وارد کنید .';
        document.getElementById('txt_email_error').style.visibility = 'visible';
        return false;
    }
    else if (emailAddress == '') {
        emailfield.style.borderColor = "red";
        document.getElementById('txt_email_error').innerText = 'ایمیل واردنشده است';
        document.getElementById('txt_email_error').style.visibility = 'visible';
        return false;
    }
    else {
        emailfield.style.borderColor = "green";
        document.getElementById('txt_email_error').innerText = '';
        document.getElementById('txt_email_error').style.visibility = 'hidden';
        return true;
    }
    return true;
}
function CheckIdInstagramNew(fieldId) {
    var instagramfield = document.getElementById(fieldId);
    var instagramlvalue = instagramfield.value;
    const username = instagramlvalue.trim();
    const instagramRegex = /^[a-zA-Z0-9._]{4,30}$/;
    if (!instagramRegex.test(instagramlvalue) && instagramlvalue !== '') {
        instagramfield.style.borderColor = "red";
        document.getElementById('txt_instagram_error').innerText = 'آیدی اینستاگرام معتبر نیست.';
        document.getElementById('txt_instagram_error').style.visibility = 'visible';
        return false;
    }
    else if (instagramlvalue !== '') {
        instagramfield.style.borderColor = "green";
        document.getElementById('txt_instagram_error').innerText = '';
        document.getElementById('txt_instagram_error').style.visibility = 'hidden';
        return true;
    }
    return true;
}
function CheckWebsiteNew(fieldId) {
    var websitefield = document.getElementById(fieldId);
    var websitevalue = websitefield.value;
    const websiteRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    // بررسی URL با استفاده از الگوی منظم
    if (!websiteRegex.test(websitevalue) && websitevalue !== '') {
        websitefield.style.borderColor = "red";
        document.getElementById('txt_website_error').innerText = 'وب سایت معتبر نیست.';
        document.getElementById('txt_website_error').style.visibility = 'visible';
        return false;
    }
    else {
        websitefield.style.borderColor = "green";
        document.getElementById('txt_website_error').innerText = '';
        document.getElementById('txt_website_error').style.visibility = 'hidden';
        return true;
    }
    return true;
}
function CheckAddressNew(fieldId) {
    var addressfield = document.getElementById(fieldId);
    var addressvalue = addressfield.value;
    if (addressvalue == '') {
        addressfield.style.borderColor = "red";
        document.getElementById('txt_address_error').innerText = 'آدرس واردنشده';
        return false;
    }
    else {
        addressfield.style.borderColor = "green";
        document.getElementById('txt_address_error').innerText = '';
        return true;
    }
    return true;
}
function CheckNotNull(fieldId) {
    var namefield = document.getElementById(fieldId);
    var namevalue = namefield.value;
    var errormessage = fieldId + '_error'
    if (namevalue == '') {
        namefield.style.borderColor = "red";
        namefield.classList.add('shake');
        document.getElementById(errormessage).innerText = 'پرکردن فیلد های ستاره دارالزامی است';
        return false;
    }
    else {
        namefield.style.borderColor = "green";
        document.getElementById(errormessage).innerText = '';
        return true;
    }
    return true;
}
function CheckNameClub(fieldId) {
    var clubnamefield = document.getElementById(fieldId);
    var clubnamevalue = clubnamefield.value;
    if (clubnamevalue == '') {
        clubnamefield.style.borderColor = "red";
        document.getElementById('txt_club_name_error').innerText = 'نام نمایشی باشگاه واردنشده';
        return false;
    }
    else {
        clubnamefield.style.borderColor = "green";
        document.getElementById('txt_club_name_error').innerText = '';
        return true;
    }
    return true;
}
function CheckNameFormalClub(fieldId) {
    var clubnamefield = document.getElementById(fieldId);
    var clubnamevalue = clubnamefield.value;
    if (clubnamevalue == '') {
        clubnamefield.style.borderColor = "red";
        document.getElementById('txt_club_formal_name_error').innerText = 'نام رسمی باشگاه واردنشده';
        return false;
    }
    else {
        clubnamefield.style.borderColor = "green";
        document.getElementById('txt_club_formal_name_error').innerText = '';
        return true;
    }
    return true;
}
function CheckBossName(fieldId) {
    var bossnamefield = document.getElementById(fieldId);
    var bossnamevalue = bossnamefield.value;
    if (bossnamevalue == '') {
        bossnamefield.style.borderColor = "red";
        document.getElementById('txt_boss_name_error').innerText = 'نام مدیرعامل واردنشده';
        return false;
    }
    else {
        bossnamefield.style.borderColor = "green";
        document.getElementById('txt_boss_name_error').innerText = '';
        return true;
    }
    return true;
}
function CheckLogo() {
    var fileInput = document.getElementById('FileUpload');
    if (fileInput.src == '') {
        fileInput.style.borderColor = 'red';
        document.getElementById('txt_image_error').innerText = 'پرکردن فیلد های ستاره دارالزامی است';
        return false;
    }
    else {
        fileInput.style.borderColor = 'green';
        document.getElementById('txt_image_error').innerText = '';
        return true;
    }
    return true;
}
function CheckFootballBoardSelection() {
    var stateSelect = document.getElementById('cmb_football_board2');
    if (!stateSelect.value) {
        stateSelect.style.borderColor = "red";
        document.getElementById('txt_cmb_football_error').innerText = 'هیٔت فوتبال انتخاب نشده است';
        return false;
    }
    else {
        stateSelect.style.borderColor = "green";
        document.getElementById('txt_cmb_football_error').innerText = '';
        return true;
    }
}
function CheckStateSelection() {
    var stateSelect = document.getElementById('cmb_state');
    if (!stateSelect.value) {
        stateSelect.style.borderColor = "red";
        document.getElementById('cmb_state_error').innerText = 'استان انتخاب نشده است';
        return false;
    }
    else {
        stateSelect.style.borderColor = "green";
        document.getElementById('cmb_state_error').innerText = '';
        return true;
    }
    return true;
}


function CloseModal() {
    document.getElementById("ModalPanel").style.display = "none";
}
function DisplayModal(modal_text, title, flag) {
    document.getElementById("ModalPanel").style.display = "flex";
    if (flag == 1) {
        document.getElementById('icon-box-ID').style.backgroundColor = '#82ce34';
        document.getElementById("btn-modal").style.backgroundColor = '#82ce34';
        document.getElementById("modal-text-ID").innerHTML = modal_text;
        document.getElementById("modal-title-ID").innerText = title;
        document.getElementById("img-icon").src = '/Content/assets/img/icons/icons8-trophy-48.png';
    }
    if (flag == 0) {
        document.getElementById('icon-box-ID').style.backgroundColor = '#FF5252';
        document.getElementById("btn-modal").style.backgroundColor = '#FF5252';
        document.getElementById("modal-text-ID").innerHTML = modal_text;
        document.getElementById("modal-title-ID").innerText = title;
        document.getElementById("img-icon").src = '/Content/assets/img/icons/icons8-error-50.png';

    }
    if (flag == 2) {
        document.getElementById("icon-box").style.backgroundColor = "#FF5252";
        document.getElementById("modal-footer button").style.backgroundColor = "#FF5252";
        document.getElementById("modal-text").innerText = modal_text;
        document.getElementById("modal-title").innerText = title;
    }
    document.getElementById("btn-modal").focus();

}
//ShowModal
function fadeInModal(obj) {
    var modal = document.getElementById(obj);
    modal.style.display = "flex";
    modal.style.opacity = 0;
    modal.style.transition = "opacity 0.5s ease";
    setTimeout(function () {
        modal.style.opacity = 1;
    }, 25);
}
function DisplayModal(modal_text, title, flag, redirection) {
    fadeInModal("ModalPanel");
    var timeout;
    switch (flag) {
        case 1:
            document.getElementById('icon-box-ID').style.backgroundColor = '#82ce34';
            document.getElementById("btn-modal").style.backgroundColor = '#82ce34';
            document.getElementById("modal-text-ID").innerHTML = modal_text;
            document.getElementById("modal-title-ID").innerText = title;
            document.getElementById("img-icon").src = '/Content/assets/img/icons/icons8-trophy-48.png';
            document.getElementById("btn_remove_teame").style.display = "none";
            break;
        case 0:
            document.getElementById('icon-box-ID').style.backgroundColor = '#FF5252';
            document.getElementById("btn-modal").style.backgroundColor = '#FF5252';
            document.getElementById("modal-text-ID").innerHTML = modal_text;
            document.getElementById("modal-title-ID").innerText = title;
            document.getElementById("img-icon").src = '/Content/assets/img/icons/icons8-error-50.png';
            document.getElementById("btn_remove_teame").style.display = "none";
            break;
        case 2:
            document.getElementById('icon-box-ID').style.backgroundColor = '#FF5252';
            document.getElementById("btn-modal").style.backgroundColor = '#FAB005';
            document.getElementById("modal-text-ID").innerHTML = modal_text;
            document.getElementById("modal-title-ID").innerText = title;
            document.getElementById("img-icon").src = '/Content/assets/img/icons/icons8-exclamation-mark-64.png';
            document.getElementById("btn_remove_teame").style.display = "flex";
            break;
        case 3:
            document.getElementById('icon-box-ID').style.backgroundColor = 'white';
            document.getElementById("btn-modal").style.backgroundColor = '#FF5252';
            document.getElementById("modal-text-ID").innerHTML = modal_text;
            document.getElementById("modal-title-ID").innerText = title;
            document.getElementById("img-icon").src = '/Content/assets/img/icons/icons8-remove-64.png';
            document.getElementById("btn_remove_teame").style.display = "none";

            break;
        case 4:
            document.getElementById('icon-box-ID').style.backgroundColor = 'white';
            document.getElementById("btn-modal").style.backgroundColor = '#FAB005';
            document.getElementById("modal-text-ID").innerHTML = modal_text;
            document.getElementById("modal-title-ID").innerText = title;
            document.getElementById("img-icon").src = '/Content/assets/img/icons/icons8-exclamation-mark-64.png';
            document.getElementById("btn_remove_teame").style.display = "none";
            break;
        case 5:
            document.getElementById('icon-box-ID').style.backgroundColor = 'white';
            document.getElementById("btn-modal").style.backgroundColor = '#FF5252';
            document.getElementById("modal-text-ID").innerHTML = modal_text;
            document.getElementById("modal-title-ID").innerText = title;
            document.getElementById("img-icon").style.width = '70px';
            document.getElementById("img-icon").style.height = '70px';
            document.getElementById("img-icon").src = '/Content/assets/img/icons/offboarding.png';
            document.getElementById("btn_remove_teame").style.display = "none";
            break;
        default:
            break;
    }
    // تنظیم رفتار دکمه برای ریدایرکت یا بسته شدن مودال
          document.getElementById("btn-modal").onclick = function () {
              document.getElementById("ModalPanel").style.display = "none";
              clearTimeout(timeout);
              if (redirection != null && redirection != '') {

                   window.location.href = redirection;
             }

    };
    
    if (redirection != null && redirection != '') {
        if (flag == 3 || flag == 0 || flag == 1 || flag == 4 || flag == 5) {
            //document.getElementById("btn-modal").style.display = "none";
            timeout = setTimeout(function () {
                window.location.href = redirection;
            }, 4000)
        }
        else {
            document.getElementById("btn-modal").onclick = function () {
                window.location.href = redirection;
            };
        }
    }
    else {

        if (flag == 3 || flag == 0 || flag == 1 || flag == 4 || flag == 5) {
            //document.getElementById("btn-modal").style.display = "none";
            timeout = setTimeout(function () {
                document.getElementById("ModalPanel").style.display = "none";
            }, 4000)
        }
        else {
            document.getElementById("btn-modal").onclick = function () {
                document.getElementById("ModalPanel").style.display = "none";
            };
        }
    }
    document.getElementById("btn-modal").focus();
}

//ConvertToPersianNumber
function toPersianNumber(number) {
    var persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return number.toString().replace(/\d/g, function (digit) {
        return persianDigits[digit];
    });
}

//DisplayModalSending
function ShowModalSendingMessage(status, message) {

    var modal = document.getElementById('ModalWaitForSending');
    var textModal = document.getElementById('TextModalSendMessageID');
    var spinner = document.getElementById('Loading-SpinnerID');
    var successMessage = document.getElementById('ModalMessageSuccessID');


    spinner.style.display = 'none';
    successMessage.style.display = 'none';

    textModal.textContent = message;

    if (status === 'sending') {
        document.getElementById("overlay").style.display = "flex";
        spinner.style.display = 'flex';
        modal.style.display = 'flex';
    }
    else if (status === 'success') {
        spinner.style.display = 'none';
        successMessage.style.display = 'flex';
        modal.style.display = 'flex';
        setTimeout(function () {
            modal.style.display = 'none';
            document.getElementById("overlay").style.display = "none";
        }, 2000);
    }
}
//CheeckMeliCodeNew
function CheckIranianNationalCode(nationalCode) {
    nationalCode = nationalCode.trim();

    // تبدیل ارقام فارسی به انگلیسی
    nationalCode = nationalCode.replace(/[٠-٩]/g, function (match) {
        return String.fromCharCode(match.charCodeAt(0) - 1632 + 48);
    });

    if (!/^\d{10}$/.test(nationalCode)) {
        DisplayModal("کدملی نامعتبر می باشد", "خطا", 4);
        return false;
    }

    const invalidCodes = [
        "0000000000", "1111111111", "2222222222", "3333333333",
        "4444444444", "5555555555", "6666666666", "7777777777",
        "8888888888", "9999999999", "1234567890", "0123456789"
    ];
    if (invalidCodes.includes(nationalCode)) {
        DisplayModal("کدملی نامعتبر می باشد", "خطا", 4);
        return false;
    }

    // محاسبه رقم کنترل
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(nationalCode[i]) * (10 - i);
    }

    let remainder = sum % 11;
    let controlDigit = parseInt(nationalCode[9]);

    if ((remainder < 2 && controlDigit === remainder) || (remainder >= 2 && controlDigit === (11 - remainder))) {
        return true;
    }
    DisplayModal("کدملی نامعتبر می باشد", "خطا", 4);
    return false;
}
function CheckIranianNationalCodePro(nationalCode) {
    nationalCode = nationalCode.trim();
    if (nationalCode == '')
        return false;
    // تبدیل ارقام فارسی به انگلیسی
    nationalCode = nationalCode.replace(/[٠-٩]/g, function (match) {
        return String.fromCharCode(match.charCodeAt(0) - 1632 + 48);
    });

    if (!/^\d{10}$/.test(nationalCode)) {
        return false;
    }

    const invalidCodes = [
        "0000000000", "1111111111", "2222222222", "3333333333",
        "4444444444", "5555555555", "6666666666", "7777777777",
        "8888888888", "9999999999", "1234567890", "0123456789"
    ];
    if (invalidCodes.includes(nationalCode)) {
        return false;
    }

    // محاسبه رقم کنترل
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(nationalCode[i]) * (10 - i);
    }

    let remainder = sum % 11;
    let controlDigit = parseInt(nationalCode[9]);

    if ((remainder < 2 && controlDigit === remainder) || (remainder >= 2 && controlDigit === (11 - remainder))) {
        return true;
    }
    return false;
}

//CheeckMeliCodeNew
//ClearSpans
function ClearAllSpansInputsImg(obj) {
    const Container = document.querySelector(obj);
    if (!Container) return;
    const Spans = Container.querySelectorAll('span');
    Spans.forEach(span => {
        span.innerText = '';
    })

    const Inputs = Container.querySelectorAll('input');
    Inputs.forEach(inputs => {
        inputs.value = '';
    })

    const Images = Container.querySelectorAll('img');
    Images.forEach(img => {
        img.src = '';
    });
}
//ClearSpans
//FindCheckBoxSelectedValue
function FindCheckBoxSelectedValue(CheckBoxId) {
    var CheckBoxList = [];
    $('.row input[type="checkbox"]:checked').each(function () {
        CheckBoxList.push(this.value);
    });
    $('#' + CheckBoxId).val(CheckBoxList.join('|'));
}
//FindCheckBoxSelectedValue
//SetTable
function SetTableView(tableId) {
    $(`#${tableId}`).DataTable({
        paging: true,
        lengthChange: true,
        searching: true,
        ordering: true,
        info: true,
        autoWidth: false,
    });
}
//SetTable
//ShowPicPreview
function previewFile() {
    document.getElementById('lbl_FileUpload').innerHTML = document.getElementById('FileUpload').files[0].name;

    var preview = document.getElementById("doc_pic");
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}
//ShowPicPreview
function DisplayModalTermination() {
    fadeInModal("ModalTermination");
}

function validatePassword(password) {
    if (password.length < 6) {
        DisplayModal("رمز عبور باید حداقل ۶ کاراکتر باشد.", "کلمه عبور قابل قبول نیست",  0);
        return false;
    }
    //if (!/[A-Za-z]/.test(password)) {
    //    DisplayModal("رمز عبور باید حداقل شامل یک حرف باشد.", "کلمه عبور قابل قبول نیست",  0);
    //    return false;
    //}
    if (!/\d/.test(password)) {
        DisplayModal("رمز عبور باید حداقل شامل یک عدد باشد.", "کلمه عبور قابل قبول نیست", 0);
        return false;
    }
    //if (!/[@@!%#$*=+&<>]/.test(password)) {
    //    DisplayModal("رمز عبور باید حداقل شامل یک علامت خاص باشد.", "کلمه عبور قابل قبول نیست",  0);
    //    return false;
    //}
    return true; // Ok
}
//SetTimerCheckNotNullDateField
function CheckNotNullTimer(obj) {
    let lastVal = "";
    setInterval(() => {
        const el = document.getElementById(obj);
        if (el.value !== lastVal) {
            lastVal = el.value;
            CheckNotNull(obj)
        }
    }, 500);
}
//SetTimerCheckNotNullDateField
//validateChequeInput
function validateChequeInput(input) {
    var regex = /^[0-9\/\\]+$/;

    if (regex.test(input)) {
        return true;
    } else {
        return false;
    }
}
//validateChequeInput
function isValidSheba(sheba) {

    //if (!sheba) return false;

    // حذف فاصله و تبدیل به حروف بزرگ
    sheba = sheba.replace(/\s+/g, '').toUpperCase();

    // بررسی فرمت
    if (!/^IR\d{24}$/.test(sheba)) return false;
    // جابجایی 4 کاراکتر اول به انتها
    let rearranged = sheba.slice(4) + sheba.slice(0, 4);

    // تبدیل حروف به عدد (A=10 ... Z=35)
    let numeric = '';
    for (let ch of rearranged) {
        numeric += isNaN(ch) ? (ch.charCodeAt(0) - 55) : ch;
    }

    // محاسبه mod 97
    let remainder = numeric;
    while (remainder.length > 2) {
        remainder = (parseInt(remainder.slice(0, 9), 10) % 97) + remainder.slice(9);
    }

    return parseInt(remainder, 10) % 97 === 1;
}
function isValidCardNumber(cardNumber) {
    //if (!cardNumber) return false;

    // حذف فاصله و خط تیره
    cardNumber = cardNumber.replace(/[\s-]/g, '');

    // باید 16 رقم باشد
    if (!/^\d{16}$/.test(cardNumber)) return false;

    // الگوریتم Luhn
    let sum = 0;
    for (let i = 0; i < 16; i++) {
        let digit = parseInt(cardNumber[i], 10);

        if (i % 2 === 0) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }

        sum += digit;
    }

    return sum % 10 === 0;
}
function getBankName(cardNumber) {
    let code = cardNumber.substring(0, 6);

    let banks = {
        "603799": "بانک ملی",
        "589210": "بانک سپه",
        "627648": "بانک توسعه صادرات",
        "627961": "بانک صنعت و معدن",
        "603770": "بانک کشاورزی",
        "628023": "بانک مسکن",
        "627760": "پست بانک",
        "502908": "بانک توسعه تعاون",
        "627412": "بانک اقتصاد نوین",
        "622106": "بانک پارسیان",
        "502229": "بانک پاسارگاد",
        "627488": "بانک کارآفرین",
        "621986": "بانک سامان",
        "639346": "بانک سینا",
        "639607": "بانک سرمایه",
        "636214": "بانک تات",
        "502806": "بانک شهر",
        "502938": "بانک دی",
        "603769": "بانک صادرات",
        "610433": "بانک ملت",
        "627353": "بانک تجارت",
        "589463": "بانک رفاه",
        "627381": "بانک انصار"
    };

    return banks[code] || "نامشخص";
}
function generateSheba(accountNumber, bankid) {

    const bankShebaCodes = {
        "1": "017",
        "3": "015",
        "19": "016",
        "25": "014",
        "4": "019",
        "5": "018",
        "11": "054",
        "10": "057",
        "12": "056",
        "1": "062",
        "21": "059",
        "13": "058"
    };

    let bankCode = bankShebaCodes[bankid];
    //0109136740003
    let bban = bankCode + accountNumber.padStart(18 - bankCode.length, '0');
    let iban = "IR00" + bban;

    let rearranged = bban + "182700"; // IR → 18 27
    let mod = mod97(rearranged);
    let checkDigit = (98 - mod).toString().padStart(2, '0');
    return checkDigit + bban;
}

function mod97(str) {
    let checksum = str;
    while (checksum.length > 2) {
        let part = checksum.substring(0, 9);
        checksum = (parseInt(part, 10) % 97) + checksum.substring(part.length);
    }
    return parseInt(checksum, 10) % 97;
}

