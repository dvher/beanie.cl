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
    const mail = req.body.email;
    const pass = req.body.pass;
    let passhash = await bcryptjs.hash(pass, 8);

    //Query
    connection.query("INSERT INTO usuario SET ?",{ mail: mail, pass: passhash , admin:0},(error, results) => {
        if (error) {
          console.log(error);
        }
          res.redirect("login.ejs");
      });

     
    
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
  try {
    const mail = req.body.email;
    const pass = req.body.pass;

    if (!mail || !pass) {
      res.render("login.ejs", {
        alert: true,
        alertTitle: "Advertencia",
        alertMessage: "Ingrese usuario y contrasena",
        alertIcon: "Info",
        showConfirmButton: true,
        timer: false,
        ruta: "login.ejs",
      });

    } else {
      connection.query("SELECT * FROM usuario WHERE mail= ?",[mail],async (error, results) => {
          if (results.length == 0 ||!(await bcryptjs.compare(pass, results[0].pass))) {
            res.render("login.ejs", {
              alert: true,
              alertTitle: "Error",
              alertMessage: "Usuario y/o contrasena incorrectos",
              alertIcon: "error",
              showConfirmButton: true,
              timer: false,
              ruta: "login.ejs",
            });
          
          }else{
            const id = results[0].mail
            const token = jwt.sign({id:id}, process.env.JWT_SECRETO,{
              expiresIn:process.env.JWT_EXPIRACION
            })
            //console.log("token:" + token +" usuario: "+ mail)
            const cookiesOptions = {
              expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRACION * 24 * 60 * 60 * 1000),
              httpOnly:true
            }
            res.cookie('jwt',token,cookiesOptions)
            res.render('login.ejs',{
              alert: true,
              alertTitle: "Conexion exitosa",
              alertMessage: "Inicio de sesion",
              alertIcon: "success",
              showConfirmButton: false,
              timer: 800,
              ruta: "",
            })
          }
        }
      );
    }
  } catch (error) { console.log(error)}
};

exports.isAuth = async (req,res,next)=>{
  console.log(jwt.verify(req.cookies.jwt, process.env.JWT_SECRETO))
  
  if(req.cookies.jwt){
    try {
      const decodificada= await promisify(jwt.verify(req.cookies.jwt, process.env.JWT_SECRETO))
      console.log(jwt.verify(req.cookies.jwt, process.env.JWT_SECRETO))
      connection.query('SELECT * FROM usuario WHERE mail = ?', [decodificada.id],(error, results)=>{
        if(!results){
          
          return next()
        }
        
        user=true;
        return next()
      })

    } catch (error) {
      user=false
      
      return next()
    }

  }else{
    
    next()
  }
}

exports.requiteAuth = function(req,res,next){

  const token = req.cookies.jwt;
  
  if(token){
    jwt.verify(token, 'clavesecreta', (err, decodedToken)=>{

      if(err){
        console.log(err.message);
        user=true
        next();
      }else{
        console.log(decodedToken);
        user=true
        next();
      }
    })

  }else{
    user=false
    next()
  }
}

exports.logout = (req,res)=>{
  res.clearCookie('jwt')
  return res.redirect('/')
}