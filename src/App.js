// import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/partials/Footer';
import Header from './components/partials/Header';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Category from './components/pages/Category';
import ProductPage from './components/pages/ProductPage';
import CartScreen from './components/pages/CartScreen';
import React, {useState } from 'react'
// import { useNavigate } from 'react-router-dom'

function App() {

  const [cartItems, setCartItems] = useState([]);


  const onAdd = (product) => {
    console.log("hello this is" , cartItems.length)

    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
   
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  // useEffect(() => {
  //     fetchProducts();
  //     fetchCart();
  //   }, []);
    

  return (
    <Router>
    <Header countCartItems={cartItems.length}  />
    <main className="py-3">
      {/* <Container> */}
        <Routes>
        <Route path="/"  element={<Home />} exact />
        <Route path="/products/category/:id"  element={<Category />} exact />
        {/* <Route path="/login" component={LoginScreen} exact />
        <Route path="/register" component={RegisterScreen} exact /> */}
        <Route path="/products/:id" element={<ProductPage onAdd={onAdd} onRemove={onRemove} />} exact />
        <Route path="/cart/:id" element={<CartScreen onAdd={onAdd} cartItems={cartItems} />} exact />
        <Route path="/cart" element={<CartScreen onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />} exact />
        </Routes>
      {/* </Container> */}
    </main>

    <Footer />
    </Router>
  );
}

export default App;
