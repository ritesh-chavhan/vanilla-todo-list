let todos = [];

function createTodo(event){
    if(document.getElementById('Todo-input').value == '')alert ('please enter any todo')
    event.preventDefault();
    console.log(document.getElementById('Todo-input').value);
    todos.push(document.getElementById('Todo-input').value);
    console.log(todos);
    displaydata();
    document.getElementById('Todo-input').value = ''
}

function displaydata(){
     let list = document.getElementById('list')
     list.innerHTML= "";
    for(let i=0; i<todos.length; i++){
    let todo = document.createElement('div')
    let paragraph = document.createElement('p')
    let  deletebutton = document.createElement('button');
    deletebutton.innerText = '✖';
    deletebutton.className= 'delete-button'
    deletebutton.addEventListener('click', function() {
      todos.splice(i, 1);  
      displaydata();       
    });
     deletebutton.addEventListener('mouseenter', function() {
     deletebutton.style.cursor = 'pointer'      
    });
    paragraph.innerText = todos[i];
    todo.className = 'todo';
    todo.appendChild(paragraph);
    todo.appendChild(deletebutton);
    list.appendChild(todo);
    }
}





