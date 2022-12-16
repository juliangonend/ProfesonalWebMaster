var express = require('express');
var router = express.Router();
 var nodemailer = require("nodemailer");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contactos', {
    isContactos:true   
  });//contactos.hbs
  });
  
 
  router.post("/", async(req,res,next)=> {
console.log(req.body);
    var nombre= req.body.nombre;
    var email= req.body.email;
    var tel= req.body.tel;
    var mensaje= req.body.mensaje;
    var sede= req.body.sede;

    var obj= {
      to:"gonzalezjulian501@gmail.com",
      subject:"Contacto Web",
      html:nombre + ' se contacto a traves de la web y quiere más información a este correo: '+email+ ". <br> Además , hizo este comentario: "+ mensaje+".<br> Su tel es :"+ tel+ sede
    }
 var transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }
});
  var info= await transporter.sendMail(obj);

 
  res.render('contactos', {
    isContactos:true   ,
    message:'mensaje enviado correctamente'
  });//contactos.hbs
  ;
});
module.exports = router;