using System;
using System.Collections.Generic;
using System.Text;

namespace DataLayer.Entityes
{
    public class CompanyCategory
    {
        public int Id { get; set; }
       
        public List<Company> Companies { get; set; }
        public string Name { get; set; }
        

    }
}
