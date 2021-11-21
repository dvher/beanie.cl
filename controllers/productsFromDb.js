
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
/*
exports.getVentas = async (req,res)=>{
  connection.query("begin").then((res) => {
		// next, insert some data into the pets table
		return connection.query(
			"create view ventas as select compra.idCompra , cliente.nombre as cliente ,producto.nombre as producto,detalle.cantProducto, compra.monto, compra.direccionEntrega, compra.fecha from compra, producto, cliente, detalle where compra.idCompra = detalle.idCompra and detalle.idProducto = producto.idProducto and compra.idComprador = cliente.idCliente;"
		)
	})
	.then((res) => {
		// next, insert some data into the food table
		return connection.query(
			"select * from ventas;", (error, results)=>{
        res.render("AdminVentas.ejs", {Ventas:results});
      }
		)
	})
	.then((res) => {
		// once that's done, run the commit statement to
		// complete the transaction
		return client.query("commit")
	})
	.then((res) => {
		// if the transaction completes successfully
		// log a confirmation statement
		console.log("transaction completed")
	})
	.catch((err) => {
		// incase there are any errors encountered
		// rollback the transaction
		console.error("error while querying:", err)
		return connection.query("rollback")
	})
	.catch((err) => {
		// incase there is an error when rolling back, log it
		console.error("error while rolling back transaction:", err)
	})
};*/
