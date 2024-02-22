import orderModel from "../models/order_model.js";

async function getOrders () {
    let orders = await orderModel.find();
    return orders
}


async function addOrder(body){
    let order = new orderModel({
        email: body.email,
        nombre: body.nombre,
        apellido: body.apellido,
        telefono: body.telefono,
        direccion: body.direccion,
        dni: body.dni,
        retiro: body.retiro,
        estado: body.estado,
        productos: body.productos,
        precioOrden: body.precioOrden,
    })
    return await order.save();
}

export {
    getOrders,
    addOrder
};