//Se importan las dependencias express y las rutas
import express from 'express';
import routes from './routes/index.js';

//se crea una app con express y se declara el puerto en el que funcionara el servidor
const app = express();
const port = 3200;

//se utilizan las rutas en la ruta por defecto "/"
app.use('/servidor-alternativo', routes);

//se inicia el servidor con el puerto
app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
});