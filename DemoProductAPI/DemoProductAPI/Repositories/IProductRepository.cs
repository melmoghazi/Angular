using DemoProductAPI.Models;

namespace DemoProductAPI.Repositories
{
    public interface IProductRepository
    {
        IEnumerable<Product> GetProductList();
        IEnumerable<Category> GetCategoryList();
    }
}
