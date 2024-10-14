
using Microsoft.EntityFrameworkCore;

namespace DemoProductAPI.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        private readonly APIDbContext _aPIDbContext;

        public BaseRepository(APIDbContext aPIDbContext)
        {
            _aPIDbContext = aPIDbContext;
        }
        //public async Task<IEnumerable<T>> GetAllAsync() => await _dbContext.Set<T>().ToListAsync();
        public async Task<IEnumerable<T>> GetAllAsync()
        {
            try
            {
                var a = await _aPIDbContext.Set<T>().ToListAsync();
                return a;
            }
            catch (Exception ex)
            {

                throw;
            }
        }
        public async Task<T> GetByIdAsync(int id)
        {
            try
            {
            return await _aPIDbContext.Set<T>().FindAsync(id);
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        public async Task<T> Add(T entity)
        {
            try
            {
                await _aPIDbContext.Set<T>().AddAsync(entity);
                await _aPIDbContext.SaveChangesAsync();
                return entity;
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        public async Task<T> Update(T entity)
        {
            try
            {
                _aPIDbContext.Set<T>().Update(entity);
                await _aPIDbContext.SaveChangesAsync();
                return entity;
            }
            catch (Exception)
            {
                throw;
            }

        }
        public void Delete(int id)
        {
            try
            {
                var entity =  _aPIDbContext.Set<T>().Find(id);
                if (entity != null)
                {
                    _aPIDbContext.Set<T>().Remove(entity);
                    _aPIDbContext.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}