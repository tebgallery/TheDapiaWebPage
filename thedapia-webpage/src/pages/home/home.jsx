import CarouselSection from '../../components/Carousel/CarouselSection';
import ProductsCarousel from '../../components/OfferCarousel/ProductsCarrousel';
import Features from '../../components/Features/Features';
import Aboutus from '../../components/Aboutus/Aboutus';
import Contact from  '../../components/Contact/Form';
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

  return (
    <>
        <CarouselSection/>
        <Features/>
        <Aboutus/>
        <ProductsCarousel/>
        <Contact/>
        <Footer/>
    </>
  );
};

export default Home;