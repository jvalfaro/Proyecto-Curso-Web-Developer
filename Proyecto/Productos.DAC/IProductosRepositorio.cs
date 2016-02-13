using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Productos.Entities;

namespace Productos.DAC
{
    public interface IProductosRepositorio
    {

        IEnumerable<Producto> GetAll();
        Producto  GetOne(int Id);
        void Crear(Producto Model);
        void CrearReview(Review Model);
        void EliminarReview(Review Model);
        int Count(); 
    }
}
