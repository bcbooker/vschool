// 1) Sort an array from smallest number to largest


function leastToGreatest(arr) {
  arr.sort(function(a,b){
      return a - b
  })
  return arr
}

console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90] 



// 2) Sort an array from largest number to smallest



function greatestToLeast(arr) {
  arr.sort(function(a,b){
      return b - a
  })
  return arr
}

console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1] 



// 3) Sort an array from shortest string to longest

function lengthSort(arr) {
  arr.sort(function(a,b){
      return a.length - b.length
  })
  return arr
}

console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"] 


// 4) Sort an array alphabetically



function alphabetical(arr) {
arr.sort(function(a,b){
    return a.localeCompare(b)
})
return arr
}

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"] 
