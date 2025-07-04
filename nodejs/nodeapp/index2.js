import fs from "fs";

// fs.appendFile("myfile.txt","Hello world \n",(err)=>{
//     if(err) throw err;
// });

fs.readFile("about.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
});

fs.unlink("myfile.txt",(err)=>{

    if(err) throw err;

});