import React from 'react';
import ProductosGrid from './ProductosGrid';


const ProductosCarousel = ({titulo,productos,addToCartClick}) => {
    return (
        <section className="h-208 w-full flex items-center">
            <div className = "w-full">
                <header className = "flex justify-center items-center w-full mb-28">
                    <h2 className = "text-4xl font-semibold text-slate-700">{titulo}</h2>
                </header>
                <ProductosGrid productos = {productos} addToCartClick = {addToCartClick}/>
            </div>
        </section>
    );
};

export default ProductosCarousel;