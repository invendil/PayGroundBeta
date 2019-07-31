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
using BuissnesLayer.Requests;

namespace WebApi.Controllers
{
    [Authorize]
    [Route("[controller]")]
    public class PostController : Controller
    {

        private ICompanyService _companyService;
        private IPostService _postService;
        private readonly AppSettings _appSettings;

        public PostController(

            ICompanyService companyService,
             IPostService postService,

            IOptions<AppSettings> appSettings)
        {
            _companyService = companyService;
            _postService = postService;

            _appSettings = appSettings.Value;
        }



        [AllowAnonymous]
        [HttpPost("addcompany")]
        public IActionResult AddPost([FromBody]PostModel postModel)
        {

            // map dto to entity
            var post = PostMapper.ModelToEntity(postModel);

            try
            {
                // save 
                _postService.Add(post);



                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }


        [AllowAnonymous]
        [HttpGet("getallbycompany/{id}")]
        public IActionResult GetAll(int id)
        {


            var posts = _postService.GetAll(id);

            return Ok(posts);
        }



        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                var post = _postService.GetById(id);
                var postModel = PostMapper.EntityToModel(post);
                return Ok(postModel);
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }


        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]PostModel postModel)
        {
            // map dto to entity and set id
            var post = PostMapper.ModelToEntity(postModel);
            post.Id = id;

            try
            {
                // save 
                _postService.Update(post);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _postService.Delete(id);
            return Ok();
        }
    }

}