import express from 'express'

const app=express()

const logger=(req,res,next)=>{
    req.message="Logger";
    next();
}


// app.use(logger);
app.get('/products',logger,(req,res)=>{
    res.send(req.message);
});

app.listen(8080,()=>{
    console.log("Server is running on port 8080")

})