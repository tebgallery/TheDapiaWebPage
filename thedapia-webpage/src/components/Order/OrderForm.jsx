import React from "react";

const OrderForm = ({title,children}) => {
    return (
        <>
            <h3 className="text-2xl uppercase font-semibold mb-3">{title}</h3>
            <form className="mb-12">
                {children}
            </form>
        </>
    );
};

export default OrderForm;