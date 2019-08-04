using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DataLayer.Entityes
{
    public class User
    {
        public int Id { get; set; }

        public int RoleId { get; set; }
        public UserRole Role { get; set; }
        
        public List<Reward> Rewards { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public User()
        {
            Rewards = new List<Reward>();
        }
    }
}
