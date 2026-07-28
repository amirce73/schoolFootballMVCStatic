using System.ComponentModel.DataAnnotations;

namespace FootballSchool.Web.Models.ViewModels
{
    public class ClothingInfoViewModel
    {
        [Display(Name = "سایز پیراهن")]
        [StringLength(10)]
        public string? ShirtSize { get; set; }

        [Display(Name = "سایز شورت ورزشی")]
        [StringLength(10)]
        public string? ShortsSize { get; set; }

        [Display(Name = "سایز کفش")]
        [StringLength(10)]
        public string ShoesSize { get; set; }
    }
}
