using AutoMapper;
using BuissnesLayer.ModelView;
using DataLayer.Entityes;

namespace BuissnesLayer.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserModel>();
            CreateMap<UserModel, User>();
        }
    }
}