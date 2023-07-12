//se importan las dependencias y las rutas definidas
import express from 'express';
import userRoutes from './userRoutes.js';
import bookRoutes from './bookRoutes.js';

//se crea un router con el metodo Router() de express
const router = express.Router();

//se utiliza en la ruta /user la ruta importada desde el archivo
router.use('/user', userRoutes);
router.use('/book', bookRoutes);

//se exporta el router con las rutas agregadas
export default router;