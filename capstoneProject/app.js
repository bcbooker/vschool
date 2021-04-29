// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// event handlers
todoButton.addEventListener('click', addTodo);


// functions
// todoList function(GET)

// addTodo function (POST)
function addTodo(event){
        event.preventDefault();
        console.log("test");

        // TodoDiv creation using classList
        const todoDiv = document.createElement("div");
        todoDiv.classList.add('todo');
        // creating LI
        const newTodo = document.createElement('li');
        // the text of the newTodo
        newTodo.innerText = 'hey'; // will need to capture input here
        // adding a new class called 'todo-item'
        newTodo.classList.add('todo-item');

        //appending newTodo to the todoDiv using appendChild node
        todoDiv.appendChild(newTodo);



        //completion button
        const completedButton = document.createElement('button');

        // innerHTML to show checkmark
        completedButton.innerHTML = '<i class="fas fa-check"></i>';

        // add a class to compelted button called 'complete-btn'
        completedButton.classList.add("complete-btn");

        //appending button to div
        todoDiv.appendChild(completedButton);



        //remove button
        const removeButton = document.createElement('button')

        // innerHTML to show checkmark
        removeButton.innerHTML = '<i class="fas fa-check"></i>';
        
        // add a class to compelted button called 'complete-btn'
        removeButton.classList.add("remove-btn");
        
        //appending button to div
        todoDiv.appendChild(removeButton);


        // append to listener
        todoList.appendChild(todoDiv);
}



// stopped @ 22:36