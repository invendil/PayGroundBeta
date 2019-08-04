using BuissnesLayer.ModelView;
using DataLayer.Entityes;
using System;
using System.Collections.Generic;
using System.Text;

namespace BuissnesLayer.Helpers.Mappers
{
    public class CompanyMapper
    {

        public static Company ModelToEntity(CompanyModel companyModel)
        {
            Company company = new Company()
            {
                Id = companyModel.Id,
                Name = companyModel.Name,
                CategoryId = companyModel.CategoryId,
                GoalMoney = companyModel.GoalMoney,
                UrlVideo = companyModel.UrlVideo,
                CreateTime = companyModel.CreateTime != DateTime.MinValue ? companyModel.CreateTime : DateTime.Now,
                FinishTime = companyModel.FinishTime,
                DesriptionMD = !String.IsNullOrEmpty(companyModel.Description) ? companyModel.Description : "no desc",
                
                CurrentMoney = companyModel.CurrentMoney

            };

           

            return company;
        }
        public static CompanyModel EntityToModel(Company company)
        {
            CompanyModel companyModel = new CompanyModel()
            {
                Id = company.Id,
                Name = company.Name,
                CategoryId = company.CategoryId,
                GoalMoney = company.GoalMoney,
                UrlVideo = company.UrlVideo,
                CreateTime = company.CreateTime,
                FinishTime = company.FinishTime,
                Description = company.DesriptionMD,
                UserId = company.User.Id,
                CurrentMoney = company.CurrentMoney,
                Rating = company.Rating,
                RatingsCount = company.RatingsCount
            };



            return companyModel;
        }
    }
}
