const form = document.addItem

//submit
form.addEventListener("submit", function (e){
    e.preventDefault();

// form input capture
const addItemInput = form.title

console.log(addItemInput)

// setting list into a variable
let myList = document.getElementById("list")

// creating elements li,div,edit button, and delete button
const li = document.createElement("li")
const div = document.createElement("div")
const editBtn = document.createElement("button")
const deleteBtn = document.createElement("button")



// appending the li element to the list (myList)
myList.append(li)

// edit & delete button
editBtn.innerHTML = "Edit"
deleteBtn.innerHTML = "X"


// appending div,edit button, and delete button to the li
li.append(div,editBtn,deleteBtn)

// setting the text content of what the <div> should show for item entered
div.textContent = addItemInput.value


deleteBtn.addEventListener("click", function (e){
    // to see what the li element looks like
    console.log(li)
    // removing the child of the li
    myList.removeChild(li)

})

})


