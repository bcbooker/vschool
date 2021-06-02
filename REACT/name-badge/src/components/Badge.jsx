import React from 'react';

function Badge (props){
    console.log(props)
        
    
    return(
        <div>
            <h1 >
                Name: {props.firstName}
             </h1>

             <h1> Last Name : {props.lastName}</h1>
        </div>
    )
}

export default Badge