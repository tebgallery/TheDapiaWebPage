import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Carousel from '../../components/Carousel/Carousel';
import ProductosCarousel from '../../components/ProductosCarousel/ProductosCarousel';
import Features from '../../components/Features/Features';
import Aboutus from '../../components/Aboutus/Aboutus';
import Marcas from '../../components/Marcas/Marcas';
import Contact from '../../components/Contact/Form';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

import * as MarcasLibreria from '../../img/MarcasLibreria';
import * as MarcasJuguetes from '../../img/MarcasJuguetes';

const Home = () => {
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

  const Carouselimgs = [
    'https://www.moovingargentina.com.ar/images/banners/home/Banner_Carpetas-02.jpg',
    'https://mayorista.ryproductos.com.ar/Content/Images/Banners/BANNER%20AGENDAS%202024.jpg',
    'https://www.cresko.com/wp-content/uploads/2023/08/MOCHILAS-1-1.jpg',
    'https://www.cresko.com/wp-content/uploads/2023/08/CARTUCHERAS.jpg',
];

  const UltimosIngresos = [
    {
      id: 1,
      nombre: "Cartuchera Mooving 1 Piso Eva Bart Simpson",
      marca: "Mooving",
      codBarra: 44455566677,
      precio: 19990,
      descuento: 0,
      cantidad: 40,
      categoria: "Libreria",
      color: "",
      img: "https://tiendup.b-cdn.net/business/48/products/gyNKV0_656f73ae4d4a9_large.jpg",
      fechaModificacion: "02/01/2024",
      descripcion: "2 pisos",
      estado: 0
    },
    {
      id: 2,
      nombre: "Carpeta Mooving Nº3 3x40 Escolar AFA HEROES",
      marca: "Mooving",
      codBarra: 44455566678,
      precio: 15600,
      descuento: 10,
      cantidad: 3,
      categoria: "Libreria",
      color: "",
      img: "https://http2.mlstatic.com/D_NQ_NP_750944-MLU73023483961_112023-O.webp",
      fechaModificacion: "02/01/2024",
      descripcion: "3 x 40",
      estado: 0
    },
    {
      id: 3,
      nombre: "Botella de silicona plegable con pico cool Cresko",
      marca: "Cresko",
      codBarra: 44455566679,
      precio: 18750,
      descuento: 5,
      cantidad: 3,
      categoria: "Libreria",
      color: "",
      img: "https://acdn.mitiendanube.com/stores/001/040/110/products/ck7471-fcc20f1fa38f74ea0616720674154410-1024-1024.webp",
      fechaModificacion: "02/01/2024",
      descripcion: "500ml",
      estado: 0
    },
    {
      id: 4,
      nombre: "Mochila Urbana Harry Potter plataforma magia Cresko",
      marca: "Cresko",
      codBarra: 44455566680,
      precio: 79000,
      descuento: 0,
      cantidad: 1,
      categoria: "Mochilas",
      color: "",
      img: "https://acdn.mitiendanube.com/stores/001/040/110/products/hp1271-e33442c5be65e3ae6d16945327896568-1024-1024.webp",
      fechaModificacion: "02/01/2024",
      descripcion: "18 pulgadas",
      estado: 0
    },
    {
      id: 5,
      nombre: "Cuaderno Mickey Mouse A5",
      marca: "Mooving",
      codBarra: 44455566681,
      precio: 13990,
      descuento: 0,
      cantidad: 1,
      categoria: "Libreria",
      color: "",
      img: "https://acdn.mitiendanube.com/stores/001/173/683/products/magic31-a4a52d4f26c2ef8fa316621359875272-1024-1024.webp",
      fechaModificacion: "02/01/2024",
      descripcion: "16x20",
      estado: 0
    },
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

  return (
    <>
      <Navbar />
      <Carousel images = {Carouselimgs}/>
      <Features />
      <ProductosCarousel titulo={"ULTIMOS INGRESOS"} productos={UltimosIngresos} />
      <Marcas marcas = {marcasLiberia}/>
      <ProductosCarousel titulo={"LO MAS VENDIDO"} productos={UltimosIngresos} />
      <Marcas marcas = {marcasJuguetes}/>
      <ProductosCarousel titulo={"NUESTRAS OFERTAS"} productos={UltimosIngresos} />
      <Aboutus />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;