import {createPool} from '../lib/db_mysql.js';

//Se crea la clase User con sus propiedades heredadas desde persona
class Book{
    constructor(title, page_number, isbn){
        this.title = title;
        this.page_number = page_number;
        this.isbn = isbn;
    }
}

Book.getBooks = async () =>{
    let book_list = [];
    try {
       const pool = await createPool();
       const connection = await pool.getConnection();
       const query = `SELECT * from book`;
       const [rows] = await connection.execute(query);
       console.log('result query get book: ', rows);
       if(rows.length > 0) book_list = rows;
    } catch (error) {
       console.log('error metodo get book: ', error);
    }
    return new Promise((resolve, reject)=>{
        resolve(book_list);
    })
};

Book.createBook = async (book) =>{
    try {
       const pool = await createPool();
       const connection = await pool.getConnection();
       const query = `INSERT INTO book(title, page_number, isbn) VALUES (?,?,?)`;
       const [rows] = await connection.execute(query, [book.title, book.page_number, book.isbn]);
       console.log('result query get book: ', rows);
    } catch (error) {
       console.log('error metodo get book: ', error);
    }
};

// User.createUser = async (user) =>{
//     try {
//         await userModel.sync();
//         await userModel.create(user);
//     } catch (error) {
//         console.log('create user error: ', error);
//     }
// };

// User.updateUser = async (user) =>{
//     try {
//         await userModel.sync();
//         await userModel.update(user,{where:{id_user:user.id_user}});
//     } catch (error) {
//         console.log('update user error: ', error);
//     }
// };

// User.deleteUser = async (user) =>{
//     try {
//         await userModel.sync();
//         await userModel.destroy(user,{where:{id_user:user.id_user}});
//     } catch (error) {
//         console.log('delete user error: ', error);
//     }
// };

export {Book};