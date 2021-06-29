import React from 'react'
import Button from  'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function CardCom(props) {

    return(
        <div>
                             
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                {/* <Card.Title>{`${this.props.}  ${this.state.lastName}`}</Card.Title> */}
                                    <Card.Text>
                                        {/* <p>Your age: {this.props.Age}</p> */}
                                        <p>{props.name}</p>
                                        {/* <p>Your gender: {this.state.gender}</p> */}
                                        {/* <p>Your destination: {this.state.location}</p>
                                        <br />
                                        Your dietary restrictions: 
                                        <p>Vegan : {this.state.vegan ? "Yes" : "No"}</p>
                                        <p>Paleo : {this.state.paleo ? "Yes" : "No"}</p>
                                        <p>Carb Free : {this.state.carbfree ? "Yes" : "No"}</p> */}

                                    </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                </Card>
        </div>
    )

}


export default CardCom