import React, {useState, useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import {useParams} from 'react-router-dom';
// import products from '../../product';
// import Carousels from '../partials/Carousels';
import Product from '../partials/Product'


const Category = () => {
    const params = useParams();
    let cat_id = params.id
    console.log(cat_id)
    let [prods, setProds] = useState([])

    useEffect(() => {
        getProds()
    },[cat_id])

    let getProds = async () => {
        let responce =await fetch(`https://fakestoreapi.com/products/category/${cat_id}`)
        let data = await responce.json()
        console.log(data)
        setProds(data)
    }
  return (
    <>
    {/* <Carousels /> */}
     
    {/* <h2 className="my-4 Heading">Electronics</h2> */}
    <Row>
        {prods.map((product)=>(
        <Col key={product.id} sm={12} md={6} lg={4} xl={3}>

          <Product product={product}/>
        </Col>
      ))}
    </Row>
      <hr />
    </>
  )
}

export default Category
