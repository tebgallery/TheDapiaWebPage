import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({productos,openModal}) => {
    return (
        <>
            {productos.map((producto, _id) => (
          <div key={_id} 
          className="w-auto border border-gray-300 rounded-3xl shadow-lg pb-6 bg-white cursor-pointer hover:shadow-2xl hover:border-gray-400"
          >
            <div onClick={() => openModal(producto)}>
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-64 p-5 object-contain duration-500 transition-transform transform hover:scale-105"
              />
              <div className="border-t border-gray-200 pt-4">
                <h3 className="min-h-20 max-h-20 p-2 text-lg text-black text-center uppercase font-semibold">{producto.nombre}</h3>
                <div className="min-h-16 max-h-16 flex items-center justify-center pb-2 mb-2">
                  {producto.descuento!=null && producto.descuento!=0  ?(
                    <>
                      <p className="text-center text-fuchsia-500 text-lg line-through">${producto.precio}</p>
                      <p className="text-center text-black text-2xl ml-5">${producto.preciototal}</p>
                      </>
                  ): <p className="text-center text-black text-2xl">${producto.preciototal}</p>}
                  </div>
              </div>
            </div>
            <div className="w-full px-8">
              <button 
                className="flex items-center justify-around text-base text-white bg-fuchsia-300 w-full h-11 rounded-full hover:bg-gradient-to-r from-pink-400 to-fuchsia-600 duration-300 hover:scale-102"
                onClick={() => { onAddToCartClick(producto); onCartClick(); }}
              >
                <span>AGREGAR</span>
                <FontAwesomeIcon className="bg-white rounded-full text-fuchsia-400 p-2" icon={faCartPlus} />
              </button>
            </div>
            </div>             
        ))}
        </>
    );
};

export default ProductCard;