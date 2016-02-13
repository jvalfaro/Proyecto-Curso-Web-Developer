using Productos.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;


namespace Productos.DAC
{
     public class ProductosDBContext : DbContext
    {

        public DbSet<Entities.Producto> Productos { get; set; }
        public DbSet<Entities.Review> Reviews { get; set; }
        public ProductosDBContext(): base("Productos")
        {
            
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Review>().ToTable("Reviews").HasKey(c => c.Id);
            modelBuilder.Entity<Producto>().ToTable("Productos").HasKey(c => c.Id).HasMany(c=>c.Reviews).WithOptional(c=>c.Productos).HasForeignKey(c=>c.IDProducto);            
        }
    }
}
