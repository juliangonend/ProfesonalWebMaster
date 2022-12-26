var express = require('express');
var router = express.Router();
var novedadesModel= require('../../models/novedadesModel');

// alistar novedades//
router.get('/', async function (req,res,next){
  var novedades= await novedadesModel.getNovedades();
  
  res.render('admin/novedades',{
    layout:'admin/layout',
    usuario: req.session.nombre,
    novedades
   });
})// cierre inicial
//alistar novedades 
router.get('/eliminar/:id', async (req,res,next)=>{
  var id = req.params.id;
  await novedadesModel.deleteNovedadesById(id);
  res.redirect('/admin/novedades');
})
//abri pagina para modifiacar novedades 
router.get('/modificar/:id', async (req,res,next)=>{
  var id = req.params.id;
  var novedad = await novedadesModel.getNovedadesById(id);
  res.render('admin/modificar',{
    layout:'admin/layout',
    novedad
  });
})
//modificar novedades
router.post ('/modificar', async (req,res,next)=>{
  try{
    console.log(req.body)
    var obj={
      titulo:req.body.titulo,
      subtitulo:req.body.subtitulo,
      cuerpo:req.body.cuerpo
    }
    console.log(obj)
    await novedadesModel.modificarNovedadesById(obj,req.body.id);
    res.redirect('/admin/novedades')
  } catch (error){
    console.log(error)
    res.render( 'admin/modificar',{
      layout:'admin/layout',
      error:true, message:'No se modifico la novedad '
    })
  }
})
//abrir pagina para agregar novedad 
router.get('/agregar', async (req,res,next)=>{
  res.render('admin/agregar',{
  layout:'admin/layout'})
 
})
// agregar novedad 
router.post('/agregar', async function(req,res,next){
try{
  if(req.body.titulo !="" && req.body.subtitulo !="" && req.body.cuerpo  !=""){
    await novedadesModel.insertarNovedades(req.body);
    res.redirect('/admin/novedades')
  } else{
    res.render('admin/agregar',{
      layout:'admin/layout',
      error:true, message:'todos los campos son requeridos'
    })
  }
} catch (error){
  console.log(error)
  res.render('admin/agregar',{
    layout:'admin/layout',
    error:true,message:'No se cargo la novedad'
  });
}
}

);
module.exports = router;