using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Productos.Entities
{
   public class Review
    {

        public int Id { get; set; }
        public string Comment { get; set; }
        public int Sku { get; set; }
        public int? IDProducto { get; set;}

        public virtual Producto Productos { get; set; }
    }
}
