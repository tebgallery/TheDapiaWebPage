import React from 'react';
import ProductsGrid from './ProductsGrid';


const ProductsCarousel = () => {
    return (
        <section class="h-256 w-full bg-gray-50 flex items-center">
            <div class = "w-full ">
                <header class = "flex justify-center items-center w-full mb-20">
                    <h2 class = "text-5xl"> Productos Destacados</h2>
                </header>
                <ProductsGrid/>
            </div>
        </section>
    );
};

export default ProductsCarousel;