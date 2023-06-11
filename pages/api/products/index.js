import nc from "next-connect"
import dbConnect from "@/backend/config/dbConfig"
import { newProdcut } from "@/backend/controlers/productControlers"

export default function handler(req, res){
    dbConnect()
    res.status(200).json({name : "tata"})
}


// const handler = nc();

// handler.post(newProdcut)

// export default handler


