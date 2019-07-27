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
    public class CompanyController : Controller
    {
       
        private ICompanyService _companyService;
        private IMapper _mapper;
        private readonly AppSettings _appSettings;

        public CompanyController(
            ICompanyService companyService,
            IMapper mapper,
            IOptions<AppSettings> appSettings)
        {
            _companyService = companyService;
            _mapper = mapper;
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
            catch(AppException ex)
            {
                // return error message if there was an exception
                return BadRequest(ex.Message);
            }
        }

        

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var company =  _companyService.GetById(id);
            var companyModel = _mapper.Map<CompanyModel>(company);
            return Ok(companyModel);
        }

        
    }
}
