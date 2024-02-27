import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    nombreProducto: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    codBarra: {
        type: String
    },
    color: {
        type: String
    },
    imagen: {
        type: String
    },
    marca: {
        type: String
    },
    precio: {
        type: Number,
        required: true
    }
});

const orderSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: false
    },
    dni: {
        type: String,
        required: true
    },
    retiro: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    productos: [productSchema], // Lista de productos
    precioOrden: {
        type: Number,
        required: true
    }
});

export default mongoose.model('Order', orderSchema);