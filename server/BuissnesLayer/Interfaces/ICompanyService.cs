using BuissnesLayer.ModelView;
using DataLayer.Entityes;
using System;
using System.Collections.Generic;
using System.Text;

namespace BuissnesLayer.Interfaces
{
    public interface ICompanyService
    {

        Company Add(Company company, CompanyModel companyModel);
        Company GetById(int id);
        
        
        
    }
}
