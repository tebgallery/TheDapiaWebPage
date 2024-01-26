import { React, useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ArticulosGrid from '../../components/Articulos/ArticulosGrid';
import CartModal from "../../components/CartModal/CartModal";
import Footer from '../../components/Footer/Footer';
import Filtros from '../../components/Filtros/Filtros';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const Productos = () => {
  const url = 'http://localhost:3000/productos';
  const [products, setProducts] = useState([]);
  const [showFiltros,setShowFiltros] = useState(true);
  const [showCartModal, setShowCartModal] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect( () =>{
    getProducts();
  },[]);

  const getProducts = async () =>{
    const response = await axios.get(url);
    setProducts(response.data);
  }

  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  const handleAddProductToCart = (product) => {
    setCart(...cart, product);
  };

  
  return (
    <>
      <Navbar onCartClick = {toggleCartModal} />

      {showCartModal && (
        <CartModal onClose={() => setShowCartModal(false)} product = {cart}/>
      )}

      <section className="w-full">
        <div className="flex justify-center p-4">
            {showFiltros && (
            <Filtros/>
          )}
          <div className="mt-16">
            <button className="py-1 px-2" onClick={() => setShowFiltros(!showFiltros)}>
              <FontAwesomeIcon className= "h-6 w-6 "icon={faBars}/>
            </button>
          </div>
            <ArticulosGrid onCartClick = {toggleCartModal} products = {products} onAddToCartClick = {handleAddProductToCart}/>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Productos;