import express from 'express'

const app=express();
// app.get('/products',(req,res)=>{
//     res.send("<h1>This is the product page of the website</h1>");
// })
// app.get('/',(req,res)=>{
//     // res.send("<h1>This is the home page of the website</h1>");
//     res.json({id:1, name:"Siddharth", age:22});
// })


// app.get("/:name",(req,res)=>{
//     res.send(`Good Morning ${req.params.name}`)
// })



// app.get("/",(req,res)=>{
//     res.send(req.headers.authorization)
// })
// app.get("/name",(req,res)=>{
//     res.send("<h1>Good Morning</h1>")
// })
// app.get("/name/:name/age/:age",(req,res)=>{
//     res.send(req.params.name+ " " + req.params.age)
// })

// localhost:8080/?name=Siddharth&age=22
// app.get("/",(req,res)=>{
//     res.send(req.query.name+" "+req.query.age);
// })

app.get("/",(req,res)=>{
    res.send("get request")
})

app.post("/",(req,res)=>{
    res.send("post request")
})

app.patch("/",(req,res)=>{
    res.send("patch request")
})
app.delete("/",(req,res)=>{
    res.send("delete request")
})

app.listen(8080,()=>{
    console.log("Server is running on ports 8080")

});