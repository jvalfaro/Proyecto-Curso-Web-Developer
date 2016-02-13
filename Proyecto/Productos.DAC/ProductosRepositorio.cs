using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using Dapper;

namespace Productos.DAC
{
  public  class ProductosRepositorio: IProductosRepositorio
  {       
      private string ConnectionString = null;
      public ProductosRepositorio()
        {
            this.ConnectionString = ConfigurationManager.ConnectionStrings["Productos"].ConnectionString;
        }


      public IEnumerable<Entities.Producto> GetAll()
        {

            IEnumerable<Entities.Producto> result = new List<Entities.Producto>();

            using (var con = new SqlConnection(this.ConnectionString))
            {
                result = con.Query<Entities.Producto>("usp_Productos_get", commandType: System.Data.CommandType.StoredProcedure);
            }

            return result;                 
        }
        public Entities.Producto GetOne(int Id)
        {
            Entities.Producto result = null;

            var context = new ProductosDBContext();
            
            result = (from c in context.Productos.Include("Reviews")
                        where c.Id == Id
                        select c).FirstOrDefault(); 
            
            return result;                 
        }

        public int Count()
        {
            int result = 0; 
            using (var con = new SqlConnection(this.ConnectionString))
            {
                var cmd = con.CreateCommand();
                cmd.CommandText = "usp_Productos_count";
                cmd.CommandType = System.Data.CommandType.StoredProcedure; 
                con.Open();
                result = (int)cmd.ExecuteScalar();                
            }
            return result; 
        }


        public void Crear(Entities.Producto Model)
        {
            var context = new ProductosDBContext();
            context.Productos.Add(Model);
            context.SaveChanges();  
          
        }



        public void CrearReview(Entities.Review Model)
        {
            var context = new ProductosDBContext();
            context.Reviews.Add(Model);
            context.SaveChanges();              
        }

        public void EliminarReview(Entities.Review Model)
        {
            var context = new ProductosDBContext();
            context.Reviews.Remove(Model);
            context.SaveChanges();
        }
    }
}
