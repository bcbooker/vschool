// make numbers in given array into double numbers

// function doubleNumbers(arr){
//     const result = arr.map(function(num){
//         return num * 2
        
//     })

//     return result
//   }
  
//   console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]



// function stringItUp(arr){
//   const result = arr.map(function(num){
//       return num.toString()
//   })
//   return result
// }

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]




// function capitalizeNames(arr){
//     const result = arr.map(function(name){
//         return name.toUpperCase()
//     })
//     return result
//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]





//   function namesOnly(arr){
//     const result = arr.map(function(name){
//         return name.name
//     })
//     console.log(result)
//   }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]




  function makeStrings(arr){
    const result = arr.map(function(user){
        if(user.age <= 10){
            // console.log(user.name + " cannot go")
        }
        else {
            return user.name + "  cannot go"
        }
        return user.name + "  Can go to movie"
    })
    return result
    
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["Angelina Jolie can go to The Matrix", 
  // "Eric Jones is under age!!", 
  // "Paris Hilton is under age!!", 
  // "Kayne West is under age!!", 
  // "Bob Ziroll can go to The Matrix"]
  