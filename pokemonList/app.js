const xhr = new XMLHttpRequest()
    // the following references xhr(open) parameters:
    // 'the method' // 'the url' // 'do we want async functionality?'
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

// we are creating a function that checks the xh 'onreadystatechange'
// inside that function, we are creating an 'if' statement, that checks to see the status of what code 'xhr.readystate' and 'xhr.statys' returns

// xhr.readyState  
    // 1    [OPENED] -	open() has been called.
    // 2    [HEADERS_RECEIVED] -	send() has been called, and headers and status are available.
    // 3	[LOADING] -	Downloading; responseText holds partial data.
    // 4	[DONE] -	The operation is complete.

    
// xhr.status
    // 200 [The request has succeeded. The meaning of the success depends on the HTTP method:]
    // 404 - [Not Found]
    // 201 [The request has succeeded and a new resource has been created as a result. This is typically the response sent after POST requests, or some PUT requests.]
    // 500 [The server has encountered a situation it doesn't know how to handle.]

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        console.log(xhr.responseText)
        console.log(typeof xhr.responseText)

        // taking the JSON response data, and setting it to equal the xhr.responsText
        // then after, taking that JSON data and parsing it-by saving it into a variable called 'data'
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        console.log(data.objects)
        console.log(data.objects[0].pokemon[0].name)
        showData(data.objects[0].pokemon)
    }
}

function showData(arr){
    // function to loop through the array, and inject the text into the DOM
    for(let i = 0; i < arr.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
    }
  
  
    
}