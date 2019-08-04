using System;
using System.Collections.Generic;
using System.Text;

namespace DataLayer.Entityes
{
    public class TransactionModel
    {
        public int Id { get; set; }
        public int CompanyId { get; set; }
        public int UserId { get; set; }
        public int RewardId { get; set; }
        public decimal Money { get; set; }



    }
}
