import mongoose, { Mongoose } from "mongoose";

const orderSchema = new mongoose.Schema({
    email:{
        type: String,
        require: true
    },
    nombre:{
        type: String,
        require: true
    },
    apellido:{
        type: String,
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
    dni:{
        type: String,
        require: true
    },
    retiro:{
        type: String,
        require: true
    },
    estado:{
        type: String,
        require: true
    }
})

export default mongoose.model('Orders', orderSchema);