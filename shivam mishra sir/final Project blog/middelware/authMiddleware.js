const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{

    const token = req.cookies.token

    if(!token){
        return res.redirect("/")
    }

    const verify = jwt.verify(token,process.env.JWT_SECRET)

    req.user = verify

    next()
}

module.exports = auth