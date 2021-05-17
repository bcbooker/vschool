// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// Unorganized variables


// functions
    
// GET DATA
function getData(){
        axios.get("https://api.vschool.io/brandonbooker/todo")
            .then(res => showData(res.data))
            .catch(err => console.log(err))
    }

// show data
getData()

// CHECKMARK - COMPLETION
function Check(e, id){
        console.log(id)
        const item = e.target;
        
        // console.log(item.classList)
        // do the put request here
        // then update the values
        // completed
        if(item.classList[0] === "complete-btn"){
                const todo = item.parentElement;
                console.log(todo)

                todo.classList.toggle("completed");
                // console.log(todo.classList)
        }

        if(item.classList.toggle("completed") === false){
                console.log("hello")
                axios.put("https://api.vschool.io/brandonbooker/todo/" + id, {completed: false})
                        .then(response => console.log(response.data))
                        .catch(error => console.log(error))
        }
        else {
                axios.put("https://api.vschool.io/brandonbooker/todo/" + id, {completed: true})
                        .then(response => console.log(response.data))
                        .catch(error => console.log(error))
                        console.log("goodbye")
        }
}

// DELETE
function deleteC(e, id){
        const item = e.target;
        console.log(id)

        if(item.classList[0] === "remove-btn"){
                const todo = item.parentElement;
                // console.log(item)
                // becomes part of the 'fall' animation classList
                todo.classList.add("fall")
                // eventlistener to wait until the animation has 'transitioned', execute the requirements of the function
                todo.addEventListener('transitionend',function(){
                        //execute removing the element after the animation has transitioned
                        axios.delete("https://api.vschool.io/brandonbooker/todo/" + id)
                        todo.remove();
                })
        }
}

// addTodo function (POST)
function addTodo(event){
        event.preventDefault();
        console.log("test");

        const newTodo = {
                title: todoInput.value , 
                description: "Description here", // will add more fields later 
                price: 30, // will add more fields later 
                completed: false // must be a boolean (true or false). If nothing provided, defaults to false.
            };

            axios.post("https://api.vschool.io/brandonbooker/todo", newTodo)
                .then(res => getData())
                .catch(error => console.log(error))
}

// GET REQUEST
axios.get("https://api.vschool.io/brandonbooker/todo/")
.then(function(response){
        let todoList = response.data
        // console.log(todoList[0]._id)
        // showData(todoList)

        for(i = 0; i < todoList.length; i++){
                const id = todoList[i]._id
                console.log(id)
        }
})

// event handler
todoButton.addEventListener('click', addTodo);

// show data
function showData(arr){
        document.getElementById('removelist').innerHTML = ""
        // function to loop through the array, and inject the text into the DOM
        for(let i = 0; i < arr.length; i++){
                
       
        // TodoDiv creation using classList
        const todoDiv = document.createElement("div");
        todoDiv.classList.add('todo');
        // creating LI
        const newTodo = document.createElement('li');
        // the text of the newTodo
        newTodo.innerText = arr[i].title; // will need to capture input here
        // adding a new class called 'todo-item'
        newTodo.classList.add('todo-item');
        
        //appending newTodo to the todoDiv using appendChild node
        todoDiv.appendChild(newTodo);

        //COMPLETION BUTTON
        const completedButton = document.createElement('button');

        // innerHTML to show checkmark
        completedButton.innerHTML = '<i class="fas fa-check"></i>';

        // event listener for completion button
        completedButton.addEventListener('click', function(e) {
                Check(e, arr[i]._id)
                console.log(`offf ${arr[i]._id}`)
        })

        // add a class to compelted button called 'complete-btn'
        completedButton.classList.add("complete-btn");

        //appending button to div
        todoDiv.appendChild(completedButton);

        //REMOVE BUTTON
        const removeButton = document.createElement('button')

        removeButton.addEventListener('click', function(e){
                deleteC(e, arr[i]._id)
        })

        // innerHTML to show checkmark
        removeButton.innerHTML = '<i class="fas fa-trash"></i>';
        
        // add a class to compelted button called 'complete-btn'
        removeButton.classList.add("remove-btn");
        
        //appending button to div
        todoDiv.appendChild(removeButton);


        // append to listener
        todoList.appendChild(todoDiv);
        
        
        }

        // clear values
        todoInput.value = "";


    }


    // user rereshes page must show that the completed is style properly
    