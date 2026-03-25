import express, {json} from "express"
import {testConnection} from "./databases/connectionMysql.js"
import userRoutes from "./view/userRoutes.js"

const Port = 3500;
const app = express();

testConnection();
app.use( json());
app.use(userRoutes);


app.get("/test",(req,res)=>{
    res.status(200).json({"message": "servidor funcionando"})
});

app.listen(Port, ()=>{

    console.log(`Servidor rodando na porta: ${Port}\n CTRL+C para o servidor`)
})


