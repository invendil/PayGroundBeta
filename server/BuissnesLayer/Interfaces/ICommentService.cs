using BuissnesLayer.ModelView;
using DataLayer.Entityes;
using System;
using System.Collections.Generic;
using System.Text;

namespace BuissnesLayer.Interfaces
{
    public interface ICommentService
    {


        Comment AddComment(CommentModel commentModel);
        List<CommentModel> GetAllByCompanyId(int companyId);
        List<CommentModel> GetAllByCompanyId(int companyId, int userId);
        Like ChangeCommentState(LikeModel likeModel);


        
        
        
    }
}
