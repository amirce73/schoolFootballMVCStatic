using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using FootballSchool.Web.Data;
using FootballSchool.Web.Models;
using FootballSchool.Web.Models.ViewModels;
using System.Threading.Tasks;

namespace FootballSchoolMVC.Controllers
{
    public class PagesController : Controller
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ApplicationDbContext _db;

        public PagesController(
            SignInManager<ApplicationUser> signInManager,
            UserManager<ApplicationUser> userManager,
            ApplicationDbContext db)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _db = db;
        }

        // ─── Index / Login ─────────────────────────────────────────────────────

        [Route("")]
        [Route("index.html")]
        [Route("login")]
        [Route("login.html")]
        [HttpGet]
        public IActionResult Index()
        {
            if (User.Identity != null && User.Identity.IsAuthenticated)
                return Redirect("/dashboard");

            return View("~/Views/Pages/index.cshtml");
        }

        [Route("")]
        [Route("index.html")]
        [Route("login")]
        [Route("login.html")]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(string Mobile)
        {
            if (string.IsNullOrEmpty(Mobile))
            {
                ModelState.AddModelError("", "شماره موبایل الزامی است");
                return View("~/Views/Pages/index.cshtml");
            }

            var user = await _userManager.FindByNameAsync(Mobile);
            if (user == null)
            {
                user = new ApplicationUser
                {
                    UserName = Mobile,
                    PhoneNumber = Mobile,
                    FirstName = "کاربر",
                    LastName = "جدید"
                };
                await _userManager.CreateAsync(user, "123456");
            }

            await _signInManager.SignInAsync(user, isPersistent: true);
            return Redirect("/dashboard");
        }

        // ─── Logout ────────────────────────────────────────────────────────────

        [HttpPost("account/logout")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return Redirect("/");
        }

        // Simple GET logout kept for backward compatibility
        [Route("logout")]
        [HttpGet]
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public async Task<IActionResult> LogoutGet()
        {
            await _signInManager.SignOutAsync();
            return Redirect("/");
        }

        // ─── Dashboard ─────────────────────────────────────────────────────────

        [Route("dashboard")]
        [Route("dashboard.html")]
        [HttpGet]
        [Microsoft.AspNetCore.Authorization.Authorize]
        public async Task<IActionResult> Dashboard()
        {
            var user = await _db.Users
                .Include(u => u.RegistrationRecords)
                    .ThenInclude(r => r.Term)
                .Include(u => u.FinancialTransactions)
                .FirstOrDefaultAsync(u => u.Id == _userManager.GetUserId(User));

            if (user == null) return Redirect("/");

            if (string.IsNullOrEmpty(user.FirstName))
            {
                var info = await _db.tbl_user_personal_infos.FirstOrDefaultAsync(p => p.ApplicationUserId == user.Id);
                if (info != null && !string.IsNullOrEmpty(info.name))
                {
                    user.FirstName = info.name;
                    user.LastName = info.family;
                    if (string.IsNullOrEmpty(user.NationalId)) user.NationalId = info.international_id;
                }
            }

            var model = new DashboardViewModel
            {
                User = user,
                IsVerified = !string.IsNullOrEmpty(user.NationalId),
                UnreadNotificationsCount = 0,
                RecentTransactions = new System.Collections.Generic.List<FinancialTransaction>(
                    user.FinancialTransactions
                )
            };

            ViewBag.User = user;
            return View("~/Views/Pages/dashboard.cshtml", model);
        }

        // ─── Specialized Hub ───────────────────────────────────────────────────

        [Route("specialized-hub")]
        [Route("specialized-hub.html")]
        [HttpGet]
        [Microsoft.AspNetCore.Authorization.Authorize]
        public async Task<IActionResult> SpecializedHub()
        {
            var user = await _userManager.GetUserAsync(User);
            ViewBag.User = user;
            return View("~/Views/Pages/specialized-hub.cshtml");
        }

        // ─── Generic Dynamic Protected Pages ───────────────────────────────────

        [Route("{page}")]
        [Route("{page}.html")]
        [HttpGet]
        [Microsoft.AspNetCore.Authorization.Authorize]
        public async Task<IActionResult> RenderPage(string page)
        {
            if (string.IsNullOrWhiteSpace(page)) return NotFound();
            var lower = page.ToLower();
            if (lower.Contains("/") || lower.Contains("\\") || lower.Contains(".")) return NotFound();

            if (lower == "certificates") lower = "certificate";
            if (lower == "bmi-history") return Redirect("/personal-info");

            var user = await _userManager.GetUserAsync(User);
            if (user != null && string.IsNullOrEmpty(user.FirstName))
            {
                var info = await _db.tbl_user_personal_infos.FirstOrDefaultAsync(p => p.ApplicationUserId == user.Id);
                if (info != null && !string.IsNullOrEmpty(info.name))
                {
                    user.FirstName = info.name;
                    user.LastName = info.family;
                }
            }
            ViewBag.User = user;

            var viewPath = $"~/Views/Pages/{lower}.cshtml";
            return View(viewPath);
        }
    }
}
