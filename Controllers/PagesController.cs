using Microsoft.AspNetCore.Mvc;

namespace FootballSchoolMVC.Controllers
{
    public class PagesController : Controller
    {
        [Route("")]
        [Route("index.html")]
        [HttpGet]
        public IActionResult Index()
        {
            return View("~/Views/Pages/index.cshtml");
        }

        [Route("")]
        [Route("index.html")]
        [HttpPost]
        public IActionResult Login(string Mobile)
        {
            // Simulate login logic
            return Redirect("/dashboard");
        }

        [Route("{page}.html")]
        [Route("{page}")]
        [HttpGet]
        [HttpPost]
        public IActionResult RenderPage(string page)
        {
            if (page.Contains("/") || page.Contains("\\") || page.Contains("."))
            {
                return NotFound();
            }

            if (Request.Method == "POST")
            {
                // Simulate form submission and redirect
                return Redirect("/dashboard");
            }

            var viewPath = $"~/Views/Pages/{page}.cshtml";
            return View(viewPath);
        }
    }
}
