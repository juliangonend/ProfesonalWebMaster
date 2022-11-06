var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contactos', {
    isContactos:true   } );
  });
  

// var nodemailer=requiere("nodemailer");
// router.post('/',async (req,res,next)=>{


//     var nombre=req.body.nombre;
//     var email=req.body.email;
//     var tel=req.body.tel;
//     var mensaje=req.body.mensaje;
    
//     var obj={
//       to:'gonzalezjulian501@gmail.com',
//       subject: 'CONTACTO WEB',
//       html: nombre + " se contacto atraves de la web y quiere saber mas información a este correo :"+ email + ". <br> Ademas , se hizo el comentario: "+ mensaje + "  .<br>Su tel es :" + tel

//     }
  
//   var transport = nodemailer.createTransport({
//     host: process.env.SMTP-HOST,
//     port: process.env.SMTP-PORT,
//     auth: {
//       user: process.env.SMTP-USER,
//       pass: process.env.SMTP-PASS
//     }
//    });
//   var info = await transport.sendMail(obj);

//   res.render('contacto',{
//     message:'Mensaje envado correctamente'
//   });

 module.exports = router;