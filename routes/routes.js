const express=require('express');
const router=express.Router();
const homeController=require("../controllers/home_contollers")
router.get("/",homeController.home);

console.log("Router is loaded");
module.exports=router;