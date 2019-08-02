using BuissnesLayer.Helpers;
using BuissnesLayer.Interfaces;
using BuissnesLayer.ModelView;
using DataLayer;
using DataLayer.Entityes;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;


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
            return _context.Companies
                .Include(x => x.Category)
                .Include(x => x.Images)
                .Include(x => x.User)
                .FirstOrDefault(x => x.Id == id);
        }

        
       

        public IEnumerable<Image> GetImagesByCompanyId(int id)
        {

            Company company = _context.Companies
                .Include(x => x.Images)
                .FirstOrDefault(x => x.Id == id);
            
            
            return company.Images;
        }

        public void Update(Company company, CompanyModel companyModel)
        {

            _context.Companies
                 .Include(x => x.Images)
                 .FirstOrDefault(x => x.Id == company.Id)
                 .Images = new List<Image>();
            _context.SaveChanges();
            AddImages(companyModel.Images, company);
            _context.Companies.Update(company);
            _context.SaveChanges();

            
            

            
           
        }

        public void Delete(int id)
        {
            var company = _context.Companies.Find(id);
            if (company != null)
            {
                _context.Companies.Remove(company);
                _context.SaveChanges();
            }
        }


         public Company Add(Company company, CompanyModel companyModel)
        {
           
            
            AddImages(companyModel.Images, company);
            _context.Companies.Add(company);
            _context.SaveChanges();
            return company;

        }
        private void AddImages(IEnumerable<string> imagies, Company company) {

            List<Image> imageList = new List<Image>();
            if (imagies != null) { 
                foreach (string imageUrl in imagies)
                {

                    Image image = new Image()
                    {
                        ImageUrl = imageUrl
                    };

                    imageList.Add(image);
                   
                
                }
            }
            company.Images = imageList;

            

        }
       
    }
}