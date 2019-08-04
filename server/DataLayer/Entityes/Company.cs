using System;
using System.Collections.Generic;
using System.Text;

namespace DataLayer.Entityes
{
    public class Company
    {
        public int Id { get; set; }
       
        public User User { get; set; }
        public string Name { get; set; }
        public  List<Image> Images { get; set; }
        public List<Reward> Rewards { get; set; }
        public int CategoryId { get; set; }
        public CompanyCategory Category { get; set; }
        public string UrlVideo { get; set; }
        public decimal GoalMoney { get; set; }
        public decimal CurrentMoney { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime FinishTime { get; set; }
        public string DesriptionMD { get; set; }
        public double Rating { get; set; }
        public int RatingsCount { get; set; }

    }
}
