const description_input=document.getElementById("description");
const description_block=document.getElementById("description_block");
const category_input=document.getElementById("category")
const category_block=document.getElementById("category_block");
const due_date_input=document.getElementById("due_date");
const due_date_block=document.getElementById("date_block");
const delbtn = document.getElementById("delete_btn");
// const cat_color=document.getElementById("category_color_label");
const task_cat=document.querySelectorAll(".task_category");
console.log(task_cat);



document.addEventListener("click",(e)=>{
    // when Description input is selected
    if(e.target==description_input){
        description_input.style.backgroundColor="rgb(137, 198, 236)";
        description_block.style.backgroundColor="rgb(137, 198, 236)";
    }
    // when Category input is selected
    else if(e.target==category_input){
        category_input.style.backgroundColor="rgb(137, 198, 236)";
        category_block.style.backgroundColor="rgb(137, 198, 236)";
    }
    // when Due_date input is selected
    else if(e.target==due_date_input){
        due_date_input.style.backgroundColor="rgb(137, 198, 236)";
        due_date_block.style.backgroundColor="rgb(137, 198, 236)";
    }
    // when Not Selected
    else{
        description_input.style.backgroundColor="#fff";
        description_block.style.backgroundColor="#fff";
        category_input.style.backgroundColor="#fff";
        category_block.style.backgroundColor="#fff";
        due_date_input.style.backgroundColor="#fff";
        due_date_block.style.backgroundColor="#fff";
    }
})

document.addEventListener("DOMContentLoaded",(e)=>{
    for(let i of task_cat){
        console.log(i.innerText);
        if(i.innerText == "personal" || i.innerText == "Personal"){
            i.style.backgroundColor="purple";
        }
        else if(i.innerText == "Work" || i.innerText == "work"){
            i.style.backgroundColor="orange";
        }
        else if(i.innerText == "School" || i.innerText == "school"){
            i.style.backgroundColor="brown";
        }
        else if(i.innerText == "Cleaning"){
            i.style.backgroundColor="blue";
        }
        else{
            i.style.backgroundColor="white";
            i.style.border="none";
        }
    }
})


let data=document.querySelectorAll(".checkbox");
let url="";
for(let i=0;i<data.length;i++){
    data[i].addEventListener("click",()=>{
        if(data[i].checked){
            url+=data[i].value+"%";
            delbtn.setAttribute("href","/delete-todo/?id="+url);
            console.log(delbtn);
        }
        
    })
}