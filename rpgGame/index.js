 /*//////////////////////////////
 Created by Brandon 'visitorq' B
 ///////////////////////////////*/

const prompt = require('readline-sync');
const readlineSync = require('readline-sync');

// key in functionality allows to set a limit within readlinesync

// [ * Player Creation * ]__________________________________________________________________
let player = {
    name: '',
    hp: '300',
    attack: '150',
    inventory: ['M4', 'Pistol'],
}

// const menuOptions = ["Move Foward", "Move Backward","Inventory"]

// [ *Enemies Creation* ]__________________________________________________________________
class Enemy {
    constructor(name,hp, attack){
        this.name = name,
        this.hp = hp
        this.attack = attack
    }
}

const enemy1 = new Enemy('Foolsblood', 100, 50)
const enemy2 = new Enemy('Baneblood', 200, 65)
const enemy3 = new Enemy('Thresh', 300, 400)
const enemies = [enemy1, enemy2, enemy3]


// [ * Game Options * ]____________________________________________________________________
let gameOver = false


// [ Starting the game]

// Asking player for thier name
const inputName = prompt.question("Hello user you're embarking upon an adnventure to the Icewind Vale!, What would you like to be called?")
player.name = inputName
console.log(`Hello there ${player.name}`)



// [ * While game is running * ]  ____________________________________________________________________
while(!gameOver){
   
    function playerDamage(){
        let min = 50;
        let max = 75;
        return Math.floor(Math.random() * (max-min+1)+min)
        }
 
//     function playerPistolDamage(){
//         let min = 35;
//         let max = 45;
//         player.pistolRounds -= 1
//         return Math.floor(Math.random() * (min-max+1)+min)
// }   
    const input = readlineSync.keyIn("What would you like to do? Your choices are : (w) to walk forward, (q) to quit", {limit: 'wq'})
    // create a conditional that executes math.floor in figuring whether or not the user is going to continue walking forward
    
    // walk statement
    if(input === 'q'){
        gameOver = true

    }
    
    if(input === 'w'){
        console.log ("We walking!")
        // this line is taking the whole number of the result from math.random
        // the +1 at the end is to indicate that the function will never hit '0'
        // to change the chance to a 1/2 chance, or 50% chance, change the '*4' to '*2'
        let number = Math.floor(Math.random() * 4) + 1
        if(number === 3){
            console.log("You have been waylaid by enemies, and must defend yourself")
            // calculate the random number here
            //prompt user to check see if they want to fight or not
            const runOrFight = prompt.keyIn("Would you like to run or fight? Press (r) to run, or (f) to fight", {limit: 'fr'})
            
            let attackNumber = Math.floor(Math.random() *2 ) + 1

                                        // ------ RUN SEQUENCE ------ // 
            if (runOrFight === 'r' ){
                console.log("You are choosing to run")

                if(attackNumber === 1)
                console.log("You have escaped!")
                
                if( attackNumber === 2){
                    console.log("You tried to run, but you are fighting")
                    
                    
                }
            }

                                    // ------ FIGHT SEQUENCE ------ // 
           if(attackNumber === 2 || runOrFight === 'f')  { 
                console.log("You are fighting")
                // Have to choose an enemy
                const index = Math.floor(Math.random() *2) // 0 or 1 to reference the enemy index
                let currEnemy = enemies[index]
                // encounter enemy
                console.log(`You have encountered the ${currEnemy.name}`)
                // choose an item in inventory to attack with


                                    // ------ WEAPON CHOICE PROMPT ------ // 
               
                let weaponChoice = prompt.question("You have a choice between an M4, or a Pistol, which weapon would you like to use? (P) for pistol and (M) for M4 : ")
                
                if (weaponChoice === 'm'){
                    console.log(`You are choosing to use a ${player.inventory[0]}`)
                    weaponChoice = player.inventory[0]
                }
                
                if(weaponChoice === 'p'){
                    console.log(`You are choosing to use a ${player.inventory[1]}`)
                    weaponChoice = player.inventory[1]
                }


                // enemy hits user
                                
                    /* -------------------------------------------------------------------
                    Fight sequence will follow :

                    1. user attacks enemy, enemy loses hp
                    2. enemy attacks user, user loses hp
                    3. fight continues until either ones hp is < 0
                    ------------------------------------------------------------------------*/
                
                while(player.hp > 0 && currEnemy.hp > 0){
                    // keep fighting
                    // attack formula for player


                    // random enemy damage calculation
                    currEnemy.hp = currEnemy.hp-playerDamage()
                    console.log(`You have attacked ${currEnemy.name} with your ${weaponChoice}. ${currEnemy.name} now has ${currEnemy.hp}! `)
                    if(currEnemy.hp <= 0){
                        console.log(`You killed ${currEnemy.name}`)
                    }
                    else{
                        player.hp = player.hp - currEnemy.attack
                        console.log(`${currEnemy.name} has attacked you! You now have ${player.hp} hit points!`)
                    }
                }

                if(currEnemy.hp <= 0){
                    player.inventory.push('Revolver')
                    console.log("You gained a REVOLVER for defeating your enemy!")
                    console.log(`Your inventory currently has ${player.inventory}`)
                }

           
                if(player.hp <= 0){
                    gameOver = true
                }    
        }
        

        
    }

}
} 
