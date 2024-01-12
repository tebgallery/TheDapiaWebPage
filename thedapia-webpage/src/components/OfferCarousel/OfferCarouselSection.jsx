import React from 'react';
import ProductsCarousel from './ProductsCarousel';


const OfferCarouselSection = () => {
    return (
        <section class="h-256 w-full border-2 border-black flex ">
            <div class = "w-full ">
                <header class = "flex justify-center items-center w-full my-28">
                    <h2 class = "text-5xl"> Productos Destacados</h2>
                </header>
                <ProductsCarousel/>
            </div>
        </section>
    );
};

export default OfferCarouselSection;