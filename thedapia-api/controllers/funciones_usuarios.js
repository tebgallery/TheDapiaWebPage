import usuariosModel from "../models/usuarios_model.js";

async function listaUsuarios(){
    let usuarios = await usuariosModel.find();
    return usuarios
}
async function guardarUsuario(body){
    let usuario = new usuariosModel({
        nombre: body.nombre,
        apellido: body.apellido,
        email: body.email,
        contrasena: body.contrasena,
        telefono: body.telefono,
        direccion: body.direccion,
        ultFechaConexion: body.ultFechaConexion,
        tipo: body.tipo,
        estado: body.estado
    })
    console.log(usuario)
    return await usuario.save();
}

async function actualizarUsuario(body, id){
    let usuario = await usuariosModel.updateOne({id: id},{
        $set: {
            nombre: body.nombre,
            apellido: body.apellido,
            email: body.email,
            contrasena: body.contrasena,
            telefono: body.telefono,
            direccion: body.direccion,
            ultFechaConexion: body.ultFechaConexion,
            tipo: body.tipo,
            estado: body.estado
        }
    })
    return usuario;
}

async function eliminarUsuario(id){
    let resultado = await usuariosModel.deleteOne({id: id});
    return resultado;
}

export { listaUsuarios, guardarUsuario, actualizarUsuario, eliminarUsuario};