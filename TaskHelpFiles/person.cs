using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;
using System.Web.WebPages;
using System.Web.Mvc.Html;
using footbalit_project.Models;
using System.Globalization;
using System.IO;



namespace footbalit_project.Models
{
    public class person
    {
        Linq_ClassesDataContext conect_db = new Linq_ClassesDataContext();
        public String description { get; set; }
        public System.Nullable<int> military_service_status2 { get; set; }
        public System.Nullable<int> marital_status2 { get; set; }
        public System.Nullable<int> Proficiency_main_foreign_lang { get; set; }
        public System.Nullable<int> weight { get; set; }
        public System.Nullable<int> Height { get; set; }
        public String job { get; set; }
        public String coach { get; set; }
        public System.Nullable<int> religion2 { get; set; }
        public String pictuer { get; set; }
        public String location_id { get; set; }
        public String serial_id { get; set; }
        [Url]
        public String weblog { get; set; }
        [Url]
        public String site { get; set; }
        public System.Nullable<int> gender2 { get; set; }
        [StringLength(11, MinimumLength = 0, ErrorMessage = "شماره تلفن نمیتواند بیشتر از 11 عدد باشد.")]
        [Phone]
        public String parent_pohone { get; set; }
        public String essential_phone { get; set; }
        [StringLength(11, MinimumLength = 0, ErrorMessage = "شماره تلفن نمیتواند بیشتر از 11 عدد باشد.")]
        [Phone]
        public String cell_phone { get; set; }
        [StringLength(11, MinimumLength = 0, ErrorMessage = "شماره تلفن نمیتواند بیشتر از 11 عدد باشد.")]
        [Phone]
        public String father_cell_phone { get; set; }
        public String mother_cell_phone { get; set; }
        public String landline_phone { get; set; }
        //[DataType(DataType.Date)]
        public String birth_date_miladi { get; set; }
        //[DataType(DataType.Date)]
        public String birth_date_shamsi { get; set; }
        public String address { get; set; }
        public String address2 { get; set; }
        public String telegram { get; set; }
        public String instagram { get; set; }
        public String facebook { get; set; }
        public String linkdin { get; set; }
        public String id_no { get; set; }
        public String international_id { get; set; }
        public String father_name { get; set; }
        public String father_job { get; set; }
        public String alias_name { get; set; }
        public String middel_name { get; set; }
        public String family { get; set; }
        public String name { get; set; }
        public String blood_type2 { get; set; }
        public System.Nullable<int> health_status2 { get; set; }
        public System.Nullable<long> main_foreign_lang_id_FK { get; set; }
        public System.Nullable<long> nationality_id_FK2 { get; set; }
        public System.Nullable<long> citizenship2 { get; set; }
        public String citizenship_desc { get; set; }
        public String date_today { get; set; }
        public System.Nullable<long> user_id_FK { get; set; }
        public System.Nullable<long> person_id { get; set; }
        public String passport_no { get; set; }
        public String passport_export_date { get; set; }
        public String passport_expire_date { get; set; }
        public String passport_file { get; set; }
        public String passport_eng_name { get; set; }
        public String passport_eng_family { get; set; }
        public String passport_description { get; set; }
        public System.Nullable<int> complete_percent { get; set; }
        public System.Nullable<int> contact_complete_percent { get; set; }
        public String hdn_international_id_flag { get; set; }
        public String hdn_birth_date_shamsi_flag { get; set; }
        public String hdn_birth_date_miladi_flag { get; set; }
        [Display(Name = "Email")]
        [EmailAddress]
        public string e_mail { get; set; }
        public int[] other_post_selected { get; set; }
        public List<SelectListItem> other_post_list { get; set; }
        public System.Nullable<int> specialized_foot2 { get; set; }
        public String specialized_foot_desc { get; set; }
        public System.Nullable<int> study_id { get; set; }
        public System.Nullable<int> study_id2 { get; set; }
        public System.Nullable<int> last_season_session_count { get; set; }
        public System.Nullable<int> last_season_formal_match_count { get; set; }
        public System.Nullable<int> last_season_unformal_match_count { get; set; }
        public System.Nullable<long> user_sport_info_id { get; set; }
        public String postal_code1 { get; set; }
        public String postal_code2 { get; set; }
        public String eng_name { get; set; }
        public String eng_family { get; set; }

        public long set_person( long user_id)
        {
            long person_id = 0;
            var record_person = from p in conect_db.tbl_user_personal_infos
                                where p.user_id_FK == user_id
                                select p;
            if (record_person.Count() == 0)
            {
                var model = from tbl_user in conect_db.tbl_users
                            where tbl_user.user_id == user_id
                            select new user
                            {
                                user_id = tbl_user.user_id,
                                first_name = tbl_user.first_name,
                                last_name = tbl_user.last_name,
                                user_name = tbl_user.user_name,
                                password = tbl_user.password,
                                password2 = "",
                                phone = tbl_user.phone,
                                e_mail = tbl_user.e_mail,
                                user_status_id = tbl_user.user_status_id,
                               // user_type2 = tbl_user.user_type,
                                pic = tbl_user.pic,
                                description = tbl_user.description,
                                register_date = tbl_user.register_date
                            };
                user rec = new user();
                rec = model.First();

                tbl_user_personal_info record = new tbl_user_personal_info();
                record.name = rec.first_name;
                record.family = rec.last_name;
                record.user_id_FK = user_id;
                conect_db.tbl_user_personal_infos.InsertOnSubmit(record);
                conect_db.SubmitChanges();
                person_id = record.person_id;
            }
            else
            {
                tbl_user_personal_info record = new tbl_user_personal_info();
                record = record_person.First();
                person_id = record.person_id;
            }
            return (person_id);
        }
    }
}