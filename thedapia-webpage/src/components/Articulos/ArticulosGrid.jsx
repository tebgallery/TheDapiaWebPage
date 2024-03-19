import { React, useState} from "react";
import ModalArticulo from './ModalArticulo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import ProductCard from "./ProductCard";

const ArticulosGrid = ({products, addToCartClick}) => {
  const itemsPerPage = 4;
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
        <ProductCard productos = {currentArticulos} addToCartClick={addToCartClick} />
      </div>

      {selectedArticulo && (
        <ModalArticulo producto={selectedArticulo} onClose={handleCloseModal} />
      )}

      <div className="mt-32 h-10 flex items-center justify-center">
        <ul className="flex space-x-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <li
              key={page}
              className= {`cursor-pointer ${currentPage === page ? 'font-bold' : '' }  py-2 px-4 rounded-full text-lg text-center text-white bg-fuchsia-400 border hover:border hover:border-gray-600`}
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