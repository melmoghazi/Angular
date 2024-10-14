using DemoProductAPI.Models;

namespace DemoProductAPI.Repositories
{
    public class ProductRepository : IProductRepository
    {
        public IEnumerable<Product> GetProductList()
        {
            return new List<Product>
            {
                new Product { Id = 1, Name="Product 1", Description="Product 1 description", Price=12},
                new Product { Id = 2, Name="Product 2", Description="Product 2 description", Price=120},
                new Product { Id = 3, Name="Product 3", Description="Product 3 description", Price=58},
                new Product { Id = 4, Name="Product 4", Description="Product 4 description", Price=14},
                new Product { Id = 5, Name="Product 5", Description="Product 5 description", Price=66}
            };
        }
        //public IEnumerable<Product> GetProductListWithCategory()
        //{
        //    return new List<Product>
        //    {
        //        new Product { Id = 1, Name="Product 1", Description="Product 1 description", Price=12,
        //            Category=GetCategoryList().First(c=>c.Id==1)},
        //        new Product { Id = 2, Name="Product 2", Description="Product 2 description", Price=120,
        //            Category=GetCategoryList().First(c=>c.Id==2)},
        //        new Product { Id = 3, Name="Product 3", Description="Product 3 description", Price=58,
        //            Category=GetCategoryList().First(c=>c.Id==2)},
        //        new Product { Id = 4, Name="Product 4", Description="Product 4 description", Price=14,
        //            Category=GetCategoryList().First(c=>c.Id==3)},
        //        new Product { Id = 5, Name="Product 5", Description="Product 5 description", Price=66,
        //            Category=GetCategoryList().First(c=>c.Id==4)}
        //    };
        //}
        public IEnumerable<Category> GetCategoryList()
        {
            return new List<Category>
            {
                new Category { Id = 1, Name = "TV" },
                new Category { Id = 2, Name = "Mobile" },
                new Category { Id = 3, Name = "iPhone" },
                new Category { Id = 4, Name = "Tablet" },
                new Category { Id = 5, Name = "Watch" }
            };
        }
    }
}
