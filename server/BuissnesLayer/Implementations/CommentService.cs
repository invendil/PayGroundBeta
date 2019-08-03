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



    public class CommentService : ICommentService
    {
        private EFDBContext _context;

        public CommentService(EFDBContext context)
        {
            _context = context;
        }

        public Comment AddComment(CommentModel commentModel)
        {
            Comment comment = CommentMapper.ModelToEntity(commentModel);
            var user = _context.Users.FirstOrDefault(x => x.Username == commentModel.Username); ;
            if (user == null)
            {
                throw new AppException("User doesn't exist");
            }
            comment.UserId = user.Id;
            _context.Comments.Add(comment);
            _context.SaveChanges();
            return comment;
        }

       
        public Like ChangeCommentState(LikeModel likeModel)
        {
            Comment comment = _context.Comments.FirstOrDefault(x => x.Id == likeModel.CommentId);
            var like = _context.Likes.FirstOrDefault(x => x.UserId == likeModel.UserId && x.CommentId == likeModel.CommentId);
            if (like == null)
            {
                Like likeForAdd = LikeMapper.ModelToEntity(likeModel);
                _context.Likes.Add(likeForAdd);
                _context.SaveChanges();
                if (likeForAdd.State == 1)
                {
                    comment.LikesCount++;
                } else if ( likeForAdd.State == -1 )
                {
                    comment.DislikesCount++;
                }
                _context.Comments.Update(comment);
                _context.SaveChanges();
                return likeForAdd;
            }
            else
            {
                like.State = likeModel.State;
                _context.Likes.Update(like);
                _context.SaveChanges();
                if (like.State == 1)
                {
                    comment.LikesCount++;
                    comment.DislikesCount--;
                }
                else if (like.State == -1)
                {
                    comment.LikesCount--;
                    comment.DislikesCount++;
                }
                _context.Comments.Update(comment);
                _context.SaveChanges();
                return like;
            }


        }

        public List<CommentModel> GetAllByCompanyId(int companyId)
        {
            var comments = _context.Comments
                .Include(x => x.User)
                .Where(x => x.CompanyId == companyId);
            List<CommentModel> commentModels = new List<CommentModel>();
            foreach(Comment comment in comments)
            {
                CommentModel commentModel = CommentMapper.EntityToModel(comment);
                commentModel.State = 0;
                commentModels.Add(commentModel);
            }
            return commentModels;
        }
        public List<CommentModel> GetAllByCompanyId(int companyId, int userId)
        {
            var likesByUsername = _context.Likes.Where(x => x.UserId == userId);
            var comments = _context.Comments
                .Include(x => x.User)
                .Where(x => x.CompanyId == companyId);
            
            List<CommentModel> commentModels = new List<CommentModel>();
            foreach (Comment comment in comments)
            {
                CommentModel commentModel = CommentMapper.EntityToModel(comment);
                Like userLike = likesByUsername.FirstOrDefault(x => x.UserId == userId && x.CommentId == comment.Id);
                if (userLike != null)
                {
                    commentModel.State = userLike.State;
                }
                else
                {
                    commentModel.State = 0;
                }
                commentModels.Add(commentModel);
            }
            return commentModels;
        }
    }
}