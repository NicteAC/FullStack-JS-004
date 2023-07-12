//se importa el modelo
import {User} from '../model/User.js';

//se definen las funciones para las rutas especificadas en el archivo "routes"

//se exporta la funcion para obtener todos los usuario
export const getUser = async (req, res)=> {
    //se utiliza la clase User importada con su metodo para obtener los usuarios
    const user_list = await User.getUser();
    res.send(user_list);

};
//se exporta la funcion para crear un usuario
export const createUser = async(req, res)=>{
    //se obtiene los parametros necesario para el uso de los metodos de la clase usuario
    const nombre = req.body.nombre;
    const rut = req.body.rut;
    const direccion = req.body.direccion;
    //se validan los parametros
    if(nombre && rut && direccion){
        try {
            //se crea un usuario a partir de los parametros recibidos
            const user = new User(nombre, rut, direccion);
            //se llama a la funcion del modelo para crear un usuario
            await User.createUser(user);
            res.send('user created');
        } catch (error) {
            //si hay error se muestra el error
            console.log('error create user: ', error);
        }
        
    }else{
        //si no estan todos los parametros requeridos se envia al usuario un mensaje
        res.send('Error: missing required data');
    }
};