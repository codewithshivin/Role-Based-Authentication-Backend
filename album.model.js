const mongoose = require("mongoose");


const albumSchema = new mongoose.Schema({
    title:{
        type : String,
        required: true,
    },
    musics:[{
        type : mongoose.Schema.Types.ObjectId,
        ref: "music"
    }],
    artist: {
        type: MongooseError.Schema.Type.ObjectId,
        ref:"user",
        required: true,
    }
})

const albumModel = mongoose.model("album",albumSchema)


module.exports =  albumModel;