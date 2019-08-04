﻿using System;
using System.Collections.Generic;
using System.Text;

namespace DataLayer.Entityes
{
    public class Rating
    {
        public int Id { get; set; }
        public int CompanyId { get; set; }
        public Company Company { get; set; }
        
        
        public int UserId { get; set; }
        public User User { get; set; }
        
        public int State { get; set; }
        

    }
}
