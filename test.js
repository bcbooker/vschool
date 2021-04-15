try {
    
    if(2 === 2){
       throw new Error("Hey I am an error!")
    }
    console.log("Did I console log?")
}
catch(err){
    console.log(err)
}
finally {
   console.log("I am running no matter what!") 
}