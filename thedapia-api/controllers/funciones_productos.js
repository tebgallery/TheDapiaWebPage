import productosModel from "../models/productos_model.js";

async function listaProductos(){
    let productos = await productosModel.find();
    return productos
}

async function buscarProductosPorPalabra(palabra) {
    const regex = new RegExp(palabra, 'i');

    const productos = await productosModel.find({
        $or: [
            { nombre: { $regex: regex } },
            { marca: { $regex: regex } },
            { descripcion: { $regex: regex } },
        ],
    });

    return productos;
}

async function productosPorCategoria(categoria) {
    try {
        const productos = await productosModel.find({ categoria: categoria });
        return productos;
    } catch (error) {
        console.error("Error al obtener productos por categoría:", error);
        throw error;
    }
}

async function guardarProducto(body){
    let producto = new productosModel({
        nombre: body.nombre,
        marca: body.marca,
        codigobarra: body.codigobarra,
        precio: body.precio,
        descuento: body.descuento,
        cantidad: body.cantidad,
        categoria: body.categoria,
        seccionenpagina: body.seccionenpagina,
        color: body.color,
        imagen: body.imagen,
        fechamodificacion: body.fechamodificacion,
        descripcion: body.descripcion,
        estado: body.estado,
    })
    console.log(producto)
    return await producto.save();
}

async function actualizarProducto(body, id){
    let producto = await productosModel.updateOne({_id: id},{
        $set: {
            nombre: body.nombre,
            marca: body.marca,
            codigobarra: body.codigobarra,
            precio: body.precio,
            descuento: body.descuento,
            cantidad: body.cantidad,
            categoria: body.categoria,
            seccionenpagina: body.seccionenpagina,
            color: body.color,
            imagen: body.imagen,
            fechamodificacion: body.fechamodificacion,
            descripcion: body.descripcion,
            estado: body.estado,
        }
    })
    return producto;
}

async function eliminarProducto(id){
    let resultado= await productosModel.deleteOne({_id: id});
    return resultado;
}

export { listaProductos, buscarProductosPorPalabra,productosPorCategoria,guardarProducto, actualizarProducto, eliminarProducto};