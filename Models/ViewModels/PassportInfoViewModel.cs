using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace FootballSchool.Web.Models.ViewModels
{
    public class PassportInfoViewModel
    {
        [Display(Name = "شماره گذرنامه")]
        [StringLength(20)]
        public string? PassportNumber { get; set; }

        [Display(Name = "تاریخ صدور")]
        [StringLength(20)]
        public string? PassportIssueDate { get; set; }

        [Display(Name = "تاریخ انقضا")]
        [StringLength(20)]
        public string? PassportExpiryDate { get; set; }

        [Display(Name = "نام (انگلیسی)")]
        [StringLength(50)]
        public string? EnglishName { get; set; }

        [Display(Name = "نام خانوادگی (انگلیسی)")]
        [StringLength(50)]
        public string? EnglishSurname { get; set; }

        [Display(Name = "توضیحات")]
        [StringLength(500)]
        public string? PassportDescription { get; set; }

        public string? ExistingPassportPhotoPath { get; set; }

        [Display(Name = "تصویر گذرنامه")]
        public IFormFile? PassportPhoto { get; set; }
    }
}
