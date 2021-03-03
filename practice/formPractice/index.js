const form = document["my-form"]


// Submit
form.addEventListener("submit", function(e){
    e.preventDefault()
    // assigned the input box's value as a variable 
    inputbox = form.input.value

    // Grabbing the h1 element
    const h1 = document.getElementById("h1")
    // Setting the text content of the h1 element
    h1.textContent = inputbox

    document.getElementById("h1").append(h1)
})