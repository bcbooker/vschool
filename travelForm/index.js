const form = document.myForm;
const submit = document.getElementById("submit");


function formAlert(){
    const firstName = form.elements["firstName"].value;
    const lastName = form.elements["lastName"].value;
    const age = form.elements["age"].value;
    const gender = form.elements["gender"].value;

    let diet = [];
    if (form.elements['vegan'].checked){
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked){
        diet.push(document.getElementById("gluten").value);
    }
    if (form.elements["paleo"].checked){
        diet.push(document.getElementById("paleo").value);
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nDiet: " + diet);
}



submit.addEventListener("click", formAlert);






// ----------------------------------------------------------------
// You just started your own airline, and you need to create a form to collect data about your passengers' upcoming travel plans so they can book their flight.

// You should collect the following information from the user:

// First name (text input)

// Last name (text input)

// Age (number input)

// Gender (radio buttons with 2 or more options)

// Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)

// Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)

// Each element of the form should be given a name attribute so you can access the data in JavaScript and do stuff with it.


// TODO

// its OKAY to grab the elements OFF of the form and create a function.

// There should also be a button at the end of the form to submit it. 
// ---------------------------------------------------------
// - grab and assign form
// grab and assign submit button
// create function with all form fields set as variables

// designate all form values as variables
// var firstName = form.elements["firstName"].value; -- using bracket syntax as practice to grab all elements

// finda working functionaility for radio button
// considering grabbing the value directly from the DOM

// for radio button for gender, create an array cycles through the array of options for radio button

// functionaity for diet restriction should include pushing values into an new, empty array

// consider using if statement, to check and if each element is .checked and push that value into the empty array

// alert syntx :
// '/n' - syntax is a new line for the alert

//     alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");


// add event listener to submit button
// form.addEventListener("submit", functionName);