function testmiddleware(req,res,next){
    console.log("Naveekumar")
    next()
}
module.exports=testmiddleware