var hello = "HelLo"
// var hello2 = "hello"


function upperCaseChange(hello){
    for(i = 0; i< hello.length; i++){
        hello = hello.toUpperCase()
        var hello2 = "hello"
        hello2 = hello2.toLowerCase()
        
    }
    return hello + hello2
}

console.log(upperCaseChange(hello))

var string = "candy apples"

function middleIndex(string){
    var middle = string.indexOf('a',5);
    middle = Math.floor(middle)
    return middle
}

console.log(middleIndex(string))

function cuttingPieces(string){
    var cut = string.slice(0,5)
    return cut
}

console.log(cuttingPieces(string))


function allTogether(string){
    var begin = string.slice(0,5)
    begin = begin.toUpperCase()
    var end = string.slice(6)
    end = end.toLowerCase()
    
    return begin + " " + end
}

console.log(allTogether(string))