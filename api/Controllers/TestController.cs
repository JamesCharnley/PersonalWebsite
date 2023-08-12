using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    public class TestController : BaseApiController
    {
        public TestController()
        {
            
        }
        [HttpGet]
        public ActionResult<string> GetTest()
        {
            return Ok("Hello");
        }
    }
}