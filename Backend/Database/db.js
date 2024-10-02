import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "HOSPITAL_MANAGEMENT"
    }).then(()=>{
        console.log("Db Connected")
    }).catch(err=>{
        console.log(`Some error occured while connecting to db: ${err}`);
    });
}