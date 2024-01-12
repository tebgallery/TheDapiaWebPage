import React, { useState } from "react";

const ProductsCarousel = () => {
  const articles = [
    {
      id: 1,
      title: "Cartuchera Mooving 1 Piso Eva Bart Simpson",
      price: "$19.99",
      imageUrl: "https://tiendup.b-cdn.net/business/48/products/gyNKV0_656f73ae4d4a9_large.jpg",
    },
    {
      id: 2,
      title: "Carpeta Mooving Nº3 3x40 Escolar AFA HEROES",
      price: "$29.99",
      imageUrl: "https://http2.mlstatic.com/D_NQ_NP_750944-MLU73023483961_112023-O.webp",
    },
    {
      id: 3,
      title: "Producto 3",
      price: "$39.99",
      imageUrl: "url_imagen_3.jpg",
    },
    {
      id: 4,
      title: "Producto 4",
      price: "$49.99",
      imageUrl: "url_imagen_4.jpg",
    },
    {
        id: 5,
        title: "Producto 5",
        price: "$49.99",
        imageUrl: "url_imagen_5.jpg",
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
    <div className="relative flex items-center justify-between m-auto w-11/12">
      <button
        onClick={handlePrev}
        className="px-4 py-2 bg-gray-200 text-gray-700 mr-2"
      >
        Prev
      </button>
      <div className="flex overflow-hidden justify-around">
        {articles.slice(currentIndex, currentIndex + 4).map((article) => (
          <div key={article.id} className="flex-none w-72 h-128 border-gray-300 border-2 rounded-xl mx-4">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-72 object-contain border-black border-b-4"
            />
            <div class="h-36 p-4 border-b-4 border-black">
              <h3 className="text-base text-gray-500 text-center font-semibold block mb-2">{article.title}</h3>
              <p className="text-center text-black text-lg">{article.price}</p>
            </div>
            
            <div class="flex justify-around h-20 m-auto p-4">
              <div class="w-32 flex justify-center items-center">
                <button class ="text-center text-lg rounded-full border-white bg-emerald-500 w-14 h-10" onClick={incrementQuantity}>+</button>
          
                <button class ="text-center text-lg rounded-full border-white bg-red-600 w-14 h-10" onClick={decrementQuantity}>-</button>
              </div>
              <div class="flex items-center">
                <button class="border-2 rounded-3xl bg-gray-200 border-gray-500 p-2" onClick={() => handleAddToCart(article)}>Agregar</button>
              </div>
                
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="px-4 py-2 bg-gray-200 text-gray-700 ml-2"
      >
        Next
      </button>
    </div>
  );
};

export default ProductsCarousel;

