const add = document.getElementById("add")
const sub = document.getElementById("sub")
const multi = document.getElementById("multiply")

const myForm = document.myForm
const myForm2 = document.myForm2
const myForm3 = document.myForm3
// must create a form to capture the user's input, to store into a variable, and the use later in a function.
// function of button, will return what the operation calls for.
// const form = document.


// creating divs

// divs
const div = document.createElement("div")
const div2 = document.createElement("div")
const div3 = document.createElement("div")

// javascript <p> ekements 
const p = document.createElement("p")
const p2 = document.createElement("p")
const p3 = document.createElement("p")





add.append(div)
div.append(p)

sub.append(div2)
div2.append(p2)

multi.append(div3)
div3.append(p3)

// text content
// p.textContent = "testing div"
// p2.textContent = "test" 


const addButton = document.getElementsByName("addbutton")
// addition
myForm.addEventListener("submit", function(e){
    e.preventDefault()

    const addition1 = myForm.add1.value
    const addition2 = myForm.add2.value
    // clearing after submit
    myForm.add1.value = ""
    myForm.add2.value = ""
    
    p.textContent = parseFloat(addition1) + parseFloat(addition2)
})


// subtraction
myForm2.addEventListener("submit", function(e){
    e.preventDefault()

    const subtraction1 = myForm2.sub1.value
    const subtraction2 = myForm2.sub2.value
    // clearing after submit
    myForm2.sub1.value = ""
    myForm2.sub2.value = ""
    
    p2.textContent = parseFloat(subtraction2) - parseFloat(subtraction1)
})

// multiplication
myForm3.addEventListener("submit", function(e){
    e.preventDefault()

    const multi1 = myForm3.multiply1.value
    const multi2 = myForm3.multiply2.value
    // clearing after submit
    myForm3.multiply1.value = ""
    myForm3.multiply2.value = ""
    
    p3.textContent = multi1 * multi2
})

