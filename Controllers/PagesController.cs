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
        [HttpGet]
        public IActionResult Index()
        {
            if (User.Identity != null && User.Identity.IsAuthenticated)
                return Redirect("/dashboard");

            return View("~/Views/Pages/index.cshtml");
        }

        [Route("")]
        [Route("index.html")]
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

            var model = new DashboardViewModel
            {
                User = user,
                IsVerified = !string.IsNullOrEmpty(user.NationalId),
                UnreadNotificationsCount = 0,
                RecentTransactions = new System.Collections.Generic.List<FinancialTransaction>(
                    user.FinancialTransactions
                )
            };

            return View("~/Views/Pages/dashboard.cshtml", model);
        }

        // ─── Specialized Hub ───────────────────────────────────────────────────

        [Route("specialized-hub")]
        [Route("specialized-hub.html")]
        [HttpGet]
        [Microsoft.AspNetCore.Authorization.Authorize]
        public IActionResult SpecializedHub()
        {
            return View("~/Views/Pages/specialized-hub.cshtml");
        }
    }
}
