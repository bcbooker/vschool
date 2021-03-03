const add = document.getElementById("add")

const div = document.createElement("div")
const p = document.createElement("p")


add.append(div)
div.append(p)
p.textContent = "testing div"
// div.innerHTML = "<br></br>This is a test of JAVASCRIPT!"
// div.textContent = "This is a test of JAVASCRIPT!"