using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FootballSchool.Web.Models
{
    public class FinancialTransaction
    {
        public int Id { get; set; }

        [Required]
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }

        public string Title { get; set; }
        
        [Column(TypeName = "decimal(18,2)")]
        public decimal Amount { get; set; }

        public DateTime TransactionDate { get; set; }
        public bool IsSuccessful { get; set; }
        
        // true for payment, false for debt/charge
        public bool IsCredit { get; set; }
    }
}
