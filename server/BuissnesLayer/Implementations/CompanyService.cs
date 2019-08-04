using BuissnesLayer.Helpers;
using BuissnesLayer.Interfaces;
using BuissnesLayer.ModelView;
using DataLayer;
using DataLayer.Entityes;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using BuissnesLayer.Helpers.Mappers;

namespace WebApi.Services
{


    public class CompanyService : ICompanyService
    {
        private EFDBContext _context;

        public CompanyService(EFDBContext context)
        {
            _context = context;
        }

        

        public decimal DonateMoney(TransactionModel transactionModel)
        {

            var company = _context.Companies.Find(transactionModel.CompanyId);
            if (company == null)
                throw new AppException("Company doesn't exist");

            var user = _context.Users.Find(transactionModel.UserId);
            if (user == null)
                throw new AppException("User doesn't exist");

            Transaction transaction = new Transaction
            {
                CompanyId = transactionModel.CompanyId,
                UserId = transactionModel.UserId,
                Money = transactionModel.Money
            };
            _context.Transactions.Add(transaction);
            company.CurrentMoney += transaction.Money;
            _context.Companies.Update(company);
            _context.SaveChanges();
            return company.CurrentMoney;
        }

        public decimal GetReward(TransactionModel transactionModel)
        {

            var company = _context.Companies
                .Include(x => x.Rewards)
                .FirstOrDefault(x => x.Id == transactionModel.CompanyId);
            if (company == null)
                throw new AppException("Company doesn't exist");

            var reward = company.Rewards
                .FirstOrDefault(x => x.Id == transactionModel.RewardId);
            if (reward == null)
                throw new AppException("Reward doesn't exist");

            var user = _context.Users.Find(transactionModel.UserId);
            if (user == null)
                throw new AppException("User doesn't exist");

            Transaction transaction = new Transaction
            {
                CompanyId = transactionModel.CompanyId,
                UserId = transactionModel.UserId,
                RewardId = transactionModel.RewardId
            };

            user.Rewards.Add(reward);
            reward.Users.Add(user);
            _context.Transactions.Add(transaction);
            company.CurrentMoney += reward.Amount;
            _context.Rewards.Update(reward);
            _context.Users.Update(user);
            _context.Companies.Update(company);
            _context.SaveChanges();
            return company.CurrentMoney;
        }

        public double ChangeRateState(RatingModel ratingModel)
        {
            var companyUserRating = _context.Ratings
                .FirstOrDefault(x => x.CompanyId == ratingModel.CompanyId && x.UserId == ratingModel.UserId);
            if (companyUserRating == null)
            {
                Rating rating = RatingMapper.ModelToEntity(ratingModel);
                _context.Ratings.Add(rating);

                var company = _context.Companies.FirstOrDefault(x => x.Id == rating.CompanyId);
                company.Rating = ((company.Rating * company.RatingsCount) + rating.State) / (company.RatingsCount + 1);
                company.RatingsCount++;

                _context.Companies.Update(company);
                _context.SaveChanges();
                return company.Rating;

            } else if (companyUserRating.State != ratingModel.State)
            {
                var company = _context.Companies.FirstOrDefault(x => x.Id == ratingModel.CompanyId);
                company.Rating = ((company.Rating * company.RatingsCount) + ratingModel.State - companyUserRating.State) / company.RatingsCount;
                companyUserRating.State = ratingModel.State;

                _context.Companies.Update(company);
                _context.Ratings.Update(companyUserRating);
                _context.SaveChanges();
                return company.Rating;
            }

            throw new AppException("Rating exception");
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

            Company companyForUpdate = _context.Companies
                 .Include(x => x.Images)
                 .FirstOrDefault(x => x.Id == company.Id);
                 
            
            AddImages(companyModel.Images, companyForUpdate);
            
            companyForUpdate.CategoryId = company.CategoryId;
            companyForUpdate.CreateTime = company.CreateTime;
            companyForUpdate.DesriptionMD = company.DesriptionMD;
            companyForUpdate.FinishTime = company.FinishTime;
            companyForUpdate.GoalMoney = company.GoalMoney;
            companyForUpdate.Name = company.Name;
            companyForUpdate.UrlVideo = company.UrlVideo;
            
            _context.Companies.Update(companyForUpdate);
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
                        Company = company,
                        ImageUrl = imageUrl
                    };

                    imageList.Add(image);
                   
                
                }
            }
            company.Images = imageList;

            

        }
       
    }
}