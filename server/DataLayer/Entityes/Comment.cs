using System;
using System.Collections.Generic;
using System.Text;

namespace DataLayer.Entityes
{
    public class Comment
    {
        public int Id { get; set; }
        public int CompanyId { get; set; }
        public int UserId { get; set; }
        public string Body { get; set; }
        
        public DateTime CreateTime { get; set; }
        
        public int LikesCount { get; set; }
        public int DislikesCount { get; set; }

    }
}
