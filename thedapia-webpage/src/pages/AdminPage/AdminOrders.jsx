import React, { useState, useEffect } from "react";
import Navbar from '../../components/Admin/Navbar/Navbar'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const AdminOrders = () => {

    const url = "http://localhost:3000/orders";
    const [orders, setOrders] = useState([]);
    const [productModal, setProductModal] = useState(false);
    const [selectedOrderProducts, setSelectedOrderProducts] = useState({});

    const getOrders = async () => {
        try {
            const response = await axios.get(url);
            setOrders(response.data);
        } catch (error) {
            console.error("Error al obtener las órdenes:", error);
        }
    };

    const updateOrder = async (order) => {
        try {
            const response = await axios.put(url, order);

        }
        catch (error) {
            console.error("Error al modificar la orden:", error.response.data);
        }

    };

    useEffect(() => {
        getOrders();
    }, []);

    const headers = [
        "Email",
        "Nombre",
        "Apellido",
        "Telefono",
        "Direccion",
        "Dni",
        "Retiro",
        "Estado",
        "Precio",
        "Productos"
    ];

    const toggleProductModal = (orderProducts) => {
        setSelectedOrderProducts(orderProducts);
        setProductModal(!productModal);
    };

    const handleOrderStatusChange = (value,order) => {

        order.estado = value;

        updateOrder(order);

        getOrders();

    };

    return (
        <>
            <Navbar />
            <div className="w-full flex justify-center mt-16">
                <table className="w-10/12 table-auto border-separate border-spacing-y-6 text-left ">
                    <thead>
                        <tr>
                            {headers.map((header, index) => (
                                <th key={index} className="px-4 py-4 bg-slate-100 text-base uppercase ">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index} className="duration-300 transition-transform transform hover:scale-102 hover:bg-slate-200">
                                <td className="border-l-2 rounded-l-xl border-y-2 border-gray-200 text-base px-4 py-4">{order.email}</td>
                                <td className="border-y-2 border-gray-200 text-base px-4 py-4">{order.nombre}</td>
                                <td className="border-y-2 border-gray-200 text-base px-4 py-4 ">{order.apellido}</td>
                                <td className="border-y-2 border-gray-200 text-base px-4 py-4">{order.telefono}</td>
                                <td className="border-y-2 border-gray-200 text-base px-4 py-4 ">{order.direccion}</td>
                                <td className="border-y-2 border-gray-200 text-base px-4 py-4 ">{order.dni}</td>
                                <td className="border-y-2 border-gray-200 text-base px-4 py-4 ">{order.retiro}</td>
                                <td className="border-y-2 border-gray-200 text-base px-4 py-4">
                                    <select
                                        className="rounded-lg px-2 py-2 border-none text-base outline-none focus:outline-none"
                                        value={order.estado}
                                        onChange={(e) => handleOrderStatusChange(e.target.value,order)}
                                    >
                                        <option value="Aprobado">Aprobado</option>
                                        <hr />
                                        <option value="Pendiente">Pendiente</option>
                                        <hr/>
                                        <option value="Cancelado">Cancelado</option>
                                    </select>
                                </td>
                                <td className="border-y-2 border-gray-200 text-base text-emerald-600 font-semibold px-4 py-4">$ {order.precioOrden}</td>
                                <td className="border-r-2 rounded-r-xl border-y-2 border-gray-200 text-base text-center px-4 py-4">
                                    <div className="flex justify-center">
                                        <button className="border-2 border-pink-400 text-pink-400 rounded-xl px-4 py-1 hover:bg-white-500 flex items-center justify-center hover:bg-pink-400 hover:text-white"
                                            onClick={() => {
                                                toggleProductModal(order.productos)
                                            }}
                                        >
                                            Ver
                                        </button>
                                    </div>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {productModal && (
                    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center "
                        onClick={toggleProductModal}
                    >
                        <div className="bg-white p-8 rounded-3xl w-4/5 ">
                            <div className="w-full h-10 bg-pink-200 mb-5 flex items-center justify-evenly uppercase">
                                <p className="w-48">Nombre</p>
                                <p className="w-16">Imagen</p>
                                <p className="w-24">Marca</p>
                                <p className="w-24">Cod Barra</p>
                                <p className="w-20">Color</p>
                                <p className="w-20">Cantidad</p>
                                <p className="w-20">Precio</p>
                            </div>
                            {selectedOrderProducts.map((producto, index) => (
                                <div className="w-full h-28 border-b border-gray-200 mb-5 flex items-center justify-evenly">
                                    <p className="w-48">{producto.nombreProducto}</p>
                                    <img src={producto.imagen} alt="producto.png" className="w-16 h-auto" />
                                    <p className="w-24">{producto.marca}</p>
                                    <p className="w-24">{producto.codBarra}</p>
                                    <p className="w-20">{producto.color}</p>
                                    <p className="w-20">{producto.cantidad}</p>
                                    <p className="w-20 text-blue-600 font-semibold">${producto.precio}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default AdminOrders;