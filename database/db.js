//conexion a la base de datos

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: 'localhost' /*process.env.DB_HOST*/,
  user: 'root' /*process.env.DB_PASS*/, //tira error al setearlo desde .env y aparee vacio
  pass: ''/*process.env.DB_PASS*/,
  database: 'beanieDB'/*process.env.DB_DATABASE*/,
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
});

module.exports = connection;
