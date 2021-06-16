import React from "react"
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'



function Character (props) {
    console.log(props)
    const styles = {
        card: {
          backgroundColor: '#B7E0F2',
          borderRadius: 55,
          
        },
        cardImage: {
            objectFit: 'cover',
            borderRadius: 33,
            width: '15vw',
            height: '15vh'
        }
      }

    return(
        <div className="row ">

          
    <Card style={styles.card} className="img-fluid" style={{ width: '25.5rem', height: 'auto'}}>
        <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        
        <Card.Subtitle className="mb-2 text-muted">the one and only {props.name}</Card.Subtitle>
        <Card.Img style={styles.cardImage} className="img-fluid" src={props.image} />
        <Card.Text>
        
        </Card.Text>
        
        
        </Card.Body>
    </Card>

           
         
  
        </div>)


}



export default Character