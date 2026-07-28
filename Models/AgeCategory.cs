using System.Collections.Generic;

namespace FootballSchool.Web.Models
{
    public class AgeCategory
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int MinAge { get; set; }
        public int MaxAge { get; set; }

        public ICollection<RegistrationRecord> RegistrationRecords { get; set; }
    }
}
