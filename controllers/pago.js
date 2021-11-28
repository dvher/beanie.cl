
const connection = require("../database/db");

exports.pago = async (req, res) => {
    try {
        //Query
        console.log("estoy aca");

        console.log(req);
        const id =  req.body.id;
        const cant = req.body.cant;
        for(let i=0; i<id.length; i++){
            if(Object.entries(id).length !== 0){
                connection.query(`UPDATE producto 
                    SET stock=stock-${cant[i]}
                    WHERE idProducto = ${id[i]}`,(error, results) => {
                    if (error) {
                    console.log(error);
                    }
                    console.log("id por parametro:",id, results)
                    res.send(results);
                });
            }
            else{
                res.send({ status: 'Error, id vacio' })
            }
        }
    } 
    catch (err) {
        console.log(err);
    }
};