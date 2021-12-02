//conexion a la base de datos

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST /*process.env.DB_HOST*/,
  user: process.env.DB_USER /*process.env.DB_PASS*/, //tira error al setearlo desde .env y aparee vacio
  password: process.env.DB_PASS/*process.env.DB_PASS*/,
  database: 'beanieDB'/*process.env.DB_DATABASE*/,
  port:3306
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connected!");
});

module.exports = connection;
