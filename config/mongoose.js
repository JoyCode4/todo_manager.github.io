const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/todo_list");

const db=mongoose.connection;

db.on("error",console.error.bind(console,"Error connecting to db"));

db.once("open",()=>{
    console.log("Successfully Connected to database");
})

module.exports = db;