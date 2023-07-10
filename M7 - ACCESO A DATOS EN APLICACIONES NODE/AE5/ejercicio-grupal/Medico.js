import Sequelize from "sequelize";
import db from './database.js';
import {Persona} from './Persona.js';
//Se crea la clase Medico con sus propiedades heredadas desde persona
class Medico extends Persona{
    constructor(nombre, rut, direccion){
        super(nombre, rut, direccion);
    }
}
//Se define el modelo User segun sus propiedades
const medicoModel = db.define('Medico', {
    nombre:{
        type: Sequelize.STRING,
        allowNull: false
    },
    rut:{
        type: Sequelize.STRING,
        allowNull:false
    },
    direccion:{
        type: Sequelize.STRING,
        allowNull:false
    }
    
});

Medico.obtenerMedicos = async () =>{
    try {
        await medicoModel.sync();
        return await medicoModel.findAll();
    } catch (error) {
        console.log('getall medico error: ', error)
    }
};

Medico.crearMedico = async (medico) =>{
    try {
        await medicoModel.sync();
        await medicoModel.create(medico);
    } catch (error) {
        console.log('create medico error: ', error);
    }
};

Medico.actualizarMedico = async (medico) =>{
    try {
        await medicoModel.sync();
        await medicoModel.update(medico,{where:{id_medico:medico.id_medico}});
    } catch (error) {
        console.log('update medico error: ', error);
    }
};

Medico.eliminarMedico = async (medico) =>{
    try {
        await medicoModel.sync();
        await medicoModel.destroy(medico,{where:{id_medico:medico.id_medico}});
    } catch (error) {
        console.log('delete medico error: ', error);
    }
};

export {Medico, medicoModel};