using System;
using System.ComponentModel.DataAnnotations;

namespace FootballSchool.Web.Models.ViewModels
{
    public class PersonalInfoViewModel
    {
        [Required(ErrorMessage = "وارد کردن نام الزامی است")]
        [StringLength(50)]
        public string? FirstName { get; set; }

        [Required(ErrorMessage = "وارد کردن نام خانوادگی الزامی است")]
        [StringLength(50)]
        public string? LastName { get; set; }

        [Required(ErrorMessage = "وارد کردن کد ملی الزامی است")]
        [StringLength(10)]
        public string? NationalId { get; set; }

        [Required(ErrorMessage = "وارد کردن تاریخ تولد الزامی است")]
        public DateTime? BirthDate { get; set; }

        [StringLength(10)]
        public string? BirthCertificateNo { get; set; }

        [StringLength(50)]
        public string? FatherName { get; set; }

        public int? Weight { get; set; }

        public int? Height { get; set; }

        [Required(ErrorMessage = "انتخاب جنسیت الزامی است")]
        [StringLength(10)]
        public string? Gender { get; set; }

        [StringLength(10)]
        public string? BloodGroup { get; set; }

        [StringLength(20)]
        public string? MaritalStatus { get; set; }

        [StringLength(50)]
        public string? MilitaryServiceStatus { get; set; }

        [Required(ErrorMessage = "انتخاب دین الزامی است")]
        [StringLength(50)]
        public string? Religion { get; set; }

        [StringLength(50)]
        public string? Sect { get; set; }

        [StringLength(50)]
        public string? Occupation { get; set; }

        [StringLength(500)]
        public string? HealthStatus { get; set; }

        [StringLength(500)]
        public string? Description { get; set; }
    }
}
