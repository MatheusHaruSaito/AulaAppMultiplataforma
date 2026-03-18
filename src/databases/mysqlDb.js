import mysql from "mysql2/promise"

export const pool = await mysql.createPool({
    host:'localhost',
    user:'root',
    port: 3306,
    password: '',
    database:'apirest',
})  


//export default database;