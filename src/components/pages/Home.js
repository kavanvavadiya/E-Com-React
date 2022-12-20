import React, {useState, useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'

// import products from '../../product';
// import Carousels from '../partials/Carousels';
import Product from '../partials/Product'

function Home() {
  let [products , setProducts] = useState([])

    useEffect(() => {
        getProducts()

    },[])

    let getProducts = async () => {
    //    let responce =await fetch('/api/Products/')
       let responce =await fetch('https://fakestoreapi.com/products')
    //    .then(res=>res.json())
    //    .then(json=>console.log(json))
       let data = await responce.json()
    console.log('Data:', data)
    setProducts(data)
    }
  return (
    <>
    {/* <Carousels /> */}
     
    {/* <h2 className="my-4 Heading">Electronics</h2> */}
    <Row>
        {products.map((product)=>(
        // <Col key={product.id}>
        <Col key={product.id} sm={12} md={6} lg={4} xl={3}>

            {/* {product.image} */}
          <Product product={product}/>
        </Col>
      ))}
    </Row>
      <hr />
    </>
  )
}

export default Home
