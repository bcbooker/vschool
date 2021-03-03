/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/


// Written by Kent, Clark

var Enemies = ["Lex", "Batman" , "Darkseid", "Brainiac", "General Zod", "Doomsday"];

funtion whoWins(isKryptonite,enemyName)
{
    if (!isKryptonite){
        return "Superman beats " + enemyName + ", of course";
    }

    else{
        return "Depends on how quick Superman can get rid of the Kryptonite. "+ enemyName +" could possibly win this one.";
    }
}

for (var i = 0 ; i < enemies.length; i++){
    var isKryptonite:

        if (i % 2 === 0) {
            isKryptonite = true;
        } 

        else {
            isKryptonite = false;
        }
    console.log(WhoWins (isKryptonite,enemies[i]));
}

function HowAttractedIsLoisLaneToMe(){
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random() * 10 ) + 1 );
}

console.log( HowAttractedIsLoisLaneToMe() ) ;

var cKent = true;
var superman false;

while (cKent){
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange >= 0.5 ) {
        cKent = false;
        superman = true;
        console.log("Now I'm Superman!");
    }
}
