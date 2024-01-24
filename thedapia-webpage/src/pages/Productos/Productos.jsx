import { React, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ArticulosGrid from '../../components/Articulos/ArticulosGrid';
import Footer from '../../components/Footer/Footer';
import Filtros from '../../components/Filtros/Filtros';


const Productos = () => {

  const productos = [
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



  return (
    <>
      <Navbar />
      <section className="w-full">
        <div className="flex justify-center">
          <Filtros />
          <ArticulosGrid articulos ={productos} />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Productos;