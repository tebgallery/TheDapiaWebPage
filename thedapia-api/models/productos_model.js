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
    codigoBarra:{
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
    color:{
        type: String,
        require: true
    },
    imagen:{
        type: String,
        require: true
    },
    fechaModificacion:{
        type: Date,
        require: false
    },
    descripcion:{
        type: String,
        require: true
    },
    estado:{
        type: Number,
        require: false
    }
})

export default mongoose.model('Productos', productosSchema);