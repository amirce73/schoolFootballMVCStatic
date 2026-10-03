using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace FootballSchool.Web.Models.ViewModels
{
    public class PersonViewModel
    {
        public string? description { get; set; }
        public int? military_service_status2 { get; set; }
        public int? marital_status2 { get; set; }
        public int? Proficiency_main_foreign_lang { get; set; }
        public int? weight { get; set; }
        public int? Height { get; set; }
        public string? job { get; set; }
        public string? coach { get; set; }
        public int? religion2 { get; set; }
        public string? pictuer { get; set; }
        public string? location_id { get; set; }
        public string? serial_id { get; set; }
        public string? weblog { get; set; }
        public string? site { get; set; }
        public int? gender2 { get; set; }
        public string? parent_pohone { get; set; }
        public string? essential_phone { get; set; }
        public string? cell_phone { get; set; }
        public string? father_cell_phone { get; set; }
        public string? mother_cell_phone { get; set; }
        public string? landline_phone { get; set; }
        public string? birth_date_miladi { get; set; }
        public string? birth_date_shamsi { get; set; }
        public string? address { get; set; }
        public string? address2 { get; set; }
        public string? telegram { get; set; }
        public string? instagram { get; set; }
        public string? facebook { get; set; }
        public string? linkdin { get; set; }
        public string? id_no { get; set; }
        public string? international_id { get; set; }
        public string? father_name { get; set; }
        public string? father_job { get; set; }
        public string? alias_name { get; set; }
        public string? middel_name { get; set; }
        public string? family { get; set; }
        public string? name { get; set; }
        public string? blood_type2 { get; set; }
        public int? health_status2 { get; set; }
        public long? nationality_id_FK2 { get; set; }
        public long? citizenship2 { get; set; }
        public string? citizenship_desc { get; set; }
        public long? user_id_FK { get; set; }
        public long? person_id { get; set; }
        public string? passport_no { get; set; }
        public string? passport_export_date { get; set; }
        public string? passport_expire_date { get; set; }
        public string? passport_file { get; set; }
        public string? passport_eng_name { get; set; }
        public string? passport_eng_family { get; set; }
        public string? passport_description { get; set; }
        public int? complete_percent { get; set; }
        public int? contact_complete_percent { get; set; }
        public string? postal_code1 { get; set; }
        public string? postal_code2 { get; set; }
        public string? eng_name { get; set; }
        public string? eng_family { get; set; }

        // Aliases ignored in JSON serialization to prevent property name collisions
        [JsonIgnore]
        public string? FirstName { get => name; set => name = value; }

        [JsonIgnore]
        public string? LastName { get => family; set => family = value; }

        [JsonIgnore]
        public string? NationalId { get => international_id; set => international_id = value; }

        [JsonIgnore]
        public string? BirthCertificateNo { get => id_no; set => id_no = value; }

        [JsonIgnore]
        public string? FatherName { get => father_name; set => father_name = value; }

        [JsonIgnore]
        public string? Occupation { get => job; set => job = value; }

        [JsonIgnore]
        public string? Description { get => description; set => description = value; }

        [JsonIgnore]
        public int? Weight { get => weight; set => weight = value; }

        [JsonIgnore]
        public int? HeightVal { get => Height; set => Height = value; }

        [JsonIgnore]
        public string? BloodGroup { get => blood_type2; set => blood_type2 = value; }

        [JsonIgnore]
        public string? Sect { get; set; }

        [JsonIgnore]
        public string? HealthStatusDesc { get; set; }

        [JsonIgnore]
        public DateTime? BirthDate { get; set; }
    }
}
