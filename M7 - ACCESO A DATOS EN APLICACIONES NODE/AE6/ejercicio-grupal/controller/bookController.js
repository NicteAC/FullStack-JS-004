//se importa el modelo
import {Book} from '../model/Book.js';

//se definen las funciones para las rutas especificadas en el archivo "routes"

//se exporta la funcion para obtener todos los usuario
export const getBooks = async (req, res)=> {
    //se utiliza la clase User importada con su metodo para obtener los usuarios
    const book_list = await Book.getBooks();
    console.log('book_list: ', book_list);
    res.send(book_list);

};
//se exporta la funcion para crear un usuario
export const createBook = async(req, res)=>{
    //se obtiene los parametros necesario para el uso de los metodos de la clase usuario
    const title = req.body.title;
    const page_number = req.body.page_number;
    const isbn = req.body.isbn;
    //se validan los parametros
    if(title && page_number && isbn){
        try {
            const book = new Book(title, page_number, isbn);
            //se llama a la funcion del modelo para crear un usuario
            await Book.createBook(book);
            res.send('book created');
        } catch (error) {
            //si hay error se muestra el error
            console.log('error create user: ', error);
        }
        
    }else{
        //si no estan todos los parametros requeridos se envia al usuario un mensaje
        res.send('Error: missing required data');
    }
};