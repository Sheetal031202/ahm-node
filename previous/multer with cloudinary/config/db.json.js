const mongoose=require("mongoose")
const URI="mongodb://localhost:27017/extraMulter"
mongoose.connect(URI)
.then(()=>console.log("sdatabase connected"))
.catch((e)=> console.log("erro",e))