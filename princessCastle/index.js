// ************ If the value is 0 call the gotHit() function on the object.  ************
// ************ If the value is 1 call the gotPowerup() function on the object  ************
// ************ If the value is 2 call the addCoin() function  ************

// ************ call the print method on the object. ************
// ************ Now put the random range function inside a setInterval function that ends after gameActive === false ************



let statuss = ["small", "big", "powered Up", "dead"]

class Player {
    constructor() {
        this.setName()
        this.totalCoins = 0
        this.index = 1
        this.status = statuss[this.index]
        this.hasStar = false;
        this.gameOver = false
    }

    // setName function
    setName(namePicked) {
        let number = Math.floor(Math.random() * 2) + 1
        if (number === 1) {
            namePicked = "Mario"
            this.name = namePicked
        } else {
            namePicked = "Luigi"
            this.name = namePicked
        }

        return namePicked
    }

    // powered up function
    // take current array position of status, and only increment by one
    gotPoweredUp = () => {
        this.index = this.index + 1
        this.status = statuss[this.index]
        // let powerUP = this.index[2]
        if (this.index === 2) {
            console.log("You have the Star!")
        }
        return this.index
    }

    // gotHit function
    gotHit = () => {
        this.index = this.index - 1
        this.status = statuss[this.index]
        console.log(`current status of 'this.status' is ${this.status}`)

        return this.index
    }

    // print function
    printS = () => {
        const printName = `Name : ${this.setName()}
Status : ${this.status}
Coins : ${this.totalCoins}

        `
        // console.log(this.setName())
        return printName

    }

    // add coins 
    addCoins = () => {
        this.totalCoins++
        return this.totalCoins
    }



}

getRandomArbitrary = () => {
    //    const num = Math.floor(Math.random() * (max - min) + min)
    const num = Math.floor(Math.random() * 3) + 1
    console.log(num)
    if (num === 2) {
        console.log("the # 2 works")
    }
    if (num === 1) {
        console.log("the #1 works")
    }
    if (num === 3) {
        console.log("the #3 works")
    }
    return num
}

// while(!gameOver) {
//     if(this.status === 'dead'){
//         gameOver = true
//     }
// }

const newPlayer = new Player()
// console.log(newPlayer.gotPoweredUp())
// console.log(newPlayer.addCoins())
console.log(newPlayer.printS())


// console.log(newPlayer.totalCoins)
// console.log(newPlayer.gotPoweredUp())
// console.log(newPlayer.gotHit())

// console.log(newPlayer)
console.log(getRandomArbitrary())


// console.log(newPlayer)
// console.log(this.status)





// *** Change log ***
// gotPoweredUp function working correctly
// added addCoins() function
// added printS() function
// Created a random range function that returns either 0, 1, or 2.  