import React from "react";

const OrderFormInput = ({ id, name, placeholder,value,onChange }) => {
    return (
        <input
            type= "text"
            id= {id}
            name= {name}
            placeholder= {placeholder}
            value={value}
            onChange={onChange}
            className="w-full border border-black py-3 px-4 mt-4"
            required
        />
    );
};


export default OrderFormInput;