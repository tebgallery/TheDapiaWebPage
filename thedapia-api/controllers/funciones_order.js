import orderModel from "../models/order_model.js";

const getOrders = async (req, res) =>{
    try{
        let order = await orderModel.find();
        res.json(order)
    }catch(err ) {
        res.status(400).json(
            {
                err
            }
        )
    }
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
        estado: body.estado
    })
    return await order.save();
}

export {
    getOrders,
    addOrder
};