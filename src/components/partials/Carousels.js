import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

// import one from '../../assets/one.jpg'

function Carousels() {
  return (
    <div>
      <Carousel className='my-3'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/844x140?mobile,watch"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/844x140?mobile,watch"
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          // src="https://source.unsplash.com/844x140"
          src="https://source.unsplash.com/844x140/?mobile,watch"
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carousels
