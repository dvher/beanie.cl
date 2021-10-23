const connection = require("../database/db");

exports.productsFromDb = async () => {
    try {
      connection.query("SELECT * FROM producto",(error, results) => {
          if (error) {
            console.log(error);
          }
          return results
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

 // add()
  //console.log(add)


  /*
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  pass: '',
  database: 'beanieDB',
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
});

*/