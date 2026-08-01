using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FootballSchool.Web.Data;
using FootballSchool.Web.Models;
using FootballSchool.Web.Models.ViewModels;
using System.Linq;
using System.Threading.Tasks;

namespace FootballSchoolMVC.Controllers
{
    [Authorize]
    public class FinancialController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ApplicationDbContext _db;

        public FinancialController(UserManager<ApplicationUser> userManager, ApplicationDbContext db)
        {
            _userManager = userManager;
            _db = db;
        }

        // ─── Financial Hub ─────────────────────────────────────────────────────

        [HttpGet("financial-hub")]
        [HttpGet("financial-hub.html")]
        public async Task<IActionResult> Hub()
        {
            var userId = _userManager.GetUserId(User);
            if (userId == null) return Redirect("/");

            var transactions = await _db.FinancialTransactions
                .Where(t => t.UserId == userId)
                .OrderByDescending(t => t.TransactionDate)
                .ToListAsync();

            var totalPaid = transactions.Where(t => t.IsCredit && t.IsSuccessful).Sum(t => t.Amount);
            var totalDebt = transactions.Where(t => !t.IsCredit).Sum(t => t.Amount);

            var vm = new FinancialViewModel
            {
                TotalDebt = (totalDebt - totalPaid) < 0 ? 0 : (totalDebt - totalPaid),
                Transactions = transactions.Take(10).ToList()
            };

            return View("~/Views/Pages/financial-hub.cshtml", vm);
        }

        // ─── Financial Timeline ────────────────────────────────────────────────

        [HttpGet("financial-timeline")]
        [HttpGet("financial-timeline.html")]
        public async Task<IActionResult> Timeline()
        {
            var userId = _userManager.GetUserId(User);
            if (userId == null) return Redirect("/");

            var transactions = await _db.FinancialTransactions
                .Where(t => t.UserId == userId)
                .OrderByDescending(t => t.TransactionDate)
                .ToListAsync();

            var totalPaid = transactions.Where(t => t.IsCredit && t.IsSuccessful).Sum(t => t.Amount);
            var totalDebt = transactions.Where(t => !t.IsCredit).Sum(t => t.Amount);

            var vm = new FinancialViewModel
            {
                TotalDebt = (totalDebt - totalPaid) < 0 ? 0 : (totalDebt - totalPaid),
                Transactions = transactions
            };

            return View("~/Views/Pages/financial-timeline.cshtml", vm);
        }
    }
}
