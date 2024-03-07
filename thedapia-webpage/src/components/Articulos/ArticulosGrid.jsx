import { React, useState} from "react";
import ModalArticulo from './ModalArticulo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ArticulosGrid = ({products, onCartClick, onAddToCartClick,cart}) => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArticulo, setSelectedArticulo] = useState(null);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticulos = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCardClick = (producto) => {
    setSelectedArticulo(producto);
  };

  const handleCloseModal = () => {
    setSelectedArticulo(null);
  };

  return (
    <div className="w-4/5 py-16 px-16">
      <div className="grid grid-cols-4 gap-12 place-content-center">
        {currentArticulos.map((producto, _id) => (
          <div key={_id} 
          className="w-auto border border-gray-300 rounded-3xl shadow-lg pb-6 bg-white cursor-pointer hover:shadow-2xl hover:border-gray-400"
          >
            <div onClick={() => handleCardClick(producto)}>
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
              className="flex items-center justify-center text-base text-white bg-fuchsia-300 w-full h-10 rounded-xl hover:bg-fuchsia-500 duration-300 hover:scale-105"
              onClick={() => { onAddToCartClick(producto); onCartClick(); }} >
                AGREGAR
                <FontAwesomeIcon className="text-black ml-2" icon={faCartPlus} />
              </button>
              </div>
            </div>             
        ))}
      </div>

      {selectedArticulo && (
        <ModalArticulo producto={selectedArticulo} onClose={handleCloseModal} />
      )}

      <div className="mt-16 h-10 flex items-center justify-center">
        <ul className="flex space-x-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <li
              key={page}
              className= {`cursor-pointer ${currentPage === page ? 'font-bold' : '' } h-10 w-10 text-xl text-center border-2 border-white bg-emerald-400`}
              onClick={() => paginate(page)}
            >
              {page}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArticulosGrid;