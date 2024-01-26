import express from "express";
import { listaProductos, buscarProductosPorPalabra, productosPorCategoria,guardarProducto, actualizarProducto, eliminarProducto } from "../controllers/funciones_productos.js";

const ruta = express.Router();

ruta.get('/', (req, res) =>{
    let resultado = listaProductos();
    resultado.then(productos =>{
        res.json(productos)
    }).catch(err =>{
        res.status(400).json({err})
    })
});

ruta.get('/buscar/:palabra', (req, res) => {
    const palabra = req.params.palabra;
    let resultado = buscarProductosPorPalabra(palabra);
    resultado.then(productos => {
        res.json(productos)
    }).catch(err => {
        res.status(400).json({ err })
    })
});

ruta.get('/:categoria', (req, res) => {
    const categoria = req.params.categoria;
    let resultado = productosPorCategoria(categoria);
    resultado.then(productos => {
        res.json(productos)
    }).catch(err => {
        res.status(400).json({ err })
    })
});

ruta.post('/',(req,res)=>{
    let body = req.body;
    let producto = guardarProducto(body);
    producto.then(prod =>{
        res.json({
            valor: prod
        })
    }).catch(err =>{
        res.status(400).json({err})
    }) 
})

ruta.put("/:_id", (req, res)=>{
    let resultado = actualizarProducto(req.body, req.params._id);
    resultado
    .then(valor  =>{
        res.json({
            valor
        })
    })
    .catch(err => {
        res.status(400).json({err})
    })
    
})

ruta.delete('/eliminar/:_id', (req, res)=> {
    const id = req.params._id;
    eliminarProducto(id)
        .then(resultado => {
            if (resultado.deletedCount > 0) {
                res.json({ message: "Producto eliminado con éxito" });
            } else {
                res.status(404).json({ error: "Producto no encontrado" });
            }
        })
        .catch(err => {
            res.status(400).json({err})
        });
})
export default ruta;