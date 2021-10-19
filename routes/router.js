const express = require("express");
const router = express.Router();

//Variables
const connection = require("../database/db");
const authController = require("../controllers/authController");

//Rutas de las vistas
router.get("/", /*authController.isAuth,*/(req, res) => {
  res.render("index.ejs");
});

router.get("/Info.ejs", (req, res) => {
  res.render("Info");
});

router.get("/productos.ejs", (req, res) => {
  res.render("productos");
});

router.get("/login.ejs", (req, res) => {
  res.render("login",/*{alert:false}*/);
});

router.get("/registro.ejs", (req, res) => {
  res.render("registro");
});

//Conexion entre actions y metodos de los controllers
/*router.post("/registro", authController.register);
router.post("/login", authController.login);
router.get("/logout", authController.logout);*/
module.exports = router;
