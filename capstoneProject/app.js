// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// Unorganized variables

// if(arr[i].completed === true){
//         console.log("tewt")
// }



console.log


// todoList.addEventListener('click', checkMark);
// functions
// function clearList(){
//         const el = document.getElementById('todo-list')
//         while(el.firstChild){
//             el.removeChild(el.firstChild)
//         }
//     }
    
// get data
function getData(){
        axios.get("https://api.vschool.io/brandonbooker/todo")
            .then(res => showData(res.data))
            .catch(err => console.log(err))
    }

    getData()
//checkmark
function Check(e, id){

        // if(item.classList.toggle("completed") === true){

        // }
        

        // id = id of the todo item
        // make PUT axios request change the value of completed property
        // axios.put
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

//delete 
function deleteC(e, id){
        const item = e.target;
        console.log(id)

        if(item.classList[0] === "remove-btn"){
                const todo = item.parentElement;
                // console.log(item)
                // animation
                todo.classList.add("fall")
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
                title: todoInput.value , // this one is the only thing that is actually required
                description: "Description here",
                price: 30, // Must be a number of some kind (integer or float)
                completed: false // must be a boolean (true or false). If nothing provided, defaults to false.
            };

            axios.post("https://api.vschool.io/brandonbooker/todo", newTodo)
                .then(res => getData())
                .catch(error => console.log(error))

        // // TodoDiv creation using classList
        // const todoDiv = document.createElement("div");
        // todoDiv.classList.add('todo');
        // // creating LI
        // const newTodo = document.createElement('li');
        // // the text of the newTodo
        // newTodo.innerText = todoInput.value; // will need to capture input here
        // // adding a new class called 'todo-item'
        // newTodo.classList.add('todo-item');

        // //appending newTodo to the todoDiv using appendChild node
        // todoDiv.appendChild(newTodo);



        // //completion button
        // const completedButton = document.createElement('button');

        // // innerHTML to show checkmark
        // completedButton.innerHTML = '<i class="fas fa-check"></i>';

        // // add a class to compelted button called 'complete-btn'
        // completedButton.classList.add("complete-btn");

        // //appending button to div
        // todoDiv.appendChild(completedButton);



        // //remove button
        // const removeButton = document.createElement('button')

        // // innerHTML to show checkmark
        // removeButton.innerHTML = '<i class="fas fa-trash"></i>';
        
        // // add a class to compelted button called 'complete-btn'
        // removeButton.classList.add("remove-btn");
        
        // //appending button to div
        // todoDiv.appendChild(removeButton);


        // // append to listener
        // todoList.appendChild(todoDiv);

        // // clear values
        // todoInput.value = "";
        
}

// what if we try to have the put request listen for if strikedthrough is true for a current div, that it sends to server completed.
//             const JSONdata = xhr.responseText
//             const data = JSON.parse(JSONdata)
//             console.log(data.objects)
//             console.log(data.objects[0].pokemon[0].name)
//             showData(data.objects[0].pokemon)


// GET REQUEST
axios.get("https://api.vschool.io/brandonbooker/todo/")
.then(function(response){
        let todoList = response.data
        // console.log(todoList[0]._id)
        // console.log(todoList[0].title)
        // console.log(todoList[0].completed)
        // console.log(todoList[0].price)
        // console.log(todoList[0].description)
        // showData(todoList)
        
        
        

        for(i = 0; i < todoList.length; i++){
                const id = todoList[i]._id
                console.log(id)

        
        }
        // console.log(todoList[0]._id)
        // console.log(todoList)

})

// const completedTodoMark = {
//        completed: "true"
// }
 // newTodo.addEventListener('click), function(e) copy ^
       todoButton.addEventListener('click', addTodo);
// PUT REQUEST
// axios.put("https://api.vschool.io/brandonbooker/todo/60902463ee6f8d3fc3fed64b", completedTodoMark)
//         .then(response => console.log(response.data))
//         .catch(error => console.log(error))

// How the data will populate in the todoList Table
function showData(arr){
        document.getElementById('removelist').innerHTML = ""
        // function to loop through the array, and inject the text into the DOM
        for(let i = 0; i < arr.length; i++){
                
        // event handlers
      
        // TodoDiv creation using classList
        const todoDiv = document.createElement("div");
        todoDiv.classList.add('todo');
        // creating LI
        const newTodo = document.createElement('li');
        // the text of the newTodo
        newTodo.innerText = arr[i].title; // will need to capture input here
        // adding a new class called 'todo-item'
        newTodo.classList.add('todo-item');
        
        //todoList.addEventListener('click', Check);
        
        
       
     
        
 

        //appending newTodo to the todoDiv using appendChild node
        todoDiv.appendChild(newTodo);

        // Events
      
        
        //completion button
        const completedButton = document.createElement('button');

        // innerHTML to show checkmark
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        
      

        completedButton.addEventListener('click', function(e) {
                Check(e, arr[i]._id)
                

                console.log(`offf ${arr[i]._id}`)
 })

        // add a class to compelted button called 'complete-btn'
        completedButton.classList.add("complete-btn");

        //appending button to div
        todoDiv.appendChild(completedButton);

       


        //remove button
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

    




// stopped @ 36:32
