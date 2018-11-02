using Microsoft.AspNetCore.Mvc;

namespace sedp.signalr
{ 
    [ApiVersion("1.0")]
    [Route("")]
    public class HomeController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return Json(new { Name = "FooBar"});
        }
    }
}