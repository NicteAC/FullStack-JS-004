//Se importa dependencia express 
import express from 'express';
//se crea la aplicación con express
const app = express();
const port = 3200;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
//se disponibiliza una ruta get para probar el funcionamiento
app.get('/', (req, res)=>{
    res.send('hola mundo!');
});

let user_list = [];

//rutas para usuario

//ruta para obtener a todos los usuarios
app.get('/get-all-users',(req, res)=>{
    const response ={
        msg: 'All users',
        error:null,
        data: null
    }
    try {
        response.data = user_list;
        res.send(response);
    } catch (error) {
        console.log(error);
        response.error = 'Error interno del servidor';
        res.status(500).send(response);
    }
});
//ruta para crear un usuario
app.post('/user-create',(req, res)=>{
    console.log(req.body);
    //se declara una constante de respuesta
    const response ={
        msg: 'Create user',
        error:null,
        data: null
    }
    //se obtienen los parametros para crear un usuario
    const _name = req.body.name;
    const _lastname = req.body.lastname;
    const _email = req.body.email;
    //se genera un bloque try-catch para controlar errores en el proceso
    try {
        //se valida que los parametros no esten vacios para su uso
        if(_name && _lastname && _email){
            //se genera un usuario a partir de los parametros
            const user = {
                id: user_list.length + 1, 
                name: _name,
                lastname: _lastname,
                email: _email
            }
            //se añade el usuario a la lista y al objeto de respuesta
            user_list.push(user);
            response.data = user;
            console.log('user list: ', user_list);
        }else{
            //si hay error en la validacion de los parametros se envia en la respuesta
            response.error = 'Los parametros no estan ok';
        }
        res.send(response);
    } catch (error) {
        //si hay error en el proceso se captura y se envia una respuesta
        console.log(error);
        response.error = 'Error interno del servidor';
        res.status(500).send(response);
    }
});
//ruta para editar un usuario
app.put('/user-edit',(req, res)=>{
    const response ={
        msg: 'Edit user',
        error:null,
        data: null
    }
    const _id = req.body.id;
    const _name = req.body.name;
    const _lastname = req.body.lastname;
    const _email = req.body.email;
    try {
        if(_id && _name && _lastname && _email){
            
           const user_index = user_list.findIndex(user => user.id == _id);
           if(user_index != -1){
                user_list[user_index].name = _name;
                user_list[user_index].lastname = _lastname;
                user_list[user_index].email = _email;
                response.data = user_list[user_index];
           }else{
            response.error = 'Usuario no encontrado.';
           }
        }else{
            response.error = 'Los parametros no estan ok';
        }
        res.send(response);
    } catch (error) {
        console.log(error);
        response.error = 'Error interno del servidor';
        res.status(500).send(response);
    }
});
//ruta para eliminar un usuario
app.delete('/user-delete',(req, res)=>{
    const response ={
        msg: 'Edit user',
        error:null,
        data: null
    }
    const _id = req.body.id;

    try {
        if(_id){
           const user_index = user_list.findIndex(user => user.id == _id);
           if(user_index != -1){
                user_list.splice(user_index, 1);
                console.log('user list:', user_list);
                response.data = true;
           }else{
            response.error = 'Usuario no encontrado.';
           }
        }else{
            response.error = 'Los parametros no estan ok';
        }
        res.send(response);
    } catch (error) {
        console.log(error);
        response.error = 'Error interno del servidor';
        res.status(500).send(response);
    }
});
//ruta para obtener un usuario especifico con el id
app.get('/get-user/:id_user',(req, res)=>{
    const response ={
        msg: 'All users',
        error:null,
        data: null
    }
    const id_user = req.params.id_user;
    try {
        if(id_user){
            const user_index = user_list.findIndex(user => user.id == id_user);
           if(user_index != -1){
                user_list[user_index].links = [
                    {
                        rel: "self",
                        href: `http://localhost:3200/get-user/${user_list[user_index].id}`
                    },
                    {
                        rel: "editar",
                        href: `http://localhost:3200/user-edit/`,
                        req_fields:['id','name','lastname','email'],
                        method: 'PUT'
                    },
                    {
                        rel: "eliminar",
                        href: `http://localhost:3200/user-delete/`,
                        req_fields:['id'],
                        method: 'DELETE'
                    },
                    {
                        rel: "todos",
                        href: `http://localhost:3200/get-all-users/`,
                        req_fields: [],
                        method:'GET'
                    },
                ];
                response.data = user_list[user_index];
           }else{
            response.error = 'Usuario no encontrado.';
           } 
        }
        res.send(response);
    } catch (error) {
        console.log(error);
        response.error = 'Error interno del servidor';
        res.status(500).send(response);
    }
});

//se levanta el servidor en el puerto especificado
app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
});