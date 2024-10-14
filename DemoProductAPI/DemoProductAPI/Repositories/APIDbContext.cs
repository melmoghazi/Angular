using DemoProductAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace DemoProductAPI.Repositories
{
    public class APIDbContext : DbContext
    {
        public APIDbContext(DbContextOptions<APIDbContext> options) : base(options)
        {

        }
        public DbSet<Product> Products { get; set; }
    }
}
