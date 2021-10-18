const express = require("express");
const router = express.Router();

const connection = require("../database/db");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/Info.ejs", (req, res) => {
  res.render("Info");
});

router.get("/productos.ejs", (req, res) => {
  res.render("productos");
});

router.get("/login.ejs", (req, res) => {
  res.render("login");
});

router.get("/registro.ejs", (req, res) => {
  res.render("registro");
});

module.exports = router;
