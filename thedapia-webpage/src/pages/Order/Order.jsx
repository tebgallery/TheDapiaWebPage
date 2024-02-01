import React from "react";
import img from "../../img/portada.jpg";
import { useParams } from 'react-router-dom';
import OrderForm from "../../components/Order/OrderForm";
import OrderFormInput from "../../components/Order/OrderFormInput";

const Order = () => {

    const { cart } = useParams();

    const decodedCart = decodeURIComponent(cart);
    const parsedCart = JSON.parse(decodedCart);

    return (
        <section className="w-full">
            <div className="w-full h-48 mb-12 flex justify-center bg-emerald-500 opacity-60">
                <img
                    src={img}
                    alt="portada.jpg"
                />
            </div>
            <div className="m-auto w-10/12 flex items-center justify-center">
                <div className="w-6/12 mr-2 p-2">
                    <OrderForm title = "Datos del contacto">
                        <OrderFormInput
                            id="mail"
                            name="mail"
                            placeholder="Email"      
                        >
                        </OrderFormInput>
                        <OrderFormInput
                            id="nombre"
                            name="nombre"
                            placeholder="Nombre"     
                        >
                        </OrderFormInput>
                        <OrderFormInput
                            id="apellido"
                            name="apellido"
                            placeholder="Apellido"     
                        >
                        </OrderFormInput>
                        <OrderFormInput
                            id="telefono"
                            name="telefono"
                            placeholder="Teléfono"     
                        >
                        </OrderFormInput>
                        <OrderFormInput
                            id="dni"
                            name="dni"
                            placeholder="DNI o CUIL"     
                        >
                        </OrderFormInput>

                    </OrderForm>

                    <OrderForm title = "Entrega">
                        <div className="flex items-center border border-black p-3">
                            <input
                                type="radio"
                                id="correo1"
                                name="Correo1"
                                value="Correo1"
                                className="mx-4 my-4"
                            />
                            <p className="font-bold">Envío a Domicilio - Correo Argentino Clásico</p>
                        </div>
                        <div className="flex items-center border border-black p-3">
                            <input
                                type="radio"
                                id="correo2"
                                name="Correo2"
                                value="Correo2"
                                className="mx-4 my-4"
                            />
                            <p className="font-bold">Envío a Domicilio - Correo Argentino Clásico</p>
                        </div>

                        <div className="border border-black p-3">
                            <input
                                type="radio"
                                id="tienda"
                                name="Tienda"
                                value="Tienda"
                                className="mx-4 my-4 "
                            />
                            <p className="font-bold inline-block">Retiro en Persona</p>
                            <p className="ml-4 text-gray-500">Nos encontramos en Av Asamblea 483, Parque Chacabuco. <br /> 
                            Podes pasar de Lunes a Viernes de 10:00 a 15:00 o de 16:00 a 19:30 y los Sabados de 10:00 a 13:30 <br />
                            Si pagaste con tarjeta o mercadopago debés presentar tu DNI!
                            En el caso que retire alguna persona que no sea el titular de la compra,
                            presentar su dni o comprobante de pago.
                            Si tenes mas consultas podes escribirnos por Whatsapp: +54 9 11 2399-8384</p>
                        </div>
                    </OrderForm>

                    <OrderForm title= "Datos del Destinatario">
                        <OrderFormInput
                                id="calle"
                                name="calle"
                                placeholder="Calle"     
                            >
                        </OrderFormInput>
                        <OrderFormInput
                                id="numero"
                                name="numero"
                                placeholder="Número"    
                            >
                        </OrderFormInput>
                        <OrderFormInput
                                id="departamento"
                                name="departamento"
                                placeholder="Departamento (Opcional)"    
                            >
                        </OrderFormInput>
                        <OrderFormInput
                                id="barrio"
                                name="barrio"
                                placeholder="Barrio (Opcional)"    
                            >
                        </OrderFormInput>

                    </OrderForm>

                    <div className="flex justify-end">
                        <button className="bg-black text-white uppercase px-2 py-1 w-1/3 h-12 my-10"> Continuar con el pago </button>
                    </div>

                </div>
                <div className="sticky top-0 border-l-2 border-gray-500 w-4/12 ml-20">
                    {parsedCart.map((producto, _id) => (
                        <div key={_id} className="w-2/3 border-b border-b-gray-400 mb-4 ml-8  ">
                            <div>
                                <img src={producto.imagen} alt="imagen-producto" className="w-20 h-24" />
                            </div>
                            <div>
                                <h4> {producto.nombre}</h4>
                                <p>{producto.precio}</p>
                                <p>{producto.descuento}</p>
                                <p>{producto.preciototal}</p>
                                <p>X {producto.amount}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </section>
    );
};

export default Order;