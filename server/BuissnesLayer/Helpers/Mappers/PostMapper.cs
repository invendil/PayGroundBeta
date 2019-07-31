﻿using BuissnesLayer.ModelView;
using DataLayer.Entityes;
using System;
using System.Collections.Generic;
using System.Text;

namespace BuissnesLayer.Helpers.Mappers
{
    public class PostMapper
    {

        public static Post ModelToEntity(PostModel postModel)
        {
            Post post = new Post()
            {
                Title = postModel.Title,
                CompanyId = postModel.CompanyId,
         
                BodyHtml = postModel.BodyHtml,
                CreateTime = postModel.CreateTime != DateTime.MinValue ? postModel.CreateTime : DateTime.Now

            };

           

            return post;
        }
        public static PostModel EntityToModel(Post post)
        {
            PostModel postModel = new PostModel()
            {
                Title = post.Title,
                CompanyId = post.CompanyId,

                BodyHtml = post.BodyHtml,
                CreateTime = post.CreateTime 

            };



            return postModel;
        }
    }
}
