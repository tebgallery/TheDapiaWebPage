import React from "react";
import Carousel from "./Carousel";

const CarouselSection = () => {
    const images = [
        'https://lh5.googleusercontent.com/p/AF1QipOC5Ch5l23KB6UryR-MnaKezs4B79P70xF82VE_=w1080-k-no',
        'https://www.moovingargentina.com.ar/images/banners/home/Banner_Carpetas-02.jpg',
        'https://www.cresko.com/wp-content/uploads/2023/08/MOCHILAS-1-1.jpg',
        'https://www.moovingargentina.com.ar/images/banners/banner%20carrusel%20Coloreo-01.jpg',
        'https://www.cresko.com/wp-content/uploads/2023/08/CARTUCHERAS.jpg',
    ];
    
  return (
    <section className="w-full h-128 mb-28">
      <Carousel images={images}/>
    </section>
  );
};

export default CarouselSection;
