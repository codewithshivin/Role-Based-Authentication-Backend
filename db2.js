const mongoose = require("mongoose");


async function connectDB(){

    try{

        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected Sucessfully");

    }

    catch(error){
        console.log("Database Not Connected:", error)
    }


}

module.exports= connectDB;