using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;



using AutoMapper;
using System.IdentityModel.Tokens.Jwt;

using Microsoft.Extensions.Options;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;

using Microsoft.AspNetCore.Authorization;
using BuissnesLayer.Helpers;
using BuissnesLayer.ModelView;
using BuissnesLayer.Interfaces;
using DataLayer.Entityes;
using BuissnesLayer.Helpers.Mappers;
using BuissnesLayer.Responses;
using Microsoft.AspNetCore.SignalR;
using WebApi.Hubs;

namespace WebApi.Controllers
{

    [Route("[controller]")]
    public class CommentsController : Controller
    {
        private ICommentService _commentService;
        private readonly IHubContext<CommentsHub> _hubContext;
        private ICompanyService _companyService;
        private IUserService _userService;
        
        private readonly AppSettings _appSettings;

        public CommentsController(
            
            ICompanyService companyService,
            IUserService userService,
            IHubContext<CommentsHub> hubContext,
             ICommentService commentService,
            IOptions<AppSettings> appSettings)
        {
            _companyService = companyService;
            
            _userService = userService;
            _hubContext = hubContext;
            _commentService = commentService;
            _appSettings = appSettings.Value;
        }



        [Authorize]
        [HttpPost("addcomment")]
        public IActionResult AddComment([FromBody]CommentModel commentModel)
        {
            var comment = _commentService.AddComment(commentModel);

            if (comment == null)
                return BadRequest("Add comment error");

            _hubContext.Clients.All.SendAsync("commentAdded/" + comment.CompanyId, "refresh");
            // map dto to entity
            
            return Ok(new { id = comment.Id });
        }


        [AllowAnonymous]
        [HttpPost("getall")]
        public IActionResult GetAllCommentsByCompanyId([FromBody] GetAllCommentsByCompanyId response)
        {
            List<CommentModel> commentModels;
            if (response.UserId == 0)
            {
                commentModels = _commentService.GetAllByCompanyId(response.CompanyId);
            }
            else
            {
                commentModels = _commentService.GetAllByCompanyId(response.CompanyId, response.UserId );
            }
            return Ok(commentModels);
        }


        [AllowAnonymous]
        [HttpPut("changestate")]
        public IActionResult ChangeCommentState([FromBody] LikeModel likeModel)
        {
            var like = _commentService.ChangeCommentState(likeModel);
            if (like == null)
            {
                return BadRequest("ChangeCommentState error");
            }
            return Ok(new { id = like.CommentId});
        }






    }
}