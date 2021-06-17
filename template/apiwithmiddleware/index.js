const express=require('express')
const app=express()
const port=4000 || process.env.PORT
app.use(require('./Routers/Testrouter'))
app.use(express.json())
app.listen(port,()=>{
    console.log("Server is running successfully at "+port)
})