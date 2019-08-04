using Microsoft.EntityFrameworkCore.Migrations;

namespace DataLayer.Migrations
{
    public partial class Init5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Rewards",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Rewards_UserId",
                table: "Rewards",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Rewards_Users_UserId",
                table: "Rewards",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rewards_Users_UserId",
                table: "Rewards");

            migrationBuilder.DropIndex(
                name: "IX_Rewards_UserId",
                table: "Rewards");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Rewards");
        }
    }
}
