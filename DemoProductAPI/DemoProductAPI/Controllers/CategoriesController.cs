using DemoProductAPI.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DemoProductAPI.Controllers
{
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly IProductRepository _productRepository;
        public CategoriesController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }
        [HttpGet]
        [Route("categories/list")]
        public IActionResult GetCategoriesList()
        {
            return Ok(_productRepository.GetCategoryList());
        }
    }
}
