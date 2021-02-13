import { React, usestate } from 'react'
import { Carousel } from 'react-bootstrap'
import image1 from './Media/C1.jpg'
import image2 from './Media/c2.jpg'
import image3 from './Media/c3.jpg'
function Carrousel() {
    return (
        <div style={{ marginTop: '3%' }}>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ background: '#1f212d' }}>
                        <h3>Welcome To Our Clothes Store</h3>
                        <p>We provide have the top clothing quality out there</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Third slide"
                    />

                    <Carousel.Caption style={{ background: '#1f212d' }} >
                        <h3>Welcome To Our Clothes Store</h3>
                        <p>We provide have the top clothing quality out there</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption  style={{ background: '#1f212d' }}>
                        <h3>Welcome To Our Clothes Store</h3>
                        <p>We provide have the top clothing quality out there</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carrousel
