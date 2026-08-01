using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using FootballSchool.Web.Data;
using FootballSchool.Web.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddIdentity<ApplicationUser, IdentityRole>(options => {
    options.SignIn.RequireConfirmedAccount = false;
    options.Password.RequireDigit = false;
    options.Password.RequireLowercase = false;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = false;
    options.Password.RequiredLength = 6;
})
.AddEntityFrameworkStores<ApplicationDbContext>()
.AddDefaultTokenProviders();

builder.Services.ConfigureApplicationCookie(options => {
    options.LoginPath = "/";
});

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseRouting();

var enCulture = new System.Globalization.CultureInfo("en-US");
var faCulture = new System.Globalization.CultureInfo("fa-IR");
app.UseRequestLocalization(new RequestLocalizationOptions
{
    DefaultRequestCulture = new Microsoft.AspNetCore.Localization.RequestCulture(culture: faCulture, uiCulture: faCulture),
    SupportedCultures = new[] { faCulture },
    SupportedUICultures = new[] { faCulture }
});
app.Use(async (context, next) => {
    context.Request.EnableBuffering();
    await next(context);
    if (context.Response.StatusCode == 400) {
        Console.WriteLine("400 Bad Request! Path: " + context.Request.Path);
        context.Request.Body.Position = 0;
        using var reader = new System.IO.StreamReader(context.Request.Body, System.Text.Encoding.UTF8, leaveOpen: true);
        var body = await reader.ReadToEndAsync();
        context.Request.Body.Position = 0;
        Console.WriteLine("REQUEST BODY: " + body);
    }
});

app.UseAuthentication();
app.UseAuthorization();

app.MapStaticAssets();

// Support both attribute routing (for new controllers) and conventional routing
app.MapControllers();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Pages}/{action=Index}/{id?}");

app.Run();









