using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NSubstitute;
using NUnit.Framework;
using Productos.DAC;
using Productos.Entities;

namespace Productos.BL.Testing
{
    [TestFixture]
    public class ProductosServiceTest
    {

        [Test]
        public void CrearDetalleTest()
        {
            var model = new Review();
            model.Id = 0;
            model.Productos = new Producto() { Id = 0, Title = "Test", Description = "test" ,Marca="test"};
            model.Sku = 5;
            model.Comment = "Producto de prueba";

            var repository = Substitute.For<IProductosRepositorio>();

            var service = new ProductosService(repository);

            service.CrearReview(model);

            //Assert
            repository.Received().CrearReview(model);

        }


        [Test]
        public void CrearProductoTest()
        {
            var model = new Producto();
            model.Id = 0;
            model.Title ="Test";
            model.Description ="Test";
            model.Marca = "Test";

            var repository = Substitute.For<IProductosRepositorio>();

            var service = new ProductosService(repository);

            service.Crear(model);

            //Assert
            repository.Received().Crear(model);

        }
    }
}
