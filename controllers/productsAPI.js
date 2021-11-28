
const connection = require("../database/db");

exports.getProducts = async (req, res) => {
    try {
        //Query
        const id =  req.body.id
        console.log("idConsultado: ", id);
        if(Object.entries(id).length !== 0){
            connection.query(`SELECT * FROM producto where idProducto = ${id}`,(error, results) => {
                if (error) {
                console.log(error);
                res.status(500).send("Error en la consulta");
                }else{
                    console.log("id por parametro:",id, results)
                    res.send(results)
                }
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

