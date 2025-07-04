import express from 'express';

const app=express();

app.use(express.json());
app.post('/',(req,res)=>{
    res.send(req.body)
})

app.listen(8080,()=>{
    console.log("server is running");
})
