import {pool} from "../databases/connectionMysql.js"

export async function Get(){
    try{
    const [result,fields] = await pool.execute("Select * From users Order By `username` ")
    return{"Message": "Success","data":result}
    }
    catch (err){
        console.log(err)
        return {"Message": "Error","data":err.message}
    }

}
export async function GetById(id){
    try{
    const [result,fields] = await pool.execute("Select * From users Where id = ? Order By `username`",
        [id]
    )
    return{"Message": "Success","data":result}
    }
    catch (err){
        console.log(err)
        return {"Message": "Error","data":err.message}
    }

}

export async function Delete(id){
    try{
    const [result,fields] = await pool.execute("Delete  From users Where id = ?",
        [id]
    )
    return{"Message": "Success","data":result}
    }
    catch (err){
        console.log(err)
        return {"Message": "Error","data":err.message}
    }

}