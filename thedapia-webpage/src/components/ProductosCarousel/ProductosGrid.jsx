import React, { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight,faChevronLeft} from '@fortawesome/free-solid-svg-icons'

const ProductosGrid = ({productos}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="relative flex items-center justify-between w-11/12 m-auto">
      <button
        onClick={handlePrev}
        className="flex items-center w-12 h-12 py-2 rounded-full p-4 bg-gray-200 text-gray-700 text-xl ml-20 hover:border-gray-500 border-2 hover:shadow-2xl duration-500"
      >
        <FontAwesomeIcon icon={faChevronLeft} />


      </button>
      <div className="flex overflow-hidden justify-around py-8 min-h-104 mx-8">
        {productos.slice(currentIndex, currentIndex + 4).map((producto) => (
          <div key={producto.id} className="flex-none w-80 border-gray-100 border-x-2 border-t-2 mx-4 bg-white cursor-pointer hover:shadow-2xl duration-500 transition-transform transform hover:scale-105 hover:border-gray-300 ">
            <img
              src={producto.imageUrl}
              alt={producto.title}
              className="w-full h-72 object-contain border-black border-b-2 "
            />
            <div class="h-36 p-4 ">
              <h3 className="text-lg text-gray-500 text-center font-semibold block mb-2">{producto.title}</h3>
              <p className="text-center text-black text-2xl">{producto.price}</p>
            </div>
                     
              <div class="relative flex items-center w-full h-10 ">
                <button class="absolute bottom-0 flex items-center justify-center text-base text-white bg-fuchsia-300 w-full h-10 hover:bg-fuchsia-500 duration-300">
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
      <button
        onClick={handleNext}
        class="flex items-center w-12 h-12 py-2 rounded-full p-4 bg-gray-200 text-gray-700 text-xl mr-20 hover:border-gray-500 border-2 hover:shadow-2xl duration-500"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

    </div>
  );
};

export default ProductosGrid;

