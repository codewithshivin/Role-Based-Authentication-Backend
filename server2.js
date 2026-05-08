require("dotenv").config();
const app = require("./src2/app2");
const connectDB = require("./src2/db2/db2");

connectDB();

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})