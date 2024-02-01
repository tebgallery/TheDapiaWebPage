import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faTrashCan,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import {Link as RouterLink, useNavigate} from 'react-router-dom'

const CartModal = ({onClose, cart, onClickMinus,onClickPlus,onClickRemove }) => {
  const total = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.preciototal * currentValue.amount,
    0
  );

  const navigate = useNavigate();

  const handleNavigateToOrderPage = () => {
    // Supongamos que 'cart' es tu lista de productos en formato JSON
    const cartParameter = encodeURIComponent(JSON.stringify(cart));
    navigate(`/order/${cartParameter}`);
  };

  return (
    <div className="fixed w-full h-full top-0 bg-opacity-50 flex items-center justify-end z-50">
      <div className="bg-white p-8 border border-black rounded-2xl w-3/12 h-full">
      {cart.length > 0 ? (
      <>
          <div className="flex items-center mb-12">
          <FontAwesomeIcon
            icon={faXmark}
            onClick={onClose}
            className="cursor-pointer"
          />
          <h3 className="ml-10 text-2xl p-2">Carrito de Compras</h3>
        </div>
        {cart.map((c) => (
          <div
            key={c._id}
            className="relative flex items-center justify-between border-b border-stone-400 mb-4 p-2"
          >
            <div className="flex items-center">
              <img src={c.imagen} alt={c.nombre} className="h-16 w-auto mr-4" />
              <div>
                <p className="font-bold mb-1">{c.nombre}</p>
                <div className="flex items-center justify-between w-40">
                  <p>Cantidad: </p>
                  <div>
                    <FontAwesomeIcon
                      icon={faMinus}
                      className="cursor-pointer w-3 h-3"
                      onClick={() => onClickMinus(c)}
                    />
                    <input
                      type="text"
                      className="w-6 mx-2 outline-0 outline-none border-b border-gray-300 text-center text-black"
                      placeholder={c.amount}
                    />
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="cursor-pointer w-3 h-3"
                      onClick={() => onClickPlus(c)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative text-center">
            {c.descuento !== null && c.descuento !== 0 ? (
              <>
                <p className="text-fuchsia-500 line-through">${c.precio}</p>
                <p>${c.preciototal}</p>
              </>
            ) : (
              <p>${c.preciototal}</p>
            )}
            </div>
            <FontAwesomeIcon
              icon={faTrashCan}
              className="cursor-pointer absolute top-0 right-0"
              onClick={() => onClickRemove(c)}
            />
          </div>
        ))}
        <div>
          <div className="flex items-center justify-around">
            <p className="font-bold">Total:</p>
            <p>${total}</p>
          </div>

          <div className="mt-16">
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-4" onClick={handleNavigateToOrderPage}>
              Continuar Compra
            </button>
            <button className="bg-gray-400 text-white px-4 py-2 rounded w-full">
              Seguir Comprando
            </button>
          </div>
        </div>
        </>      
        ) : (
          <>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={onClose}
              className="cursor-pointer mb-10"
            />
            <p className="text-xl">No agregaste nada!</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
