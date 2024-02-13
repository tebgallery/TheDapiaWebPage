import express  from 'express';
const ruta = express.Router();
import { deleteUser, getUsers, getUser, registerUser, addUser, updateUser, loginUser } from '../controllers/funciones_usuarios.js';

ruta.get('/', getUsers);

ruta.get('/find/:nombre', getUser);

ruta.post('/', addUser);

ruta.post('/register', registerUser);

ruta.post('/login', loginUser);

ruta.put('/:_id', updateUser);

ruta.delete('/eliminar/:id', deleteUser);

export default ruta;