const {ImageKit} = require("@imagekit/nodejs");



const ImageKitClient = new ImageKit({
    privateKey: process.env.IMAGE_KEY,
})


async function upload(file){
    const result = await ImageKitClient.files.upload({
        file,
        fileName:"music_" + Date.now(),
        folder: "yt-spotify",
    })

    return result;
}

module.exports= {uploadFile};