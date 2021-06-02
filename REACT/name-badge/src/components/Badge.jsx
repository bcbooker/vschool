import React from 'react';

function Badge (props){
    console.log(props)
        
    
    return(
        <div>
            <h1 >
                Name: {props.firstName}
             </h1>

             <h1> Last Name : {props.lastName}</h1>

             <p>{props.email}</p>
             <p>{props.phone}</p>
             <p>{props.poBirth}</p>
             <p>{props.favFood}</p>
             <p>{props.info}</p>
        </div>
    )
}

export default Badge