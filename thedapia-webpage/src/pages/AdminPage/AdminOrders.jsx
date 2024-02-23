import React, { useState, useEffect } from "react";
import Navbar from '../../components/Admin/Navbar/Navbar'
import axios from 'axios';

const AdminOrders = () => {

    const url = "http://localhost:3000/orders";
    const [orders, setOrders] = useState([])
    

    const getOrders = async () => {
        try {
            const response = await axios.get(url);
            setOrders(response.data);
        } catch (error) {
            console.error("Error al obtener las órdenes:", error);
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
        "PrecioOrden",
        "Productos"
      ];

    console.log(orders);


    return (
        <>
            <Navbar/>
            <div className="w-full flex justify-center mt-20 bg-slate-50">
                <table className="w-10/12 table-auto border-2 border-slate-100 border-separate border-spacing-1 bg-emerald-100 border rounded-2xl ">
                    <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="border-black p-2">
                            {header}
                            </th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index}>
                                <td className="border-black p-2">{order.email}</td>
                                <td className="border-black p-2">{order.nombre}</td>
                                <td className="border-black p-2">{order.apellido}</td>
                                <td className="border-black p-2">{order.telefono}</td>
                                <td className="border-black p-2">{order.direccion}</td>
                                <td className="border-black p-2">{order.dni}</td>
                                <td className="border-black p-2">{order.retiro}</td>
                                <td className="border-black p-2">{order.estado}</td>
                                <td className="border-black p-2">{order.precioOrden}</td>
                                <td className="border-black p-2">
                                    <ul>
                                        {order.productos.map((producto, index) => (
                                            <li key={index}>{producto.nombreProducto}</li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AdminOrders;