import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import ModalArticulo from '../Articulos/ModalArticulo'
import CartModal from "../CartModal/CartModal"

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

      <div className="flex overflow-hidden justify-around py-8 min-h-104 mx-8">
        {productos.slice(currentIndex, currentIndex + 4).map((producto) => (
          <div key={producto._id} className="flex-none w-auto border-gray-200  border-x-2 border-t-2 rounded-xl cursor-pointer hover:shadow-2xl hover:border-gray-300">
            <div onClick={() => handleCardClick(producto)}>
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-60 p-2 object-contain duration-500 transition-transform transform hover:scale-105 "
              />
              <div className="h-36 p-4 border-black border-t-2 ">
                <h3 className="text-lg text-gray-500 text-center font-semibold block mb-4">{producto.nombre}</h3>
                <p className="text-center text-black text-2xl">${producto.precio}</p>
              </div>
            </div>

            <div className="relative flex items-center w-full h-10" onClick={() => handleCartModal(producto)}>
              <button className="absolute bottom-0 rounded-b-xl flex items-center justify-center text-base text-white bg-fuchsia-300 w-full h-10 hover:bg-fuchsia-500 duration-300" >
                AGREGAR
                <FontAwesomeIcon className="text-black ml-2" icon={faCartPlus} />
              </button>
            </div>
          </div>
        ))}
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

