import express from 'express';
const app = express();
const port = 3600;
import {Medico} from './Medico.js';
import {Especialidad} from './Especialidad.js';

app.use(express.json());

app.get('/',(req, res)=>{
    res.send('hola cliente!');
});

app.post('/crear-especialidad', async (req, res)=>{
    const codigo_interno = req.body.codigo_interno;
    const descripcion = req.body.descripcion;
    const nombre = req.body.nombre;

    if(codigo_interno && descripcion && nombre){
        try {
            const especialidad = new Especialidad(nombre, descripcion, codigo_interno);
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
    const telefono = req.body.telefono;
    const correo = req.body.correo;
    const idEspecialidad = req.body.id_especialidad;
    if(nombre && rut && direccion && telefono && correo && idEspecialidad){
        try {
            const medico = new Medico(nombre, rut, direccion, correo, telefono, idEspecialidad);
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
    console.log(`El servidor esta corriendo en el puerto ${port}`);
});