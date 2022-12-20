import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Row,Col,Image,ListGroup,Button,Card , Form} from 'react-bootstrap'
import { Row,Col,Image,ListGroup,Button,Card } from 'react-bootstrap'
// import products from '../../product'
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function ProductPage(props) {
    const {onAdd} = props;
    // console.log(history)
    const navigate = useNavigate();
    const params = useParams();
    let product_id = params.id
    console.log(product_id)
    let [product, setProduct] = useState([])

    useEffect(() => {
        getProduct()
    },[product_id])

    let getProduct = async () => {
        let responce =await fetch(`https://fakestoreapi.com/products/${product_id}`)
        let data = await responce.json()
        console.log(data)
        setProduct(data)
    }
    const addToCartHandler = ()=>{
        onAdd(product)
        navigate(`/cart`)
    
     }
  return (
    <div>
       <Link to="/" className="btn btn-dark my-3">
        {" "}
        Go Back
      </Link>
       <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.title} fluid style={{height: "50%"}}  className="prodimage"/>
          </Col>

          <Col md={5}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.title}</h3>
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    // disabled={product.countInStock === 0}
                    type="button"
                    onClick={addToCartHandler }
                    // onClick={() => onAdd(product) }
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
    </div>
  )
}

export default ProductPage
