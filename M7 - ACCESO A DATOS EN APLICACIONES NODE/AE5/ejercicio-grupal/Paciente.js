import Sequelize from "sequelize";
import db from './database.js'
//Se crea la clase Paciente con sus propiedades heredadas desde persona
class Paciente extends Persona{
    constructor(nombre, rut, direccion){
        super(nombre, rut, direccion);
    }
}
//Se define el modelo User segun sus propiedades
const pacienteModel = db.define('Paciente', {
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

Paciente.getAllPacientes = async () =>{
    try {
        await pacienteModel.sync();
        return await pacienteModel.findAll();
    } catch (error) {
        console.log('getall paciente error: ', error)
    }
};

Paciente.createPaciente = async (paciente) =>{
    try {
        await pacienteModel.sync();
        await pacienteModel.create(paciente);
    } catch (error) {
        console.log('create paciente error: ', error);
    }
};

Paciente.updatePaciente = async (paciente) =>{
    try {
        await pacienteModel.sync();
        await pacienteModel.update(paciente,{where:{id_paciente:paciente.id_paciente}});
    } catch (error) {
        console.log('update paciente error: ', error);
    }
};

Paciente.deletePaciente = async (paciente) =>{
    try {
        await pacienteModel.sync();
        await pacienteModel.destroy(paciente,{where:{id_paciente:paciente.id_paciente}});
    } catch (error) {
        console.log('delete paciente error: ', error);
    }
};

export {Paciente, pacienteModel};