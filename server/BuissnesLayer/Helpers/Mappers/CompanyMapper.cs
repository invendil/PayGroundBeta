using BuissnesLayer.ModelView;
using DataLayer.Entityes;
using System;
using System.Collections.Generic;
using System.Text;

namespace BuissnesLayer.Helpers.Mappers
{
    public class CompanyMapper
    {

        public static Company modelToEntity(CompanyModel companyModel)
        {
            Company company = new Company()
            {
                Name = companyModel.Name,
                CategoryId = companyModel.CategoryId,
                GoalMoney = companyModel.GoalMoney,
                UrlVideo = companyModel.UrlVideo,
                CreateTime = DateTime.Now,
                FinishTime = companyModel.FinishTime,
                DesriptionMD = !String.IsNullOrEmpty(companyModel.Description) ? companyModel.Description : "no desc",
                UserId = 1

            };

           

            return company;
        }
    }
}
