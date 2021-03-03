var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
// var arr = Array.from(alphabet)




function forception(people, alphabet){
    // your code here 
    let newArr = []  
    
    for(i = 0; i < people.length; i++){
        newArr.push(people[i])
        newArr.join(':')
        for(j = 0; j < alphabet.length; j++){
            newArr.push(alphabet[j].toUpperCase())
            // newArr.sort()
        }
        
        // console.log(newArr)
        
    
    }

    return newArr
    
}
console.log(forception(people,alphabet))

// console.log(arr)

// ar = Array.from(alphabet)
// console.log(arr)

// ar2 = people.concat(arr)
// console.log(ar2)

// for(var i = 0; i < people.length; i++){
//     people[i] = people.concat(ar)
    
// }
// console.log(people)


// function forception(people, alphabet){

//         var alpha1 = alphabet.split(' ')
//         return alpha1
        
      
// }

// console.log(forception(people))
