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

    // Si el producto ya está en el carrito, aumentar su cantidad en 1
    if (existingProductIndex !== -1) {
      const updatedCart = cart.map((item, index) => {
        if (index === existingProductIndex) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      // Si el producto no está en el carrito, agregarlo con cantidad igual a 1
      setCart([...cart, { ...producto, amount: 1 }]);
    }
    setCartModal(true);
    setSubTotal(subTotal + producto.preciototal);
  };


  const toggleCartModal = () => {
    setCartModal(!cartModal);
  }
  return (
    <>
      <Router>
        <Routes>
          <Route element ={<ProtectedRoute/>}>
            {/* rutas protegidas
            ej: <Route path="/adminpage" element = {<AdminPage/>}/> */}
          </Route>
          <Route path="/" element={<Home addToCartClick={addToCartClick} cart={cart} cartModal={cartModal} toggleCartModal={toggleCartModal} />} />
          <Route path="/productos" element={<Productos addToCartClick={addToCartClick} cart={cart} cartModal={cartModal} toggleCartModal={toggleCartModal} />} />
          <Route path="/productos/libreria" element={<Productos addToCartClick={addToCartClick} cart={cart} cartModal={cartModal} toggleCartModal={toggleCartModal} categoria = "Libreria" />} />
          <Route path="/productos/mochilas" element={<Productos addToCartClick={addToCartClick} cart={cart} cartModal={cartModal} toggleCartModal={toggleCartModal} categoria = "Mochilas" />} />
          <Route path="/productos/juguetes" element={<Productos addToCartClick={addToCartClick} cart={cart} cartModal={cartModal} toggleCartModal={toggleCartModal} categoria = "Juguetes" />} />
          <Route path="/productos/buscar/:palabra" element={<Productos addToCartClick={addToCartClick} cart={cart} cartModal={cartModal} toggleCartModal={toggleCartModal} />} />
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
