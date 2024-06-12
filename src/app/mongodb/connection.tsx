import mongoose from "mongoose";
export const Connection =async ()=>{
try {
      mongoose.connect(process.env.MONGODB_URL!).then((result:any)=>{
        console.log("connection successfully")
     }).catch((error)=>{
        console.log(error);
     })
     
      
} catch (error) {
     console.log(error)
     
}
}