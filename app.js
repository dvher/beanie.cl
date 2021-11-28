const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require('path')
const cors = require('cors');
const bodyParser = require("body-parser");


const app = express();

// Motor de plantillas
app.set("view engine", "ejs");

//Seteando las carpetas css y img para archivos estaticos
app.use(express.static("public"));

//Procesamiento de tados desde la base de datos
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//variables de entorno
dotenv.config({ path: "./env/.env" });

//cookies
app.use(cookieParser());

//js
app.use(express.static('js'));

//Llamando al router
app.use("/", require("./routes/router"));

//jquery

const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );

//cors
app.use(cors())

//api

const productsAPI = require("./controllers/productsAPI");
//productsAPI.getProducts(4)

const allProducts= require("./controllers/allProducts");

const pago= require("./controllers/pago");

app.post('/productos', productsAPI.getProducts)

app.get('/allProducts', allProducts.allProducts)

app.post('/pago', pago.pago)

app.listen(3000, () => {
  console.log("Server running in http://localhost:3000");
});