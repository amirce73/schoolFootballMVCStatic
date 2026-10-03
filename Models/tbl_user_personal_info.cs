using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FootballSchool.Web.Models
{
    [Table("tbl_user_personal_info")]
    public class tbl_user_personal_info
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long person_id { get; set; }

        public long? user_id_FK { get; set; }

        public string? ApplicationUserId { get; set; }

        [ForeignKey("ApplicationUserId")]
        public virtual ApplicationUser? ApplicationUser { get; set; }

        public long? nationality_id_FK { get; set; }

        public long? stateIdFK { get; set; }

        [StringLength(150)]
        public string? coach { get; set; }

        [StringLength(10)]
        public string? blood_type { get; set; }

        [StringLength(50)]
        public string? name { get; set; }

        [StringLength(50)]
        public string? family { get; set; }

        [StringLength(50)]
        public string? middel_name { get; set; }

        [StringLength(50)]
        public string? alias_name { get; set; }

        [StringLength(50)]
        public string? father_name { get; set; }

        [StringLength(50)]
        public string? father_job { get; set; }

        [StringLength(50)]
        public string? international_id { get; set; }

        [StringLength(50)]
        public string? id_no { get; set; }

        public string? address { get; set; }

        public string? address2 { get; set; }

        [StringLength(10)]
        public string? birth_date_shamsi { get; set; }

        [StringLength(10)]
        public string? birth_date_miladi { get; set; }

        [StringLength(11)]
        public string? landline_phone { get; set; }

        [StringLength(11)]
        public string? cell_phone { get; set; }

        [StringLength(11)]
        public string? father_cell_phone { get; set; }

        [StringLength(11)]
        public string? mother_cell_phone { get; set; }

        [StringLength(11)]
        public string? essential_phone { get; set; }

        [StringLength(11)]
        public string? parent_pohone { get; set; }

        public int? gender { get; set; }

        [StringLength(50)]
        public string? site { get; set; }

        [StringLength(50)]
        public string? weblog { get; set; }

        [StringLength(50)]
        public string? serial_id { get; set; }

        [StringLength(50)]
        public string? location_id { get; set; }

        [StringLength(250)]
        public string? pictuer { get; set; }

        public int? religion { get; set; }

        public int? weight { get; set; }

        public int? Height { get; set; }

        public int? marital_status { get; set; }

        public int? military_service_status { get; set; }

        [StringLength(50)]
        public string? job { get; set; }

        public int? health_status { get; set; }

        public long? citizenship { get; set; }

        public string? description { get; set; }

        [StringLength(50)]
        public string? passport_no { get; set; }

        [StringLength(10)]
        public string? passport_export_date { get; set; }

        [StringLength(10)]
        public string? passport_expire_date { get; set; }

        public string? passport_file { get; set; }

        [StringLength(50)]
        public string? passport_eng_name { get; set; }

        [StringLength(50)]
        public string? passport_eng_family { get; set; }

        public string? passport_description { get; set; }

        public int? complete_percent { get; set; }

        public int? contact_complete_percent { get; set; }

        public string? telegram { get; set; }

        public string? instagram { get; set; }

        public string? facebook { get; set; }

        public string? linkdin { get; set; }

        [StringLength(10)]
        public string? postal_code1 { get; set; }

        [StringLength(10)]
        public string? postal_code2 { get; set; }
    }
}
