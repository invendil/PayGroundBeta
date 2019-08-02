using System;
using System.Collections.Generic;
using System.Text;

namespace DataLayer.Entityes
{
    public class UserRole

    {
        public int Id { get; set; }
        public  List<User> Users { get; set; }
        public string Name { get; set; }
        
    }
}
