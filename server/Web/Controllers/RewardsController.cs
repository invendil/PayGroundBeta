using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BuissnesLayer.Helpers;
using BuissnesLayer.Helpers.Mappers;
using BuissnesLayer.Interfaces;
using BuissnesLayer.ModelView;
using DataLayer.Entityes;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;




namespace WebApi.Controllers
{
    [Route("[controller]")]
    public class RewardsController : Controller
    {
       
        private ICompanyService _companyService;
        private IRewardService _rewardService;
        private IUserService _userService;
        

        public RewardsController(
            
            ICompanyService companyService,
            IUserService userService,
            IRewardService rewardService
            )
        {
            _companyService = companyService;
            _rewardService = rewardService;
            _userService = userService;
           
        }



        [AllowAnonymous]
        [HttpPost("addreward")]
        public IActionResult AddReward([FromBody]RewardModel rewardModel)
        {
            Reward reward = RewardMapper.ModelToEntity(rewardModel);
            try
            {
                // save 
                reward =  _rewardService.Add(reward);

                

                return Ok(reward);
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }


        [AllowAnonymous]
        [HttpGet("all/{id}")]
        public IActionResult GetAllByCompanyId(int id)
        {


            var rewards = _rewardService.GetAllByCompanyId(id);

            return Ok(rewards);
        }


        [AllowAnonymous]
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            Reward reward = _rewardService.GetById(id);
            return Ok(reward);
        }


        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]RewardModel rewardModel)
        {
            // map dto to entity and set id
            var reward = RewardMapper.ModelToEntity(rewardModel);


            try
            {
                // save 
                _rewardService.Update(reward);
                return Ok(reward);
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int delId)
        {
            _rewardService.Delete(delId);
            return Ok(new { deletedId = delId });
        }


    }
}