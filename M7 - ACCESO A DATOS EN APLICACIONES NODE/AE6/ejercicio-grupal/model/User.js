import Sequelize from "sequelize";
import db from '../lib/db.js';

//Se crea la clase User con sus propiedades heredadas desde persona
class User{
    constructor(nombre, rut, direccion){
        this.nombre = nombre;
        this.rut = rut;
        this.direccion = direccion;
    }
}
//Se define el modelo User segun sus propiedades
const userModel = db.define('User', {
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

User.getUsers = async () =>{
    try {
        await userModel.sync();
        return await userModel.findAll();
    } catch (error) {
        console.log('getall user error: ', error)
    }
};

User.createUser = async (user) =>{
    try {
        await userModel.sync();
        await userModel.create(user);
    } catch (error) {
        console.log('create user error: ', error);
    }
};

User.updateUser = async (user) =>{
    try {
        await userModel.sync();
        await userModel.update(user,{where:{id_user:user.id_user}});
    } catch (error) {
        console.log('update user error: ', error);
    }
};

User.deleteUser = async (user) =>{
    try {
        await userModel.sync();
        await userModel.destroy(user,{where:{id_user:user.id_user}});
    } catch (error) {
        console.log('delete user error: ', error);
    }
};

export {User, userModel};