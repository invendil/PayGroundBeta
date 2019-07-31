using BuissnesLayer.ModelView;
using DataLayer.Entityes;
using System;
using System.Collections.Generic;
using System.Text;

namespace BuissnesLayer.Interfaces
{
    public interface IPostService
    {

        void Add(Post post);
        void Update(Post post);
        Post GetById(int id);
        IEnumerable<Post> GetAll(int companyId);
        void Delete(int id);


        
        
        
    }
}
