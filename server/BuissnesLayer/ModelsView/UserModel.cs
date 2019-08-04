using DataLayer.Entityes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace BuissnesLayer.ModelView
{
    public class UserModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string Email { get; set; }
        [NotMapped]
        public IEnumerable<RewardModel> Rewards { get; set; } 
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        
    }
}
