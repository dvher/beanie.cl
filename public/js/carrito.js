//Esta clase maneja el carrito usando localstorage como almacenamiento

export default class Carrito {
    constructor(clave) {
          this.clave = clave || "productos";
          this.productos = this.obtener();
    }

    agregar(producto) {
          //
          if (!this.existe(producto.id)) {
                producto.cantidad = 1;
                this.productos.push(producto);
                this.guardar();
          }
          else {
                //le suma 1 a la cantidad del producto con el mismo id del localstorage
                for (var i = 0; i < this.productos.length; i++) {
                      if (this.productos[i].id == producto.id) {
                            this.productos[i].cantidad += 1;
                            this.guardar();
                            break;
                      }
                }
          }
    }
    sumarCantidad(id){ //suma 1 a la cantidad del producto con el id
      for (var i = 0; i < this.productos.length; i++) {
            if (this.productos[i].id == id ) {
                  this.productos[i].cantidad += 1;
                  this.guardar();
                  break;
            }
      }
    }
    restarCantidad(id){
      for (var i = 0; i < this.productos.length; i++) {
            if (this.productos[i].id == id && this.productos[i].cantidad >=2) {
                  this.productos[i].cantidad -= 1;
                  this.guardar();
                  break;
            }
      }
    }

    quitar(id) {
          console.log("id ingresado clase carrito: ",id)
          const indice = this.productos.findIndex(p => p.id == id);
          console.log("indice clase carrito: ",indice)
          if (indice != -1) {
                this.productos.splice(indice, 1);
                this.guardar();
          }
    }
    //Convierte el 
    guardar() {
          localStorage.setItem(this.clave, JSON.stringify(this.productos));
    }

    obtener() {
          const productosCodificados = localStorage.getItem(this.clave);
          return JSON.parse(productosCodificados) || [];
    }

    existe(id) {
          return this.productos.find(producto => producto.id === id);
    }

    obtenerConteo() {
          return this.productos.length;
    }
    montoTotal(){
          let total = 0
          const data = this.obtener()
          for (let i = 0; i < data.length; i++) {
            //console.log(data[i].precio)
            //console.log(data[i].cantidad)
            total += data[i].precio*data[i].cantidad
          }
          return total
    }
    vaciar(){
      localStorage.clear();
      this.productos = this.obtener();
    }
}