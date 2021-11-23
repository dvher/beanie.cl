import Carrito from "./carrito.js"

document.addEventListener("click", e => {
    addProduct(e)
})

const addProduct = (e) => {
    const carrito = new Carrito
    
    if(e.target.matches('.btn-warning') || e.target.matches('.ion-md-cart')){
       if(e.target.matches('.btn-warning') == true){
           let idProductoSeleccionado = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('a').id
            axios({
                method: 'post',
                url: '/productos',
                data: {
                    id: idProductoSeleccionado,
                }
            }).then(function(response) {
                //console.log("idProducto: ", response.data[0].idProducto)
                
                let producto = {
                     id: response.data[0].idProducto,
                     nombre: response.data[0].nombre,
                     descripcion: response.data[0].descripcion,
                     ruta_img: response.data[0].ruta_img,
                     precio: response.data[0].precio
                }
                carrito.agregar(producto)
            })

            
       }
       else if(e.target.matches('.ion-md-cart') == true){
           let idProductoSeleccionado = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('a').id;

            axios({
                method: 'post',
                url: '/productos',
                data: {
                    id: idProductoSeleccionado,
                }
            }).then(function(response) {
                let producto = {
                    id: response.data[0].idProducto,
                    nombre: response.data[0].nombre,
                    descripcion: response.data[0].descripcion,
                    ruta_img: response.data[0].ruta_img,
                    precio: response.data[0].precio
               }
               carrito.agregar(producto)
            })
       }
    }
}