import mongoose from "mongoose";

// const connectMongo = async () =>{
//     try{
//        const { connection } = mongoose.connect("mongodb://localhost:27017/")


//     }catch(errors){
//         Promise.reject(errors);
//     }
// }


const dbConnect = async() =>{
    if(mongoose.connection.readyState >= 1){    
        console.log("database connected")
        return;
    }
    // mongoose.set("strictQuery", false)
    
    try{
       const { connection } = mongoose.connect(process.env.DB_URI)

    }catch(errors){
        Promise.reject(errors);
    }
}

export default dbConnect