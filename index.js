const express=require('express');
const app=express();
const port=8000;

app.listen(port,(err)=>{
    if(err){
        console.log("Error in Express setup....");
    }
    console.log("Server is runnning on port : "+port);
})