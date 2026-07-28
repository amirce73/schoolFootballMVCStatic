using System.ComponentModel.DataAnnotations;

namespace FootballSchool.Web.Models.ViewModels
{
    public class BankAccountViewModel
    {
        [Required(ErrorMessage = "نام بانک الزامی است")]
        [Display(Name = "نام بانک")]
        [StringLength(100)]
        public string? BankName { get; set; }

        [Display(Name = "شعبه")]
        [StringLength(100)]
        public string? Branch { get; set; }

        [Required(ErrorMessage = "شماره کارت الزامی است")]
        [Display(Name = "شماره کارت")]
        [StringLength(20)]
        public string? CardNumber { get; set; }

        [Required(ErrorMessage = "شماره شبا الزامی است")]
        [Display(Name = "شماره شبا")]
        [StringLength(50)]
        public string? Iban { get; set; }
    }
}
