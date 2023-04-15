const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://JoyCode4:joy00004@cluster0.tzsgycv.mongodb.net/test");

const db=mongoose.connection;

db.on("error",console.error.bind(console,"Error connecting to db"));

db.once("open",()=>{
    console.log("Successfully Connected to database");
})

module.exports = db;