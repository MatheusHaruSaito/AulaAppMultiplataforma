import * as mymodel from "../model/usersModel.js"

export async function Get(req,res){

        const response = await mymodel.Get();
        if (response.Message.toLowerCase() == "Success".toLowerCase()){
            res.status(202).json(response)
        }
        else{
            res.status(400).json(response)
        }

}

export async function GetById(req,res){
        try{
            const id =req.params.id;
            const response = await mymodel.GetById(id);
            if (response.Message.toLowerCase() == "Success".toLowerCase()){
                res.status(202).json(response)
            }
            else{
                res.status(400).json(response)
            }


        }
        catch(err){
            res.status(403).json({"message":"Error","Error":err.message})
        }
}
export async function Delete(req,res){
        try{
            const id =req.params.id;
            const response = await mymodel.Delete(id);
            if (response.data.affectedRows >0){
                res.status(202).json(response)
            }
            else{
                res.status(400).json(response)
            }


        }
        catch(err){
            res.status(403).json({"message":"Error","Error":err.message})
        }
}