import React from "react";
import Carousel from "./Carousel";
import Image1 from "../../img/carrousel-1.jpg";

const CarouselSection = () => {
    const images = [
        'https://lh5.googleusercontent.com/p/AF1QipOC5Ch5l23KB6UryR-MnaKezs4B79P70xF82VE_=w1080-k-no',
        'https://lh5.googleusercontent.com/p/AF1QipOC5Ch5l23KB6UryR-MnaKezs4B79P70xF82VE_=w1080-k-no',
    ];
    
  return (
    <section className="w-full h-96 border-4 border-black">
      <Carousel images={images}/>
    </section>
  );
};

export default CarouselSection;
