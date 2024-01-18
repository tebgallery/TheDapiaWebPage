import React from 'react';

const ModalArticulo = ({ articulo, onClose }) => {
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };
  return (
    
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-950 bg-opacity-80"
    onClick={handleOverlayClick}
    >
        <div className="bg-white p-8 w-3/5 h-4/7 rounded-3xl mt-40 shadow-lg flex ">
            <img src={articulo.img} alt={articulo.title} className="w-1/2 h-full object-contain mb-4" />
            <div className="ml-4">
                <h2 className="text-2xl font-semibold mb-2">{articulo.title}</h2>
                <p className="text-lg text-gray-700 mb-2">{articulo.marca}</p>
                <p className="text-lg text-black">${articulo.precio}</p>
            </div>
        </div>
    </div>
    
  );
};

export default ModalArticulo;