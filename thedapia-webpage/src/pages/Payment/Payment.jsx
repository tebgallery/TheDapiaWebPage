import React from "react";
import { useParams } from "react-router-dom";

import Coverlayout from "../../components/CoverLayout/Coverlayout";
import CartColumn from "../../components/CartColumn/CartColumn";

const Payment = () => {
    const { cart } = useParams();

    const decodedCart = decodeURIComponent(cart);
    const parsedCart = JSON.parse(decodedCart);

    console.log("cart:",parsedCart);

    return (
        <div>
            <Coverlayout/>
            <div className="m-auto">
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-8 m-auto flex items-center justify-center">
                        <div className="w-9/12 mr-2 p-2">

                        </div>
                    </div>{/*
                     <CartColumn cart = {parsedCart} shippingCost={shippingCost}/>*/}
                </div>
            </div>
        </div>
    );
};

export default Payment;