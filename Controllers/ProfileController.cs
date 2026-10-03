using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FootballSchool.Web.Data;
using FootballSchool.Web.Models;
using FootballSchool.Web.Models.ViewModels;
using System;
using System.Threading.Tasks;
using System.Linq;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace FootballSchoolMVC.Controllers
{
    [Authorize]
    public class ProfileController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ApplicationDbContext _db;
        private readonly IWebHostEnvironment _env;

        public ProfileController(
            UserManager<ApplicationUser> userManager,
            ApplicationDbContext db,
            IWebHostEnvironment env)
        {
            _userManager = userManager;
            _db = db;
            _env = env;
        }

        // ─── Profile Hub ───────────────────────────────────────────────────────

        [HttpGet("profile-hub")]
        [HttpGet("profile-hub.html")]
        public async Task<IActionResult> Hub()
        {
            var user = await _db.Users
                .Include(u => u.RegistrationRecords)
                    .ThenInclude(r => r.Term)
                .Include(u => u.BankAccounts)
                .FirstOrDefaultAsync(u => u.Id == _userManager.GetUserId(User));

            if (user == null) return Redirect("/");

            var model = new ProfileHubViewModel(user);
            return View("~/Views/Pages/profile-hub.cshtml", model);
        }

        // ─── Personal Info ─────────────────────────────────────────────────────

        [HttpGet("personal-info")]
        [HttpGet("personal-info.html")]
        public async Task<IActionResult> PersonalInfo()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null) return Redirect("/");

            var fpController = new FootballschoolPersonController(_userManager, _db, _env);
            var info = await fpController.GetOrInitPersonalInfoAsync(user);

            DateTime? bdate = user.BirthDate;
            if (bdate == null && !string.IsNullOrEmpty(info.birth_date_miladi) && DateTime.TryParse(info.birth_date_miladi.Replace('/', '-'), out var dt))
            {
                bdate = dt;
            }

            int? calculatedAge = null;
            if (bdate != null)
            {
                var today = DateTime.Today;
                var age = today.Year - bdate.Value.Year;
                if (bdate.Value.Date > today.AddYears(-age)) age--;
                calculatedAge = age;
            }

            var vm = new PersonalInfoViewModel
            {
                FirstName = user.FirstName ?? info.name,
                LastName = user.LastName ?? info.family,
                EnglishName = user.EnglishName ?? info.passport_eng_name,
                EnglishSurname = user.EnglishSurname ?? info.passport_eng_family,
                NationalId = user.NationalId ?? info.international_id,
                BirthDate = bdate,
                BirthDateMiladi = user.BirthDateMiladi ?? info.birth_date_miladi ?? (bdate != null ? bdate.Value.ToString("yyyy/MM/dd") : null),
                Age = calculatedAge,
                BirthCertificateNo = user.BirthCertificateNo ?? info.id_no,
                SerialId = user.SerialId ?? info.serial_id,
                IssuePlace = user.IssuePlace ?? info.location_id,
                FatherName = user.FatherName ?? info.father_name,
                FatherJob = user.FatherJob ?? info.father_job,
                Weight = user.Weight ?? info.weight,
                Height = user.Height ?? info.Height,
                Gender = user.Gender ?? (info.gender == 1 ? "مرد" : (info.gender == 0 ? "زن" : null)),
                Nationality = user.Nationality ?? (info.nationality_id_FK == 24 ? "اتباع خارجی" : (info.nationality_id_FK == 2 ? "افغانستان" : (info.nationality_id_FK == 3 ? "عراق" : (info.nationality_id_FK == 4 ? "ترکیه" : "ایران")))),
                Citizenship = user.Citizenship ?? (info.citizenship == 2 ? "افغانستان" : (info.citizenship == 3 ? "عراق" : "ایران")),
                BloodGroup = user.BloodGroup ?? info.blood_type,
                MaritalStatus = user.MaritalStatus ?? (info.marital_status == 0 ? "مجرد" : (info.marital_status == 1 ? "متاهل" : null)),
                MilitaryServiceStatus = user.MilitaryServiceStatus ?? (info.military_service_status switch
                {
                    1 => "پایان خدمت",
                    2 => "معافیت دائم",
                    3 => "معافیت تحصیلی",
                    4 => "خرید خدمت",
                    5 => "محصل",
                    6 => "درحال خدمت",
                    7 => "کادر نظامی",
                    8 => "مشمول",
                    _ => null
                }),
                Religion = user.Religion ?? (info.religion switch
                {
                    1 => "اسلام",
                    3 => "مسیحیت",
                    4 => "یهودیت",
                    5 => "زرتشتی",
                    6 => "سایر",
                    2 => "غیراسلام",
                    _ => null
                }),
                Sect = user.Sect,
                Occupation = user.Occupation ?? info.job,
                HealthStatus = user.HealthStatus ?? (info.health_status == 1 ? "سالم" : null),
                Description = user.Description ?? info.description
            };

            ViewBag.User = user;
            return View("~/Views/Pages/personal-info.cshtml", vm);
        }

        [HttpPost("personal-info")]
        [HttpPost("personal-info.html")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> UpdatePersonalInfo(PersonalInfoViewModel vm, [FromForm] string? birthDate)
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null) return Redirect("/");

            // Parse Persian Date from date-picker if provided
            if (!string.IsNullOrWhiteSpace(birthDate) && birthDate.Contains("/"))
            {
                var clean = birthDate.Replace("۰", "0").Replace("۱", "1").Replace("۲", "2").Replace("۳", "3").Replace("۴", "4")
                                     .Replace("۵", "5").Replace("۶", "6").Replace("۷", "7").Replace("۸", "8").Replace("۹", "9");
                var parts = clean.Split('/');
                if (parts.Length == 3 && int.TryParse(parts[0], out int py) && int.TryParse(parts[1], out int pm) && int.TryParse(parts[2], out int pd))
                {
                    try
                    {
                        var pc = new System.Globalization.PersianCalendar();
                        vm.BirthDate = pc.ToDateTime(py, pm, pd, 0, 0, 0, 0);
                        ModelState.Remove(nameof(vm.BirthDate));
                    }
                    catch { }
                }
            }

            if (!ModelState.IsValid)
            {
                ViewBag.User = user;
                return View("~/Views/Pages/personal-info.cshtml", vm);
            }

            user.FirstName = vm.FirstName;
            user.LastName = vm.LastName;
            user.EnglishName = vm.EnglishName;
            user.EnglishSurname = vm.EnglishSurname;
            user.NationalId = vm.NationalId;
            user.BirthDate = vm.BirthDate;
            user.BirthCertificateNo = vm.BirthCertificateNo;
            user.SerialId = vm.SerialId;
            user.IssuePlace = vm.IssuePlace;
            user.FatherName = vm.FatherName;
            user.FatherJob = vm.FatherJob;
            user.BirthDateMiladi = vm.BirthDateMiladi ?? (vm.BirthDate != null ? vm.BirthDate.Value.ToString("yyyy/MM/dd") : null);
            user.Nationality = vm.Nationality;
            user.Citizenship = vm.Citizenship;
            user.Weight = vm.Weight;
            user.Height = vm.Height;
            user.Gender = vm.Gender;
            user.BloodGroup = vm.BloodGroup;
            user.MaritalStatus = vm.MaritalStatus;
            user.MilitaryServiceStatus = vm.MilitaryServiceStatus;
            user.Religion = vm.Religion;
            user.Sect = vm.Sect;
            user.Occupation = vm.Occupation;
            user.HealthStatus = vm.HealthStatus;
            user.Description = vm.Description;

            await _userManager.UpdateAsync(user);

            // Synchronize with tbl_user_personal_info
            try
            {
                var info = await _db.tbl_user_personal_infos.FirstOrDefaultAsync(p => p.ApplicationUserId == user.Id);
                if (info == null)
                {
                    var fpController = new FootballschoolPersonController(_userManager, _db, _env);
                    info = await fpController.GetOrInitPersonalInfoAsync(user);
                }
                if (info != null)
                {
                    info.name = vm.FirstName;
                    info.family = vm.LastName;
                    info.passport_eng_name = vm.EnglishName;
                    info.passport_eng_family = vm.EnglishSurname;
                    info.international_id = vm.NationalId;
                    info.id_no = vm.BirthCertificateNo;
                    info.serial_id = vm.SerialId;
                    info.location_id = vm.IssuePlace;
                    info.father_name = vm.FatherName;
                    info.father_job = vm.FatherJob;
                    info.weight = vm.Weight;
                    info.Height = vm.Height;
                    info.job = vm.Occupation;
                    info.description = vm.Description;
                    info.blood_type = vm.BloodGroup;

                    if (vm.Nationality == "اتباع خارجی") info.nationality_id_FK = 24;
                    else if (vm.Nationality == "افغانستان") info.nationality_id_FK = 2;
                    else if (vm.Nationality == "عراق") info.nationality_id_FK = 3;
                    else if (vm.Nationality == "ترکیه") info.nationality_id_FK = 4;
                    else info.nationality_id_FK = 1;

                    if (vm.Citizenship == "افغانستان") info.citizenship = 2;
                    else if (vm.Citizenship == "عراق") info.citizenship = 3;
                    else info.citizenship = 1;

                    if (vm.Gender == "مرد") info.gender = 1;
                    else if (vm.Gender == "زن") info.gender = 0;
                    if (vm.MaritalStatus == "مجرد") info.marital_status = 0;
                    else if (vm.MaritalStatus == "متاهل") info.marital_status = 1;

                    if (vm.MilitaryServiceStatus == "پایان خدمت") info.military_service_status = 1;
                    else if (vm.MilitaryServiceStatus == "معافیت دائم" || vm.MilitaryServiceStatus == "معاف از خدمت") info.military_service_status = 2;
                    else if (vm.MilitaryServiceStatus == "معافیت تحصیلی" || vm.MilitaryServiceStatus == "دانشجو") info.military_service_status = 3;
                    else if (vm.MilitaryServiceStatus == "خرید خدمت") info.military_service_status = 4;
                    else if (vm.MilitaryServiceStatus == "محصل") info.military_service_status = 5;
                    else if (vm.MilitaryServiceStatus == "درحال خدمت") info.military_service_status = 6;
                    else if (vm.MilitaryServiceStatus == "کادر نظامی") info.military_service_status = 7;
                    else if (vm.MilitaryServiceStatus == "مشمول") info.military_service_status = 8;

                    if (vm.Religion == "اسلام") info.religion = 1;
                    else if (vm.Religion == "مسیحیت") info.religion = 3;
                    else if (vm.Religion == "یهودیت") info.religion = 4;
                    else if (vm.Religion == "زرتشتی") info.religion = 5;
                    else if (vm.Religion == "سایر") info.religion = 6;
                    else if (!string.IsNullOrEmpty(vm.Religion)) info.religion = 2;

                    if (vm.HealthStatus == "سالم") info.health_status = 1;
                    else if (!string.IsNullOrEmpty(vm.HealthStatus)) info.health_status = 2;
                    if (vm.BirthDate != null)
                    {
                        info.birth_date_miladi = vm.BirthDateMiladi ?? vm.BirthDate.Value.ToString("yyyy/MM/dd");
                        var pc = new System.Globalization.PersianCalendar();
                        info.birth_date_shamsi = $"{pc.GetYear(vm.BirthDate.Value):0000}/{pc.GetMonth(vm.BirthDate.Value):00}/{pc.GetDayOfMonth(vm.BirthDate.Value):00}";
                    }
                    else if (!string.IsNullOrEmpty(vm.BirthDateMiladi))
                    {
                        info.birth_date_miladi = vm.BirthDateMiladi;
                    }

                    int temp = 0;
                    if (!string.IsNullOrEmpty(info.name)) temp++;
                    if (!string.IsNullOrEmpty(info.family)) temp++;
                    if (!string.IsNullOrEmpty(info.passport_eng_name)) temp++;
                    if (!string.IsNullOrEmpty(info.passport_eng_family)) temp++;
                    if (!string.IsNullOrEmpty(info.father_job)) temp++;
                    if (!string.IsNullOrEmpty(info.father_name)) temp++;
                    if (!string.IsNullOrEmpty(info.international_id)) temp++;
                    if (!string.IsNullOrEmpty(info.id_no)) temp++;
                    if (!string.IsNullOrEmpty(info.location_id)) temp++;
                    if (!string.IsNullOrEmpty(info.serial_id)) temp++;
                    if (!string.IsNullOrEmpty(info.birth_date_miladi)) temp++;
                    if (!string.IsNullOrEmpty(info.birth_date_shamsi)) temp++;
                    if (info.nationality_id_FK != null && info.nationality_id_FK > 0) temp++;
                    if (info.citizenship != null && info.citizenship > 0) temp++;
                    if (info.health_status != null && info.health_status > 0) temp++;
                    if (!string.IsNullOrEmpty(info.blood_type) && info.blood_type != "-1") temp++;
                    if (info.gender != null) temp++;
                    if (info.marital_status != null && info.marital_status >= 0) temp++;
                    if (info.military_service_status != null && info.military_service_status > 0) temp++;
                    if (info.religion != null && info.religion > 0) temp++;
                    if (info.weight != null && info.weight > 0) temp++;
                    if (info.Height != null && info.Height > 0) temp++;
                    if (!string.IsNullOrEmpty(info.job)) temp++;
                    if (!string.IsNullOrEmpty(info.description)) temp++;
                    info.complete_percent = Math.Min(100, (100 * temp) / 22);

                    await _db.SaveChangesAsync();
                }
            }
            catch { }

            if (Request.Headers["X-Requested-With"] == "XMLHttpRequest" || 
                Request.Headers["Accept"].ToString().Contains("application/json"))
            {
                return Json(new { success = true, message = "اطلاعات فردی با موفقیت ذخیره شد." });
            }

            TempData["Success"] = "اطلاعات فردی با موفقیت ذخیره شد.";
            return Redirect("/personal-info");
        }

        // ─── Contact Info ──────────────────────────────────────────────────────

        [HttpGet("contact-info")]
        [HttpGet("contact-info.html")]
        public async Task<IActionResult> ContactInfo()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null) return Redirect("/");

            var vm = new ContactInfoViewModel
            {
                Mobile = user.PhoneNumber,
                Telephone = user.Telephone,
                GuardianMobile = user.GuardianMobile,
                EmergencyPhone = user.EmergencyPhone,
                Email = user.Email,
                Telegram = user.Telegram,
                Instagram = user.Instagram,
                LinkedIn = user.LinkedIn,
                Facebook = user.Facebook,
                WhatsApp = user.WhatsApp,
                Bale = user.Bale,
                Eitaa = user.Eitaa,
                Rubika = user.Rubika,
                Website = user.Website,
                PostalCode = user.PostalCode,
                Address = user.Address,
                ParentsWorkAddress = user.ParentsWorkAddress
            };

            return View("~/Views/Pages/contact-info.cshtml", vm);
        }

        [HttpPost("contact-info")]
        [HttpPost("contact-info.html")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> UpdateContactInfo(ContactInfoViewModel vm)
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null) return Redirect("/");

            if (!ModelState.IsValid)
                return View("~/Views/Pages/contact-info.cshtml", vm);

            user.Telephone = vm.Telephone;
            user.GuardianMobile = vm.GuardianMobile;
            user.EmergencyPhone = vm.EmergencyPhone;
            if (!string.IsNullOrEmpty(vm.Email))
            {
                user.Email = vm.Email;
                user.NormalizedEmail = vm.Email.ToUpper();
            }
            user.Telegram = vm.Telegram;
            user.Instagram = vm.Instagram;
            user.LinkedIn = vm.LinkedIn;
            user.Facebook = vm.Facebook;
            user.WhatsApp = vm.WhatsApp;
            user.Bale = vm.Bale;
            user.Eitaa = vm.Eitaa;
            user.Rubika = vm.Rubika;
            user.Website = vm.Website;
            user.PostalCode = vm.PostalCode;
            user.Address = vm.Address;
            user.ParentsWorkAddress = vm.ParentsWorkAddress;

            await _userManager.UpdateAsync(user);
            TempData["Success"] = "اطلاعات تماس با موفقیت ذخیره شد.";
            return Redirect("/profile-hub");
        }

        // ─── Sports Info ───────────────────────────────────────────────────────

        [HttpGet("sports-info")]
        [HttpGet("sports-info.html")]
        public async Task<IActionResult> SportsInfo()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null) return Redirect("/");

            return View("~/Views/Pages/sports-info.cshtml", user);
        }

        [HttpPost("sports-info")]
        [HttpPost("sports-info.html")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> UpdateSportsInfo(ApplicationUser formData)
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null) return Redirect("/");

            user.CompetitionSeason = formData.CompetitionSeason;
            user.MainPosition = formData.MainPosition;
            user.PlayingAbility = formData.PlayingAbility;
            user.PreferredFoot = formData.PreferredFoot;
            user.HasNationalTeam = formData.HasNationalTeam;
            user.SportsInsuranceNumber = formData.SportsInsuranceNumber;
            user.SportsSlogan = formData.SportsSlogan;
            user.SportsDescription = formData.SportsDescription;

            await _userManager.UpdateAsync(user);
            TempData["Success"] = "اطلاعات ورزشی با موفقیت ذخیره شد.";
            return Redirect("/profile-hub");
        }

        // ─── Passport Info ─────────────────────────────────────────────────────

        [HttpGet("passport-info")]
        [HttpGet("passport-info.html")]
        public async Task<IActionResult> PassportInfo()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null) return Redirect("/");

            var vm = new PassportInfoViewModel
            {
                PassportNumber = user.PassportNumber,
                PassportIssueDate = user.PassportIssueDate,
                PassportExpiryDate = user.PassportExpiryDate,
                EnglishName = user.EnglishName,
                EnglishSurname = user.EnglishSurname,
                PassportDescription = user.PassportDescription,
                ExistingPassportPhotoPath = user.PassportPhotoPath
            };

            return View("~/Views/Pages/passport-info.cshtml", vm);
        }

        [HttpPost("passport-info")]
        [HttpPost("passport-info.html")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> UpdatePassportInfo(PassportInfoViewModel vm)
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null) return Redirect("/");

            if (!ModelState.IsValid)
                return View("~/Views/Pages/passport-info.cshtml", vm);

            user.PassportNumber = vm.PassportNumber;
            user.PassportIssueDate = vm.PassportIssueDate;
            user.PassportExpiryDate = vm.PassportExpiryDate;
            user.EnglishName = vm.EnglishName;
            user.EnglishSurname = vm.EnglishSurname;
            user.PassportDescription = vm.PassportDescription;

            // Handle file upload
            if (vm.PassportPhoto != null && vm.PassportPhoto.Length > 0)
            {
                var uploadsFolder = Path.Combine(_env.WebRootPath, "uploads", "passports");
                Directory.CreateDirectory(uploadsFolder);
                var fileName = $"{user.Id}_passport{Path.GetExtension(vm.PassportPhoto.FileName)}";
                var filePath = Path.Combine(uploadsFolder, fileName);
                using var stream = new FileStream(filePath, FileMode.Create);
                await vm.PassportPhoto.CopyToAsync(stream);
                user.PassportPhotoPath = $"/uploads/passports/{fileName}";
            }

            await _userManager.UpdateAsync(user);
            TempData["Success"] = "اطلاعات گذرنامه با موفقیت ذخیره شد.";
            return Redirect("/profile-hub");
        }

        // ─── Clothing Info ─────────────────────────────────────────────────────

        [HttpGet("clothing-info")]
        [HttpGet("clothing-info.html")]
        public async Task<IActionResult> ClothingInfo()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null) return Redirect("/");

            var vm = new ClothingInfoViewModel
            {
                ShirtSize = user.ShirtSize,
                ShortsSize = user.ShortsSize,
                ShoesSize = user.ShoesSize ?? string.Empty
            };

            return View("~/Views/Pages/clothing-info.cshtml", vm);
        }

        [HttpPost("clothing-info")]
        [HttpPost("clothing-info.html")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> UpdateClothingInfo(ClothingInfoViewModel vm)
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null) return Redirect("/");

            user.ShirtSize = vm.ShirtSize;
            user.ShortsSize = vm.ShortsSize;
            user.ShoesSize = vm.ShoesSize;

            await _userManager.UpdateAsync(user);
            TempData["Success"] = "اطلاعات لباس با موفقیت ذخیره شد.";
            return Redirect("/profile-hub");
        }

        // ─── Bank Info ─────────────────────────────────────────────────────────

        [HttpGet("bank-info")]
        [HttpGet("bank-info.html")]
        public async Task<IActionResult> BankInfo()
        {
            var userId = _userManager.GetUserId(User);
            if (userId == null) return Redirect("/");

            var accounts = await _db.BankAccounts
                .Where(b => b.UserId == userId)
                .ToListAsync();

            return View("~/Views/Pages/bank-info.cshtml", accounts);
        }

        [HttpPost("bank-info")]
        [HttpPost("bank-info.html")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> AddBankAccount(BankAccountViewModel vm)
        {
            var userId = _userManager.GetUserId(User);
            if (userId == null) return Redirect("/");

            if (!ModelState.IsValid)
            {
                var existingAccounts = await _db.BankAccounts
                    .Where(b => b.UserId == userId)
                    .ToListAsync();
                return View("~/Views/Pages/bank-info.cshtml", existingAccounts);
            }

            var account = new BankAccount
            {
                UserId = userId,
                BankName = vm.BankName,
                Branch = vm.Branch,
                CardNumber = vm.CardNumber,
                Iban = vm.Iban
            };

            _db.BankAccounts.Add(account);
            await _db.SaveChangesAsync();
            TempData["Success"] = "حساب بانکی با موفقیت اضافه شد.";
            return Redirect("/bank-info");
        }

        [HttpPost("bank-info/delete/{id:int}")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteBankAccount(int id)
        {
            var userId = _userManager.GetUserId(User);
            var account = await _db.BankAccounts
                .FirstOrDefaultAsync(b => b.Id == id && b.UserId == userId);

            if (account != null)
            {
                _db.BankAccounts.Remove(account);
                await _db.SaveChangesAsync();
            }

            TempData["Success"] = "حساب بانکی حذف شد.";
            return Redirect("/bank-info");
        }
    }
}
