import mongoose from "mongoose";

const productosSchema = new mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    apellido:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    contrasena:{
        type: Number,
        require: true
    },
    telefono:{
        type: Number,
        require: true
    },
    direccion:{
        type: String,
        require: true
    },
    fechaExp:{
        type: Date,
        require: false
    },
    tipo:{
        type: Number,
        require: false
    },
    estado:{
        type: Number,
        require: false
    }
})

export default mongoose.model('Usuarios', productosSchema);