import mongoose from "mongoose";
export const connectDb = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log("✅Mongodb Connected sucessfully")
    } catch (error) {
         process.exit(1); //exit with error 
         //status code 1 means eror 
         //status code 0 mens success
    }
}