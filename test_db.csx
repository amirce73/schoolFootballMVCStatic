using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using FootballSchool.Web.Data;

var options = new DbContextOptionsBuilder<ApplicationDbContext>().UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=FootballSchoolDB;Trusted_Connection=True;MultipleActiveResultSets=true").Options;
using var db = new ApplicationDbContext(options);
var user = db.Users.FirstOrDefault();
Console.WriteLine("BirthDate: " + user.BirthDate);
