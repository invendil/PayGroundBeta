using System;
using System.Collections.Generic;
using System.Text;

namespace BuissnesLayer.ModelView
{
    public class RewardModel
    {
        public int Id { get; set; }
        public int CompanyId { get; set; }
        public string Name { get; set; }
        public decimal Amount { get; set; }
        public string Description { get; set; }
        public string UserName { get; set; }
        
        


    }
}
