using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FootballSchool.Web.Migrations
{
    /// <inheritdoc />
    public partial class AddTblUserPersonalInfo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tbl_user_personal_info",
                columns: table => new
                {
                    person_id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    user_id_FK = table.Column<long>(type: "bigint", nullable: true),
                    ApplicationUserId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    nationality_id_FK = table.Column<long>(type: "bigint", nullable: true),
                    stateIdFK = table.Column<long>(type: "bigint", nullable: true),
                    coach = table.Column<string>(type: "nvarchar(150)", maxLength: 150, nullable: true),
                    blood_type = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    family = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    middel_name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    alias_name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    father_name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    father_job = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    international_id = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    id_no = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    address2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    birth_date_shamsi = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    birth_date_miladi = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    landline_phone = table.Column<string>(type: "nvarchar(11)", maxLength: 11, nullable: true),
                    cell_phone = table.Column<string>(type: "nvarchar(11)", maxLength: 11, nullable: true),
                    father_cell_phone = table.Column<string>(type: "nvarchar(11)", maxLength: 11, nullable: true),
                    mother_cell_phone = table.Column<string>(type: "nvarchar(11)", maxLength: 11, nullable: true),
                    essential_phone = table.Column<string>(type: "nvarchar(11)", maxLength: 11, nullable: true),
                    parent_pohone = table.Column<string>(type: "nvarchar(11)", maxLength: 11, nullable: true),
                    gender = table.Column<int>(type: "int", nullable: true),
                    site = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    weblog = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    serial_id = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    location_id = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    pictuer = table.Column<string>(type: "nvarchar(250)", maxLength: 250, nullable: true),
                    religion = table.Column<int>(type: "int", nullable: true),
                    weight = table.Column<int>(type: "int", nullable: true),
                    Height = table.Column<int>(type: "int", nullable: true),
                    marital_status = table.Column<int>(type: "int", nullable: true),
                    military_service_status = table.Column<int>(type: "int", nullable: true),
                    job = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    health_status = table.Column<int>(type: "int", nullable: true),
                    citizenship = table.Column<long>(type: "bigint", nullable: true),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    passport_no = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    passport_export_date = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    passport_expire_date = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    passport_file = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    passport_eng_name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    passport_eng_family = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    passport_description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    complete_percent = table.Column<int>(type: "int", nullable: true),
                    contact_complete_percent = table.Column<int>(type: "int", nullable: true),
                    telegram = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    instagram = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    facebook = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    linkdin = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    postal_code1 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    postal_code2 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbl_user_personal_info", x => x.person_id);
                    table.ForeignKey(
                        name: "FK_tbl_user_personal_info_AspNetUsers_ApplicationUserId",
                        column: x => x.ApplicationUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_tbl_user_personal_info_ApplicationUserId",
                table: "tbl_user_personal_info",
                column: "ApplicationUserId",
                unique: true,
                filter: "[ApplicationUserId] IS NOT NULL");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tbl_user_personal_info");
        }
    }
}
