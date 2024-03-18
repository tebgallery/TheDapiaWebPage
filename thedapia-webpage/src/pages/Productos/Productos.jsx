import { React, useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ArticulosGrid from '../../components/Articulos/ArticulosGrid';
import CartModal from "../../components/CartModal/CartModal";
import Footer from '../../components/Footer/Footer';
import Filtros from '../../components/Filtros/Filtros';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Productos = ({categoria,addToCartClick,cart,cartModal, toggleCartModal}) => {
  const getUrl = 'http://localhost:3000/productos';
  const getCatUrl = "http://localhost:3000/productos/"+categoria;
  const { palabra } = useParams();
  const getWordUrl = "http://localhost:3000/productos/buscar/"+palabra;
  const [products, setProducts] = useState([]);

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


  
  return (
    <>
      <Navbar onClickCart={toggleCartModal} />
      {cartModal && (
      <CartModal cart= {cart} onClose={toggleCartModal}/>
    )}
      <section className="w-full">
        <div className="flex justify-center">
            <Filtros/>
            <ArticulosGrid products = {products} addToCartClick = {addToCartClick} cart = {cart}/>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Productos;