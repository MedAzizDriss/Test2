import React from 'react'
import image4 from'./Media/cardw1.jpg'
import {Button,Card} from 'react-bootstrap'

const Cards = (props) => {
    return (
        <div >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                       {props.description}
                    </Card.Text>
                    <Button variant="primary">Buy now</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
Cards.defaultProps={
        name:'shirt',
        description:'T-Shirt for all sizes available in all of our stores',
        image:image4
}

export default Cards
