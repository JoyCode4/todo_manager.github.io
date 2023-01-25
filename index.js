const express=require('express');
const app=express();
const port=8000;

// use middleware express router
app.use("/",require("./routes/routes"));

app.listen(port,(err)=>{
    if(err){
        console.log("Error in Express setup....");
    }
    console.log("Server is runnning on port : "+port);
})