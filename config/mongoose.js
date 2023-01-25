const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0/todo_list");

const db=mongoose.connection;

db.on("error",console.error.bind(console,"Error connecting to db"));

db.once("open",()=>{
    console.log("Successfully Connected to database");
})