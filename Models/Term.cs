using System;
using System.Collections.Generic;

namespace FootballSchool.Web.Models
{
    public class Term
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool IsActive { get; set; }

        public ICollection<RegistrationRecord> RegistrationRecords { get; set; }
    }
}
