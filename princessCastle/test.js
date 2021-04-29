setName = (namePicked) => {
    let number = Math.floor(Math.random() *2 ) + 1
    if(number === 1){
        namePicked = "Mario"
    }
    else {
        namePicked = "Luigi"
    }
    
    return namePicked
    
}

console.log(setName())