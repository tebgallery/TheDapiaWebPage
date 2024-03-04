import express from "express";
import { getOrders, addOrder, updateOrder, deleteOrder } from "../controllers/funciones_order.js";

const ruta = express.Router();

ruta.get('/', (req, res) =>{
    let resultado = getOrders();
    resultado.then(order =>{
        res.json(order)
    }).catch(err =>{
        res.status(400).json({err})
    })
});

ruta.post('/',(req,res)=>{
    let body = req.body;
    let order = addOrder(body);
    order.then(o =>{
        res.json({
            valor: o
        })
    }).catch(err =>{
        res.status(400).json({err})
    }) 
})

ruta.put("/", (req, res)=>{
    let resultado = updateOrder(req.body, req.body._id);
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
    deleteOrder(id)
        .then(resultado => {
            if (resultado.deletedCount > 0) {
                res.json({ message: "Orden eliminada con éxito" });
            } else {
                res.status(404).json({ error: "Orden no encontrado" });
            }
        })
        .catch(err => {
            res.status(400).json({err})
        });
})

export default ruta;