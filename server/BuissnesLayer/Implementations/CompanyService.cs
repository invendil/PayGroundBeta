using BuissnesLayer.Helpers;
using BuissnesLayer.Interfaces;
using BuissnesLayer.ModelView;
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

        
        public Company Add(Company company, CompanyModel companyModel)
        {
            _context.Companies.Add(company);
            _context.SaveChanges();
            AddImages(companyModel.Images, company.Id);
            return company;

        }

       

       public void AddImages(IEnumerable<string> imagies, int comnanyId) {

            foreach(string imageUrl in imagies)
            {

                var image = new Image()
                {
                    ImageUrl = imageUrl
                };
                _context.Images.Add( image );
                _context.SaveChanges();
                _context.CompanyImages.Add(
                    new CompanyImage()
                        {
                            CompanyId = comnanyId,
                            ImageId = image.Id
                        }
                );
                _context.SaveChanges();
            }

       }

        

        

       
    }
}