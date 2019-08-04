using BuissnesLayer.ModelView;
using DataLayer.Entityes;
using System;
using System.Collections.Generic;
using System.Text;

namespace BuissnesLayer.Helpers.Mappers
{
    public class RatingMapper
    {

        public static Rating ModelToEntity(RatingModel ratingModel)
        {
            Rating rating = new Rating()
            {
                
                UserId = ratingModel.UserId,
                CompanyId = ratingModel.CompanyId,
                State = ratingModel.State

            };

           

            return rating;
        }
        public static RatingModel EntityToModel(Rating rating)
        {
            RatingModel ratingModel = new RatingModel()
            {

                UserId = rating.UserId,
                CompanyId = rating.CompanyId,
                State = rating.State

            };



            return ratingModel;
        }
    }
}
