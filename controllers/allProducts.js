
const connection = require("../database/db");

exports.allProducts = async (req, res) => {
    try {
        //Query
        
        connection.query(`SELECT * FROM producto`,(error, results) => {
            if (error) {
                console.log(error);
            }
            console.log(results)
            res.send(results)
        });
    } 
    catch (err) {
        console.log(err);
    }
};
