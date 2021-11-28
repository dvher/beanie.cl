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

router.get("/Admin.ejs",(req, res) => {
  res.render("Admin");
});

router.get("/AdminProductos.ejs", productsFromDb.ProductascID,(req, res) => {
  res.render("AdminProductos");
});

router.get("/AdminVentas.ejs",productsFromDb.getVentas, (req, res) => {
  res.render("AdminVentas");
});

router.get("*", (req, res) => {
  
  res.render("404");

})

router.post("/comentarios", getComms.getComentarios);

//Conexion entre actions y metodos de los controllers
router.post("/registro", authController.register);
router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.get('/delete/:id',productsFromDb.deleteProd);
router.post("/update",productsFromDb.updateProd)

module.exports = router;
