const readlineSync = require("readline-sync")

var num1 = readlineSync.question('What is the first number? ');
console.log('Number 1 = ',(num1))
var num2 = readlineSync.question('What is the second number? ');
console.log('Number 2 = ',(num2))


var operations = ['add', 'subtract','multiply', 'divide'], 
index = readlineSync.keyInSelect(operations, 'What do you want to do?');
console.log('You choose, ' + operations[index])

let result = num1 + num2
// functions
function add(num1,num2){
    if (operations[index] === 'add') {
    return result = Number(num1) + Number(num2)
}
}

// only invokes if 'add' is selected
if (operations[index] === 'add') {
    console.log('The answer is', add(num1,num2))
}


function subtract(num1,num2){
    if (operations[index] === 'subtract') {
        return result = Number(num1) - Number(num2)
}

}

if (operations[index] === 'subtract') {
    console.log('The answer is', subtract(num1,num2))
}

function multiply(num1,num2){
    if (operations[index] === 'multiply') {
    return result = Number(num1) * Number(num2)
}
}

if (operations[index] === 'multiply') {
    console.log('The answer is', multiply(num1,num2))
}

function divide(num1,num2){
    if (operations[index] === 'divide'){
        return result = Number(num1) / Number(num2)
    }
}

if (operations[index] === 'divide'){
    console.log('The answer is', divide(num1,num2))
}



