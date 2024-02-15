import express from "express";
import { getOrders, addOrder } from "../controllers/funciones_order.js";

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

export default ruta;