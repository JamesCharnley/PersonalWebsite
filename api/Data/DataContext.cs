using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Entities;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class DataContext : DbContext // API.Entities
    {
        public DataContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<Project> Projects { get; set; }
    }
}