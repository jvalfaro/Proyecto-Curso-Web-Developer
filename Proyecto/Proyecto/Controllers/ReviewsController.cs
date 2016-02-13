using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Productos.BL;
using Productos.Entities;
using Proyecto.Models;

namespace Proyecto.Controllers
{
    [Authorize]
    public class ReviewsController : Controller
    {
        // GET: Reviews

       private Productos.BL.IProductosService ProductosService;

       public ReviewsController(IProductosService ProductosService)
        {
            this.ProductosService = ProductosService;
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Details(int id)
        {
            Session["IdProducto"] = id;
            var model = this.ProductosService.GetOne(id);
            return this.View(model);
        }

        public ActionResult Create(int id)
        {           
                               
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
       
        public ActionResult Create(int id,ReviewVM Model)
        {
           if (this.ModelState.IsValid)
            {
            
                Model.IDProducto = (int)Session["IdProducto"];

                AutoMapper.Mapper.CreateMap<ReviewVM, Review>();

                var input = AutoMapper.Mapper.Map<Review>(Model);

               if(input.Comment!= "")
               {
                   this.ProductosService.CrearReview(input); 
               }
               else
               {
                   this.ProductosService.EliminarReview (input); 

               }
              


                Session["IdProducto"] = null;

                return this.RedirectToAction("Details", "Reviews", new { id = Model.IDProducto });
            }
            else
            {
                return View(Model);

            }
        }
    }
}