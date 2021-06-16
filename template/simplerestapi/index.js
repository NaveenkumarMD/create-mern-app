const express=require('express');
const app=express()
const port=4000 || process.env.PORT
app.get('/', (req,res)=>{
    res.send("Hello world")
})
app.listen(port,()=>{
    console.log("Api is running successfully at "+port)
})