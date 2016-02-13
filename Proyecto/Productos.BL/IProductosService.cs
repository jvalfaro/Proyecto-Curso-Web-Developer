using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Productos.Entities;

namespace Productos.BL
{
    public interface IProductosService
    {
        Producto GetOne(int Id);
        IEnumerable<Producto> GetAll();
        void Crear(Producto Model);
        void CrearReview(Review Model);
        void EliminarReview(Review Model); 
    }
}
