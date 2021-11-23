
import Carrito from "./carrito.js"

const productos = document.getElementById('productos');

//var Carro = new Carrito()

productos.addEventListener("click", e => {
    
    editarCantidad(e);
    eliminarProducto(e);
   // verDetalles(e);
})

const editarCantidad = e => {
      const Carro = new Carrito()
    if(e.target.matches('.suma') || e.target.matches('.btn-plus')){ //para sumar 1 cantidad
          var idProductoSeleccionado;
          if(e.target.matches('.suma') == true){
                //console.log(e.target.parentElement.parentElement.parentElement.parentElement.querySelector('a').id);
                idProductoSeleccionado = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('a').id;
                Carro.sumarCantidad(idProductoSeleccionado);
          }
          else if(e.target.matches('.btn-plus') == true){
                //console.log(e.target.parentElement.parentElement.parentElement.querySelector('a').id);
                idProductoSeleccionado = e.target.parentElement.parentElement.parentElement.querySelector('a').id;
                Carro.sumarCantidad(idProductoSeleccionado);
          }
    }
    else if(e.target.matches('.resta') || e.target.matches('.btn-minus')){
          if(e.target.matches('.resta') == true){
                //console.log(e.target.parentElement.parentElement.parentElement.parentElement.querySelector('a').id);
                idProductoSeleccionado = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('a').id;
                Carro.restarCantidad(idProductoSeleccionado);
          }
          else if(e.target.matches('.btn-minus') == true){
                //console.log(e.target.parentElement.parentElement.parentElement.querySelector('a').id);
                idProductoSeleccionado = e.target.parentElement.parentElement.parentElement.querySelector('a').id;
                Carro.restarCantidad(idProductoSeleccionado);
          }
    }
    updateTotal()
}

const eliminarProducto = e => {
    const Carro = new Carrito()
    var idProductoSeleccionado;
    if (e.target.matches('.eliminar') == true) {
          idProductoSeleccionado = e.target.parentElement.parentElement.parentElement.querySelector('a').id;
          console.log("Id producto a eliminar: ",idProductoSeleccionado)
          Carro.quitar(idProductoSeleccionado);
          let node = e.target.parentElement.parentElement.parentElement
          node.remove()
    }
    updateTotal()
}

const updateTotal = () => {
      const Carro = new Carrito()
      console.log(Carro.montoTotal())
      document.getElementById("span-total").textContent = Carro.montoTotal()
}

