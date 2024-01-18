import CarouselSection from '../../components/Carousel/CarouselSection';
import ProductosCarousel from '../../components/ProductosCarousel/ProductosCarousel';
import Features from '../../components/Features/Features';
import Aboutus from '../../components/Aboutus/Aboutus';
import Marcas from '../../components/Marcas/Marcas';
import Contact from '../../components/Contact/Form';
import Footer from '../../components/Footer/Footer';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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

  const UltimosIngresos = [
    {
      id: 1,
      title: "Cartuchera Mooving 1 Piso Eva Bart Simpson",
      price: "$19.990",
      imageUrl: "https://tiendup.b-cdn.net/business/48/products/gyNKV0_656f73ae4d4a9_large.jpg",
    },
    {
      id: 2,
      title: "Carpeta Mooving Nº3 3x40 Escolar AFA HEROES",
      price: "$15.600",
      imageUrl: "https://http2.mlstatic.com/D_NQ_NP_750944-MLU73023483961_112023-O.webp",
    },
    {
      id: 3,
      title: "Botella de silicona plegable con pico cool Cresko",
      price: "$18.750",
      imageUrl: "https://acdn.mitiendanube.com/stores/001/040/110/products/ck7471-fcc20f1fa38f74ea0616720674154410-1024-1024.webp",
    },
    {
      id: 4,
      title: "Mochila Urbana Harry Potter plataforma magia Cresko",
      price: "$70.000",
      imageUrl: "https://acdn.mitiendanube.com/stores/001/040/110/products/hp1271-e33442c5be65e3ae6d16945327896568-1024-1024.webp",
    },
    {
      id: 5,
      title: "Cuaderno Mickey Mouse A5",
      price: "$13.990",
      imageUrl: "https://acdn.mitiendanube.com/stores/001/173/683/products/magic31-a4a52d4f26c2ef8fa316621359875272-1024-1024.webp",
    },
  ];

  const marcasLiberia = [
      {img: "https://catalogos.cresko.com/content/images/cresko-logo.png"},
      {img: "https://www.moovingargentina.com.ar//components/com_mooving/img/logo_mooving_mooving_at_work.png"},
      {img: "https://filgo.com.ar/wp-content/uploads/2023/04/filgo-red.svg"},
      {img: "https://upload.wikimedia.org/wikipedia/commons/2/22/Maped_logo_fr.png"},
      {img: "https://skribeargentina.com/wp-content/uploads/2018/09/Logo-Ezco_Mesa-de-trabajo-1.png"},
      {img: "https://scontent.faep8-2.fna.fbcdn.net/v/t39.30808-6/319881151_847182286614800_5789619012646151511_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=vFK49CTtY5kAX-4VFLs&_nc_ht=scontent.faep8-2.fna&oh=00_AfA0p3zpLQ-HPNdg9vurAqO5w6poxyMQDAU3hT_u8wNOoQ&oe=65AF5C43"},
      {img: "https://simball.com.ar/wp-content/uploads/2022/01/logo-web.png"},
      {img: "https://pizarrasblancas.com.ar/wp-content/uploads/2023/06/giotto-fila-logo-formato-azul-del-jpg-de-disponible-148237142.png"},
  ];

  return (
    <>
      <CarouselSection />
      <Features />
      <ProductosCarousel titulo={"ULTIMOS INGRESOS"} productos={UltimosIngresos} />
      <Marcas marcas = {marcasLiberia}/>
      <ProductosCarousel titulo={"LO MAS VENDIDO"} productos={UltimosIngresos} />
      <Marcas marcas = {marcasLiberia}/>
      <ProductosCarousel titulo={"NUESTRAS OFERTAS"} productos={UltimosIngresos} />
      <Aboutus />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;