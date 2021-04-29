// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// event handlers
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);



// functions
// event listener checks for the click on remove-button
// after click on the to-do list div
// todoList listens for a click event
// on click, item becomes the target for the events
// if statement, to 'listen' for if the element clicked on has a classList at array[0] named 'remove-btn'
// assign the todo variable as the parent element
// this then allows us to remove the parent element of remove-btn because its assigned to a variable
function deleteCheck(e){
        const item = e.target;

        //delete 
        if(item.classList[0] === "remove-btn"){
                const todo = item.parentElement;
                todo.remove();
        }
        console.log(item.classList)
}




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
        newTodo.innerText = todoInput.value; // will need to capture input here
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
        removeButton.innerHTML = '<i class="fas fa-trash"></i>';
        
        // add a class to compelted button called 'complete-btn'
        removeButton.classList.add("remove-btn");
        
        //appending button to div
        todoDiv.appendChild(removeButton);


        // append to listener
        todoList.appendChild(todoDiv);

        // clear values
        todoInput.value = "";
        
}



// const xhr = new XMLHttpRequest()
// // the following references xhr(open) parameters:
// // 'the method' // 'the url' // 'do we want async functionality?'
// xhr.open("GET", "https://api.vschool.io/pokemon", true)
// xhr.send()


// xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4 && xhr.status === 200){
//             console.log(xhr.responseText)
//             console.log(typeof xhr.responseText)
    
//             // taking the JSON response data, and setting it to equal the xhr.responsText
//             // then after, taking that JSON data and parsing it-by saving it into a variable called 'data'
//             const JSONdata = xhr.responseText
//             const data = JSON.parse(JSONdata)
//             console.log(data.objects)
//             console.log(data.objects[0].pokemon[0].name)
//             showData(data.objects[0].pokemon)
//         }
//     }


// function showData(arr){
//         // function to loop through the array, and inject the text into the DOM
//         for(let i = 0; i < arr.length; i++){
//         // TodoDiv creation using classList
//         const todoDiv = document.createElement("div");
//         todoDiv.classList.add('todo');
//         // creating LI
//         const newTodo = document.createElement('li');
//         // the text of the newTodo
//         newTodo.innerText = arr[i].name; // will need to capture input here
//         // adding a new class called 'todo-item'
//         newTodo.classList.add('todo-item');

//         //appending newTodo to the todoDiv using appendChild node
//         todoDiv.appendChild(newTodo);



//         //completion button
//         const completedButton = document.createElement('button');

//         // innerHTML to show checkmark
//         completedButton.innerHTML = '<i class="fas fa-check"></i>';

//         // add a class to compelted button called 'complete-btn'
//         completedButton.classList.add("complete-btn");

//         //appending button to div
//         todoDiv.appendChild(completedButton);



//         //remove button
//         const removeButton = document.createElement('button')

//         // innerHTML to show checkmark
//         removeButton.innerHTML = '<i class="fas fa-trash"></i>';
        
//         // add a class to compelted button called 'complete-btn'
//         removeButton.classList.add("remove-btn");
        
//         //appending button to div
//         todoDiv.appendChild(removeButton);


//         // append to listener
//         todoList.appendChild(todoDiv);
//         }
      
      
        
//     }



// stopped @ 36:32