using Microsoft.AspNetCore.Identity;
using System;
using System.ComponentModel.DataAnnotations;

using System.Collections.Generic;

namespace FootballSchool.Web.Models
{
    public class ApplicationUser : IdentityUser
    {
        [StringLength(50)]
        public string? FirstName { get; set; }

        [StringLength(50)]
        public string? LastName { get; set; }

        [StringLength(10)]
        public string? NationalId { get; set; }

        public DateTime? BirthDate { get; set; }

        [StringLength(10)]
        public string? BirthCertificateNo { get; set; }

        [StringLength(50)]
        public string? FatherName { get; set; }

        public int? Weight { get; set; }

        public int? Height { get; set; }

        [StringLength(10)]
        public string? Gender { get; set; }

        [StringLength(10)]
        public string? BloodGroup { get; set; }

        [StringLength(20)]
        public string? MaritalStatus { get; set; }

        [StringLength(50)]
        public string? MilitaryServiceStatus { get; set; }

        [StringLength(50)]
        public string? Religion { get; set; }

        [StringLength(50)]
        public string? Sect { get; set; }

        [StringLength(50)]
        public string? Occupation { get; set; }

        [StringLength(500)]
        public string? HealthStatus { get; set; }

        [StringLength(500)]
        public string? Description { get; set; }

        // Contact Info Fields
        [StringLength(20)]
        public string? Telephone { get; set; }

        [StringLength(20)]
        public string? GuardianMobile { get; set; }

        [StringLength(20)]
        public string? EmergencyPhone { get; set; }

        [StringLength(100)]
        public string? Telegram { get; set; }

        [StringLength(100)]
        public string? Instagram { get; set; }

        [StringLength(100)]
        public string? LinkedIn { get; set; }

        [StringLength(100)]
        public string? Facebook { get; set; }

        [StringLength(100)]
        public string? WhatsApp { get; set; }

        [StringLength(100)]
        public string? Bale { get; set; }

        [StringLength(100)]
        public string? Eitaa { get; set; }

        [StringLength(100)]
        public string? Rubika { get; set; }

        [StringLength(200)]
        public string? Website { get; set; }

        [StringLength(10)]
        public string? PostalCode { get; set; }

        [StringLength(1000)]
        public string? Address { get; set; }

        [StringLength(1000)]
        public string? ParentsWorkAddress { get; set; }

        public ICollection<BankAccount> BankAccounts { get; set; } = new List<BankAccount>();

        // Passport Info Fields
        [StringLength(20)]
        public string? PassportNumber { get; set; }

        [StringLength(20)]
        public string? PassportIssueDate { get; set; }

        [StringLength(20)]
        public string? PassportExpiryDate { get; set; }

        [StringLength(50)]
        public string? EnglishName { get; set; }

        [StringLength(50)]
        public string? EnglishSurname { get; set; }

        [StringLength(500)]
        public string? PassportDescription { get; set; }

        [StringLength(500)]
        public string? PassportPhotoPath { get; set; }

        // Clothing Info
        public string? ShirtSize { get; set; }
        public string? ShortsSize { get; set; }
        public string? SocksSize { get; set; }
        public string? ShoesSize { get; set; }

        public ICollection<RegistrationRecord> RegistrationRecords { get; set; }
        public ICollection<FinancialTransaction> FinancialTransactions { get; set; }
    }
}
