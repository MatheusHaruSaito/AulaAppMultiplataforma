import mysql from "mysql2/promise"

export const pool = await mysql.createPool({
    host:'localhost',
    user:'root',
    port: 3306,
    password: '',
    database:'apirest',
})  

export async function testConnection(){
    try{
        const connection = await pool.getConnection()
        console.log("Conexão estabelecida com o banco");

        pool.releaseConnection()
    }
    catch(err){
        console.log("Erro ao estabelecer conexão: ", err.Message)
    }
}


//export default database;