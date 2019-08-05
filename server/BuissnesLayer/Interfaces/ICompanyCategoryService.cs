using DataLayer.Entityes;
using System;
using System.Collections.Generic;
using System.Text;

namespace BuissnesLayer.Interfaces
{
    public interface ICompanyCategoryService
    {

        IEnumerable<CompanyCategory> GetAll();
        IEnumerable<string> GetAllNames();
        int getByName(string name);


    }
}
