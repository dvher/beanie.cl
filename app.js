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


app.listen(3000, () => {
  console.log("Server running in http://localhost:3000");
});