//se importan las dependencias y las funciones desde el controlador
import express from 'express';
import {getBooks, createBook} from '../controller/bookController.js';
//se crea una constante router a partir del medoto Router() de express
const router = express.Router();

//se definen las rutas para las funciones especificas del modelo
router.get('/', getBooks);
router.post('/', createBook);

//se exporta el router con las rutas agregadas
export default router;