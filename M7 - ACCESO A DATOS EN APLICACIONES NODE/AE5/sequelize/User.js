import Sequelize from "sequelize";
import db from './database.js'
//Se crea la clase User con sus propiedades
class User {
    constructor(firstName, lastName, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email
    }
}
//Se define el modelo User segun sus propiedades
const userModel = db.define('User', {
    firstName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull:false
    },
    email:{
        type: Sequelize.STRING,
        allowNull:false
    }
});

User.getAllUsers = async () =>{
    try {
        await userModel.sync();
        return await userModel.findAll();
    } catch (error) {
        console.log('getalluser error: ', error)
    }
};

User.createUser = async (user) =>{
    try {
        await userModel.sync();
        await userModel.create(user);
    } catch (error) {
        console.log('createuser error: ', error);
    }
};

User.updateUser = async (user) =>{
    try {
        await userModel.sync();
        await userModel.update(user,{where:{email:user.email}});
    } catch (error) {
        console.log('updateuser error: ', error);
    }
};

User.deleteUser = async (user) =>{
    try {
        await userModel.sync();
        await userModel.destroy(user,{where:{email:user.email}});
    } catch (error) {
        console.log('deleteuser error: ', error);
    }
};

export {User, userModel};