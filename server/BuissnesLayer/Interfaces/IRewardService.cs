using BuissnesLayer.ModelView;
using DataLayer.Entityes;
using System;
using System.Collections.Generic;
using System.Text;

namespace BuissnesLayer.Interfaces
{
    public interface IRewardService
    {

        Reward GetById(int id);
        Reward Update(Reward reward);
        IEnumerable<Reward> GetAllByCompanyId(int companyId);
        void Delete(int id);
        Reward Add(Reward reward);

    }
}
