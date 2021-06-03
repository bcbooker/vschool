import React from 'react';

function Badge (props){
    console.log(props)
        
    
    return(
        <div>
           
        <div className="grid">
            <span>
                <strong>First Name</strong>
            </span>

            <span>
                <strong>Last Name </strong>
            </span>

            <span>{props.firstName}</span>
            <span>{props.lastName}</span>

            <span>
                <strong>Email </strong>
            </span>

            <span>
                <strong>Phone</strong>
            </span>

            <span>{props.email}</span>
            <span>{props.phone}</span>

            <span>
                <strong>Place of Birth </strong>
            </span>

            <span>
                <strong>Favorite Food</strong>
            </span>

            <span>{props.poBirth}</span>
            <span>{props.favFood}</span>
            <br></br>

        
            
        </div>
        <h3>{props.info}</h3>
        </div>
        
    )
}

export default Badge