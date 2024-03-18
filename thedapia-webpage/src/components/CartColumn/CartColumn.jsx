import React from "react";

const CartColumn = ({cart, shippingCost}) => {
    return (
        <div className="col-span-4">
            <div className="sticky top-12 w-9/12 border-t border-gray-300 p-2">
                {cart.map((producto, _id) => (
                    <div key={_id}>
                        <div className="flex items-center justify-between border-b border-gray-300 py-2">
                            <img
                                src={producto.imagen}
                                alt="imagen-producto"
                                className="w-20 h-20"
                            />
                            <h4 className="uppercase"> {producto.nombre} <br /> X {producto.amount}</h4>
                            <p className="font-semibold ">$ {producto.preciototal}</p>
                        </div>
                    </div>
                ))}

                <div className="border-b border-gray-300 py-2">
                    <div className="flex justify-between items-start my-2">
                        <p>Subtotal: </p>
                        <p className="font-semibold ">${cart.subtotal}</p>
                    </div>
                    <div className="flex justify-between items-start my-2">
                        <p>Costo del envío: </p>
                        <p className="font-semibold ">${shippingCost}</p>
                    </div>
                </div>
                <div className="flex items-center justify-between border-b border-gray-300 py-5">
                    <p className="text-2xl font-semibold">Total: </p>
                    <p className="font-semibold ">${cart.total + shippingCost} </p>
                </div>
            </div>
        </div>
    );
};

export default CartColumn;