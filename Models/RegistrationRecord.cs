using System;
using System.ComponentModel.DataAnnotations;

namespace FootballSchool.Web.Models
{
    public class RegistrationRecord
    {
        public int Id { get; set; }

        [Required]
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }

        public int TermId { get; set; }
        public Term Term { get; set; }

        public int AgeCategoryId { get; set; }
        public AgeCategory AgeCategory { get; set; }

        public DateTime RegistrationDate { get; set; }
        public bool IsApproved { get; set; }
    }
}
