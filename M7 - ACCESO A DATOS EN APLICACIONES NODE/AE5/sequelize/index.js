import {User} from './User.js';

async function main (){
    const user = new User('Jane','Rodriguez','janero@gmail.com');
    //registrar usuario en la base de datos
    await User.createUser(user);

    //obtener todos los usuarios
    let users = await User.getAllUsers();
    console.log('lista de usuario: ', users);

    //actualizar un usuario
    user.firstName = 'Janine';
    await User.updateUser(user);

    //obtener todos los usuarios
    users = await User.getAllUsers();
    console.log('lista de usuario actualizada: ', users);

    //eliminar un usuario
    await User.deleteUser(user);

     //obtener todos los usuarios
     users = await User.getAllUsers();
     console.log('lista de usuario eliminada: ', users);
}

main().catch(console.error);