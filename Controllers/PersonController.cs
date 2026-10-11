using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using FootballSchool.Web.Data;
using FootballSchool.Web.Models;
using FootballSchool.Web.Models.ViewModels;

namespace FootballSchoolMVC.Controllers
{
    [Authorize]
    public class FootballschoolPersonController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ApplicationDbContext _db;
        private readonly IWebHostEnvironment _env;

        public FootballschoolPersonController(
            UserManager<ApplicationUser> userManager,
            ApplicationDbContext db,
            IWebHostEnvironment env)
        {
            _userManager = userManager;
            _db = db;
            _env = env;
        }

        public static string ToAsciiDigits(string? input)
        {
            if (string.IsNullOrWhiteSpace(input)) return string.Empty;
            var chars = input.ToCharArray();
            for (int i = 0; i < chars.Length; i++)
            {
                if (chars[i] >= '۰' && chars[i] <= '۹')
                    chars[i] = (char)('0' + (chars[i] - '۰'));
                else if (chars[i] >= '٠' && chars[i] <= '٩')
                    chars[i] = (char)('0' + (chars[i] - '٠'));
            }
            return new string(chars);
        }

        public void SetPersonCombo(tbl_user_personal_info? record = null)
        {
            ViewBag.gender = new List<SelectListItem>
            {
                new SelectListItem { Value = "1", Text = "مرد", Selected = (record?.gender == 1) },
                new SelectListItem { Value = "0", Text = "زن", Selected = (record?.gender == 0) }
            };

            ViewBag.marital_status = new List<SelectListItem>
            {
                new SelectListItem { Value = "0", Text = "مجرد", Selected = (record?.marital_status == 0) },
                new SelectListItem { Value = "1", Text = "متاهل", Selected = (record?.marital_status == 1) }
            };

            ViewBag.religion = new List<SelectListItem>
            {
                new SelectListItem { Value = "1", Text = "اسلام", Selected = (record?.religion == 1) },
                new SelectListItem { Value = "2", Text = "غیراسلام", Selected = (record?.religion == 2) },
                new SelectListItem { Value = "3", Text = "مسیحیت", Selected = (record?.religion == 3) },
                new SelectListItem { Value = "4", Text = "یهودیت", Selected = (record?.religion == 4) },
                new SelectListItem { Value = "5", Text = "زرتشتی", Selected = (record?.religion == 5) },
                new SelectListItem { Value = "6", Text = "سایر", Selected = (record?.religion == 6) }
            };

            ViewBag.military_service_status = new List<SelectListItem>
            {
                new SelectListItem { Value = "1", Text = "پایان خدمت", Selected = (record?.military_service_status == 1) },
                new SelectListItem { Value = "2", Text = "معاف از خدمت", Selected = (record?.military_service_status == 2) },
                new SelectListItem { Value = "3", Text = "دانشجو", Selected = (record?.military_service_status == 3) },
                new SelectListItem { Value = "4", Text = "خرید خدمت", Selected = (record?.military_service_status == 4) },
                new SelectListItem { Value = "5", Text = "محصل", Selected = (record?.military_service_status == 5) },
                new SelectListItem { Value = "6", Text = "درحال خدمت", Selected = (record?.military_service_status == 6) },
                new SelectListItem { Value = "7", Text = "کادر نظامی", Selected = (record?.military_service_status == 7) },
                new SelectListItem { Value = "8", Text = "مشمول نمی باشم", Selected = (record?.military_service_status == 8) },
                new SelectListItem { Value = "9", Text = "درحال اعزام", Selected = (record?.military_service_status == 9) },
                new SelectListItem { Value = "10", Text = "سرباز قهرمان", Selected = (record?.military_service_status == 10) },
                new SelectListItem { Value = "11", Text = "بازیکن خارجی", Selected = (record?.military_service_status == 11) }
            };

            ViewBag.blood_type = new List<SelectListItem>
            {
                new SelectListItem { Value = "-1", Text = "انتخاب کنید..." },
                new SelectListItem { Value = "A+", Text = "A+", Selected = (record?.blood_type == "A+") },
                new SelectListItem { Value = "A-", Text = "A-", Selected = (record?.blood_type == "A-") },
                new SelectListItem { Value = "B+", Text = "B+", Selected = (record?.blood_type == "B+") },
                new SelectListItem { Value = "B-", Text = "B-", Selected = (record?.blood_type == "B-") },
                new SelectListItem { Value = "AB+", Text = "AB+", Selected = (record?.blood_type == "AB+") },
                new SelectListItem { Value = "AB-", Text = "AB-", Selected = (record?.blood_type == "AB-") },
                new SelectListItem { Value = "O+", Text = "O+", Selected = (record?.blood_type == "O+") },
                new SelectListItem { Value = "O-", Text = "O-", Selected = (record?.blood_type == "O-") }
            };

            ViewBag.health_status = new List<SelectListItem>
            {
                new SelectListItem { Value = "-1", Text = "انتخاب کنید..." },
                new SelectListItem { Value = "1", Text = "سالم", Selected = (record?.health_status == 1) },
                new SelectListItem { Value = "2", Text = "غیر سالم", Selected = (record?.health_status == 2) },
                new SelectListItem { Value = "3", Text = "دارای نقص عضو", Selected = (record?.health_status == 3) },
                new SelectListItem { Value = "4", Text = "دارای بیماری خاص", Selected = (record?.health_status == 4) }
            };

            ViewBag.nationality = new List<SelectListItem>
            {
                new SelectListItem { Value = "1", Text = "ایران", Selected = (record?.nationality_id_FK == 1 || record?.nationality_id_FK == null) },
                new SelectListItem { Value = "24", Text = "اتباع خارجی", Selected = (record?.nationality_id_FK == 24) },
                new SelectListItem { Value = "2", Text = "افغانستان", Selected = (record?.nationality_id_FK == 2) },
                new SelectListItem { Value = "3", Text = "عراق", Selected = (record?.nationality_id_FK == 3) },
                new SelectListItem { Value = "4", Text = "ترکیه", Selected = (record?.nationality_id_FK == 4) }
            };
        }

        public async Task SetSoccerComboAsync(ApplicationUser currentUser)
        {
            var users = await _db.Users.Take(30).ToListAsync();
            var soccerList = new List<SelectListItem>();
            foreach (var u in users)
            {
                var displayName = string.IsNullOrEmpty(u.FirstName) && string.IsNullOrEmpty(u.LastName)
                    ? u.UserName
                    : $"{u.FirstName} {u.LastName}".Trim();
                var idCode = !string.IsNullOrEmpty(u.NationalId) ? u.NationalId : u.UserName;
                soccerList.Add(new SelectListItem
                {
                    Value = u.Id,
                    Text = $"{displayName}- {idCode}",
                    Selected = (u.Id == currentUser.Id)
                });
            }
            ViewBag.soccer = soccerList;
        }

        public async Task<tbl_user_personal_info> GetOrInitPersonalInfoAsync(ApplicationUser user)
        {
            var info = await _db.tbl_user_personal_infos
                .FirstOrDefaultAsync(p => p.ApplicationUserId == user.Id);

            if (info == null)
            {
                info = new tbl_user_personal_info
                {
                    ApplicationUserId = user.Id,
                    name = user.FirstName ?? "",
                    family = user.LastName ?? "",
                    passport_eng_name = user.EnglishName ?? "",
                    passport_eng_family = user.EnglishSurname ?? "",
                    international_id = user.NationalId ?? user.UserName ?? "",
                    id_no = user.BirthCertificateNo ?? "",
                    father_name = user.FatherName ?? "",
                    weight = user.Weight,
                    Height = user.Height,
                    gender = user.Gender == "مرد" ? 1 : (user.Gender == "زن" ? 0 : null),
                    blood_type = user.BloodGroup,
                    marital_status = user.MaritalStatus == "مجرد" ? 0 : (user.MaritalStatus == "متاهل" ? 1 : null),
                    religion = user.Religion == "اسلام" ? 1 : (user.Religion != null ? 2 : null),
                    job = user.Occupation,
                    health_status = 1,
                    description = user.Description,
                    nationality_id_FK = 1,
                    citizenship = 1,
                    birth_date_shamsi = user.BirthDate != null 
                        ? new PersianCalendar().GetYear(user.BirthDate.Value).ToString("D4") + "/" +
                          new PersianCalendar().GetMonth(user.BirthDate.Value).ToString("D2") + "/" +
                          new PersianCalendar().GetDayOfMonth(user.BirthDate.Value).ToString("D2")
                        : "",
                    birth_date_miladi = user.BirthDate != null ? user.BirthDate.Value.ToString("yyyy/MM/dd") : "",
                    complete_percent = 0
                };
                _db.tbl_user_personal_infos.Add(info);
                await _db.SaveChangesAsync();
            }

            return info;
        }

        [HttpGet("FootballschoolPerson/view_person")]
        public async Task<IActionResult> ViewPerson()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return Redirect("/");
            }

            var info = await GetOrInitPersonalInfoAsync(user);
            SetPersonCombo(info);
            await SetSoccerComboAsync(user);

            var vm = new PersonViewModel
            {
                person_id = info.person_id,
                user_id_FK = info.person_id,
                name = info.name,
                family = info.family,
                eng_name = info.passport_eng_name,
                eng_family = info.passport_eng_family,
                international_id = info.international_id,
                id_no = info.id_no,
                serial_id = info.serial_id,
                location_id = info.location_id,
                father_name = info.father_name,
                father_job = info.father_job,
                job = info.job,
                coach = info.coach,
                birth_date_shamsi = info.birth_date_shamsi,
                birth_date_miladi = info.birth_date_miladi,
                nationality_id_FK2 = info.nationality_id_FK,
                citizenship2 = info.citizenship,
                health_status2 = info.health_status,
                blood_type2 = info.blood_type,
                gender2 = info.gender,
                marital_status2 = info.marital_status,
                military_service_status2 = info.military_service_status,
                religion2 = info.religion,
                weight = info.weight,
                Height = info.Height,
                description = info.description,
                pictuer = info.pictuer,
                complete_percent = info.complete_percent
            };

            return Redirect("/personal-info");
        }

        [HttpGet("FootballschoolPerson/view_person2")]
        [HttpGet("api/personal-info")]
        public async Task<IActionResult> ViewPerson2(string? soccer_id, int? flag)
        {
            var currentUser = await _userManager.GetUserAsync(User);
            if (currentUser == null)
            {
                return Json(new { errorcode = "1", message = "کاربر وارد نشده است" });
            }

            ApplicationUser targetUser = currentUser;
            if (!string.IsNullOrEmpty(soccer_id))
            {
                var foundUser = await _userManager.FindByIdAsync(soccer_id);
                if (foundUser != null)
                {
                    targetUser = foundUser;
                }
                else
                {
                    foundUser = await _db.Users.FirstOrDefaultAsync(u => u.NationalId == soccer_id || u.UserName == soccer_id);
                    if (foundUser != null) targetUser = foundUser;
                }
            }

            var info = await GetOrInitPersonalInfoAsync(targetUser);

            var rec = new PersonViewModel
            {
                person_id = info.person_id,
                user_id_FK = info.person_id,
                name = info.name,
                family = info.family,
                eng_name = info.passport_eng_name,
                eng_family = info.passport_eng_family,
                international_id = info.international_id,
                id_no = info.id_no,
                serial_id = info.serial_id,
                location_id = info.location_id,
                father_name = info.father_name,
                father_job = info.father_job,
                job = info.job,
                coach = info.coach,
                birth_date_shamsi = info.birth_date_shamsi,
                birth_date_miladi = info.birth_date_miladi,
                nationality_id_FK2 = info.nationality_id_FK,
                citizenship2 = info.citizenship,
                health_status2 = info.health_status,
                blood_type2 = info.blood_type,
                gender2 = info.gender,
                marital_status2 = info.marital_status,
                military_service_status2 = info.military_service_status,
                religion2 = info.religion,
                weight = info.weight,
                Height = info.Height,
                description = info.description,
                pictuer = info.pictuer ?? "/assets/images/messi-profile.jpg",
                complete_percent = info.complete_percent
            };

            return Json(new { model = rec, errorcode = "0" });
        }

        [HttpPost("FootballschoolPerson/view_person")]
        [HttpPost("api/personal-info")]
        public async Task<IActionResult> SavePerson(PersonViewModel model)
        {
            var currentUser = await _userManager.GetUserAsync(User);
            if (currentUser == null)
            {
                return Json(new { errorcode = "1", file_logo = "", message = "شما مدت زیادی است که از سیستم استفاده نکرده‌اید. لطفا مجددا وارد شوید." });
            }

            ApplicationUser targetUser = currentUser;
            string? targetSoccerId = Request.Form["soccer_id"].ToString();
            if (string.IsNullOrEmpty(targetSoccerId)) targetSoccerId = Request.Form["cmb_soccer"].ToString();

            if (!string.IsNullOrEmpty(targetSoccerId))
            {
                var foundUser = await _userManager.FindByIdAsync(targetSoccerId);
                if (foundUser != null)
                {
                    targetUser = foundUser;
                }
                else
                {
                    foundUser = await _db.Users.FirstOrDefaultAsync(u => u.NationalId == targetSoccerId || u.UserName == targetSoccerId);
                    if (foundUser != null) targetUser = foundUser;
                }
            }
            else if (model.person_id > 0)
            {
                var existingRecord = await _db.tbl_user_personal_infos
                    .Include(p => p.ApplicationUser)
                    .FirstOrDefaultAsync(p => p.person_id == model.person_id);
                if (existingRecord != null && existingRecord.ApplicationUser != null)
                {
                    targetUser = existingRecord.ApplicationUser;
                }
            }

            // Uniqueness check for international_id
            if (!string.IsNullOrEmpty(model.international_id))
            {
                var duplicateUser = await _db.tbl_user_personal_infos
                    .AnyAsync(p => p.international_id == model.international_id && p.ApplicationUserId != targetUser.Id);

                if (duplicateUser)
                {
                    return Json(new { errorcode = "2", file_logo = "", message = "کد ملی وارد شده تکراری است!" });
                }
            }

            try
            {
                var record = await _db.tbl_user_personal_infos
                    .FirstOrDefaultAsync(p => p.ApplicationUserId == targetUser.Id);

                if (record == null)
                {
                    record = await GetOrInitPersonalInfoAsync(targetUser);
                }

                int temp = 0;

                string mds_str = ToAsciiDigits(model.birth_date_shamsi?.Trim() ?? "");
                if (!string.IsNullOrEmpty(mds_str) && mds_str.Length == 10 && mds_str.Contains("/"))
                {
                    try
                    {
                        var parts = mds_str.Split('/');
                        int sy = int.Parse(parts[0]);
                        int sm = int.Parse(parts[1]);
                        int sd = int.Parse(parts[2]);
                        PersianCalendar pc = new PersianCalendar();
                        DateTime bdm = pc.ToDateTime(sy, sm, sd, 0, 0, 0, 0);

                        string miladi_year = bdm.Year.ToString("D4");
                        string miladi_month = bdm.Month.ToString("D2");
                        string miladi_day = bdm.Day.ToString("D2");
                        record.birth_date_miladi = $"{miladi_year}/{miladi_month}/{miladi_day}";
                        record.birth_date_shamsi = mds_str;
                        temp += 2;
                    }
                    catch
                    {
                        if (!string.IsNullOrEmpty(model.birth_date_miladi))
                        {
                            record.birth_date_miladi = model.birth_date_miladi;
                            temp++;
                        }
                    }
                }
                else if (!string.IsNullOrEmpty(model.birth_date_miladi))
                {
                    record.birth_date_miladi = model.birth_date_miladi;
                    temp++;
                }

                record.name = model.name;
                if (!string.IsNullOrEmpty(model.name)) temp++;

                record.family = model.family;
                if (!string.IsNullOrEmpty(model.family)) temp++;

                record.passport_eng_name = model.eng_name;
                if (!string.IsNullOrEmpty(model.eng_name)) temp++;

                record.passport_eng_family = model.eng_family;
                if (!string.IsNullOrEmpty(model.eng_family)) temp++;

                record.father_job = model.father_job;
                if (!string.IsNullOrEmpty(model.father_job)) temp++;

                record.father_name = model.father_name;
                if (!string.IsNullOrEmpty(model.father_name)) temp++;

                record.international_id = model.international_id;
                if (!string.IsNullOrEmpty(model.international_id))
                {
                    temp++;
                    if (char.IsLetter(model.international_id[0]))
                    {
                        record.passport_no = model.international_id;
                    }
                }

                record.id_no = model.id_no;
                if (!string.IsNullOrEmpty(model.id_no)) temp++;

                record.location_id = model.location_id;
                if (!string.IsNullOrEmpty(model.location_id)) temp++;

                record.serial_id = model.serial_id;
                if (!string.IsNullOrEmpty(model.serial_id)) temp++;

                if (model.nationality_id_FK2 != 0 && model.nationality_id_FK2 != -1 && model.nationality_id_FK2 != null)
                {
                    record.nationality_id_FK = model.nationality_id_FK2;
                    temp++;
                }
                else
                {
                    record.nationality_id_FK = null;
                }

                if (model.citizenship2 != 0 && model.citizenship2 != -1 && model.citizenship2 != null)
                {
                    record.citizenship = model.citizenship2;
                    temp++;
                }
                else
                {
                    record.citizenship = -1;
                }

                if (model.health_status2 != -1 && model.health_status2 != null)
                {
                    record.health_status = model.health_status2;
                    temp++;
                }
                else
                {
                    record.health_status = -1;
                }

                if (model.blood_type2 != "-1" && model.blood_type2 != "null" && !string.IsNullOrEmpty(model.blood_type2))
                {
                    record.blood_type = model.blood_type2;
                    temp++;
                }
                else
                {
                    record.blood_type = "-1";
                }

                if (model.gender2 != -1 && model.gender2 != null)
                {
                    record.gender = model.gender2;
                    temp++;
                }

                if (model.marital_status2 != -1 && model.marital_status2 != null)
                {
                    record.marital_status = model.marital_status2;
                    temp++;
                }
                else
                {
                    record.marital_status = -1;
                }

                if (model.military_service_status2 != -1 && model.military_service_status2 != null)
                {
                    record.military_service_status = model.military_service_status2;
                    temp++;
                }
                else
                {
                    record.military_service_status = -1;
                }

                if (model.religion2 != -1 && model.religion2 != null)
                {
                    record.religion = model.religion2;
                    temp++;
                }
                else
                {
                    record.religion = -1;
                }

                record.weight = model.weight;
                if (model.weight != 0 && model.weight != null) temp++;

                record.Height = model.Height;
                if (model.Height != 0 && model.Height != null) temp++;

                record.job = model.job;
                if (!string.IsNullOrEmpty(model.job)) temp++;

                record.coach = model.coach;
                if (!string.IsNullOrEmpty(model.coach)) temp++;

                record.description = model.description;
                if (!string.IsNullOrEmpty(model.description)) temp++;

                record.complete_percent = Math.Min(100, (100 * temp) / 22);

                // Handle file upload
                string filename = "";
                if (Request.Form.Files.Count > 0)
                {
                    var file = Request.Form.Files["FileUpload"] ?? Request.Form.Files["myFile"] ?? Request.Form.Files[0];
                    if (file != null && file.Length > 0)
                    {
                        var ext = Path.GetExtension(file.FileName).ToLower();
                        if (ext != ".jpg" && ext != ".jpeg" && ext != ".png" && ext != ".tiff")
                        {
                            return Json(new { errorcode = "6", message = "خطا در بارگذاری تصویر بازیکن. فرمت مجاز نیست." });
                        }

                        var uploadFolder = Path.Combine(_env.WebRootPath, "Uploadfiles", "Images");
                        if (!Directory.Exists(uploadFolder))
                        {
                            Directory.CreateDirectory(uploadFolder);
                        }

                        var thisDate = DateTime.Now;
                        filename = $"{targetUser.Id}-{thisDate.Year}{thisDate.Month:D2}{thisDate.Day:D2}-{thisDate.Hour:D2}{thisDate.Minute:D2}{thisDate.Second:D2}{ext}";
                        var fullPath = Path.Combine(uploadFolder, filename);

                        using (var stream = new FileStream(fullPath, FileMode.Create))
                        {
                            await file.CopyToAsync(stream);
                        }

                        record.pictuer = $"/Uploadfiles/Images/{filename}";
                    }
                }

                await _db.SaveChangesAsync();

                // Synchronize ApplicationUser entity
                targetUser.FirstName = model.name;
                targetUser.LastName = model.family;
                targetUser.EnglishName = model.eng_name;
                targetUser.EnglishSurname = model.eng_family;
                if (!string.IsNullOrEmpty(model.international_id))
                {
                    targetUser.NationalId = model.international_id;
                }
                targetUser.BirthCertificateNo = model.id_no;
                targetUser.FatherName = model.father_name;
                targetUser.Weight = model.weight;
                targetUser.Height = model.Height;
                targetUser.Gender = model.gender2 == 1 ? "مرد" : (model.gender2 == 0 ? "زن" : targetUser.Gender);
                targetUser.BloodGroup = (model.blood_type2 != "-1" && !string.IsNullOrEmpty(model.blood_type2)) ? model.blood_type2 : targetUser.BloodGroup;
                targetUser.MaritalStatus = model.marital_status2 == 0 ? "مجرد" : (model.marital_status2 == 1 ? "متاهل" : targetUser.MaritalStatus);
                targetUser.Religion = model.religion2 == 1 ? "اسلام" : (model.religion2 == 2 ? "غیراسلام" : targetUser.Religion);
                targetUser.Occupation = model.job;
                targetUser.Description = model.description;

                if (!string.IsNullOrEmpty(record.birth_date_miladi))
                {
                    if (DateTime.TryParse(record.birth_date_miladi.Replace('/', '-'), out var bdt))
                    {
                        targetUser.BirthDate = bdt;
                    }
                }

                if (!string.IsNullOrEmpty(record.pictuer))
                {
                    targetUser.PassportPhotoPath = record.pictuer;
                }

                await _userManager.UpdateAsync(targetUser);

                return Json(new { 
                    errorcode = "0", 
                    file_logo = filename, 
                    complete_percent = record.complete_percent, 
                    message = "اطلاعات با موفقیت ذخیره شد" 
                });
            }
            catch (Exception ex)
            {
                return Json(new { errorcode = "10", file_logo = "", message = "در ثبت اطلاعات با خطائی مواجه شده‌اید. لطفا مجددا سعی نمائید." });
            }
        }
    }
}
