import mongoose from "mongoose";

const productosSchema = new mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    marca:{
        type: String,
        require: true
    },
    codigobarra:{
        type: Number,
        require: true
    },
    precio:{
        type: Number,
        require: true
    },
    descuento:{
        type: Number,
        require: true
    },
    cantidad:{
        type: Number,
        require: true
    },
    categoria:{
        type: String,
        require: true
    },
    seccionenpagina: {
        type: String,
        require: true
    },
    color:{
        type: String,
        require: true
    },
    imagen:{
        type: String,
        require: true
    },
    fechamodificacion:{
        type: Date,
        require: true
    },
    descripcion:{
        type: String,
        require: true
    },
    estado:{
        type:  Boolean,
        require: true
    }
})

export default mongoose.model('Productos', productosSchema);