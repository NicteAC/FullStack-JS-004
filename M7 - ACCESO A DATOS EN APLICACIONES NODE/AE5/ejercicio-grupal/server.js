import express from 'express';
const app = express();
const port = 3400;
import {Medico} from './Medico.js';
import {Especialidad} from './Especialidad.js';
app.use(express.json());

//crud de medico
//crud de paciente
//crud especialidad
//crud consulta
//crud agenda
//crud licencia


app.get('/',(req, res)=>{
    res.send('hola mundo!');
});

app.post('/crear-especialidad', async (req, res)=>{
    const codigo = req.body.codigo;
    const descripcion = req.body.descripcion;

    if(codigo && descripcion){
        try {
            const especialidad = new Especialidad(codigo, descripcion);
            await Especialidad.crearEspecialidad(especialidad);
            res.send('especialidad creada');
        } catch (error) {
            console.log('error al crear especialidad: ', error);
        }
    }else{
        res.send('Error: faltan parametros requeridos');
    }
});

app.post('/crear-medico', async (req, res)=>{
    const nombre = req.body.nombre;
    const rut = req.body.rut;
    const direccion = req.body.direccion;
    if(nombre && rut && direccion){
        try {
            const medico = new Medico(nombre, rut, direccion);
            await Medico.crearMedico(medico);
            res.send('medico creado');
        } catch (error) {
            console.log('error crear medio: ', error);
        }
        
    }else{
        res.send('Error: faltan parametros requeridos');
    }
});

app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
})