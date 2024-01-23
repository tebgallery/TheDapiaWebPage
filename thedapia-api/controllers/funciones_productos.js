import productosModel from "../models/productos_model.js";

async function listaProductos(){
    let productos = await productosModel.find();
    return productos
}
async function guardarProducto(body){
    let producto = new productosModel({
        codigoBarra: body.codigoBarra,
        nombre: body.nombre,
        marca: body.marca,
        precio: body.precio,
        descuento: body.descuento,
        cantidad: body.cantidad,
        categoria: body.categoria,
        descripcion: body.descripcion,
        imagen: body.imagen,
        fechaModificacion: body.fechaModificacion,
        estado: body.estado
    })
    console.log(producto)
    return await producto.save();
}

async function actualizarProducto(body, id){
    let producto = await productosModel.updateOne({id: id},{
        $set: {
            codigoBarra: body.codigoBarra,
            nombre: body.nombre,
            marca: body.marca,
            precio: body.precio,
            descuento: body.descuento,
            cantidad: body.cantidad,
            categoria: body.categoria,
            descripcion: body.descripcion,
            imagen: body.imagen,
            fechaModificacion: body.fechaModificacion,
            estado: body.estado
        }
    })
    return producto;
}

async function eliminarProducto(id){
    let resultado= await productosModel.deleteOne({id: id});
    return resultado;
}

export { listaProductos, guardarProducto, actualizarProducto, eliminarProducto};