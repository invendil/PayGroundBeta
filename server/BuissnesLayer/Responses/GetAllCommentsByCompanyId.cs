using System;
using System.Collections.Generic;
using System.Text;

namespace BuissnesLayer.Responses

{
    public class GetAllCommentsByCompanyId
    {
        public int CompanyId { get; set; }
        public int UserId { get; set; }
    }
}
