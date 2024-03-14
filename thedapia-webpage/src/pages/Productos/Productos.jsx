import { React, useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ArticulosGrid from '../../components/Articulos/ArticulosGrid';
import CartModal from "../../components/CartModal/CartModal";
import Footer from '../../components/Footer/Footer';
import Filtros from '../../components/Filtros/Filtros';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const Productos = ({categoria,palabra}) => {
  const getUrl = 'http://localhost:3000/productos';
  const getCatUrl = "http://localhost:3000/productos/"+categoria;
  const getWordUrl = "http://localhost:3000/productos/buscar"+palabra;
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (categoria) {
      getProductsByCategory();
    }
    else if(palabra) {
      getProductsByWord();
    }
    else{
      getProducts();
    }
  }, [categoria,palabra]);

  const getProducts = async () =>{
    const response = await axios.get(getUrl);
    setProducts(response.data);
  }

  const getProductsByCategory = async () =>{
    const response = await axios.get(getCatUrl);
    setProducts(response.data);
  }

  const getProductsByWord = async () =>{
    const response = await axios.get(getWordUrl);
    setProducts(response.data);
  }


  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  };


  const handleAddProductToCart = (product) => {
    const existingProduct = cart.find((item) => item._id === product._id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item._id === product._id ? { ...item, amount: item.amount + 1 } : item
        )
      );
      
    } else {
      setCart([...cart,  {...product, amount:1}]);
    }

  };


  
  return (
    <>
      <Navbar onCartClick = {toggleCartModal} cart={cart} />

      <section className="w-full">
        <div className="flex justify-center">
            <Filtros/>
            <ArticulosGrid onCartClick = {toggleCartModal} products = {products} onAddToCartClick = {handleAddProductToCart} cart = {cart}/>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Productos;