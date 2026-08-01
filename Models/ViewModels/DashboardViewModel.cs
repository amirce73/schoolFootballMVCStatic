using FootballSchool.Web.Models;
using System.Collections.Generic;

namespace FootballSchool.Web.Models.ViewModels
{
    public class DashboardViewModel
    {
        public ApplicationUser User { get; set; } = null!;
        public int UnreadNotificationsCount { get; set; }
        public bool IsVerified { get; set; }
        
        // Optional: Recent financial records, upcoming matches, etc.
        public List<FinancialTransaction> RecentTransactions { get; set; } = new List<FinancialTransaction>();
        
        public int Age
        {
            get
            {
                if (User?.BirthDate == null) return 0;
                var today = System.DateTime.Today;
                var age = today.Year - User.BirthDate.Value.Year;
                if (User.BirthDate.Value.Date > today.AddYears(-age)) age--;
                return age;
            }
        }
    }
}
