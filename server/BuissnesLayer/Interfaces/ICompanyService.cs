using DataLayer.Entityes;
using System;
using System.Collections.Generic;
using System.Text;

namespace BuissnesLayer.Interfaces
{
    public interface ICompanyService
    {

        void Add(Company company);
        Company GetById(int id);
        
        
        
    }
}
