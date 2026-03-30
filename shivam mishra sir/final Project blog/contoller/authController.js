const User = require("../model/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// Register
const registerUser = async (req,res)=>{

    const {name,email,password} = req.body

    const hashPassword = await bcrypt.hash(password,10)

    const user = await User.create({
        name,
        email,
        password:hashPassword
    })

    const token = jwt.sign(
        {id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )

    res.cookie("token",token)

    res.redirect("/home")
}


// Login
const loginUser = async (req,res)=>{

    const {email,password} = req.body

    const user = await User.findOne({email})

    if(!user){
        return res.send("User not found")
    }

    const checkPassword = await bcrypt.compare(password,user.password)

    if(!checkPassword){
        return res.send("Wrong Password")
    }

    const token = jwt.sign(
        {id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )

    res.cookie("token",token)

    res.redirect("/home")
}

module.exports = {registerUser,loginUser}