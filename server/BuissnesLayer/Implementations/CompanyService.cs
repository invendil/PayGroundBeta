using BuissnesLayer.Helpers;
using BuissnesLayer.Interfaces;
using DataLayer;
using DataLayer.Entityes;
using System;
using System.Collections.Generic;
using System.Linq;


namespace WebApi.Services
{


    public class CompanyService : ICompanyService
    {
        private EFDBContext _context;

        public CompanyService(EFDBContext context)
        {
            _context = context;
        }

        
        

        public Company GetById(int id)
        {
            return _context.Companies.Find(id);
        }

        
        public void Add(Company company)
        {
            _context.Companies.Add(company);
            _context.SaveChanges();
        }

       

       

        

        

       
    }
}