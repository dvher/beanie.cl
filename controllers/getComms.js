const connection = require("../database/db");

exports.getComentarios = async (req, res) => {
    try {
        //Query

        const id = req.body.id;

        if(!id){

            return res.status(400).json({
                message: "Falta el id"
            });

        }
        
        connection.query(`SELECT * FROM opinion WHERE idProd = ${id}`,(error, results) => {
            if (error) {
                console.log(error);
            }
            console.log(results)
            res.send(results)
        });
    } 
    catch (err) {
        console.log(err);
        res.send("Error");
    }
};
