import Carrito from "./carrito";

const carro = document.getElementById('carro');
const id = document.getElementById('id');
const cantidad = document.getElementById('cantidad');

carro.addEventListener('click', (e) => {
    const carrito = new Carrito;
    axios({
        method: 'post',
        url: '/productos',
        data: {
            id: id.value,
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

        for(let i = 0; i < parseInt(cantidad.value); i++)
            carrito.agregar(producto);
    });

});