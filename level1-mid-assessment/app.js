/*

    Objective no. 1: Using the form, append <li></li> list items to the <ul></ul> on the DOM. The text content of each list item should be the text you enter into the first name and last name input fields. When you submit each name, clear the input fields so that they're blank again.

    Objective no. 2: Using an event listener, make it so that when you click on the orange box, it changes the color to red. Extra credit: After you change it to red, make it change back to orange when you click on it again.

*/

const form = document.form

//submit button
form.addEventListener("submit", function (e){
    e.preventDefault();

// list
let myList = document.getElementById("list")

// creating li & div
const div = document.createElement("div")
const li = document.createElement("li")


// appending list   
myList.appendChild(li)
myList.append(div)



// form input variables
const addFirstName = form.firstName
const addLastName = form.lastName

// setting text context of the newly created input divs
// div text must be inside li to match bullet
li.textContent = addFirstName.value + "  " + addLastName.value

console.log(addFirstName)
console.log(addLastName)



})
