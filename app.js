const list = document.getElementById('list'); 
const form = document.getElementById('TodoForm'); 

const savedTasks = JSON.parse(localStorage.getItem("todos")) || [];

for(let i = 0; i < savedTasks.length; i++){ 
    let currentTodo = document.createElement("li"); 
    currentTodo.classList.add("list-task"); 
    currentTodo.innerText = savedTasks[i].task; 
    currentTodo.isCompleted = savedTasks[i].isCompleted ? true : false; 

    if(currentTodo.isCompleted){
        currentTodo.style.textDecoration = "line-through"; 
    }
    list.appendChild(currentTodo); 
}

form.addEventListener("submit", function(e){
    e.preventDefault(); 
    let currentTodo = document.createElement("li"); 
    let taskValue = document.getElementById("task").value; 
    currentTodo.innerText = taskValue; 
    currentTodo.isCompleted = false; 
    form.reset(); 
    list.appendChild(currentTodo); 

    savedTasks.push({task: currentTodo.innerText, isCompleted: false}); 
    localStorage.setItem("todos", JSON.stringify(savedTasks)); 
    console.log(savedTasks);
})

list.addEventListener("click", function(e){ 
    let itemClicked = e.target; 

    if(!itemClicked.isCompleted){
        itemClicked.style.textDecoration = "line-through";
        itemClicked.isCompleted = true; 
    } else{ 
        itemClicked.style.textDecoration = "none"; 
        itemClicked.isCompleted = false; 
    }
})