using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Productos.Entities;

namespace Productos.DAC
{
   public class MockProductosRepository:IProductosRepositorio
    {
       public IEnumerable<Producto> GetAll()
        {
            throw new NotImplementedException();
        }

        public Entities.Producto GetOne(int Id)
        {
            throw new NotImplementedException();
        }

        public void Crear(Entities.Producto Model)
        {
            throw new NotImplementedException();
        }

        public void CrearReview(Entities.Review Model)
        {
            throw new NotImplementedException();
        }

        public void EliminarReview(Entities.Review Model)
        {
            throw new NotImplementedException();
        }

        public int Count()
        {
            throw new NotImplementedException();
        }
    }
}
