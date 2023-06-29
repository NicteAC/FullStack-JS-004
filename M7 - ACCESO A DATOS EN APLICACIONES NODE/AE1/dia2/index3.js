require("dotenv").config();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: "caro",
  password: "js-fullstack",
  database: "negocio",
});

connection.connect((error) => {
  if (error) {
    console.error("Error al conectar a la base de datos:", error);
  }

  /* INSERT INTO Clientes (nombre, email, telefono)
  VALUES ('Juan Pérez', 'juan@example.com', '1234567890') */

  const data = {
    nombre: "Carolina Aliaga",
    email: "caro@notiene.cl",
    telefono: "321654987",
  };

  const sql = `INSERT INTO clientes SET ?`;

  connection.query(sql, [data], (error, results) => {
    if (error) {
      console.error("Error al ejecutar la consulta:", error);
    } else {
      console.log("Datos insertados correctamente", results);
    }
  });

  connection.end((error) => {
    if (error) {
      console.error("Error al cerrar la conexión:", error);
    } else {
      console.log("Conexión cerrada correctamente");
    }
  });
});
