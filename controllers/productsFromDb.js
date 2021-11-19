
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