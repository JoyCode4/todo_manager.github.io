const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);

const db=mongoose.connection;

db.on("error",console.error.bind(console,"Error connecting to db"));

db.once("open",()=>{
    console.log("Successfully Connected to database");
})

module.exports = db;