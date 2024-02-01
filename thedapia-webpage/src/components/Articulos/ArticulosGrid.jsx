import { React, useState} from "react";
import ModalArticulo from './ModalArticulo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ArticulosGrid = ({products, onCartClick, onAddToCartClick}) => {
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
    <div className="w-4/5 py-16 px-8 mx-8">
      <div className="grid grid-cols-4 gap-10 place-content-center">
        {currentArticulos.map((producto, _id) => (
          <div key={_id} 
          className="flex-none w-auto border-gray-200  border-x-2 border-t-2 rounded-xl cursor-pointer hover:shadow-2xl hover:border-gray-300"
          >
            <div onClick={() => handleCardClick(producto)}>
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-60 p-2 object-contain duration-500 transition-transform transform hover:scale-105 "
              />
              <div class="h-36 p-4 border-black border-t-2 ">
                <h3 className="text-lg text-gray-500 text-center font-semibold block mb-4">{producto.nombre}</h3>
    
                  {producto.descuento!=null && producto.descuento!=0  ?(
                    <div className="flex items-center justify-center">
                      <p className="text-center text-fuchsia-500 text-lg line-through">${producto.precio}</p>
                      <p className="text-center text-black text-2xl ml-5">${producto.preciototal}</p>
                    </div>
                  ): <p className="text-center text-black text-2xl">${producto.preciototal}</p>}
                
              </div>
            </div>

            <div class="relative flex items-center w-full h-10" onClick={() => { onAddToCartClick(producto); onCartClick(); }}>
              <button 
              className="absolute bottom-0 rounded-b-xl flex items-center justify-center text-base text-white bg-fuchsia-300 w-full h-10 hover:bg-fuchsia-500 duration-300" >
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