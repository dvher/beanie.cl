    
    const formulario = document.querySelector('#formulario');
    const boton = document.querySelector('#boton');
    const buscar = document.querySelector('#realiza_busqueda');
    const portada = document.querySelector('#portada');


    axios({
      method: 'get',
      url: '/allProducts'
    }).then(function(response) {
        //console.log("idProducto: ", response.data[0].idProducto)
        
        let productos= response.data;
        const filtrar = ()=>{
          //const content = element.innerHTML;
          document.getElementById('realiza_busqueda').innerHTML = '';
          document.getElementById('portada').innerHTML = '';

          const texto = formulario.value.toLowerCase();
          for(let producto of productos){
            let nombre = producto.nombre.toLowerCase();
            if(nombre.indexOf(texto) !== -1){
              buscar.innerHTML += `
              <div class="col mb-4">
                <div class="card h-100">
                  <div class="" id="imgContainer">
                    <img class="card-img-top" alt="Imagen producto" src="${producto.ruta_img}">
                  </div>
                  <div class="card-body justify-content-center">
                    <div class="text-center" id="buttonContainer">
                      <a href="#" class="card-title text-dark font-weight-bold"> ${producto.nombre}</a>
                      <p id="precio" class="card-price"> $ ${producto.precio} </p>
                      <p id="descripcion" class="card-text mt-1 text-justifycenter"><small> ${producto.descripcion}</small></p>
                      <button id="" type="button" class="btn btn-warning btn-sm mt-1">Añadir al carro <i
                          class="icon ion-md-cart"></i> <i class="icon ion-md-add"></i></button>
                      <br>
                      <button id="ver-detalles" type="button" class="btn btn-info btn-sm mt-2">Ver detalles <i
                          class="icon ion-md-pricetag"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              `
            }
          }
          if(buscar.innerHTML == ''){
            buscar.innerHTML += `
              <h2>PRODUCTO NO ENCONTRADO</h2>
            `
          }
        }
    
        formulario.addEventListener('keyup', filtrar);

    })


    /*const filtrar = ()=>{
      //const content = element.innerHTML;
      document.getElementById('realiza_busqueda').innerHTML = '';

      const texto = formulario.value.toLowerCase();
      for(let producto of productos){
        let nombre = producto.nombre.toLowerCase();
        if(nombre.indexOf(texto) !== -1){
          buscar.innerHTML += `
          <div class="col mb-4">
            <div class="card h-100">
              <div class="" id="imgContainer">
                <img class="card-img-top" alt="Imagen producto" src="${producto.img}">
              </div>
              <div class="card-body justify-content-center">
                <div class="text-center" id="buttonContainer">
                  <a href="#" class="card-title text-dark font-weight-bold"> ${producto.nombre}</a>
                  <p id="precio" class="card-price"> $ ${producto.precio} </p>
                  <p id="descripcion" class="card-text mt-1 text-justifycenter"><small> ${producto.descrip}</small></p>
                  <button id="" type="button" class="btn btn-warning btn-sm mt-1">Añadir al carro <i
                      class="icon ion-md-cart"></i> <i class="icon ion-md-add"></i></button>
                  <br>
                  <button id="ver-detalles" type="button" class="btn btn-info btn-sm mt-2">Ver detalles <i
                      class="icon ion-md-pricetag"></i></button>
                </div>
              </div>
            </div>
          </div>
          `
        }
      }
      if(buscar.innerHTML == ''){
        buscar.innerHTML += `
          <h2>PRODUCTO NO ENCONTRADO</h2>
        `
      }
    }

    formulario.addEventListener('keyup', filtrar);    */
    