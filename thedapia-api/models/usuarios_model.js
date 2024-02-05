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
        require: false
    },
    direccion:{
        type: String,
        require: false
    },
    ultFechaConexion:{
        type: Date,
        require: false
    },
    tipo:{
        type: String,
        require: false
    },
    estado:{
        type: String,
        require: false
    }
})

export default mongoose.model('Usuarios', productosSchema);