import express from "express";
import { listaUsuarios, guardarUsuario, actualizarUsuario, eliminarUsuario } from "../controllers/funciones_usuarios.js";

const ruta = express.Router();

ruta.get('/', (req, res) =>{
    let resultado = listaUsuarios();
    resultado.then(usuarios =>{
        res.json(usuarios)
    }).catch(err =>{
        res.status(400).json({err})
    })
});

ruta.post('/',(req,res)=>{
    let body = req.body;
    let usuario = guardarUsuario(body);
    usuario.then(us =>{
        res.json({
            valor: us
        })
    }).catch(err =>{
        res.status(400).json({err})
    }) 
})

ruta.put("/:id", (req, res)=>{
    let resultado = actualizarUsuario(req.body, req.params.id);
    resultado.then(valor  =>{
        res.json({
            valor
        })
        .catch(err => {
            res.status(400).json({err})
        })
    })
})

ruta.delete('/eliminar/:id', (req, res)=> {
    const id = req.params.id;
    eliminarUsuario(id)
        .then(resultado => {
            if (resultado.deletedCount > 0) {
                res.json({ message: "Usuario eliminado con éxito" });
            } else {
                res.status(404).json({ error: "Usuario no encontrado" });
            }
        })
        .catch(err => {
            res.status(400).json({err})
        });
})
export default ruta;