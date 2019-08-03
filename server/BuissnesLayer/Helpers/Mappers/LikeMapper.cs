using BuissnesLayer.ModelView;
using DataLayer.Entityes;
using System;
using System.Collections.Generic;
using System.Text;

namespace BuissnesLayer.Helpers.Mappers
{
    public class LikeMapper
    {

        public static Like ModelToEntity(LikeModel likeModel)
        {
            Like like = new Like()
            {
                UserId = likeModel.UserId,
                CommentId = likeModel.CommentId,
                
                State = likeModel.State
               

            };

           

            return like;
        }
        public static LikeModel EntityToModel(Like like)
        {
            LikeModel likeModel = new LikeModel()
            {
                UserId = like.UserId,
                CommentId = like.CommentId,

                State = like.State

            };



            return likeModel;
        }
    }
}
