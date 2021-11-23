//Imprime los productos del carrito en la seccion ver carrito

import Carrito from "./carrito.js"

const productos = document.getElementById('productos');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

const Carro = new Carrito();

const data = Carro.obtener();

const updateTotal = () => {
    const Carro = new Carrito()
    console.log(Carro.montoTotal())
    document.getElementById("span-total").textContent = Carro.montoTotal()
}

const printCards = data => {
    //console.log(data)
    if(Object.keys(data).length === 0){
        const vacio = document.getElementById("col-productos")
        vacio.innerHTML += `<p class="text-center text-light">No hay productos en su carrito</p>`
    }
    else{
        data.forEach(producto => {
            console.log(producto.nombre)
            templateCard.querySelector('a').textContent = producto.nombre;
            templateCard.querySelector('a').id = producto.id;
            //para obtener el dominio
            //templateCard.querySelector('a').href = "http://localhost/productos/producto.php?product="+producto.id; 
            templateCard.getElementById('precio').textContent = "$"+Intl.NumberFormat('es-CL').format(producto.precio);
            var reader = new FileReader();
            templateCard.querySelector('img').setAttribute("src", producto.ruta_img);
            templateCard.getElementById('cantidad').value = producto.cantidad;
            const clone = templateCard.cloneNode(true);
            fragment.appendChild(clone);
    
        })
        productos.appendChild(fragment);
        updateTotal()
    }

}
printCards(data);


