import React from 'react';
import ProductosGrid from './ProductosGrid';


const ProductosCarousel = ({titulo,productos}) => {
    return (
        <section className="h-208 w-full flex items-center">
            <div className = "w-full">
                <header className = "flex justify-center items-center w-full mb-12">
                    <h2 className = "text-4xl">{titulo}</h2>
                </header>
                <ProductosGrid productos = {productos}/>
            </div>
        </section>
    );
};

export default ProductosCarousel;