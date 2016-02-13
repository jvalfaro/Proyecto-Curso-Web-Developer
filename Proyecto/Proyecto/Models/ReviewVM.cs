using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Proyecto.Models
{
    public class ReviewVM
    {
        public int Id { get; set; }
        public string Comment { get; set; }
        public int Sku { get; set; }
        public int? IDProducto { get; set; }
    }
}