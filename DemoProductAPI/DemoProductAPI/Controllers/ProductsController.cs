using DemoProductAPI.Models;
using DemoProductAPI.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DemoProductAPI.Controllers
{
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IBaseRepository<Product> _productRepository;
        public ProductsController(IBaseRepository<Product> productRepository)
        {
            _productRepository = productRepository;
        }
        [HttpGet]
        [Route("products/list")]
        public async Task<IActionResult> GetProductList()
        {
            var list= await _productRepository.GetAllAsync();
            return Ok(list);
        }


        [HttpGet]
        [Route("products/{id}")]
        public async Task<IActionResult> GetProductById(int id)
        {
            var product = await _productRepository.GetByIdAsync(id);
            return Ok(product);
        }
        [HttpPost]
        [Route("products/addproduct")]
        public async Task<IActionResult> Post(ProductDto prod)
        {

            var result = await _productRepository.Add(new Product
            {
                Name = prod.Name
                ,
                Description = prod.Description,
                Price = prod.Price
            });
            if (result.Id == 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");
            }
            return Ok("Added Successfully");
        }
        [HttpPut]
        [Route("products/updateproduct")]
        public async Task<IActionResult> Put(Product prod)
        {
            await _productRepository.Update(prod);
            return Ok("Updated Successfully");
        }

        [HttpDelete]
        [Route("products/deleteproduct/{id}")]
        public JsonResult Delete(int id)
        {
            _productRepository.Delete(id);
            return new JsonResult("Deleted Successfully");
        }
    }
}
