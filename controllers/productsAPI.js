
const connection = require("../database/db");

exports.getProducts = async (req, res) => {
    try {
        //Query
        const id =  req.body.id
        console.log("idConsultado: ", id)
        if(Object.entries(id).length !== 0){
            connection.query(`SELECT * FROM producto where idProducto = ${id}`,(error, results) => {
                if (error) {
                console.log(error);
                }
                console.log("id por parametro:",id, results)
                res.send({ status: 'Recibido!' })
            });
        }
        else{
            res.send({ status: 'Error, id vacio' })
        }
    } 
    catch (err) {
        console.log(err);
    }
};

