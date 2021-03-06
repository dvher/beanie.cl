const express = require("express");
const router = express.Router();

//Variables
const connection = require("../database/db");
const authController = require("../controllers/authController");
const productsFromDb = require("../controllers/productsFromDb");
const getComms = require("../controllers/getComms");

//Rutas de las vistas
router.get("/", authController.requiteAuth,productsFromDb.getProducts,(req, res) => {
  res.render("index");
});

router.get("/Info.ejs", (req, res) => {
  res.render("Info");
});

router.get("/login.ejs", (req, res) => {
  res.render("login",{alert:false});
});

router.get("/Registro.ejs", (req, res) => {
  res.render("Registro", {alert:false});
});

router.get("/carrito.ejs", (req, res) => {
  res.render("carrito");
});

router.get("/Admin.ejs",authController.login,authController.requiteAuth,(req, res) => {
  if(Admin ){
    res.render("Admin");
  }
  
});

router.get("/AdminProductos.ejs",authController.requiteAuth, productsFromDb.ProductascID, productsFromDb.InsertProd,(req, res) => {
  if(user){
   res.render("AdminProductos"); 
  }
  
});

router.get("/AdminVentas.ejs",productsFromDb.getVentas, authController.requiteAuth,(req, res) => {
  if(user){
    res.render("AdminVentas", ventas);
  }
  
});


//api
const productsAPI = require("../controllers/productsAPI");
//productsAPI.getProducts(4)

const allProducts= require("../controllers/allProducts");

const pago= require("../controllers/pago");

router.post('/productos', productsAPI.getProducts)

router.get('/allProducts', allProducts.allProducts)

router.post('/pago', pago.pago)

router.get("/Producto.ejs/:id", (req, res) => {

  try {
    //Query
    const id =  req.params.id
    console.log("idConsultado: ", id);
    if(Object.entries(id).length !== 0){
        connection.query(`SELECT * FROM producto where idProducto = ${id};`,(error, results) => {
            if (error) {
            console.log(error);
            res.render("404");
            }else{
                console.log("id por parametro:",id, results)
                res.render("Producto", results)
            }
        });
    }
    else{
        res.render("404");
    }
  }catch (err) {
      console.log(err);
      res.render("404");

  }


})

router.post("/comentarios", getComms.getComentarios);
router.post("/comentar", getComms.postComentario);

//Conexion entre actions y metodos de los controllers
router.post("/registro", authController.register);
router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.get('/delete/:id',productsFromDb.deleteProd);
router.post("/update",productsFromDb.updateProd)
router.post("/insert",productsFromDb.InsertProd)

router.get("*", (req, res) => {
  
  res.render("404");

});

module.exports = router;
