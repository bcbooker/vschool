import React from 'react';

function Friend(props){
    console.log(props)
    return(
        <div>
            
            <h3>{props.friend.name}</h3>
        
        </div>
    )
}

export default Friend