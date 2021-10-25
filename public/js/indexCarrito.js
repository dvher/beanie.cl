import Carrito from "./carrito.js"

document.addEventListener("click", e => {
    addProduct(e)
})

const addProduct = (e) => {
    const carrito = new Carrito
    
    if(e.target.matches('.btn-warning') || e.target.matches('.ion-md-cart')){
       if(e.target.matches('.btn-warning') == true){
           let idProductoSeleccionado = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('a').id
           let nombre = e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent
           let descripcion = e.target.previousElementSibling.firstChild.textContent
           let ruta_img = e.target.parentElement.parentElement.previousElementSibling.querySelector('img').src
           let precio = e.target.previousElementSibling.previousElementSibling.textContent

           let producto = {
                id: idProductoSeleccionado,
                nombre: nombre,
                descripcion: descripcion,
                ruta_img: ruta_img,
                precio: precio
           }
           carrito.agregar(producto)
            
       }
       else if(e.target.matches('.ion-md-cart') == true){
           let idProductoSeleccionado = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('a').id;
           let nombre = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent
           let descripcion = e.target.parentElement.previousElementSibling.firstChild.textContent
           let ruta_img = e.target.parentElement.parentElement.parentElement.previousElementSibling.querySelector('img').src
           let precio = e.target.parentElement.previousElementSibling.previousElementSibling.textContent

           let producto = {
                id: idProductoSeleccionado,
                nombre: nombre,
                descripcion: descripcion,
                ruta_img: ruta_img,
                precio: precio
           }
           carrito.agregar(producto)
       }
    }
}