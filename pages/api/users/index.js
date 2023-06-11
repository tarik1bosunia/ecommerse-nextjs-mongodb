import dbConnect from "@/backend/config/dbConfig"
import { getUsers, createUser, updateUser, deleteUser } from "@/backend/controlers/userControlers";

export default async function handler(req, res){
    dbConnect().catch(()=>res.status(405).json({error : "Error In Databse Connection !!!"}));
    const {method} = req;

    switch(method){
        case "GET":
            getUsers(req, res)
            break
        case "POST":
             createUser(req, res) 
            break  
        case "PUT":
            updateUser(req, res) 
            break

        case "DELETE":
            deleteUser(req, res);
            break

        default:
            res.setHeader("Allow", ["GET", "POST", "PUT", "DETETE"])
            res.status(405).end(`Method ${method} not Allowed`)
    }

    
}
