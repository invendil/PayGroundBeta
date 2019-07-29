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

namespace WebApi.Controllers
{

    [Authorize]
    [Route("[controller]")]
    public class CompaniesController : Controller
    {
        private ICompanyCategoryService _companyCategoryService;
        private ICompanyService _companyService;
        private IMapper _mapper;
        private readonly AppSettings _appSettings;

        public CompaniesController(
            ICompanyCategoryService companyCategoryService,
            ICompanyService companyService,
            IMapper mapper,
            IOptions<AppSettings> appSettings)
        {
            _companyService = companyService;
            _companyCategoryService = companyCategoryService;
            _mapper = mapper;
            _appSettings = appSettings.Value;
        }



        [AllowAnonymous]
        [HttpPost("addcompany")]
        public IActionResult AddCompany([FromBody]CompanyModel companyModel)
        {

            // map dto to entity
            var company = CompanyMapper.modelToEntity(companyModel);

            try
            {
                // save 
                _companyService.Add(company, companyModel);
                return Ok();
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



        //[HttpGet("{id}")]
        //public IActionResult GetById(int id)
        //{
        //    var company = _companyService.GetById(id);
        //    var companyModel = _mapper.Map<CompanyModel>(company);
        //    return Ok(companyModel);
        //}


    }
}