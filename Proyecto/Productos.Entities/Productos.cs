using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



namespace Productos.Entities
{
     public class Producto
    {

         public Producto()
        {
            Reviews = new HashSet<Review>();
        }
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Marca { get; set; }


        public virtual ICollection<Review> Reviews { get; set; }
    }
}
