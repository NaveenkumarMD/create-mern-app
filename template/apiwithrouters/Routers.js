const router=require('express').Router();
router.get("/main",(req,res)=>{
    console.log("done")
    res.send("recieved")
})
module.exports=router