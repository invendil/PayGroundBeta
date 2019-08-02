﻿using DataLayer.Entityes;
using System;
using System.Collections.Generic;
using System.Text;

namespace BuissnesLayer.Interfaces
{
    public interface ICompanyCategoryService
    {

        IEnumerable<CompanyCategory> getAll();
        int getByName(string name);


    }
}
