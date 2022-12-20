import React from 'react'
// import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
// import Rating from './Rating';

function Product({product}) {
  const mystyle = {
    display:"block",
    height:"200px",
    width:"200px",
    margin:"auto"
  };
  return (
    <div>
    <Container>
      <Card className='my-3 p-3 rounded' style={{height: "20%"}}>

      <Link to={`/products/${product.id}`}>
        <Card.Img src={product.image}  style={mystyle}/>
      </Link>

      <Card.Body>

      <Link to={`/products/${product.id}`}>
      <Card.Title>{product.title}</Card.Title>
      </Link>
        {/* <Card.Text as="h3">
            {product.category}
        </Card.Text> */}
        
        <Card.Text as="h3">
            ${product.price}
        </Card.Text>

      </Card.Body>
    </Card>
    </Container>
    </div>
  )
}

export default Product
