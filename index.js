const express=require('express');
const db=require("./config/mongoose");
const path=require('path');
const port=8000;
const views_path=path.join(__dirname,"/views");
// const TodoList=require("./models/todo_list");

const app=express();
app.use(express.urlencoded());

// use a middleware for the static files i.e.Css, Js and Images folders
app.use(express.static("./assets"));

// use middleware express router
app.use("/",require("./routes/routes"));

app.set("view engine", "ejs");
app.set("views",views_path);

app.listen(port,(err)=>{
    if(err){
        console.log("Error in Express setup....");
    }
    console.log("Server is runnning on port : "+port);
})