using System;
using System.Collections.Generic;
using System.Text;

namespace DataLayer.Entityes
{
    public class Post
    {
        public int Id { get; set; }
        public int CompanyId { get; set; }
        public Company Company { get; set; }
        public string Name { get; set; }
        public string BodyHtml { get; set; }
        public DateTime CreateTime { get; set; }
       

    }
}
