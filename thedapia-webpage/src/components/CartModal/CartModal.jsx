import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faTrashCan,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'

const CartModal = ({ cart, onClose, onMinus, onPlus, onDelete }) => {

  const subTotal = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.preciototal * currentValue.amount, 0);


  const navigate = useNavigate();

  const handleNavigateToOrderPage = () => {
    navigate('/order');
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-end z-50">
      <div className="w-9/12 h-full"
        onClick={onClose}>
      </div>
      <div className="bg-white p-8 w-3/12 h-full  ">
        {cart && cart.length > 0 ? (
          <>
            <div className="flex items-center mb-12">
              <FontAwesomeIcon
                icon={faXmark}
                className="cursor-pointer w-5 h-5"
                onClick={onClose}
              />
              <h3 className="ml-8 text-2xl font-semibold p-2">Carrito de compras</h3>
            </div>
            <div className="h-128 overflow-y-auto mb-8">
              {cart.map((c) => (
                <div
                  key={c._id}
                  className="relative flex items-center justify-between border-b border-stone-400 mb-4 p-2"
                >
                  <div className="flex items-center p-1">
                    <img src={c.imagen} alt={c.nombre} className="h-16 w-16 mr-2" />
                    <div className="mx-2">
                      <p className="font-bold mb-2">{c.nombre}</p>
                      <div className="flex items-center justify-between">
                        <p>Cantidad: </p>
                        <div className="flex items-center justify-between ml-4">
                          <FontAwesomeIcon
                            icon={faMinus}
                            className="cursor-pointer w-3 h-3 border bg-slate-100 p-2 border-gray-300 rounded-lg hover:text-emerald-500"
                            onClick={() => onMinus(c._id)}
                          />
                          <input
                            type="text"
                            className="w-6 mx-2 outline-none text-center text-lg text-red-500"
                            placeholder={c.amount}
                            readOnly
                          />
                          <FontAwesomeIcon
                            icon={faPlus}
                            className="cursor-pointer w-3 h-3 border bg-slate-100 p-2 border-gray-300 rounded-lg hover:text-emerald-500"
                            onClick={() => onPlus(c._id)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="relative text-center mx-2">
                      {c.descuento !== null && c.descuento !== 0 ? (
                        <>
                          <p className="text-fuchsia-500 line-through">${c.precio}</p>
                          <p>${c.preciototal}</p>
                        </>
                      ) : (
                        <p>${c.preciototal}</p>
                      )}
                    </div>
                  </div>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className="cursor-pointer absolute top-0 right-0"
                    onClick={() => onDelete(c._id)}
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center justify-around">
                <p className="font-bold">Subtotal:</p>
                <p>${subTotal}</p>
              </div>

              <div className="mt-16 w-full px-4">
                <button className="w-full bg-black text-white px-4 py-2 rounded- mb-6 hover:bg-opacity-65" onClick={handleNavigateToOrderPage}>
                  Continuar Compra
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <FontAwesomeIcon
              icon={faXmark}
              className="cursor-pointer mb-10"
              onClick={onClose}
            />
            <p className="text-xl">No agregaste nada!</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
