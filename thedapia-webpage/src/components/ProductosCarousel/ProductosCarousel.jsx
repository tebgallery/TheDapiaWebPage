import React from 'react';
import ProductosGrid from './ProductosGrid';


const ProductosCarousel = ({titulo,productos}) => {
    return (
        <section class="h-208 w-full flex items-center">
            <div class = "w-full">
                <header class = "flex justify-center items-center w-full mb-12">
                    <h2 class = "text-4xl">{titulo}</h2>
                </header>
                <ProductosGrid productos = {productos}/>
            </div>
        </section>
    );
};

export default ProductosCarousel;