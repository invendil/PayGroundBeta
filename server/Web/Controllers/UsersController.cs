using System;
using System.Collections.Generic;
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

namespace WebApi.Controllers
{
    [Authorize]
    [Route("[controller]")]
    public class UsersController : Controller
    {
       
        private IUserService _userService;
        private ICompanyService _companyService;
        private IMapper _mapper;
        private readonly AppSettings _appSettings;

        public UsersController(
            IUserService userService,
            ICompanyService companyService,
            IMapper mapper,
            IOptions<AppSettings> appSettings)
        {
            _userService = userService;
            _mapper = mapper;
            _companyService = companyService;
            _appSettings = appSettings.Value;
        }



        [AllowAnonymous]
        [HttpPost("addcompany")]
        public IActionResult AddCompany([FromBody]CompanyModel companyModel)
        {

            Console.WriteLine("test ", companyModel);
            // map dto to entity
            var company = _mapper.Map<Company>(companyModel);

            try
            {
                // save 
                _companyService.Add(company);
                return Ok();
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }


        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody]UserModel userModel)
        {
            var user = _userService.Authenticate(userModel.Username, userModel.Password);

            if (user == null)
                return BadRequest("Username or password is incorrect");

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[] 
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            // return basic user info (without password) and token to store client side
            return Ok(new {
                Id = user.Id,
                Username = user.Username,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Token = tokenString
            });
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public IActionResult Register([FromBody]UserModel userModel)
        {
            // map dto to entity
            var user = _mapper.Map<User>(userModel);

            try 
            {
                // save 
                _userService.Create(user, userModel.Password);
                return Ok();
            } 
            catch(AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var users =  _userService.GetAll();
            var userModels = _mapper.Map<IList<UserModel>>(users);
            return Ok(userModels);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var user =  _userService.GetById(id);
            var userModel = _mapper.Map<UserModel>(user);
            return Ok(userModel);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]UserModel userModel)
        {
            // map dto to entity and set id
            var user = _mapper.Map<User>(userModel);
            user.Id = id;

            try 
            {
                // save 
                _userService.Update(user, userModel.Password);
                return Ok();
            } 
            catch(AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _userService.Delete(id);
            return Ok();
        }
    }
}
