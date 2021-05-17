// function collectAnimals(...animals) {  
//     return animals.concat("apples")
// }

// // collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope","platypus"))


// function combineFruit(fruit, sweets, vegetables){
//     return {fruit,sweets,vegetables}
// }

// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"])
//         // {
//         // fruit: ["apple", "pear"];
//         // sweets: ["cake", "pie"];
//         // vegetables: ["carrot"]
//         // }


//      console.log(combineFruit(["apple", "pear"],
//      ["cake", "pie"],["carrot"]))
// // {
// // fruit: ["apple", "pear"];
// // sweets: ["cake", "pie"];
// // vegetables: ["carrot"]
// // }


// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   }
  
  
//   // object deconstruction in parameters
//   parseSentence = ({location,duration}) => {
//     // const {location} = location
//     return `We're going to have a good time in ${location} for ${duration}`
//   }

// //   console.log(vacation)
//   console.log(parseSentence(vacation))


  returnFirst = (items) => {
    // es6 deconstruction of array

    const [firstItem, coolstuff] = items; 

    return firstItem + coolstuff
}

console.log(returnFirst(["magnets", "snowboarding", "philanthropy", "janitor work", "eating"]))

GetElementsByName
// // array saved into variable
// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// // es6 arrow function
// const returnFavorites = (arr) => {
//   // deconstructed array of favorites
//    let [lastFav,firstFav, secondFav, fifthFav, thirdFave] = favoriteActivities
//     return `My top three favorite activities are, ${firstFav}, ${secondFav},and ${thirdFave}`
// }
// console.log(returnFavorites(favoriteActivities))


