var pool =require('./bd');//llama los datos del Bd 
var md5 = require('md5');
async function getUserByUsernameandPassword(user,password) {
    try{
        var query= 'select * from usuarios where usuario=? and password=? Limit 1'
        var rows= await pool.query (query , [user , md5(password)]);
        return rows[0];
    } catch (error){
        throw error ; 
        console.log(error)
    }
    
}

module.exports = { getUserByUsernameandPassword}