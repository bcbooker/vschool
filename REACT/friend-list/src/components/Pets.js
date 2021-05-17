import React from 'react';



function Pet(props){
console.log(props)
    return(
        // Display pets component as a /p
        <div>
            
           <p>{props.name}</p>
           
        </div>
    )

}

export default Pet