import React, { useState } from "react";
import AddToCartLogo from '../../img/addtocart.png';

const ProductsGrid = () => {
  let cant = 0;
  const articles = [
    {
      id: 1,
      title: "Cartuchera Mooving 1 Piso Eva Bart Simpson",
      price: "$19.990",
      imageUrl: "https://tiendup.b-cdn.net/business/48/products/gyNKV0_656f73ae4d4a9_large.jpg",
    },
    {
      id: 2,
      title: "Carpeta Mooving Nº3 3x40 Escolar AFA HEROES",
      price: "$15.600",
      imageUrl: "https://http2.mlstatic.com/D_NQ_NP_750944-MLU73023483961_112023-O.webp",
    },
    {
      id: 3,
      title: "Botella de silicona plegable con pico cool Cresko",
      price: "$18.750",
      imageUrl: "https://acdn.mitiendanube.com/stores/001/040/110/products/ck7471-fcc20f1fa38f74ea0616720674154410-1024-1024.webp",
    },
    {
      id: 4,
      title: "Mochila Urbana Harry Potter plataforma magia Cresko",
      price: "$70.000",
      imageUrl: "https://acdn.mitiendanube.com/stores/001/040/110/products/hp1271-e33442c5be65e3ae6d16945327896568-1024-1024.webp",
    },
    {
        id: 5,
        title: "Cuaderno Mickey Mouse A5",
        price: "$13.990",
        imageUrl: "https://acdn.mitiendanube.com/stores/001/173/683/products/magic31-a4a52d4f26c2ef8fa316621359875272-1024-1024.webp",
      },
    // Agrega más productos según sea necesario
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < articles.length - 4 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : articles.length - 4
    );
  };

  const handleAddToCart = (article) => {
    // Implementa la lógica para agregar al carrito aquí
    console.log(`Añadido al carrito: ${article.title}, Cantidad: 1`);
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
        <svg
          fill="#000000"
          height="24px"
          width="24px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 330.002 330.002"
          xmlSpace="preserve"
        >
          <path
            id="XMLID_227_"
            d="M233.25,306.001L127.5,165.005L233.25,24.001c4.971-6.628,3.627-16.03-3-21c-6.627-4.971-16.03-3.626-21,3  L96.75,156.005c-4,5.333-4,12.667,0,18l112.5,149.996c2.947,3.93,7.451,6.001,12.012,6.001c3.131,0,6.29-0.978,8.988-3.001  C236.878,322.03,238.221,312.628,233.25,306.001z"
          />
        </svg>


      </button>
      <div className="flex overflow-hidden justify-around py-8 min-h-104 mx-8">
        {articles.slice(currentIndex, currentIndex + 4).map((article) => (
          <div key={article.id} className="flex-none w-80 h-128 border-gray-100 border-2 rounded-xl mx-4 bg-white cursor-pointer hover:shadow-2xl duration-500 hover:border-gray-300">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-72 object-contain border-black border-b-2 "
            />
            <div class="h-36 p-4 ">
              <h3 className="text-lg text-gray-500 text-center font-semibold block mb-2">{article.title}</h3>
              <p className="text-center text-black text-2xl">{article.price}</p>
            </div>
                     
              <div class="relative flex items-center w-full h-10 ">
                <button class="absolute bottom-0 flex items-center justify-center text-base text-white bg-gray-500 w-full h-10 hover:bg-fuchsia-400 duration-300" onClick={() => handleAddToCart(article)}>
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
        class="flex items-center w-12 h-12 rounded-full py-2 bg-gray-200 text-gray-700 text-xl mr-20 hover:shadow-2xl duration-500 hover:border-gray-500 border-2"
      >
        <svg
          fill="#000000"
          class="h-8 w-8"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 330.002 330.002"
          xmlSpace="preserve"
        >
          <path
            id="XMLID_222_" 
            d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"
          />
        </svg>
      </button>

    </div>
  );
};

export default ProductsGrid;

