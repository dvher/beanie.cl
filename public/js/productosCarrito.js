//Agrega desde el catálogo de productos al carrito de localstorage

//importa la clase Carrito
import Carrito from "./carrito";

const add = async (id) => {
    try {
        const data = await fetch('./api/${id}}') //Reemplazar por api que obtenga datos del producto con ese id
        const producto = await JSON.parse(data)
        const carrito = new Carrito()
        carrito.agregar(producto)
        console.log(carrito.obtener())
    } catch (error) {
        
    }
}


/*
function añadir(id){
      $.ajax({
            url: "/carro/apiCarrito.php",
            type: "POST",
            data: {
                  id: id,
            },
      }).done(function (data) {
            Carro = new Carrito();
            var producto = JSON.parse(data);
            //alert(producto.nombre);
            Carro.agregar(producto);
            //console.log(Carro.obtener());

            //localStorage.setItem('productos', JSON.stringify(producto));
      });
}
*/