using BuissnesLayer.Helpers;
using BuissnesLayer.Interfaces;
using DataLayer;
using DataLayer.Entityes;
using System;
using System.Collections.Generic;
using System.Linq;


namespace WebApi.Services
{


    public class CompanyCategoryService : ICompanyCategoryService
    {
        private EFDBContext _context;

        public CompanyCategoryService(EFDBContext context)
        {
            _context = context;
        }
        

        public IEnumerable<string> getAll()
        {
            return _context.CompanyCategories.Select(x => x.Name);
        }

        public int getByName(string name)
        {
            throw new NotImplementedException();
        }

        
    }
}