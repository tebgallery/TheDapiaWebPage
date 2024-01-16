import React from 'react';
import ProductsGrid from './ProductsGrid';
import Booksbg from '../../img/booksbg.jpg';


const ProductsCarousel = () => {
    return (
        <section class="h-208 w-full flex items-center">
            <div class = "w-full">
                <header class = "flex justify-center items-center w-full mb-12">
                    <h2 class = "text-5xl">Productos Destacados</h2>
                </header>
                <ProductsGrid/>
            </div>
        </section>
    );
};

export default ProductsCarousel;