using System;
using System.Collections.Generic;
using System.Text;

namespace DataLayer.Entityes
{
    public class Company
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string UrlVideo { get; set; }
        public int GoalMoney { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime FinishTime { get; set; }
        public string DesriptionMD { get; set; }

    }
}
