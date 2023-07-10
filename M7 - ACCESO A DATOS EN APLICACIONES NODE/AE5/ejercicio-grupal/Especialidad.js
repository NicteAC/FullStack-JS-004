import Sequelize from "sequelize";
import db from './database.js';
//Se crea la clase Especialidad con sus propiedades 
class Especialidad {
    constructor(codigo, descripcion){
        this.codigo = codigo;
        this.descripcion = descripcion;
    }
}
//Se define el modelo User segun sus propiedades
const especialidadModel = db.define('Especialidad', {
    codigo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descripcion:{
        type: Sequelize.STRING,
        allowNull:false
    }
});

Especialidad.obtenerEspecialidad = async () =>{
    try {
        await especialidadModel.sync();
        return await especialidadModel.findAll();
    } catch (error) {
        console.log('getall especialidad error: ', error)
    }
};

Especialidad.crearEspecialidad = async (especialidad) =>{
    try {
        await especialidadModel.sync();
        await especialidadModel.create(especialidad);
    } catch (error) {
        console.log('create especialidad error: ', error);
    }
};

Especialidad.actualizarEspecialidad = async (especialidad) =>{
    try {
        await especialidadModel.sync();
        await especialidadModel.update(especialidad,{where:{id_especialidad:especialidad.id_especialidad}});
    } catch (error) {
        console.log('update especialidad error: ', error);
    }
};

Especialidad.eliminarEspecialidad = async (especialidad) =>{
    try {
        await especialidadModel.sync();
        await especialidadModel.destroy(especialidad,{where:{id_especialidad:especialidad.id_especialidad}});
    } catch (error) {
        console.log('delete especialidad error: ', error);
    }
};

export {Especialidad, especialidadModel};