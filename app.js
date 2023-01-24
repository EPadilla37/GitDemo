document.addEventListener('DOMContentLoaded', function(){
    let todoInput = document.querySelector('.input'); 
    let submitBtn = document.querySelector('.submit-btn');
    let olList = document.querySelector('#list');  


    submitBtn.addEventListener('click', function(){
        let newLi = document.createElement('li');
        let inputText = todoInput.value; 
        newLi.innerText = inputText; 
        newLi.classList.add('list-item');
        olList.appendChild(newLi);

        let exitBtn = document.createElement('button'); 
        exitBtn.classList.add("exit-btn"); 
        exitBtn.innerText = "X"

        newLi.appendChild(exitBtn);


        todoInput.value = "";
    })

    olList.addEventListener('click', function(e){
        let target = e.target.tagName;
        console.log(target);
        if(target === "LI"){
            e.target.style.textDecoration = "line-through";
        }else if(target === "BUTTON "){
            e.target.parentNode.remove();
        }
         
    })
})


function testFunction(){
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    for(let i =0; i <savedTodos.length; i++){
        let newTodo = document.createElement('li'); 
        newTodo.innerText = savedTodos[i].task;
        newTodo.isCompleted = savedTodos[i].isCompleted ? true:false;

        if(newTodo.isCompleted){
            newTodo.style.textDecoration = "line-through"; 
        }
        todoList.appendChild(newTodo);
    }
}