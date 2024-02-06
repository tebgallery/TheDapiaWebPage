import React, { useState } from "react";
import { useParams } from "react-router-dom";
import OrderForm from "../../components/Order/OrderForm";
import OrderFormInput from "../../components/Order/OrderFormInput";
import Coverlayout from "../../components/CoverLayout/Coverlayout";
import CartColumn from "../../components/CartColumn/CartColumn";

import {useNavigate} from 'react-router-dom'

const Order = () => {
    const [shippingCost, setShippingCost] = useState(0);
    const [receiverForm,setReceiverForm] = useState(false);
    const { cart } = useParams();

    const decodedCart = decodeURIComponent(cart);
    const parsedCart = JSON.parse(decodedCart);
    const totalPrice = parsedCart[parsedCart.length - 1].total + shippingCost;
    const navigate = useNavigate();

    const handleNavigateToPaymentPage = () => {
        const cartWithTotalPrice = [...parsedCart, { totalPrice }];
        const cartParameter = encodeURIComponent(JSON.stringify(cartWithTotalPrice));
        navigate(`/payment/${cartParameter}`);
    };
  

    return (
        <div>
            <Coverlayout/>
            <div className="m-auto">
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-8 m-auto flex items-center justify-center">
                        <div className="w-9/12 mr-2 p-2">
                            <OrderForm title="Datos del contacto">
                                <OrderFormInput
                                    id="mail"
                                    name="mail"
                                    placeholder="Email"
                                ></OrderFormInput>
                                <OrderFormInput
                                    id="nombre"
                                    name="nombre"
                                    placeholder="Nombre"
                                ></OrderFormInput>
                                <OrderFormInput
                                    id="apellido"
                                    name="apellido"
                                    placeholder="Apellido"
                                ></OrderFormInput>
                                <OrderFormInput
                                    id="telefono"
                                    name="telefono"
                                    placeholder="Teléfono"
                                ></OrderFormInput>
                                <OrderFormInput
                                    id="dni"
                                    name="dni"
                                    placeholder="DNI o CUIL"
                                ></OrderFormInput>
                            </OrderForm>
                            <OrderForm title="Entrega">
                                <div className="flex items-center border border-black p-3">
                                    <input
                                        type="radio"
                                        id="entrega-1"
                                        name="entrega"
                                        value="entrega-1"
                                        className="mx-4 my-4"
                                        onClick={() => {
                                            setShippingCost(5200);
                                            setReceiverForm(true);
                                          }}

                                    />
                                    <p className="font-bold">
                                        Envío a Domicilio - Correo Argentino Clásico
                                    </p>
                                </div>
                                <div className="flex items-center border-x border-black p-3">
                                    <input
                                        type="radio"
                                        id="entrega-2"
                                        name="entrega"
                                        value="entrega-2"
                                        className="mx-4 my-4"
                                        onClick={() => {
                                            setShippingCost(4800);
                                            setReceiverForm(true);
                                          }}
                                    />
                                    <p className="font-bold">
                                        Envío a Domicilio - Correo Argentino Express
                                    </p>
                                </div>

                                <div className="border border-black p-3">
                                    <input
                                        type="radio"
                                        id="entrega-3"
                                        name="entrega"
                                        value="entrega-3"
                                        className="mx-4 my-4 "
                                        onClick={() => {
                                            setShippingCost(0);
                                            setReceiverForm(false);
                                          }}
                                    />
                                    <p className="font-bold inline-block">Retiro en Persona</p>
                                    <p className="ml-4 text-gray-500">
                                        Nos encontramos en Av Asamblea 483, Parque Chacabuco. <br />
                                        Podes pasar de Lunes a Viernes de 10:00 a 15:00 o de 16:00 a
                                        19:30 y los Sabados de 10:00 a 13:30 <br />
                                        Si pagaste con tarjeta o mercadopago debés presentar tu DNI!
                                        En el caso que retire alguna persona que no sea el titular de
                                        la compra, presentar su dni o comprobante de pago. Si tenes
                                        mas consultas podes escribirnos por Whatsapp: +54 9 11
                                        2399-8384
                                    </p>
                                </div>
                            </OrderForm>
                            { receiverForm && (
                                <OrderForm title="Datos del Destinatario">
                                    <OrderFormInput
                                        id="calle"
                                        name="calle"
                                        placeholder="Calle"
                                    ></OrderFormInput>
                                    <OrderFormInput
                                        id="numero"
                                        name="numero"
                                        placeholder="Número"
                                    ></OrderFormInput>
                                    <OrderFormInput
                                        id="departamento"
                                        name="departamento"
                                        placeholder="Departamento (Opcional)"
                                    ></OrderFormInput>
                                    <OrderFormInput
                                        id="barrio"
                                        name="barrio"
                                        placeholder="Barrio (Opcional)"
                                    ></OrderFormInput>
                                </OrderForm>
                            )}

                            <div className="flex justify-end">
                                <button className="bg-black text-white uppercase px-2 py-2 w-1/3 h-12 my-10 hover:opacity-65" onClick={handleNavigateToPaymentPage}>
                                    Continuar con el pago
                                </button>
                            </div>
                        </div>
                    </div>
                     <CartColumn cart = {parsedCart} shippingCost={shippingCost}/>
                </div>
            </div>
        </div>
    );
};

export default Order;
