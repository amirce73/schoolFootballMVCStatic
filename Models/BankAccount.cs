using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FootballSchool.Web.Models
{
    public class BankAccount
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "نام بانک الزامی است")]
        [StringLength(100)]
        public string? BankName { get; set; }

        [StringLength(100)]
        public string? Branch { get; set; }

        [Required(ErrorMessage = "شماره کارت الزامی است")]
        [StringLength(20)]
        public string? CardNumber { get; set; }

        [Required(ErrorMessage = "شماره شبا الزامی است")]
        [StringLength(50)]
        public string? Iban { get; set; }

        [Required]
        public string? UserId { get; set; }

        [ForeignKey("UserId")]
        public ApplicationUser? User { get; set; }
    }
}
