using BuissnesLayer.ModelView;
using DataLayer.Entityes;
using System;
using System.Collections.Generic;
using System.Text;

namespace BuissnesLayer.Helpers.Mappers
{
    public class CommentMapper
    {

        public static Comment ModelToEntity(CommentModel commentModel)
        {
            Comment comment = new Comment()
            {
                Id = commentModel.Id,
                Body = commentModel.Body,
                CompanyId = commentModel.CompanyId,
                UserId = commentModel.UserId,
                CreateTime = commentModel.CreateTime != DateTime.MinValue ? commentModel.CreateTime : DateTime.Now,
                DislikesCount = commentModel.DislikesCount,
                LikesCount = commentModel.LikesCount
                

            };

           

            return comment;
        }
        public static CommentModel EntityToModel(Comment comment)
        {
            CommentModel commentModel = new CommentModel()
            {
                Id = comment.Id,
                Body = comment.Body,
                CompanyId = comment.CompanyId,
                UserId = comment.UserId,
                CreateTime = comment.CreateTime,
                DislikesCount = comment.DislikesCount,
                LikesCount = comment.LikesCount,
                Username = comment.User.Username

            };



            return commentModel;
        }
    }
}
