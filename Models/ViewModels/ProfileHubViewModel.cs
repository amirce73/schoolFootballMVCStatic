using FootballSchool.Web.Models;
using System.Reflection;

namespace FootballSchool.Web.Models.ViewModels
{
    public class ProfileHubViewModel
    {
        public ApplicationUser User { get; set; } = null!;
        public int CompletionPercentage { get; set; }
        
        public ProfileHubViewModel(ApplicationUser user)
        {
            User = user;
            CompletionPercentage = CalculateCompletion(user);
        }

        private int CalculateCompletion(ApplicationUser user)
        {
            if (user == null) return 0;
            
            // Simple heuristic to calculate profile completion
            int totalFields = 10;
            int filled = 0;
            
            if (!string.IsNullOrEmpty(user.FirstName)) filled++;
            if (!string.IsNullOrEmpty(user.LastName)) filled++;
            if (!string.IsNullOrEmpty(user.NationalId)) filled++;
            if (user.BirthDate.HasValue) filled++;
            if (!string.IsNullOrEmpty(user.FatherName)) filled++;
            if (user.Weight.HasValue) filled++;
            if (user.Height.HasValue) filled++;
            if (!string.IsNullOrEmpty(user.Telephone)) filled++;
            if (!string.IsNullOrEmpty(user.Address)) filled++;
            if (!string.IsNullOrEmpty(user.PostalCode)) filled++;

            return (filled * 100) / totalFields;
        }
    }
}
