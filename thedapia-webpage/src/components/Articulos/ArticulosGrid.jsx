import React, { useState } from 'react';
import ModalArticulo from './ModalArticulo'

const ArticulosGrid = ({ articulos }) => {
  const itemsPerPage = 40;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArticulo, setSelectedArticulo] = useState(null);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticulos = articulos.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(articulos.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCardClick = (articulo) => {
    setSelectedArticulo(articulo);
  };

  const handleCloseModal = () => {
    setSelectedArticulo(null);
  };

  return (
    <div className="w-4/5 py-16 px-8">
      <div className="grid grid-cols-4 gap-y-12">
        {currentArticulos.map((articulo, index) => (
          <div key={index} 
          className="flex-none w-72 border-gray-300 border-x-2 border-t-2 bg-white cursor-pointer hover:shadow-2xl duration-500 transition-transform transform hover:scale-105 hover:border-gray-300"
          onClick={() => handleCardClick(articulo)}
          >
          <img
            src={articulo.img}
            alt={articulo.title}
            className="w-full h-72 p-2 object-contain border-black border-b-2 "
          />
          <div class="h-36 p-4 ">
            <h3 className="text-lg text-gray-500 text-center font-semibold block mb-2">{articulo.title}</h3>
            <p className="text-center text-black text-2xl">${articulo.precio}</p>
          </div>
                   
            <div class="relative flex items-center w-full h-10 ">
              <button class="absolute bottom-0 flex items-center justify-center text-base text-white bg-fuchsia-300 w-full h-10 hover:bg-fuchsia-500 duration-300" onClick={() => handleAddToCart(article)}>
                AGREGAR
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                  xmlSpace="preserve"
                  className="ml-2"
                >
                  <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                    <path d="M 72.975 58.994 H 31.855 c -1.539 0 -2.897 -1.005 -3.347 -2.477 L 15.199 13.006 H 3.5 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 h 14.289 c 1.539 0 2.897 1.005 3.347 2.476 l 13.309 43.512 h 36.204 l 10.585 -25.191 h -6.021 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 H 86.5 c 1.172 0 2.267 0.587 2.915 1.563 s 0.766 2.212 0.312 3.293 L 76.201 56.85 C 75.655 58.149 74.384 58.994 72.975 58.994 z" style={{ stroke: "none", strokeWidth: 1, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: "rgb(0,0,0)", fillRule: "nonzero", opacity: 1 }} transform="matrix(1 0 0 1 0 0)" strokeLinecap="round" />
                    <circle cx="28.88" cy="74.33" r="6.16" style={{ stroke: "none", strokeWidth: 1, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: "rgb(0,0,0)", fillRule: "nonzero", opacity: 1 }} transform="matrix(1 0 0 1 0 0)" />
                    <circle cx="74.59" cy="74.33" r="6.16" style={{ stroke: "none", strokeWidth: 1, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: "rgb(0,0,0)", fillRule: "nonzero", opacity: 1 }} transform="matrix(1 0 0 1 0 0)" />
                    <path d="M 62.278 19.546 H 52.237 V 9.506 c 0 -1.933 -1.567 -3.5 -3.5 -3.5 s -3.5 1.567 -3.5 3.5 v 10.04 h -10.04 c -1.933 0 -3.5 1.567 -3.5 3.5 s 1.567 3.5 3.5 3.5 h 10.04 v 10.04 c 0 1.933 1.567 3.5 3.5 3.5 s 3.5 -1.567 3.5 -3.5 v -10.04 h 10.041 c 1.933 0 3.5 -1.567 3.5 -3.5 S 64.211 19.546 62.278 19.546 z" style={{ stroke: "none", strokeWidth: 1, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: "rgb(0,0,0)", fillRule: "nonzero", opacity: 1 }} transform="matrix(1 0 0 1 0 0)" strokeLinecap="round" />
                  </g>
                </svg>
              </button>
            </div>             
        </div>
        ))}
      </div>

      {selectedArticulo && (
        <ModalArticulo articulo={selectedArticulo} onClose={handleCloseModal} />
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