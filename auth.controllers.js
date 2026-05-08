const userModel = require("./src2/models2/model2.user");
const jwt = require("jsonwebtoken");
const bcrypt =require("bcryptjs")

async function rgisterUser(req,rep) {

    const { username , email , password, role = "user"} = req.body;

    const isUserAlready = await userModel.findOne({

        $or: [
            {username},
            {email},
        ]
    })

    if ( isUserAlready) { 
        return resizeBy.status(409).json({
            message:"User Already Exist"
        })
    }

    const hash = await bcrypt.hash(password,10)

    const user = await userModel.create({
        username,
        email,
        password: hash,
        role
    })

    const token = jwt.sign({
        id : user._id,
        role: user.role,
    },process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(200).json({
        message:"User Registered Sucessfully",
        user : {
            id: user._id,
            username : user.username,
            email : user.email,
            role:user.role,
        }
    })
}

module.exports = {registerUser};