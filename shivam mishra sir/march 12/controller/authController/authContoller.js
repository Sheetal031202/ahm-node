const myModel=require("../../model/authModel")
const bcrypt=require("bcrypt")


const register=async(req,res)=>{

    const{name , email , password}=req.body
    try {
        // user exist chee ke nay
        const emailExist=await myModel.findOne({email})
        if(emailExist){
            return res.json({
                success:false,
                message:"user already exist"
            })
        }

        // password bycryplt karvano
        const hashPassword=await bcrypt.hash(password,8)

        // add Data
        const addData=await myModel.create({name,email,password:hashPassword})
        if(addData){
            res.status(201).json({
                success:true,
                message:"User created...",
                data:addData
            })
        }
    } catch (error) {
         res.status(401).json({
                success:false,
                message:`User not  created...${error}`
            })
    }

}



module.exports={register}