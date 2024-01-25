import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const ModalArticulo = ({ producto, onClose }) => {
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };
  return (
    
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-950 bg-opacity-80 z-50"
    onClick={handleOverlayClick}>
        <div className="bg-white p-8 w-3/5 h-4/7 rounded-3xl m-auto shadow-lg flex">
            <img src={producto.imagen} alt={producto.nombre} className="w-1/2 h-full object-contain mb-4" />
            <div className="relative ml-4">
                <h2 className="text-2xl font-semibold mb-2">{producto.nombre}</h2>
                <p className="text-lg text-gray-700 mb-2">Marca: {producto.marca}</p>
                <p className="text-lg text-gray-700 mb-2">Cantidad : {producto.cantidad}</p>
                <p className="text-lg text-gray-700 mb-2">Descripción: {producto.descripcion}</p>
                <p className="text-2xl font-semibold">${producto.precio}</p>
                <div class="absolute bottom-0 flex items-center w-full mb-8" onClick={() => handleCartModal(producto)}>
              <button class="flex items-center justify-center text-base text-white bg-fuchsia-300 w-full h-10 hover:bg-fuchsia-500 duration-300" >
                AGREGAR
                <FontAwesomeIcon className="text-black ml-2" icon={faCartPlus} />
              </button>
            </div>
            </div>
        </div>
    </div>
    
  );
};

export default ModalArticulo;