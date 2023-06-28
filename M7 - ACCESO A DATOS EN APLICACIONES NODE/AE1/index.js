require("dotenv").config();
const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

try {
  pool.getConnection((error, connection) => {
    if (error) {
      console.error("Error al obtener la conexion: ", error.message);
      return;
    }

    //ejemplo consulta base de datos
    connection.query(`select * from store`, (error, results) => {
      if (error) {
        console.error("Error al ejecutar la consulta: ", error);
      } else {
        console.log("Tiendas de tabla store: ", results);
      }
      //cerrar la conexion
      connection.release();
      //cerrar el pool de conexiones
      pool.end((error) => {
        if (error) {
          console.error("Error al cerrar el pool de conexiones:", error);
        } else {
          console.log("Pool de conexiones cerrado correctamente");
        }
      });
    });
  });
} catch (error) {
  console.error("Error al establecer la conexion: ", error);
}
