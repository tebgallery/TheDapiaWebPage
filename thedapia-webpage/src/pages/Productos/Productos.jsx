import { React, useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ArticulosGrid from '../../components/Articulos/ArticulosGrid';
import Footer from '../../components/Footer/Footer';
import Filtros from '../../components/Filtros/Filtros';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const Productos = () => {
  const url = 'http://localhost:3000/productos';
  const [products, setProducts] = useState([]);
  const [showFiltros,setShowFiltros] = useState(true);

  useEffect( () =>{
    getProducts();
  },[]);

  const getProducts = async () =>{
    const response = await axios.get(url);
    setProducts(response.data);
  }


  return (
    <>
      <Navbar />
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
            <ArticulosGrid products ={products} />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Productos;