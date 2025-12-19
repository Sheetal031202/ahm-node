const http=require("http")
const PORT=8000
const server=http.createServer((req,res)=>{
    res.end("welcome to my server")
})

server.listen(PORT,()=>{
    console.log(`server is running at  ${PORT} port`)
})