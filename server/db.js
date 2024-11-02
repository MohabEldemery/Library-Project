import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const Connection = async () => {
    try{
        if(mongoose.connect(process.env.URL))
        console.log("Connected to DB");
    }
    catch(err){
        console.log("Error: " + err);
    }

}

Connection()