import Carrito from "./carrito.js"

const boton = document.querySelector('#pagar');

const pagar = () => {
    const carro = new Carrito();
    const data = carro.obtener();
    if(Object.keys(data).length === 0){
        alert("Carrito de compras vacío");
    } else {
        var idProd = [];
        var cantProd = [];

        data.forEach(producto => {
            idProd.push(producto.id);
            cantProd.push(producto.cantidad);
        })

        carro.vaciar();
        
        axios({
            method: 'post',
            url: '/pago',
            data: {
                id: idProd,
                cant: cantProd,
            }
          }).then(function(response){
            location.reload();

        })

        //location.reload();
    }
}

boton.addEventListener('click', pagar)