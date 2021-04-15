// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:
// 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.

// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"
// 2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!



//user object
// const user = {username: "sam", password: "123abc"};

// // login function
// function login(username, password){
//    if(username === user.username && password === user.password){
//        console.log("login successful")

//    }
//    else{
//        throw new Error ("login unsuccessful")
       
//    }
//    return 
// }

// // console.log(login("sasm","123abc"))

// try {
    
//     login("sam","123abc");
// }
// catch(err){
//     console.log(err)
// }
// finally {
//     console.log("Finally block")
//     // console.log(login("sam","123abc"))
// }


// function
function sum(x, y){
   if(Number.isFinite(x) && Number.isFinite(y)){
     console.log("What you entered, is a number")
   }
   else {
       throw new Error ("not succesfful")
   }
    return x + y
  }

// console.log(sum(2,3))

// trying the code block
try {
    
    console.log(sum(1050000,567))

}
// error catch
catch(err){
    console.log(err)
}
// run reguardless
finally{
    console.log("Running the final")
}