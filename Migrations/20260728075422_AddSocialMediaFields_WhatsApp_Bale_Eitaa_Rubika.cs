using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FootballSchool.Web.Migrations
{
    /// <inheritdoc />
    public partial class AddSocialMediaFields_WhatsApp_Bale_Eitaa_Rubika : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Bale",
                table: "AspNetUsers",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Eitaa",
                table: "AspNetUsers",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Rubika",
                table: "AspNetUsers",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "WhatsApp",
                table: "AspNetUsers",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Bale",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Eitaa",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Rubika",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "WhatsApp",
                table: "AspNetUsers");
        }
    }
}
