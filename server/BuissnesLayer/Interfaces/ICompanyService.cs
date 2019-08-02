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
        IEnumerable<Image> GetImagesByCompanyId(int id);
        void Update(Company company, CompanyModel companyModel);
        void Delete(int id);

    }
}
