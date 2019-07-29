using System;
using System.Collections.Generic;
using System.Text;

namespace BuissnesLayer.ModelView
{
    public class CompanyModel
    {
        public int Id { get; set; }
        
        public string Name { get; set; }
        public DateTime FinishTime { get; set; }
        public string Description { get; set; }
        public int CategoryId { get; set; }
        public string UrlVideo { get; set; }
        public int GoalMoney { get; set; }

        public IEnumerable<string> Images { get; set; }


    }
}
