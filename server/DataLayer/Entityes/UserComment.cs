using System;
using System.Collections.Generic;
using System.Text;

namespace DataLayer.Entityes
{
    public class UserComment
    {
        public int Id { get; set; }
        public int CompanyId { get; set; }
        public int UserId { get; set; }

        public bool IsLiked { get; set; }
        public bool IsDisliked { get; set; }
        

    }
}
