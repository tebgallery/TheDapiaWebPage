import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import ModalArticulo from '../Articulos/ModalArticulo'
import CartModal from "../CartModal/CartModal"
import ProductCard from "../Articulos/ProductCard";

const ProductosGrid = ({ productos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedArticulo, setSelectedArticulo] = useState(null);
  const [showCartModal, setShowCartModal] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < productos.length - 4 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : productos.length - 4
    );
  };

  const handleCardClick = (producto) => {
    setSelectedArticulo(producto);
  };

  const handleCloseModal = () => {
    setSelectedArticulo(null);
  };

  const handleCartModal = (producto) => {
    setShowCartModal(producto);
  };

  return (
    <div className="relative flex items-center justify-between m-auto">
      <button
        onClick={handlePrev}
        className="flex items-center w-12 h-12 py-2 rounded-full p-4 bg-gray-200 text-gray-700 text-xl ml-20 hover:border-gray-500 border-2 hover:shadow-2xl duration-500"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <div className="grid grid-cols-4 gap-12 place-content-center mx-28">
        <ProductCard productos = {productos.slice(currentIndex, currentIndex + 4)}/>
      </div>

      <button
        onClick={handleNext}
        className="flex items-center w-12 h-12 py-2 rounded-full p-4 bg-gray-200 text-gray-700 text-xl mr-20 hover:border-gray-500 border-2 hover:shadow-2xl duration-500"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {selectedArticulo && (
        <ModalArticulo producto={selectedArticulo} onClose={handleCloseModal} />
      )}

      {showCartModal && (
        <CartModal products = {showCartModal} onClose={() => setShowCartModal(false)}/>
      )}



    </div>
  );
};

export default ProductosGrid;

