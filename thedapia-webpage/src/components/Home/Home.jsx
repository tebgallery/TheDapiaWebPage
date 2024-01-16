import React from "react";
import Navbar from '../Navbar/Navbar';
import CarouselSection from '../Carousel/CarouselSection';
import ProductsCarousel from '../OfferCarousel/ProductsCarrousel';
import Features from '../Features/Features';
import Aboutus from '../Aboutus/Aboutus';
import Contact from  '../Contact/Form';
import Footer from '../Footer/Footer';

const Home = () => {

    return (
        <>
        <Navbar/>
        <CarouselSection/>
        <Features/>
        <Aboutus/>
        <ProductsCarousel/>
        <Contact/>
        <Footer/>
        </>
      );
}

export default Home;