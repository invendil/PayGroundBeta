using System;
using System.Collections.Generic;
using System.Text;

namespace DataLayer.Entityes
{
    public class Image
    {
        public int Id { get; set; }
        public int CompanyId { get; set; }
        public Company Company { get; set; }
        public string ImageUrl { get; set; }
        

    }
}
