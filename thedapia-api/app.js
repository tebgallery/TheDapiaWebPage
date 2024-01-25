import express from 'express';
import mongoose from 'mongoose';
import productos from './routes/productos_routes.js';
import usuarios from './routes/usuarios_routes.js';
import 'dotenv/config'
import cors from 'cors'

mongoose.connect('mongodb://localhost:27017/thedapia', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Conectado con la DB')
})
.catch(()=>{
    console.log('Error al conectar con la DB')
})

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/productos', productos);
app.use('/usuarios', usuarios);

app.listen(port, ()=>{
    console.log('server running')
})