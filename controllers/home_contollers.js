const { query } = require("express");

let TodoList=[
    {
        description:"Play Football",
        category:"Work",
        due_date:"20-05-2022"
    },
    {
        description:"Study",
        category:"Personal",
        due_date:"02-11-2022"
    },
    {
        description:"Professional Work",
        category:"Other",
        due_date:"02-12-2022"
    }
]

module.exports.home=(req,res)=>{
    return res.render('home',{
        title:"Home",
        todo_list:TodoList
    });
}

module.exports.createTodoList=(req,res)=>{
    TodoList.push({
        description:req.body.description,
        category:req.body.category,
        due_date:req.body.due_date
    })

    return res.redirect("/");
}

module.exports.deleteTodoList=(req,res)=>{
    console.log(req.query.description);
    console.log(req.query);
    // return res.redirect("/");

}



