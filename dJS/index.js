let box = document.getElementById("box1")


// Event listeners
window.addEventListener("keydown", function( event ){
    if (event.key === 'r'){
    box.style.backgroundColor = "red";
    }
})

window.addEventListener("keydown", function( event ){
    if (event.key === 'b'){
    box.style.backgroundColor = "blue";
    }
})

window.addEventListener("keydown", function( event ){
    if (event.key === 'g'){
    box.style.backgroundColor = "green";
    }
})

window.addEventListener("keydown", function( event ){
    if (event.key === 'y'){
    box.style.backgroundColor = "yellow";
    }
})

window.addEventListener("keydown", function( event ){
    if (event.key === 'o'){
    box.style.backgroundColor = "#FF8C00";
    }
})



// mouse-over events
box.addEventListener("mouseover", function( event ){
    document.getElementById("box1").style.backgroundColor = "blue";
})

box.addEventListener("mousedown", function( event ){
    document.getElementById("box1").style.backgroundColor = "red";
})

box.addEventListener("mouseup", function( event ){
    document.getElementById("box1").style.backgroundColor = "yellow";
})

box.addEventListener("mouseout", function( event ){
    document.getElementById("box1").style.backgroundColor = "tan";
})

box.addEventListener("dblclick", function( event ){
    document.getElementById("box1").style.backgroundColor = "green";
})

window.addEventListener("wheel", function( event ){
    document.getElementById("box1").style.backgroundColor = "#FF8C00";
})

