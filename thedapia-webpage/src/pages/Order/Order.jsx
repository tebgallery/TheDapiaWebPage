import React, { useState } from "react";
import { useParams } from "react-router-dom";
import OrderForm from "../../components/Order/OrderForm";
import OrderFormInput from "../../components/Order/OrderFormInput";
import Coverlayout from "../../components/CoverLayout/Coverlayout";
import CartColumn from "../../components/CartColumn/CartColumn";

import cardsLogo from '../../img/PaymentLogos/cardslogo.jpg';
import mpLogo from '../../img/PaymentLogos/mplogo.png';

import { useNavigate } from 'react-router-dom';

const Order = () => {
    const [shippingCost, setShippingCost] = useState(0);
    const [orderForm, setOrderForm] = useState(true);
    const [receiverForm, setReceiverForm] = useState(false);
    const [paymentForm, setPaymentForm] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(0);
    const [cardData, setCardData] = useState(false);
    const { cart } = useParams();

    const decodedCart = decodeURIComponent(cart);
    const parsedCart = JSON.parse(decodedCart);
    const totalPrice = parsedCart[parsedCart.length - 1].total + shippingCost;

    return (
        <div>
            <Coverlayout />
            <div className="m-auto">
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-8 m-auto flex items-center justify-center">
                        <div className="w-9/12 mr-2 p-2">
                            {orderForm && (
                                <>
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
                                        <div className="flex justify-between border border-black p-3 my-2">
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id="entrega-1"
                                                    name="entrega"
                                                    value="entrega-1"
                                                    className="mx-4 my-4"
                                                    onClick={() => {
                                                        setShippingCost(4800);
                                                        setReceiverForm(true);
                                                    }}
                                                />
                                                <p className="font-bold">
                                                    Envío a Domicilio - Correo Argentino Clásico
                                                </p>
                                            </div>
                                            <span className="font-bold">$4800</span>
                                        </div>
                                        <div className="flex justify-between border border-black p-3 my-2">
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id="entrega-2"
                                                    name="entrega"
                                                    value="entrega-2"
                                                    className="mx-4 my-4"
                                                    onClick={() => {
                                                        setShippingCost(5500);
                                                        setReceiverForm(true);
                                                    }}
                                                />
                                                <p className="font-bold">
                                                    Envío a Domicilio - Correo Argentino Express
                                                </p>

                                            </div>
                                            <span className="font-bold">$5500</span>
                                        </div>

                                        <div className="border border-black p-3 my-2 flex flex-col">
                                            <div className="flex justify-between">
                                                <div className="flex items-center">
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
                                                </div>
                                                <span className="font-bold">Gratis</span>
                                            </div>
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

                                    {receiverForm && (
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
                                        <button className="bg-black text-white uppercase px-2 py-2 w-1/3 h-12 my-10 hover:opacity-65"
                                            onClick={() => {
                                                setPaymentForm(true);
                                                setOrderForm(false);
                                            }}
                                        >
                                            Continuar con el pago
                                        </button>
                                    </div>
                                </>
                            )}

                            {paymentForm && (
                                <>
                                    <h3 className="text-2xl uppercase font-semibold mb-3">Medios de pago</h3>
                                    <div className="w-full border border-black flex items-center p-4 my-4">
                                        <input
                                            type="radio"
                                            id="pago1"
                                            name="pago"
                                            value="pago1"
                                            className="mx-4 my-4"
                                            onClick={() => {
                                                setPaymentMethod(1);
                                                setCardData(true);
                                            }}

                                        />
                                        <img src={cardsLogo} alt="cards-logo" className="w-32 h-12 mx-4" />
                                        <p className="mx-4 font-semibold">Tarjeta de Crédito/Débito</p>
                                    </div>

                                    {cardData && (
                                        <>

                                            <form class="flex flex-wrap gap-3 w-full p-5 bg-gray-100">
                                                <label class="relative w-full flex flex-col">
                                                    <span class="font-bold mb-3">Número de la tarjeta</span>
                                                    <input class="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300" type="text" name="card_number" placeholder="0000 0000 0000" />
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                                    </svg>
                                                </label>

                                                <label class="relative w-full flex flex-col">
                                                    <span class="font-bold mb-3">Titular de la tarjeta</span>
                                                    <input class="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300" type="text" name="card_number" placeholder="Nombre como aparece en la tarjeta" />
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" />
                                                    </svg>
                                                </label>

                                                <label class="relative flex-1 flex flex-col">
                                                    <span class="font-bold mb-3">Fecha de Expiración</span>
                                                    <input class="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300" type="text" name="expire_date" placeholder="MM/YY" />
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                </label>

                                                <label class="relative flex-1 flex flex-col">
                                                    <span class="font-bold flex items-center gap-3 mb-3">
                                                        CVV
                                                        <span class="relative group">
                                                            <span class="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white"> CVV (Código de seguridad) es el número de 3 o 4 digitos que se encuentra en el reverso de su tarjeta</span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <input class="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300" type="text" name="card_cvc" placeholder="&bull;&bull;&bull;" />
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                    </svg>
                                                </label>
                                            </form>
                                        </>

                                    )}

                                    <div className="w-full border border-black flex items-center p-4 my-4">
                                        <input
                                            type="radio"
                                            id="pago2"
                                            name="pago"
                                            value="pago2"
                                            className="mx-4 my-4"
                                            onClick={() => {
                                                setPaymentMethod(2);
                                                setCardData(false);
                                                setMpData(true);
                                            }}

                                        />
                                        <img src={mpLogo} alt="mp-logo" className="w-16 h-16 mx-4" />
                                        <p className="mx-4">Utilizando la opción Pagar a través de Mercado Pago serás redirigido y podrás pagar de las siguientes formas: Tarjeta de crédito - Tarjeta de Débito - Efectivo - Saldo en la cuenta de Mercado Pago</p>
                                    </div>

                                    <div className="flex justify-between">
                                        <button className="bg-black text-white uppercase px-2 py-2 w-1/3 h-12 my-10 hover:opacity-65"
                                            onClick={() => {
                                                setOrderForm(true);
                                                setPaymentForm(false);
                                                setCardData(false);
                                            }}

                                        >
                                            Volver hacia atrás
                                        </button>
                                        {paymentMethod === 1 && (
                                            <button className="bg-black text-white uppercase px-2 py-2 w-1/3 h-12 my-10 hover:opacity-65"

                                            >
                                                Continuar con el pedido
                                            </button>
                                        )}
                                        {paymentMethod === 2 && (
                                            <button className="bg-black text-white uppercase px-2 py-2 w-1/3 h-12 my-10 hover:opacity-65"

                                            >
                                                Continuar con mercadopago
                                            </button>
                                        )}

                                    </div>

                                </>

                            )}

                        </div>
                    </div>
                    <CartColumn cart={parsedCart} shippingCost={shippingCost} />
                </div>
            </div>
        </div>
    );
};

export default Order;
