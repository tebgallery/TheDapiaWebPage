import React from "react";
import img from "../../img/portada.jpg";

const Order = () => {

    const cart = [
        { _id : 1, nombre: "AutoCars Ditoys", precio: 49990, descuento: 10, cantidad: 2, img: "https://http2.mlstatic.com/D_Q_NP_993045-MLA41178625608_032020-O.webp"},

    ];

    const precioEnvio = 4600;
    const precioEnvioExpress = 5200;

    return (  
        <section className="w-full">
            <div className="w-full h-48 mb-12 flex justify-center bg-emerald-500 opacity-60">
                <img 
                    src= {img} 
                    alt="portada.jpg"
                />
            </div>
            <div className="w-full flex items-center justify-center">
                <div className="border-2 border-gray-300 w-3/6 p-2 mr-24">
                    <form className="mb-12">
                        <label 
                            for="mail"
                            className="text-2xl uppercase font-semibold"
                        >Datos del Contacto
                        </label><br/>
                        <input 
                            type="text" 
                            id="mail" 
                            name="mail"
                            placeholder="Email"
                            className="w-full border border-black py-2 px-4 mt-4"
                        />
                    </form>

                    <h3 className="text-2xl uppercase font-semibold"> Entrega </h3>
                    <form className="mb-12" >
                    <input 
                        type="radio" 
                        id="correo1" 
                        name="Correo1" 
                        value="Correo1"
                        className="mx-4 my-4"
                    />
                    <label for="correo1" className="text-lg font-medium">
                        Correo Argentino - Clásico - Envío A Domicilio <br />
                    </label>

                    <input 
                        type="radio" 
                        id="correo2" 
                        name="Correo2" 
                        value="Correo2"
                        className="mx-4 my-4"
                    />
                    <label for="correo2" className="text-lg font-medium">
                        Correo Argentino - Express - Envío A Domicilio <br />
                    </label>
                    <div>
                    <input 
                        type="radio" 
                        id="tienda" 
                        name="Tienda" 
                        value="Tienda"
                        className="mx-4 my-4 "
                    />

                    <label for="tienda" className="text-lg font-medium">
                    Retiro en Tienda
                    </label>
                    <p className="ml-4 text-gray-500">Nos encontramos en Av Asamblea 483, Parque Chacabuco 
                        Podes pasar de 10:00 a 15:00 o de 16:00 a 19:30 los Lunes a Viernes 
                        Y 10:00 a 13:30 los Sabados
                        Si pagaste con tarjeta o mercadopago debés presentar tu DNI!
                        En el caso que retire alguna persona que no sea el titular de la compra,
                        presentar su dni o comprobante de pago.
                        Si tenes mas consultas podes escribirnos por Whatsapp: +54 9 11 2399-8384</p>
                    </div>

                    </form>

                    <h3 className="text-2xl uppercase font-semibold">Datos del Destinatario</h3>

                    <form className="mb-12">
                        <input 
                            type="text" 
                            id="nombre" 
                            name="nombre"
                            placeholder="Nombre"
                            className="w-full border border-black py-2 px-4 mt-4"
                        />
                        <input 
                            type="text" 
                            id="apellido" 
                            name="apellido"
                            placeholder="Apellido"
                            className="w-full border border-black py-2 px-4 mt-4"
                        />
                        <input 
                            type="text" 
                            id="telefono" 
                            name="telefono"
                            placeholder="Teléfono"
                            className="w-full border border-black py-2 px-4 mt-4"
                        />
                        <input 
                            type="text" 
                            id="calle" 
                            name="calle"
                            placeholder="Calle"
                            className="w-full border border-black py-2 px-4 mt-4"
                        />
                        <input 
                            type="text" 
                            id="numero" 
                            name="numero"
                            placeholder="Número"
                            className="w-full border border-black py-2 px-4 mt-4"
                        />
                        <input 
                            type="text" 
                            id="departamento" 
                            name="departamento"
                            placeholder="Departamento (Opcional)"
                            className="w-full border border-black py-2 px-4 mt-4"
                        />
                        <input 
                            type="text" 
                            id="barrio" 
                            name="barrio"
                            placeholder="Barrio (Opcional)"
                            className="w-full border border-black py-2 px-4 mt-4"
                        />
                    </form>

                    <h3 className="text-2xl uppercase font-semibold">Datos de Facturación</h3>

                    <form action="">
                        <input 
                                type="text" 
                                id="dni" 
                                name="dni"
                                placeholder="DNI o CUIL"
                                className="w-full border border-black py-2 px-4 mt-4"
                        />    
                    </form>
                </div>
                <div className="border-l-2 border-gray-500 w-2/6">
                    {cart.map((producto, _id) => (
                        <div key={_id} className="w-2/3 border border-y-gray-400 ">
                            <div>
                                <img src= {producto.img} alt="imagen-producto" className="w-20 h-24"/>
                            </div>
                            <div>
                                <h4> {producto.nombre}</h4>
                                <p>{producto.precio}</p>
                                <p>{producto.descuento}</p>
                                <p>X {producto.cantidad}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </section>
    );
};

export default Order;