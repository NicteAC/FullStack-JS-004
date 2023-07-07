const express = require('express');
const app = express();
const port = 3200;
const cors = require('cors');
require('dotenv').config();
//se importan las rutas
const routes = require('./routes');

//middleware
app.use(cors());
app.use(express.json());
app.use('/',routes)
app.get('/', (req, res)=>{
    res.send('Hola Mundo!');
});

app.listen(port, () =>{
    console.log(`El servidor esta corriendo en el puerto ${port}`);
});