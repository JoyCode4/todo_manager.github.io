const express=require('express');
const router=express.Router();
const homeController=require("../controllers/home_contollers")
router.get("/",homeController.home);
router.post("/create-todo",homeController.createTodoList);
router.get("/delete-todo",homeController.deleteTodoList);

console.log("Router is loaded");
module.exports=router;