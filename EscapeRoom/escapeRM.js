const readline = require("readline-sync")

// options
let gameOver = false
 options = ["Find Key", "Put hand in Hole", "Open the door"]


 // game boolean 
 // will continue to run the whileloop until the boolean is toggled off
while(!gameOver){
    const userAnswer = readline.keyInSelect(options, "What would you like to do?")
    console.log("You choose : ", options[userAnswer])

    if(userAnswer === 0){
        console.log("------------------------")
        console.log("Hey, you found the key")
        console.log("You enter the key, and unlock the door! You win!")
        gameOver = true
    }
    if(userAnswer === -1){
        console.log("------------------------")
        console.log("Cancelling")
        gameOver = true
    }

    if(userAnswer === 1){
        // Hand in hole
        console.log("------------------------")
        console.log("You put your hand in the hole and you died!")
        gameOver = true
    }
    
    if(userAnswer === 2){
        console.log("------------------------")
        console.log("Yo, where is the key?")
    }

}
