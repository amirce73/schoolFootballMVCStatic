using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FootballSchool.Web.Data;
using FootballSchool.Web.Models;
using FootballSchool.Web.Models.ViewModels;
using System.Linq;
using System.Threading.Tasks;
using System;

namespace FootballSchoolMVC.Controllers
{
    [Authorize]
    public class RegistrationController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ApplicationDbContext _db;

        public RegistrationController(UserManager<ApplicationUser> userManager, ApplicationDbContext db)
        {
            _userManager = userManager;
            _db = db;
        }

        // ─── Registration Page ─────────────────────────────────────────────────

        [HttpGet("registration")]
        [HttpGet("registration.html")]
        public async Task<IActionResult> Index()
        {
            var userId = _userManager.GetUserId(User);
            if (userId == null) return Redirect("/");

            var terms = await _db.Terms
                .Where(t => t.IsActive)
                .Select(t => new Microsoft.AspNetCore.Mvc.Rendering.SelectListItem
                {
                    Value = t.Id.ToString(),
                    Text = t.Title
                })
                .ToListAsync();

            var ageCategories = await _db.AgeCategories
                .Select(a => new Microsoft.AspNetCore.Mvc.Rendering.SelectListItem
                {
                    Value = a.Id.ToString(),
                    Text = a.Title
                })
                .ToListAsync();

            // Calculate financial summary
            var transactions = await _db.FinancialTransactions
                .Where(t => t.UserId == userId)
                .ToListAsync();

            var totalPaid = transactions.Where(t => t.IsCredit && t.IsSuccessful).Sum(t => t.Amount);
            var totalDebt  = transactions.Where(t => !t.IsCredit).Sum(t => t.Amount);
            var currentDebt = totalDebt - totalPaid;

            var vm = new RegistrationViewModel
            {
                Terms = terms,
                AgeCategories = ageCategories,
                TotalPaid = totalPaid,
                CurrentDebt = currentDebt < 0 ? 0 : currentDebt
            };

            return View("~/Views/Pages/registration.cshtml", vm);
        }

        [HttpPost("registration")]
        [HttpPost("registration.html")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(RegistrationViewModel vm)
        {
            var userId = _userManager.GetUserId(User);
            if (userId == null) return Redirect("/");

            // Refill dropdowns
            vm.Terms = await _db.Terms
                .Where(t => t.IsActive)
                .Select(t => new Microsoft.AspNetCore.Mvc.Rendering.SelectListItem
                {
                    Value = t.Id.ToString(),
                    Text = t.Title
                })
                .ToListAsync();

            vm.AgeCategories = await _db.AgeCategories
                .Select(a => new Microsoft.AspNetCore.Mvc.Rendering.SelectListItem
                {
                    Value = a.Id.ToString(),
                    Text = a.Title
                })
                .ToListAsync();

            if (!ModelState.IsValid)
                return View("~/Views/Pages/registration.cshtml", vm);

            // Check for duplicate registration
            var alreadyRegistered = await _db.RegistrationRecords
                .AnyAsync(r => r.UserId == userId && r.TermId == vm.TermId);

            if (alreadyRegistered)
            {
                ModelState.AddModelError(string.Empty, "شما قبلاً در این دوره ثبت‌نام کرده‌اید.");
                return View("~/Views/Pages/registration.cshtml", vm);
            }

            var record = new RegistrationRecord
            {
                UserId = userId,
                TermId = vm.TermId,
                AgeCategoryId = vm.AgeCategoryId,
                RegistrationDate = DateTime.Now,
                IsApproved = false
            };

            _db.RegistrationRecords.Add(record);
            await _db.SaveChangesAsync();

            TempData["Success"] = "ثبت‌نام شما با موفقیت انجام شد و منتظر تأیید است.";
            return Redirect("/registration-history");
        }

        // ─── Registration History ──────────────────────────────────────────────

        [HttpGet("registration-history")]
        [HttpGet("registration-history.html")]
        public async Task<IActionResult> History()
        {
            var userId = _userManager.GetUserId(User);
            if (userId == null) return Redirect("/");

            var records = await _db.RegistrationRecords
                .Include(r => r.Term)
                .Include(r => r.AgeCategory)
                .Where(r => r.UserId == userId)
                .OrderByDescending(r => r.RegistrationDate)
                .ToListAsync();

            return View("~/Views/Pages/registration-history.cshtml", records);
        }
    }
}
