import express, {json} from "express"
import mysql from "mysql2/promise"

const Port = 3500;
const app = express();
const connection = await mysql.createPool({
    host:'localhost',
    user:'root',
    port: 3306,
    password: '',
    database:'apirest',
})  

// console.log(connection.getConnection())
app.use( json());


app.get("/users", async (req,res)=>{
    try{
    const [result,fields] = await connection.execute("Select * From users")
    res.status(200).json(result)
    }
    catch (err){
        console.log(err)
        res.status(403).json(err)
    }

})

app.get("/test",(req,res)=>{
    res.status(200).json({"message": "servidor funcionando"})
});

app.listen(Port, ()=>{
    console.log(connection.getConnection())
    console.log(`Servidor rodando na porta: ${Port}\n CTRL+C para o servidor`)
})


