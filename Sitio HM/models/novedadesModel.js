
var pool = require('./bd');
// sirve para alistar  las novedades
async function getNovedades(){
    var query= "select * from novedades order by id desc ";
    var rows = await pool.query(query);
    return rows;
 }
 
 async function deleteNovedadesById(id){
    var query= "delete from novedades where id =?";
    var rows = await pool.query(query,[id]);
    return rows;
 }
 async function insertarNovedades(obj){
   try{
      var query="insert into novedades set ?";
      var rows = await pool.query(query,[obj]);
      return rows
    }
    catch (error) {
         console.log(error)
         throw error;
      }
   }
   async function getNovedadesById(id){
      
         var query="select * from novedades where id=?"
         var rows= await pool.query (query,[id]);
         return rows[0];
   }
   async function modificarNovedadesById(obj,id){

         var query="update novedades set ? where id=?"
         var rows= await pool.query (query,[obj,id]);
         return rows[0];
   }
 
 module.exports={getNovedades,deleteNovedadesById,insertarNovedades,getNovedadesById,modificarNovedadesById}