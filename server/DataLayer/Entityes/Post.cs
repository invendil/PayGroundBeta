using System;
using System.Collections.Generic;
using System.Text;

namespace DataLayer.Entityes
{
    public class Post
    {
        public int Id { get; set; }
        public int CompanyId { get; set; }
        public string Title { get; set; }
        public string BodyHtml { get; set; }
        public DateTime CreateTime { get; set; }
       

    }
}
