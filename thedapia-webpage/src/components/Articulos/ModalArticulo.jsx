import React from 'react';

const ModalArticulo = ({ articulo, onClose }) => {
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75"
    onClick={handleOverlayClick}
    >
      <div className="bg-white p-8 max-w-md">
        <button className="absolute top-25 right-16 text-red-600 text-2xl" onClick={onClose}>
          Cerrar
        </button>
        <img src={articulo.img} alt={articulo.title} className="w-full h-72 object-contain mb-4" />
        <h2 className="text-2xl font-semibold mb-2">{articulo.title}</h2>
        <p className="text-lg text-gray-700 mb-4">${articulo.precio}</p>
      </div>
    </div>
  );
};

export default ModalArticulo;