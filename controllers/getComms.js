const connection = require("../database/db");

exports.getComentarios = async (req, res) => {
    try {
        //Query
        console.log(req.headers)
        console.log(req.body)
        const id = req.body.id;

        if(!id){

            return res.status(400).json({
                message: "Falta el id"
            });

        }
        
        connection.query(`SELECT * FROM opinion WHERE idProd = ${id};`,(error, results) => {
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


exports.postComentario = async (req, res) => {
    try {
        //Query
        const {idOpinion, idCliente, idProducto, comentario, valoracion} = req.body;

        console.log(req.body);

        if(!idOpinion || !idCliente || !idProducto || !comentario || !valoracion){

            return res.status(400).json({
                message: "Falta algun dato"
            });

        }
        
        connection.query(`INSERT INTO opinion (idOpinion, idCliente, idProd, comentario, valoracion) VALUES (${idOpinion}, ${idCliente}, ${idProducto}, '${comentario}', ${valoracion});`,(error, results) => {
            if (error) {
                console.log(error);
                res.redirect('/');
            }
            console.log('success');
            console.log(results)
            res.redirect('/');
        });
    } 
    catch (err) {
        console.log(err);
        res.redirect('/');
    }
}