const express=require('express')
const app=express()
const port=4000 || process.env.PORT
app.use(require('./Routers'))
app.listen(port,()=>{
    console.log("App is running at "+ port)
})