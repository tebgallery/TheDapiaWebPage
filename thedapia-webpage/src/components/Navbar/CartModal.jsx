import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faTrashCan, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const CartModal = ({ onClose }) => {
  const [cart, setCart] = useState([
    {
      Id: 1,
      IdUsuario: 333,
      IdProducto: 65,
      Nombre: 'Cartuchera Mooving 1 Piso Eva Bart Simpson',
      Imagen:
        'https://tiendup.b-cdn.net/business/48/products/gyNKV0_656f73ae4d4a9_large.jpg?editor_preview_key=651_940-5e65a3a0e4953',
      Precio: 19990,
      Cantidad: 1,
    },
    {
      Id: 2,
      IdUsuario: 334,
      IdProducto: 66,
      Nombre: 'Carpeta Mooving Nº3 3x40 Escolar AFA HEROES',
      Imagen: 'https://http2.mlstatic.com/D_NQ_NP_750944-MLU73023483961_112023-O.webp',
      Precio: 15600,
      Cantidad: 2,
    },
  ]);

  const total = cart.reduce((accumulator, currentValue) => accumulator + currentValue.Precio * currentValue.Cantidad, 0);

  const handleIncrementProductAmount = (productId) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.Id === productId ? { ...product, Cantidad: product.Cantidad + 1 } : product
      )
    );
  };

  const handleDecrementProductAmount = (productId) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.Id === productId && product.Cantidad > 1 ? { ...product, Cantidad: product.Cantidad - 1 } : product
      )
    );
  };

  const handleRemoveProduct = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.Id !== productId));
  };

  return (
    <div className="fixed w-full h-full top-0 bg-opacity-50 flex items-center justify-end z-50">
      <div className="bg-white p-8 border border-black rounded-2xl w-4/12 h-full">
        <div className="flex items-center mb-12">
          <FontAwesomeIcon icon={faXmark} onClick={onClose} className="cursor-pointer" />
          <h3 className="ml-12 text-lg p-2">Carrito de Compras</h3>
        </div>
        {cart.map((c) => (
          <div key={c.Id} className="relative flex items-center justify-between border-b border-stone-400 mb-4 p-2">
            <div className="flex items-center">
              <img src={c.Imagen} alt={c.Nombre} className="h-16 w-auto mr-4" />
              <div>
                <p className="font-bold mb-1">{c.Nombre}</p>
                <div className="flex items-center justify-between w-40">
                  <p>Cantidad: </p>
                  <div>
                    <FontAwesomeIcon
                      icon={faMinus}
                      className="cursor-pointer w-3 h-3"
                      onClick={() => handleDecrementProductAmount(c.Id)}
                    />
                    <input
                      type="text"
                      placeholder={c.Cantidad}
                      className="w-6 mx-2 outline-0 outline-none border-b border-gray-300 text-center text-black"
                    />
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="cursor-pointer w-3 h-3"
                      onClick={() => handleIncrementProductAmount(c.Id)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative text-center">
              <p>${c.Precio}</p>
            </div>
            <FontAwesomeIcon 
                icon={faTrashCan} 
                className="cursor-pointer absolute top-0 right-0" 
                onClick={() => handleRemoveProduct(c.Id)}   
            />
          </div>
        ))}
        <div>
          <div className="flex items-center justify-around">
            <p className="font-bold">Total:</p>
            <p>${total}</p>
          </div>

          <div className="mt-16">
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-4">Continuar Compra</button>
            <button className="bg-gray-400 text-white px-4 py-2 rounded w-full">Seguir Comprando</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
