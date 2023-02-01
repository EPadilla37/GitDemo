const list = document.getElementById('list'); 
const form = document.getElementById('TodoForm'); 
const clearAll = document.getElementById('clearAll');

//Parse in from local storage and creates li elements
const savedTasks = JSON.parse(localStorage.getItem("todos")) || [];
for(let i = 0; i < savedTasks.length; i++){ 
    let currentTodo = document.createElement("li"); 
    currentTodo.classList.add("list-task"); 
    currentTodo.innerText = savedTasks[i].task; 
    currentTodo.isCompleted = savedTasks[i].isCompleted ? true : false; 
    let removeBtn = document.createElement("button"); 
    removeBtn.innerText = "X"; 

    if(currentTodo.isCompleted){
        currentTodo.style.textDecoration = "line-through"; 
    }
    
    list.appendChild(currentTodo);
    currentTodo.appendChild(removeBtn);  
}

form.addEventListener("submit", function(e){
    e.preventDefault(); 
    let currentTodo = document.createElement("li"); 
    let taskValue = document.getElementById("task").value; 
    let removeBtn = document.createElement("button"); 
    removeBtn.innerText = "X" ; 
    currentTodo.innerText = taskValue; 
    currentTodo.isCompleted = false; 
    form.reset(); 
    list.appendChild(currentTodo); 
    currentTodo.appendChild(removeBtn); 

    savedTasks.push({task: currentTodo.innerText, isCompleted: false}); 
    localStorage.setItem("todos", JSON.stringify(savedTasks)); 
})


clearAll.addEventListener("click", function(e){
    window.localStorage.clear(); 
    document.reload();
})

//Adds functionallity for list items 
list.addEventListener("click", function(e){ 
    let itemClicked = e.target; 
    console.log("item clicked" + itemClicked.isCompleted); 
    let keySearch = itemClicked.innerText; 
    

    if(!itemClicked.isCompleted){
        console.log(`savedTasks is ${savedTasks[0].isCompleted}`);
        itemClicked.style.textDecoration = "line-through";
        itemClicked.isCompleted = true;  
        
        for(let i = 0; i < savedTasks.length; i++){ 
            if(itemClicked.innerText === savedTasks[i].task){ 
                savedTasks[i].isCompleted = true; 
            }
        }

    } else{ 
        itemClicked.style.textDecoration = "none"; 
        itemClicked.isCompleted = false;

        for(let j=0; j < savedTasks.length; j++){
            if(itemClicked.innerText === savedTasks[j].task){
                savedTasks[j].isCompleted = false;
            }
        }
         
    }
    const targetButton = e.target.tagName.toLowerCase(); 
    if(targetButton === "button"){
        e.target.parentNode.remove(); 
    }
    
    window.localStorage.clear(); 
    localStorage.setItem("todos", JSON.stringify(savedTasks));
})