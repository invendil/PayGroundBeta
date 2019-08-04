using BuissnesLayer.Helpers;
using BuissnesLayer.Interfaces;
using BuissnesLayer.ModelView;
using DataLayer;
using DataLayer.Entityes;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;


namespace WebApi.Services
{


    public class RewardService : IRewardService
    {
        private EFDBContext _context;

        public RewardService(EFDBContext context)
        {
            _context = context;
        }

        
       

        public Reward GetById(int id)
        {
            return _context.Rewards.FirstOrDefault(x => x.Id == id);
        }

        public IEnumerable<Reward> GetAllByCompanyId(int companyId)
        {

            var rewards = _context.Rewards.Where(x => x.CompanyId == companyId);
            return rewards;
        }

        public Reward Update(Reward reward)
        {

            var rewardForUpdate = _context.Rewards.Find(reward.Id);

            if (rewardForUpdate == null)
                throw new AppException("Reward not found");
            rewardForUpdate.Name = reward.Name;
            rewardForUpdate.Description = reward.Description;
            rewardForUpdate.Amount = reward.Amount;


            _context.Rewards.Update(rewardForUpdate);
            _context.SaveChanges();

            return reward;





        }

        public void Delete(int id)
        {
            var reward = _context.Rewards.Find(id);
            if (reward != null)
            {
                _context.Rewards.Remove(reward);
                _context.SaveChanges();
            }
        }


         public Reward Add(Reward reward)
        {


            reward.Users = new List<User>();
            _context.Rewards.Add(reward);
            _context.SaveChanges();

            return reward;
        }
       
       
    }
}