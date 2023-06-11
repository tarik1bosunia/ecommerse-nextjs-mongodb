import dbConnect from "@/backend/config/dbConfig"
import { getUser} from "@/backend/controlers/userControlers";

export default async function handler(req, res){
    dbConnect().catch(()=>res.status(405).json({error : "Error In Databse Connection !!!"}));
    const {method} = req;

    switch(method){
        case "GET":
            getUser(req, res)
            break
        default:
            res.setHeader("Allow", ["GET", "POST", "PUT", "DETETE"])
            res.status(405).end(`Method ${method} not Allowed`)
    }

    
}
