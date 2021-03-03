var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


vegetables.pop()
console.log("vegatables:", vegetables)

fruit.shift()
console.log("fruit:", fruit)

var indexOrange = fruit.indexOf("orange")
// 
console.log("Orange is index:", indexOrange)

fruit.push(indexOrange)
console.log("fruit:", fruit)

var length = vegetables.length
console.log("Length of vegetables:", length)

vegetables.push(length)
console.log("vegatables:", vegetables)

var food = fruit.concat(vegetables)
console.log(food)

food.splice(4, 2)
console.log(food)

food.reverse()
console.log(food)

var foods = food.join(",")
console.log(foods)