import mongoose from "mongoose";

const productosSchema = new mongoose.Schema({
    codigoBarra:{
        type: Number,
        require: true
    },
    nombre:{
        type: String,
        require: true
    },
    marca:{
        type: String,
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
    descripcion:{
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
    estado:{
        type: String,
        require: false
    }
})

export default mongoose.model('Productos', productosSchema);