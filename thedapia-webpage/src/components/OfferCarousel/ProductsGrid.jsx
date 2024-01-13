import React, { useState } from "react";

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
    <div className="relative flex items-center justify-between w-11/12">
      <button
        onClick={handlePrev}
        className="px-4 py-2 bg-gray-200 text-gray-700 mr-2"
      >
        Prev
      </button>
      <div className="flex overflow-hidden justify-around p-8 min-h-96">
        {articles.slice(currentIndex, currentIndex + 4).map((article) => (
          <div key={article.id} className="flex-none w-72 h-128 border-gray-300 border-4 rounded-xl mx-4 bg-white transition-transform transform hover:scale-105 cursor-pointer">
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
              <div class="w-32 flex justify-between items-center">
                <button class ="text-center text-lg rounded-full border-white bg-emerald-500 w-12 h-8 hover:bg-emerald-300 duration-300" onClick={incrementQuantity}>+</button>
                
                <button class ="text-center text-lg rounded-full border-white bg-red-500 w-12 h-8 transition-colors duration-300 hover:bg-red-300 duration-300" onClick={decrementQuantity}>-</button>
              </div>
              <div class="flex items-center w-32 justify-end">
                <button class="text-center text-sm border-2 rounded-lg bg-gray-200 border-gray-500 w-24 h-8 hover:bg-gray-500 duration-300" onClick={() => handleAddToCart(article)}>COMPRAR</button>
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

export default ProductsGrid;

