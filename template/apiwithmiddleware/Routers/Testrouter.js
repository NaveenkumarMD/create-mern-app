const testrouter=require('express').Router()
const testmiddleware=require('../Middlewares/Testmiddleware')
testrouter.get("/",testmiddleware,(req,res)=>{
    res.send("Hello world")
})
module.exports=testrouter