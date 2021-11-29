
const connection = require("../database/db");

exports.getProducts = async (req, res) => {
  try {
    //Query
    connection.query("SELECT * FROM producto",(error, results) => {
        if (error) {
          console.log(error);
        }
        //console.log(results)
        res.render("index", {products:results});
      }
    );
  } catch (err) {
    console.log(err);
  }
};

exports.ProductascID = async (req,res)=>{
  
  try {
    //Query
    connection.query("select * from producto order by idproducto asc;",(error, results) => {
        if (error) {
          console.log(error);
        }
        res.render("AdminProductos.ejs", {products:results});
      }
    );
  } catch (err) {
    console.log(err);
  }
  
};

exports.deleteProd = async (req,res)=>{
 const id = req.params.id; 
  try{
    connection.query("delete from producto where idProducto= ?",[id], (error,results)=>{
    console.log('producto eliminado');
    res.redirect('/AdminProductos.ejs'); 
    }); 

  }catch(error){
    console.log(error);
  }
  
};

exports.getVentas = async (req,res)=>{
  try{
    connection.query("begin; ",(error, results) => {
      if (error) {
        console.log(error);
      }
      connection.query("create or replace view ventas as select compra.idCompra , cliente.nombre as cliente ,producto.nombre as producto,detalle.cantProducto, compra.monto, compra.direccionEntrega, compra.fecha from compra, producto, cliente, detalle where compra.idCompra = detalle.idCompra and detalle.idProducto = producto.idProducto and compra.idComprador = cliente.idCliente;", (error, result)=>{

        if (error) {
          console.log(error);
        }

        connection.query("select * from ventas;", (error,results)=>{
          if (error) {
            console.log(error);
          }
          console.log(results);
          res.render("AdminVentas.ejs", {ventas:results})
          connection.query("rollback;")
        })
      })
    });
  } catch (err) {
    console.log(err);
  }
}

exports.updateProd = async(req,res)=>{

  try {
    //Obteniendo los parametros desde el body
    const id= req.body.id;
    const stock = req.body.stock;
    const precio = req.body.precio;
    const descripcion = req.body.descripcion;

    //Query
    connection.query("UPDATE producto SET stock=?,precio=?,descripcion=? WHERE idProducto = ?;",[stock,precio,descripcion,id],(error, results) => {
        if (error) {
          console.log(error);
        }
        console.log("Producto actualizado");
          res.redirect("AdminProductos.ejs");
      });

     
    
  } catch (err) {
    console.log(err);
  }
}

exports.InsertProd = async(req,res)=>{

  try {
    //Obteniendo los parametros desde el body
    const nombre = req.body.nombre;
    const stock = req.body.stock;
    const precio = req.body.precio;
    const descripcion = req.body.descripcion;
    const link = req.body.link;
    const descuento = req.body.descuento;
    //Query
    connection.query(`Insert into producto (descripcion, ruta_img, nombre, precio, stock, descuento) Values (?,?,?,?,?,?) ;`,[descripcion,link,nombre,precio,stock,descuento],(error, results) => {
        if (error) {
          console.log(error);
        }
        console.log("Producto insertado");
          res.redirect("AdminProductos.ejs");
      });

     
    
  } catch (err) {
    console.log(err);
  }
}