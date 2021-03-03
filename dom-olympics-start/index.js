// h1
var h1 = document.createElement("h1")
h1.textContent = "JavaScript Test"

// append to header to gain style
document.getElementById('header').appendChild(h1);
h1.className = "header";

// h3
var h3 = document.getElementById("headerfooter")

// span for name to corrolate with styling for name class in style.css
h3.innerHTML = '<span class="name">Brandon</span> wrote the JavsScript';
h3.style.textAlign = "center"


// messages
var messages = document.getElementsByClassName("message");

messages[0].textContent = "Testing changing messages 1"
messages[1].textContent = "Testing changing messages 2"
console.log(messages)

// clear button
var clearBtn = document.getElementById("clear-button")
clearBtn.addEventListener("click", function(event){
    console.log("testing the stuff")
    while(messages){
        messages[0].parentNode.removeChild(messages[0]);
        }
        
    })







