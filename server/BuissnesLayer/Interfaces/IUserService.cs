﻿using DataLayer.Entityes;
using System;
using System.Collections.Generic;
using System.Text;

namespace BuissnesLayer.Interfaces
{
    public interface IUserService
    {
        User Authenticate(string username, string password);
        IEnumerable<User> GetAll();
        User GetById(int id);
        User GetByUsername(string username);
        User Create(User user, string password);
        void Update(User user, string password = null);
        string GetRoleNameById(int id);
        void Delete(int id);
    }
}
