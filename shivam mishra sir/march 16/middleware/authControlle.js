const myModel = require("../model/authModel")
const bcrypt = require("bcrypt")

const env = require("dotenv")
env.config()
const cookie=require("cookie-parser")
const jwt = require("jsonwebtoken")


const registerFun = async (req, res ) => {

    const { name, email, password } = req.body
    console.log("register  get Data in req.body", req.body)

    try {

        const alreadyExist = await myModel.findOne({ email })

        if (alreadyExist) {
          return  res.status(201).json({
                success: false,
                message: `uesr already exsist..you cant register from  this mail :${email}`
            })
        }

        const hashPassword = await bcrypt.hash(password, 8)

        const registerDataAdd = await myModel.create({ name, email, password: hashPassword })
        console.log("register Data in database ", registerDataAdd)

        if (registerDataAdd) {
          return  res.status(201).json({
                success: true,
                message: 'user register Successfullly',
                data: registerDataAdd
            })
        }


    } catch (error) {
      return  res.status(201).json({
            success: false,
            message: `register not done successfully...${error.message}`
        })
        console.log("Error in register PAge...", error.message)
    }


}


// log in
const logInFun = async (req, res) => {
    const { email, password } = req.body
    const checkEmail = await myModel.findOne({ email })
    console.log("chechEmail All Data", checkEmail)

   
    try {
        if (!checkEmail) {
            return res.status(400).json({
                success: false,
                message: `email is not exist`

            })
        }
        const comparePass = await bcrypt.compare(password, checkEmail.password)
        if (!comparePass) {
            return res.status(400).json({
                success: false,
                message: `log in password is  correct..`,

            })
        }


         // token 
    const tokenWeb = jwt.sign({ userId: checkEmail.id, userName: checkEmail.name }, process.env.jwtToken)
res.cookie("tokenName",tokenWeb,{maxAge:1000*60*10})
      return  res.status(200).json({
            success: true,
            message: `log in successfullly`,
             data:{
                    name:checkEmail.name,
                    email:checkEmail.email,
                    password:checkEmail.password,
                    token:tokenWeb,
                }

        })
    } catch (error) {
      return  res.status(401).json({
            success: false,
            message: `log in failed...${error.message}`,

        })
        console.log(`error in log in page ${error.message}`)
    }
}

module.exports = {
    registerFun,
    logInFun
}