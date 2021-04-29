// variables
let name = "John"
let age = 101

// function for assigning pets
function runForLoop(pets) {
    let petObjects = []
    for (var i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

// array saved in variable
const carrots = ["bright orange", "ripe", "rotten"]

// es6 function to map through vegetables
mapVegetables = (arr) => {
    return arr.map((carrot) => {
        return { type: "carrot", name: carrot };
    })
}

// array of objects of people
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

// es6 function to filter through object of people
filterForFriendly = (arr) => {
    return arr.filter((person) => {
        return person.friendly
    })
}

// es6 math function
const doMathSum = (a, b) => a + b

// result
console.log(doMathSum(3,2))



// es6 multiplication function
const produceProduct = (a, b) => {
    return a * b
}
console.log(produceProduct(3,5))


// Task 4
// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

// Hi Kat Stark, how does it feel to be 40?
// firstName should default to "Jane"
// lastName should default to "Doe"
// age should default to 100

// es6 function to print names and a string using template literals
const printString = (firstName = "Jane", lastName = "Doe", age = 100) => {
    firstName = "Kat"
    lastName = "Stark"
  return  `hi ${firstName} ${lastName}, how does it feel to be ${age-20}?`
}

console.log(printString())