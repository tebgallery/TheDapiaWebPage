import {React, useState, useEffect } from 'react';
import Home from './pages/Home/Home';
import Productos from './pages/Productos/Productos';
import AdminPage from './pages/AdminPage/AdminPage';
import Order from './pages/Order/Order';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ProtectedRoute from './routes/ProtectedRoute';
import Contact from './pages/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminOrders from './pages/AdminPage/AdminOrders';

const App = () => {
  const [cart, setCart] = useState([]);
  const [cartModal, setCartModal] = useState(false);
  const [subTotal,setSubTotal] = useState(0);

  const addToCartClick = (producto) => {
    const existingProductIndex = cart.findIndex((item) => item._id === producto._id);
    if (existingProductIndex !== -1) {
      const updatedCart = cart.map((item, index) => {
        if (index === existingProductIndex && item.amount < item.cantidad) {
          setSubTotal(subTotal+item.preciototal)
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setSubTotal(subTotal+producto.preciototal)
      setCart([...cart, { ...producto, amount: 1 }]);
    }

    setCartModal(true);
  };


  const toggleCartModal = () => {
    setCartModal(!cartModal);
  }

  const increaseAmount = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item._id === productId && item.amount < item.cantidad) {
        setSubTotal(subTotal+item.preciototal)
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };
  
  const decreaseAmount = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item._id === productId && item.amount > 1) {
        setSubTotal(subTotal-item.preciototal)
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);
  }

  console.log(cart);
  console.log("subtotal:",subTotal);


  return (
    <>
      <Router>
        <Routes>
          <Route element ={<ProtectedRoute/>}>
            {/* rutas protegidas
            ej: <Route path="/adminpage" element = {<AdminPage/>}/> */}
          </Route>
          <Route path="/" element={<Home addToCartClick={addToCartClick} cart={cart} cartModal={cartModal} toggleCartModal={toggleCartModal} onMinus={decreaseAmount} onPlus={increaseAmount} onDelete = {removeFromCart}/>} />
          <Route path="/productos" element={<Productos addToCartClick={addToCartClick} cart={cart} cartModal={cartModal} toggleCartModal={toggleCartModal} onMinus={decreaseAmount} onPlus={increaseAmount} onDelete = {removeFromCart}/>} />
          <Route path="/productos/libreria" element={<Productos addToCartClick={addToCartClick} cart={cart} cartModal={cartModal} toggleCartModal={toggleCartModal} onMinus={decreaseAmount} onPlus={increaseAmount} onDelete = {removeFromCart} categoria = "Libreria" />} />
          <Route path="/productos/mochilas" element={<Productos addToCartClick={addToCartClick} cart={cart} cartModal={cartModal} toggleCartModal={toggleCartModal} onMinus={decreaseAmount} onPlus={increaseAmount} onDelete = {removeFromCart} categoria = "Mochilas" />} />
          <Route path="/productos/juguetes" element={<Productos addToCartClick={addToCartClick} cart={cart} cartModal={cartModal} toggleCartModal={toggleCartModal} onMinus={decreaseAmount} onPlus={increaseAmount} onDelete = {removeFromCart} categoria = "Juguetes" />} />
          <Route path="/productos/buscar/:palabra" element={<Productos addToCartClick={addToCartClick} cart={cart} cartModal={cartModal} toggleCartModal={toggleCartModal} onMinus={decreaseAmount} onPlus={increaseAmount} onDelete = {removeFromCart}/>} />
          <Route path="/adminpage" element = {<AdminPage/>}/>
          <Route path="/adminpage/orders" element = {<AdminOrders/>}/>
          <Route path="/order" element={<Order cart = {cart}/>} />
          <Route path="/login" element = {<Login/>}/>
          <Route path="/register" element = {<Register/>}/>
          <Route path="/contact" element = {<Contact cart={cart} cartModal={cartModal} toggleCartModal={toggleCartModal}/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App
