const { json } = require("express");
const connection = require("../database/db");

exports.productsFromDb = async (req, res) => {
    try {
      connection.query("SELECT * FROM producto",(error, products) => {
          if (error) {
            console.log(error);
          }

          res.render("index",{products: products.rows})

          //console.log(results.rows);
          
          //const data = results
          //console.log(data[0])
          //console.log(data[0].descripcion)
          //console.log(typeof(data[0])) //object
          //console.log(typeof(data)) //object  pero tiene [] de array
          //console.log(data) //tiene [] de array
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  //console.log(productsFromDb)
//productsFromDb()