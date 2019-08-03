using Microsoft.EntityFrameworkCore.Migrations;

namespace DataLayer.Migrations
{
    public partial class Init17 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Rewards",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Posts",
                newName: "Name");

            migrationBuilder.AlterColumn<decimal>(
                name: "Amount",
                table: "Rewards",
                nullable: false,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Rewards",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Posts",
                newName: "Title");

            migrationBuilder.AlterColumn<int>(
                name: "Amount",
                table: "Rewards",
                nullable: false,
                oldClrType: typeof(decimal));
        }
    }
}
