//Logica de autenticacion
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const connection = require("../database/db");
const { promisify } = require("util"); //requests asyncronicas
const { nextTick } = require("process");

//Metodo de registro

exports.register = async (req, res) => {
  try {
    //Obteniendo los parametros desde el body
    const email = req.body.email;
    const pass = req.body.pass;
    let passhash = await bcryptjs.hash(pass, 8);

    //Query
    connection.query("INSERT INTO user SET ?",{ user: email, pass: passhash },(error, results) => {
        if (error) {
          console.log(error);
        }
        res.redirect("/");
      }
    );
  } catch (err) {
    console.log(err);
  }
};

/*exports.login = async (req, res) => {
  try {
    const email = req.body.email;
    const pass = req.body.pass;

    if (!email || !pass) {
      res.render("login.ejs", {
        alert: true,
        alertTitle: "Advertencia",
        AlertMessage: "Ingrese usuario y contrasena",
        AlertIcon: "Info",
        showConfirmButton: true,
        timer: false,
        ruta: "login.ejs",
      });

    } else {
      connection.query("SELECT * FROM user WHERE user = ?",[email],async (error, results) => {
          if (results.length == 0 ||!(await bcryptjs.compare(pass, results[0].pass))) {
            res.render("login.ejs", {
              alert: true,
              alertTitle: "Error",
              AlertMessage: "Ususrio y/o contrasena incorrectos",
              AlertIcon: "error",
              showConfirmButton: true,
              timer: false,
              ruta: "login.ejs",
            });
          
          }else{
            const id= results[0].id
            const token = jwt.sign({id:id}, process.env.JWT_SECRETO,{
              expiresIn:process.env.JWT_EXPIRACION
            })
            console.log("token:" + token +" usuario: "+ email)
            const cookiesOptions = {
              expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRACION *24*60*60*1000),
              httpOnly:true
            }
            res.cookie('jwt',token,cookiesOptions)
            res.render('login.ejs',{
              alert: true,
              alertTitle: "Conexion exitosa",
              AlertMessage: "Inicio de sesion",
              AlertIcon: "success",
              showConfirmButton: false,
              timer: 10000,
              ruta: "/",
            })
          }
        }
      );
    }
  } catch (error) { console.log(error)}
};

exports.isAuth = async(req,res)=>{

  if(req.cookies.jwt){
    try {
      const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO)

      connection.query('SELECT * FROM user WHERE id = ?', [decoded.id],(error, results)=>{
        if(!results){
          return next()
        }
        req.email = results[0]
        return next()
      })

    } catch (error) {
      console.log(error)
      return next()
    }

  }else{
    res.redirect('/login.ejs')
    next()
  }
}

exports.logout = (req,res)=>{
  res.clearCookie('jwt')
  return res.redirect('/')
}*/