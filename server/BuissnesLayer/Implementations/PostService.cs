using BuissnesLayer.Helpers;
using BuissnesLayer.Interfaces;
using DataLayer;
using DataLayer.Entityes;
using System;
using System.Collections.Generic;
using System.Linq;


namespace WebApi.Services
{


    public class PostService : IPostService
    {
        private EFDBContext _context;

        public PostService(EFDBContext context)
        {
            _context = context;
        }

        public void Add(Post post)
        {
            _context.Posts.Add(post);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var post = _context.Posts.Find(id);
            if (post != null)
            {
                _context.Posts.Remove(post);
                _context.SaveChanges();
            }
            
        }

        

        public IEnumerable<Post> GetAll(int companyId)
        {
            return _context.Posts.Where(x=> x.CompanyId == companyId);
        }

        public Post GetById(int id)
        {
            return _context.Posts.Find(id);
        }


        public void Update(Post post)
        {
            try
            {
                _context.Posts.Update(post);
                _context.SaveChanges();
                return;
            }
            catch
            {
                return;
            }

           
        }
    }
}