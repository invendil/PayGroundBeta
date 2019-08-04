using System;
using System.Collections.Generic;
using System.Text;

namespace BuissnesLayer.ModelView
{
    public class CompanyModel
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        
        public string Name { get; set; }
        public UserModel User { get; set; }
        public string Username { get; set; }
        public DateTime FinishTime { get; set; }
        public DateTime CreateTime { get; set; }
        public string Description { get; set; }
        public int CategoryId { get; set; }
        public string UrlVideo { get; set; }
        public decimal GoalMoney { get; set; }
        public decimal CurrentMoney { get; set; }
        public IEnumerable<string> Images { get; set; }
        public double Rating { get; set; }
        public int RatingsCount { get; set; }


    }
}
