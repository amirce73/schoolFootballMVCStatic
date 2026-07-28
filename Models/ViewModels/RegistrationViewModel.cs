using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace FootballSchool.Web.Models.ViewModels
{
    public class RegistrationViewModel
    {
        [Required(ErrorMessage = "لطفاً دوره را انتخاب کنید")]
        [Display(Name = "دوره انتخابی:")]
        public int TermId { get; set; }

        [Required(ErrorMessage = "لطفاً کلاس / رده سنی را انتخاب کنید")]
        [Display(Name = "کلاس / رده سنی:")]
        public int AgeCategoryId { get; set; }

        [Range(typeof(bool), "true", "true", ErrorMessage = "شما باید قوانین و مقررات را بپذیرید")]
        [Display(Name = "قوانین و مقررات باشگاه را مطالعه کرده و می‌پذیرم.")]
        public bool RulesAccepted { get; set; }

        public IEnumerable<SelectListItem> Terms { get; set; } = new List<SelectListItem>();
        public IEnumerable<SelectListItem> AgeCategories { get; set; } = new List<SelectListItem>();
        
        // Data to show in view
        public decimal TotalPaid { get; set; }
        public decimal CurrentDebt { get; set; }
    }
}
