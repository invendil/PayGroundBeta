using BuissnesLayer.ModelView;
using DataLayer.Entityes;
using System;
using System.Collections.Generic;
using System.Text;

namespace BuissnesLayer.Helpers.Mappers
{
    public class RewardMapper
    {

        public static Reward ModelToEntity(RewardModel rewardModel)
        {
            Reward reward = new Reward()
            {
                Id = rewardModel.Id,
                Name = rewardModel.Name,
                CompanyId = rewardModel.CompanyId,

                Description = rewardModel.Description,
                Amount = rewardModel.Amount

            };

           

            return reward;
        }
        public static RewardModel EntityToModel(Reward reward)
        {
            RewardModel rewardModel = new RewardModel()
            {

                Id = reward.Id,
                Name = reward.Name,
                CompanyId = reward.CompanyId,

                Description = reward.Description,
                Amount = reward.Amount

            };



            return rewardModel;
        }
    }
}
