import mongoose from "mongoose";
export const connectDb = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
            throw new Error("MONGODB_URI envoirnment variable is not defined")
        }
        await mongoose.connect(mongoUri);
        console.log("✅Mongodb Connected sucessfully")
    } catch (error) {
        process.exit(1); //exit with error 
        //status code 1 means eror 
        //status code 0 mens success
    }
}