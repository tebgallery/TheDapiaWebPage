import productosModel from "../models/productos_model.js";

async function listaProductos(){
    let productos = await productosModel.find();
    return productos
}
async function guardarProducto(body){
    let producto = new productosModel({
        nombre: body.nombre,
        marca: body.marca,
        codigoBarra: body.codigoBarra,
        precio: body.precio,
        descuento: body.descuento,
        cantidad: body.cantidad,
        categoria: body.categoria,
        color: body.color,
        imagen: body.imagen,
        fechaModificacion: body.fechaModificacion,
        descripcion: body.descripcion,
        estado: body.estado
    })
    console.log(producto)
    return await producto.save();
}

async function actualizarProducto(body, id){
    let producto = await productosModel.updateOne({_id: id},{
        $set: {
            nombre: body.nombre,
            marca: body.marca,
            codigoBarra: body.codigoBarra,
            precio: body.precio,
            descuento: body.descuento,
            cantidad: body.cantidad,
            categoria: body.categoria,
            color: body.color,
            imagen: body.imagen,
            fechaModificacion: body.fechaModificacion,
            descripcion: body.descripcion,
            estado: body.estado
        }
    })
    return producto;
}

async function eliminarProducto(id){
    let resultado= await productosModel.deleteOne({_id: id});
    return resultado;
}

export { listaProductos, guardarProducto, actualizarProducto, eliminarProducto};