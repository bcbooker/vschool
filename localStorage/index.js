// global variables
const button = document.getElementById(["button"])
const clicks = document.getElementById(["clicks"])

// click variable
let sfclicks = 0;

// onclick function
function onClick() {
  sfclicks ++;
  document.getElementById("clicks").innerHTML = sfclicks;
  localStorage.setItem("amount", sfclicks)
  console.log(amount)
};

// Take 'amount' variable, which has 'sfclicks' data saved into it, and set the 'amount' variable to localStorage
// Inject updated amount into DOM, using text content
const amount = JSON.parse(localStorage.getItem("amount"))
clicks.textContent = amount

// add event listener to button, set function everytime its clicked
button.addEventListener("click",onClick)
