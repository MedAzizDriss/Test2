import React from 'react'
import { main } from './Data/Data'
import Cards from './Card'
import { useState, useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'


const ShowCard = () => {
  const [clothes, setclothes] = useState([])
  useEffect(() => {
    setclothes(main)
  }, [])
  return (

    <div style={{ textAlign: 'center', marginLeft: '6%' }}>
      <ListGroup horizontal variant="flush" style={{ width: '50%', }} >
        {clothes.map(clothe =>
          <ListGroup.Item > <Cards name={clothe.name} description={clothe.description} image={clothe.image} /></ListGroup.Item>

        )}
      </ListGroup>
    </div>
  )
}

export default ShowCard
