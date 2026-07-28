using System.Collections.Generic;
using FootballSchool.Web.Models;

namespace FootballSchool.Web.Models.ViewModels
{
    public class FinancialViewModel
    {
        public decimal TotalDebt { get; set; }
        public List<FinancialTransaction> Transactions { get; set; } = new List<FinancialTransaction>();
    }
}
