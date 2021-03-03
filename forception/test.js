var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var alphaArr = alphabet.split('')
var together = alphaArr.concat(people)
var pushed = people.push(together)


console.log(together)
console.log(pushed)


