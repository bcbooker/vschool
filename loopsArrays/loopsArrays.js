// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// var counter = 0
// for(i = 0; i < officeItems.length; i++){
//     if(officeItems[i] === "computer"){
//         counter++
//     }
    
// }

// console.log(counter)


var seeingMovie = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },
    {
      name: "Madeline",
      age: 80,
      gender: "female"
    },
    {
      name: "Cheryl",
      age: 22,
      gender: "female"
    },
    {
      name: "Sam",
      age: 30,
      gender: "male"
    },
    {
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for(i = 0; i < seeingMovie.length; i++){
      if(seeingMovie[i].age < 18){
          console.log(seeingMovie[i].name + " Is old enough to see said movie" + "dont let")
      }
      else(console.log(seeingMovie[i].name + " Isn't old enough to see said movie"))
  }