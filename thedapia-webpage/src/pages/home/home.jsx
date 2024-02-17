import {React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Carousel from '../../components/Carousel/Carousel';
import ProductosCarousel from '../../components/ProductosCarousel/ProductosCarousel';
import Features from '../../components/Features/Features';
import Aboutus from '../../components/Aboutus/Aboutus';
import Marcas from '../../components/Marcas/Marcas';
import Contact from '../../components/Contact/Form';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import CartModal from '../../components/CartModal/CartModal';

import * as MarcasLibreria from '../../img/MarcasLibreria';
import * as MarcasJuguetes from '../../img/MarcasJuguetes';

const Home = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const [productosUltimosIngresos, setProductosUltimosIngresos] = useState([]);
  const [productosMasVendidos, setProductosMasVendidos] = useState([]);
  const [productosOfertas, setProductosOfertas] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const { state } = location;
    const sectionId = state && state.sectionId;

    if (sectionId) {
      const sectionElement = document.getElementById(sectionId);

      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname, location.state]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/productos');
        const data = response.data;
        const ultimosIngresos = data.filter(producto => producto.seccionenpagina === 'ultimos-ingresos');
        const masVendidos = data.filter(producto => producto.seccionenpagina === 'mas-vendido');
        const ofertas = data.filter(producto => producto.seccionenpagina === 'ofertas');
        setProductosUltimosIngresos(ultimosIngresos);
        setProductosMasVendidos(masVendidos);
        setProductosOfertas(ofertas);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const Carouselimgs = [
    'https://www.moovingargentina.com.ar/images/banners/home/Banner_Carpetas-02.jpg',
    'https://mayorista.ryproductos.com.ar/Content/Images/Banners/BANNER%20AGENDAS%202024.jpg',
    'https://www.cresko.com/wp-content/uploads/2023/08/MOCHILAS-1-1.jpg',
    'https://www.cresko.com/wp-content/uploads/2023/08/CARTUCHERAS.jpg',
];

  const marcasLiberia = [
      {url: MarcasLibreria.cresko, alt: "cresko-logo" },
      {url: MarcasLibreria.mooving, alt: "mooving-logo"},
      {url: MarcasLibreria.filgo, alt: "filgo-logo"},
      {url: MarcasLibreria.maped, alt: "maped-logo"},
      {url: MarcasLibreria.ezco, alt: "ezco-logo"},
      {url: MarcasLibreria.pizzini, alt: "pizzini-logo"},
      {url: MarcasLibreria.simball, alt: "simball-logo"},
      {url: MarcasLibreria.giotto, alt: "giotto-logo"},
      {url: MarcasLibreria.faber, alt: "fabercastell-logo"},
      {url: MarcasLibreria.multiscope, alt: "multiscope-logo"}
  ];

  const marcasJuguetes = [
    {url: MarcasJuguetes.cuatrom, alt: "4m-logo" },
    {url: MarcasJuguetes.antex, alt: "antex-logo"},
    {url: MarcasJuguetes.bimbi, alt: "bimbi-logo"},
    {url: MarcasJuguetes.calesita, alt: "calesita-logo"},
    {url: MarcasJuguetes.clementoni, alt: "clementoni-logo"},
    {url: MarcasJuguetes.cresko, alt: "cresko-logo"},
    {url: MarcasJuguetes.ditoys, alt: "ditoys-logo"},
    {url: MarcasJuguetes.funnyland, alt: "funnyland-logo"},
    {url: MarcasJuguetes.implas, alt: "implas-logo"},
    {url: MarcasJuguetes.toptoys, alt: "toptoys-logo"}

  ]

  const toggleCartModal = () => {
    setShowCartModal(!showCartModal)
  };

  return (
    <>
      <Navbar onCartClick = {toggleCartModal}/>
      {showCartModal && (
        <CartModal onClose={() => setShowCartModal(false)}/>
      )}
      <Carousel images = {Carouselimgs}/>
      <Features />
      <ProductosCarousel titulo={"ULTIMOS INGRESOS"} productos={productosUltimosIngresos} />
      <Marcas marcas = {marcasLiberia}/>
      <ProductosCarousel titulo={"LO MAS VENDIDO"} productos={productosMasVendidos} />
      <Marcas marcas = {marcasJuguetes}/>
      <ProductosCarousel titulo={"NUESTRAS OFERTAS"} productos={productosOfertas} />
      <Aboutus />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;