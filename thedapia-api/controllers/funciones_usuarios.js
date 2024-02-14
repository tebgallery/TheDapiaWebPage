import usuariosModel from "../models/usuarios_model.js";
import bcrypt from "bcrypt";
import 'dotenv/config'
import jwt  from 'jsonwebtoken';

const getUsers = async (req, res) =>{
    try{
        let usuarios = await usuariosModel.find();
        res.json(usuarios)
    }catch(err ) {
        res.status(400).json(
            {
                err
            }
        )
    }
}

const getUser = async (req, res) =>{
    try{
        let usuario = await Users.find({nombre: req.params.nombre});
        res.json(usuario)
    }catch(err ) {
        res.status(400).json(
            {
                err
            }
        )
    }
}

async function addUser(body){
    let usuario = new usuariosModel({
        nombre: body.nombre,
        apellido: body.apellido,
        email: body.email,
        contrasena: body.contrasena,
        telefono: body.telefono,
        direccion: body.direccion,
        fechaExp: body.fechaExp,
        tipo: body.tipo,
        estado: body.estado
    })
    return await usuario.save();
}

const registerUser = async (req, res) =>{
    try {
    let body = req.body;
    const existingUser = await usuariosModel.findOne({ email: body.email });
    if (existingUser) {
        return res.status(400).json({ error: 'El correo electrónico ya está en uso.' });
    }
    let usuario = new usuariosModel({
        nombre: body.nombre,
        apellido: body.apellido,
        email: body.email,
        contrasena: await bcrypt.hashSync( body.contrasena, 10 )
    });
    let savedUser = await usuario.save();

    res.json({
        user: savedUser,
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
}

const updateUser = async (req, res) =>{
    let usuario = await usuariosModel.updateOne({_id: _id}, {
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
    });
    usuario.then(valor => {
        res.json({
            valor
        })
    }).catch(err => {
        res.status(400).json({
            err
        })
    });
}

async function deleteUser(_id){
    let resultado= await usuariosModel.deleteOne({_id: _id});
    return resultado;
}

const loginUser = async (req, res) =>{
    usuariosModel.findOne({email: req.body.email})
    .then(datos => {
        if(datos){
            const passwordValido = bcrypt.compareSync(req.body.contrasena, datos.contrasena);
            if(!passwordValido) return res.status(400).json({error:'ok', msj:'Usuario o contraseña incorrecta.'})
            const jwToken = jwt.sign({
                usuario: {_id: datos._id, email: datos.email}
                }, process.env.SEED, { expiresIn: process.env.EXPIRATION });
            res.json({
                usuario:{
                    _id:datos._id,
                    email:datos.email
                },
                jwToken
            });
        }else{
            res.status(400).json({
                error:'ok',
                msj:'Usuario o contraseña incorrecta.'
            })
        }
    })
    .catch(err => {
        res.status(400).json({
            error:'ok',
            msj:'Error en el servicio ' + err
        })
    })
}

export {
    getUsers,
    getUser,
    registerUser,
    addUser,
    updateUser,
    deleteUser,
    loginUser
};