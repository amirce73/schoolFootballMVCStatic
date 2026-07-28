using System.ComponentModel.DataAnnotations;

namespace FootballSchool.Web.Models.ViewModels
{
    public class ContactInfoViewModel
    {
        [Display(Name = "موبایل")]
        public string? Mobile { get; set; } // We map this to IdentityUser.PhoneNumber usually, or keep it read-only if it's the main login. Let's map it to PhoneNumber.

        [Display(Name = "تلفن ثابت")]
        [StringLength(20)]
        public string? Telephone { get; set; }

        [Display(Name = "شماره ولی")]
        [StringLength(20)]
        public string? GuardianMobile { get; set; }

        [Display(Name = "تلفن ضروری")]
        [Required(ErrorMessage = "وارد کردن تلفن ضروری الزامی است")]
        [StringLength(20)]
        public string? EmergencyPhone { get; set; }

        [Display(Name = "ایمیل")]
        [EmailAddress(ErrorMessage = "فرمت ایمیل نامعتبر است")]
        public string? Email { get; set; }

        [Display(Name = "تلگرام")]
        [StringLength(100)]
        public string? Telegram { get; set; }

        [Display(Name = "اینستاگرام")]
        [StringLength(100)]
        public string? Instagram { get; set; }

        [Display(Name = "لینکدین")]
        [StringLength(100)]
        public string? LinkedIn { get; set; }

        [Display(Name = "فیسبوک")]
        [StringLength(100)]
        public string? Facebook { get; set; }

        [Display(Name = "واتساپ")]
        [StringLength(100)]
        public string? WhatsApp { get; set; }

        [Display(Name = "بله")]
        [StringLength(100)]
        public string? Bale { get; set; }

        [Display(Name = "ایتا")]
        [StringLength(100)]
        public string? Eitaa { get; set; }

        [Display(Name = "روبیکا")]
        [StringLength(100)]
        public string? Rubika { get; set; }

        [Display(Name = "وب سایت")]
        [StringLength(200)]
        public string? Website { get; set; }

        [Display(Name = "کد پستی")]
        [StringLength(10)]
        public string? PostalCode { get; set; }

        [Display(Name = "آدرس دقیق منزل")]
        [Required(ErrorMessage = "وارد کردن آدرس دقیق منزل الزامی است")]
        [StringLength(1000)]
        public string? Address { get; set; }

        [Display(Name = "آدرس محل کار والدین")]
        [StringLength(1000)]
        public string? ParentsWorkAddress { get; set; }
    }
}
