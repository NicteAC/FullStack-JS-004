import mysql from "mysql2";
import { config } from "dotenv";
config();
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Conectado a la base de datos");
});

connection.query(
  "CREATE TABLE students (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), age INT, grade VARCHAR(20))",
  (err, result) => {
    if (err) throw err;
    console.log("Tabla creada con exito");
  }
);

function insertStudent(name, age, grade) {
  let student = { name: name, age: age, grade: grade };
  connection.query("INSERT INTO students SET ?", student, (error, results) => {
    if (error) throw error;
    console.log(
      "Insertado " +
        results.affectedRows +
        " filas. Última inserción con id: " +
        results.insertId
    );
  });
}
insertStudent("Juan Valdevenito", 20, "IXMEDIO");

function updateStudent(id, name, age, grade) {
  let sentence =
    "UPDATE students SET name = ?, age = ?, grade = ? WHERE id = ? ";
  connection.query(sentence, [name, age, grade, id], (error, results) => {
    if (error) throw error;
    console.log("Actualizado " + results.affectedRows + " filas");
  });
}

updateStudent(1, "Juanito Valdevenito", 18, "PROGRAMACION");

function deleteStudent(id) {
  let sentence = "DELETE FROM students WHERE id = ?";
  connection.query(sentence, id, (error, results) => {
    if (error) throw error;
    console.log("Eliminado " + results.affectedRows + " filas");
  });
}
deleteStudent(1);

connection.end((err) => {
  if (err) throw err;
  console.log("Conexion cerrada correctamente");
});
