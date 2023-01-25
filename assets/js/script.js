const description_input=document.getElementById("description");
const description_block=document.getElementById("description_block");
const category_input=document.getElementById("category")
const category_block=document.getElementById("category_block");
const due_date_input=document.getElementById("due_date");
const due_date_block=document.getElementById("date_block");

// When description input is focuses
description_input.addEventListener("focusin",()=>{
    description_block.classList.add("color_change");
})

description_input.addEventListener("focusout",()=>{
    description_block.classList.remove("color_change");
})

// When category input is focuses
category_input.addEventListener("focusin",()=>{
    category_block.classList.add("color_change");
})

description_input.addEventListener("mouseover",()=>{
    category_block.classList.remove("color_change");
})

// When due_date input is focuses
due_date_input.addEventListener("focusin",()=>{
    due_date_block.classList.add("color_change");
})

due_date_input.addEventListener("focusout",()=>{
    due_date_block.classList.remove("color_change");
})