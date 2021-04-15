// 1) Turn an array of numbers into a total of all the numbers

function total(arr) {
   const result = arr.reduce(function(final, num){
       final += num
    
       return final
       
   })
   return result
   
}

console.log(total([1,2,3])); // 6


function stringConcat(arr) {
    const result = arr.reduce(function(final,num){
        final += num.toString()


        return final
    })
    return result
 }
 
 console.log(stringConcat([1,2,3])); // "123"


 function flatten(arr) {
     let test = 2
    const result = arr.reduce(function(final, array){
       return final.concat(array)

    })   

    return result
 }
 
 let arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];