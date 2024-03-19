import React from "react";

const CartColumn = ({cart, shippingCost}) => {
    console.log(cart);
    return (
        <div className="col-span-4">
            <div className="sticky top-12 w-9/12 border-t border-gray-300 p-2">
                <div className="h-128 overflow-y-auto mb-16">
                {cart.map((producto, _id) => (
                        <div key={_id} className="flex items-center justify-between border-b border-gray-300 py-2">
                            <div className="w-20">
                                <img
                                    src={producto.imagen}
                                    alt={producto.nombre} 
                                    className="w-auto h-auto p-2 mr-2"
                                />
                            </div>
                            <div className="w-64">
                            <h4 className="uppercase p-2"> {producto.nombre} <br /> X {producto.amount}</h4>
                            </div>
                            <div className="w-24">
                            <p className="font-semibold p-2 text-center ">$ {producto.preciototal}</p>
                            </div>
                        </div>
                ))}
                </div>

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