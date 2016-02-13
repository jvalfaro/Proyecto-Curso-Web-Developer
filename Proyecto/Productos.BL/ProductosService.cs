using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Productos.DAC;
using Productos.Entities;

namespace Productos.BL
{
    public class ProductosService: IProductosService 
    {

        private DAC.IProductosRepositorio ProductosRepositorio;


        public ProductosService(IProductosRepositorio ProductosRepositorio )
        {
            this.ProductosRepositorio = ProductosRepositorio; 
        }


        public IEnumerable<Producto> GetAll()  
        {
            return this.ProductosRepositorio.GetAll();              
        }


        public void Crear(Entities.Producto Model)
        {
            this.ProductosRepositorio.Crear(Model);
        }

        public Entities.Producto GetOne(int Id)
        {
            return this.ProductosRepositorio.GetOne(Id);
        }

        
        public void CrearReview(Entities.Review Model)
        {

            this.ProductosRepositorio.CrearReview(Model); 
        }

        public void EliminarReview(Entities.Review Model)
        {

            this.ProductosRepositorio.EliminarReview(Model);
        }
    }
    }

