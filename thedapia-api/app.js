import express from 'express';
import mongoose from 'mongoose';
import productos from './routes/productos_routes.js';
import usuarios from './routes/usuarios_routes.js';
import orders from './routes/orders_routes.js';
import 'dotenv/config'
import cors from 'cors'
import { MercadoPagoConfig, Preference } from 'mercadopago';


mongoose.connect('mongodb://localhost:27017/thedapia', {useNewUrlParser: true})
.then(()=>{
    console.log('Conectado con la DB')
})
.catch((error)=>{
    console.log('Error al conectar con la DB',error)
})

const client = new MercadoPagoConfig({ 
    accessToken: 'TEST-6650858988070710-022115-9616f1c5529ae46f45b42e9d976e3aa8-239357586' 
});

const app = express();
const port = process.env.PORT || 3002;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/productos', productos);
app.use('/usuarios', usuarios);
app.use('/orders',orders);

app.post("/create-preference", async(req,res) => {
    try {
        const { products } = req.body;

        const items = products.map(product => ({
            title: product.title,
            quantity: Number(product.quantity),
            unit_price: Number(product.price),
            currency_id: "ARS"
        }));

        const body = {
            items: items,
            back_urls: {
                success: "http://localhost:3000/success",
                failure: "http://localhost:3000/failure",
                pending: "http://localhost:3000/pending",
            },
            auto_return: "approved",
        };

        const preference = new Preference(client);
        const result = await preference.create({body});

        res.json({
            id: result.id,
        });
    } catch(error){
        console.log(error);
        res.status(500).json({
            error:"Error al crear la preferencia",
        });
    }
});

app.listen(port, ()=>{
    console.log('server running on',port)
})