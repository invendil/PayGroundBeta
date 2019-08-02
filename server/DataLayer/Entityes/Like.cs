using System;
using System.Collections.Generic;
using System.Text;

namespace DataLayer.Entityes
{
    public class Like
    {
        public int Id { get; set; }
        public Comment Comment { get; set; }
        public User User { get; set; }
        public int State { get; set; }
        

    }
}
