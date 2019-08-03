using System;
using System.Collections.Generic;
using System.Text;

namespace BuissnesLayer.ModelView
{
    public class PostModel
    {
        public int Id { get; set; }
        public int CompanyId { get; set; }

       
        
        public string Name { get; set; }
       
        public string BodyHtml { get; set; }
        public DateTime CreateTime { get; set; }
        


    }
}
