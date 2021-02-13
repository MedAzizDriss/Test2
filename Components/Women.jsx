import React from 'react'
import { womenc1,womenc2 } from './Data/Data'
import { useState, useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import Cards from './Card'
import mimi from'./Media/c3.jpg'

const Women = () => {
    const [clothes1, setclothes1] = useState([])
    useEffect(() => {
        setclothes1(womenc1)
    }, [])
    const [clothes2, setclothes2] = useState([])
    useEffect(() => {
        setclothes2(womenc2)
    }, [])
    return (
<div>
    <div>
        <img src={mimi} style ={{width:'50%' ,marginLeft:'25%'}}/>
    </div>
        <div style={{ textAlign: 'center', marginLeft: '0%' }}>
            <ListGroup horizontal variant="flush" style={{ width: '50%', }} >
                {clothes1.map(clothe =>
                    <ListGroup.Item > <Cards name={clothe.name} description={clothe.description} image={clothe.image} /></ListGroup.Item>

                )}
            </ListGroup>
        </div>
        <div style={{ textAlign: 'center', marginLeft: '0%' }}>
            <ListGroup horizontal variant="flush" style={{ width: '50%', }} >
                {clothes2.map(clothe =>
                    <ListGroup.Item > <Cards name={clothe.name} description={clothe.description} image={clothe.image} /></ListGroup.Item>

                )}
            </ListGroup>
        </div>
        </div>
    )
}
export default Women