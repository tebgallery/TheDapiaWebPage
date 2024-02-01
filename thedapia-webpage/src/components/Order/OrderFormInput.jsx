import React from "react";

const OrderFormInput = ({ id, name, placeholder }) => {
    return (
        <input
            type= "text"
            id= {id}
            name= {name}
            placeholder= {placeholder}
            className="w-full border border-black py-3 px-4 mt-4"
            required
        />
    );
};


export default OrderFormInput;