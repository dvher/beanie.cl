const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

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
//app.use(cookieParser);

//Llamando al router

app.use("/", require("./routes/router"));

app.listen(3000, () => {
  console.log("Server running in http://localhost:3000");
});
