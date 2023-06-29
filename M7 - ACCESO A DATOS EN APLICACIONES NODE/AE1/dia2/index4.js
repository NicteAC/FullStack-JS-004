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

  const phone = "987123654";
  const name = "Carolina Aliaga";

  const sql = `UPDATE clientes SET telefono = ? where nombre = ?`;

  connection.query(sql, [phone, name], (error, results) => {
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
