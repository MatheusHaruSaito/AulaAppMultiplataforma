import express, {json} from "express"
import {pool} from "./databases/mysqlDb.js"
const Port = 3500;
const app = express();


app.use( json());


app.get("/users", async (req,res)=>{
    try{
    const [result,fields] = await pool.execute("Select * From users")
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

    console.log(`Servidor rodando na porta: ${Port}\n CTRL+C para o servidor`)
})


