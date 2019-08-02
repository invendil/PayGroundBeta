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

namespace WebApi.Controllers
{

    
    [Route("[controller]")]
    public class CompaniesController : Controller
    {
        private ICompanyCategoryService _companyCategoryService;
        private ICompanyService _companyService;
        private IUserService _userService;
        private IMapper _mapper;
        private readonly AppSettings _appSettings;

        public CompaniesController(
            ICompanyCategoryService companyCategoryService,
            ICompanyService companyService,
            IUserService userService,
            IMapper mapper,
            IOptions<AppSettings> appSettings)
        {
            _companyService = companyService;
            _companyCategoryService = companyCategoryService;
            _userService = userService;
            _mapper = mapper;
            _appSettings = appSettings.Value;
        }



        [Authorize(Roles = "USER")]
        [HttpPost("addcompany")]
        public IActionResult AddCompany([FromBody]CompanyModel companyModel)
        {
            var user = _userService.GetByUsername(companyModel.Username);

            if (user == null)
                return BadRequest("Bad user!");
            // map dto to entity
            
            companyModel.CurrentMoney = 0;
            var company = CompanyMapper.ModelToEntity(companyModel);
            company.User = user;
            try
            {
                // save 
                company = _companyService.Add(company, companyModel);

                AddCompanyResponse response = new AddCompanyResponse()
                {
                    Id = company.Id
                };

                return Ok(response);
            }
            catch (AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }


        [AllowAnonymous]
        [HttpGet("getcategories")]
        public IActionResult GetCategories()
        {

           
            var categories = _companyCategoryService.getAll();
            
            return Ok(categories);
        }


        [AllowAnonymous]
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var company = _companyService.GetById(id);
            
            UserModel userModelCompany = _mapper.Map<UserModel>(company.User);
            
            var companyModel = CompanyMapper.EntityToModel(company);
            companyModel.Images = company.Images.Select(x => x.ImageUrl);
            companyModel.User = userModelCompany;
            return Ok(companyModel);
        }


        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]CompanyModel companyModel)
        {
            // map dto to entity and set id
            var company = CompanyMapper.ModelToEntity(companyModel);
            

            try
            {
                // save 
                _companyService.Update(company, companyModel);
                return Ok(new{ id = company.Id});
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
            _companyService.Delete(id);
            return Ok();
        }

        
    }
}