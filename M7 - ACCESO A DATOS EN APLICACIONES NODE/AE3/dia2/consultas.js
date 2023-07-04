import mysql from "mysql2/promise";
import { config } from "dotenv";
config();

async function createConnection() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });
  return connection;
}

async function createStudent(_student) {
  const connection = await createConnection();
  connection.connect((err) => {
    if (err) throw err;
    console.log("Conectado a la base de datos");
  });
  const { name, age, grade } = _student;
  let student = { name: name, age: age, grade: grade };
  console.log(student, "query");
  connection.query("INSERT INTO students SET ?", student, (err, results) => {
    if (err) throw err;
    console.log(
      "Insertado " +
        results.affectedRows +
        " filas. última inserción con id: " +
        results.insertId
    );
  });
  connection.end();
}

async function getStudent() {
  const connection = await createConnection();
  const [rows, fields] = await connection.execute("SELECT * FROM students");
  connection.end();
  return rows;
}

export { getStudent, createStudent };
