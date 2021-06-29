import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


function Badge (props){
    console.log(props)
        
    
    return(
        <div style={{marginLeft: "10px"}}>
            <br></br>

            <Card style={{ width: '22rem'}}>
            <Card.Title>{props.firstName}, {props.lastName} </Card.Title>
            
            <Card.Body>
                    <Card.Text>
                        <span style={{fontWeight: "bold"}}>Phone</span>: {props.phone}
                            <br></br>
                                <span style={{fontWeight: "bold"}}>Email</span>: {props.email}
                                    <br></br>
                                        <span style={{fontWeight: "bold"}}>Place of Birth</span>: {props.poBirth}
                                            <br></br>
                                                <span style={{fontWeight: "bold"}}>Favorite Food</span>: {props.favFood}
                                                    <br></br>
                                                        <p style={{fontStyle: "italic"}}>{props.info}</p>
                    </Card.Text>
            </Card.Body>
                <Button variant="dark">Submit</Button>
            </Card>
            
         

        
            
        </div>
       
       
        
    )
}

export default Badge