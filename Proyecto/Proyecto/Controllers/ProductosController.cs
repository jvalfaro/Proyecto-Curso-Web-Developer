using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Productos.BL;
using Productos.Entities;

namespace Proyecto.Controllers
{
    [Authorize]
    public class ProductosController : Controller
    {
        // GET: Productos
        private Productos.BL.IProductosService ProductosService;

        public ProductosController(IProductosService ProductosService)
        {
            this.ProductosService = ProductosService;
        }
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult CargarProductos()
        {

            var data = ProductosService.GetAll();
            if( data .Count()> 0 )
            {
                return Json(new {draw = 1,recordsFiltered=data .Count(),recordsTotal=data .Count(),data=data.ToList()}, JsonRequestBehavior.DenyGet);
            }
            else 
            {
                 return Json(new {draw = 0,recordsFiltered=data .Count(),recordsTotal=data .Count(),data=data.ToList()}, JsonRequestBehavior.DenyGet);

            }
            }


        [ValidateAntiForgeryToken]
        [HttpPost]
        public ActionResult Index(Producto Model)
        {
            if (this.ModelState.IsValid)
            {
                this.ProductosService.Crear(Model);
                return this.RedirectToAction("Index");
            }
            else
            {
                return View(Model);
            }
        }
            

        }


    }
