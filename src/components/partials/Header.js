import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav,Navbar,NavDropdown, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header(props) {
  console.log(props.countCartItems)
  return (
    <Navbar sticky="top" fixed="bottom" collapseOnSelect expand="lg" bg="primary" variant="dark">
    <Container>
    <LinkContainer to="/">
      <Navbar.Brand>K-CART</Navbar.Brand></LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <LinkContainer to="/">
          <Nav.Link> <i className='fas fa-house'></i> Home</Nav.Link></LinkContainer>
          <NavDropdown title="Category" id="collasible-nav-dropdown">
            <NavDropdown.Item><Link to='products/category/electronics'>electronics</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to='products/category/jewelery'>jewelery</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="products/category/men's clothing">men's clothing</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="products/category/women's clothing">women's clothing</Link></NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            {/* <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item> */}
          </NavDropdown>
        </Nav>
        <Nav>
        <LinkContainer to="/cart"><Nav.Link href="#deets" className='active'> <i className='fa-solid fa-cart-shopping'></i> <b>Cart{' '}</b>
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}</Nav.Link></LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
