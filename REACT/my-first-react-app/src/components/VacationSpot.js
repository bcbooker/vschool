import React from "react"


function VacationSpot(props){
    const styleDiv = {
        display: 'flex',
        flexDirection: 'column'
    }

    console.log(props)
    return (
        <div >
        <h2 style={{color: "red",marginLeft: "2.1em"}}> Location: {props.spot.place}</h2>
        <p style={{marginLeft: "4.5em"}}>Price: {props.spot.price}</p>
        <p style={{marginLeft: "5.5em"}}>{props.spot.timeToGo}</p>

        </div>
        
    )
}

export default VacationSpot