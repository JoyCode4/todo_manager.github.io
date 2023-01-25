const express=require('express');
const db=require("./config/mongoose");
const path=require('path');
const port=8000;
const views_path=path.join(__dirname,"/views");
// const TodoList=require("./models/todo_list");
const todoList = require("./models/todo_list");
const { create } = require('./models/todo_list');
const app=express();
app.use(express.urlencoded());

// use a middleware for the static files i.e.Css, Js and Images folders
app.use(express.static("./assets"));

app.set("view engine", "ejs");
app.set("views",views_path);
/*
let TodoList=[
    {
        description:"Play Football",
        category:"Work",
        due_date:"20-05-2022",
        boolean:true
    },
    {
        description:"Study",
        category:"Personal",
        due_date:"02-11-2022",
        boolean:true
    },
    {
        description:"Professional Work",
        category:"Other",
        due_date:"02-12-2022",
        boolean:true
    }
]
*/
app.get("/",(req,res)=>{
    todoList.find({},(err,newTodo)=>{
        if(err){
            console.log("Error in fetching");
            return ;
        }
        return res.render('home',{
            todo_list:newTodo
        });
    })
});

app.post("/create-todo",(req,res)=>{
    // TodoList.push({
        // description:req.body.description,
        // category:req.body.category,
        // due_date:req.body.due_date
    // })

    todoList.create({
        description:req.body.description,
        category:req.body.category,
        due_date:req.body.due_date
    },(err,newTodo)=>{
        if(err){
            console.log("Err in creating a Todo");
            return;
        }
        console.log("*******",newTodo);
        return res.redirect("/");
    })

})

app.get("/delete-todo",(req,res)=>{
    let ids=req.query.id;
    let arrIds=ids.split("%");
    arrIds.pop();
    console.log(arrIds);
    for(let id of arrIds){
        todoList.findByIdAndDelete(id,(err)=>{
            if(err){
                console.log("Error on deleting Error : "+err);
                return;
            }else{
                console.log("Successfully deleted id : "+id);
            }
        })
    }
    return res.redirect("/");
});


app.listen(port,(err)=>{
    if(err){
        console.log("Error in Express setup....");
    }
    console.log("Server is runnning on port : "+port);
})