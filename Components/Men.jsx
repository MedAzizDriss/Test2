import React from 'react'
import { menc } from './Data/Data'
import { useState, useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import Cards from './Card'
import rojla from'./Media/c2.jpg'

const Men = () => {
    const [clothes, setclothes] = useState([])
    useEffect(() => {
        setclothes(menc)
    }, [])
    return (
<div>
    <div>
        <img src={rojla} style ={{width:'50%' ,marginLeft:'25%'}}/>
    </div>
        <div style={{ textAlign: 'center', marginLeft: '0%' }}>
            <ListGroup horizontal variant="flush" style={{ width: '50%', }} >
                {clothes.map(clothe =>
                    <ListGroup.Item > <Cards name={clothe.name} description={clothe.description} image={clothe.image} /></ListGroup.Item>

                )}
            </ListGroup>
        </div>
        </div>
    )
}


export default Men
