import '../App.css'
import Welcome from './Welcome'
import Carrousel from './Carrousel'
import ShowCardmain from './ShowCardmain'
import React from'react'

const Home = () => {
    return (
        <div className='container'>
        <Welcome/>
        <Carrousel/>
        <ShowCardmain/>
        </div>  

    )
}

export default Home
