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

  
  const movie = "Titanic";

  connection.query(
    `select id from peliculas where pelicula = ?;`,
    [movie],
    (error, results) => {
      if (error) {
        console.error("Error al ejecutar la consulta:", error);
      } else {
        console.log("El id de la pelicula titanic es:", results[0]['id']);
      }
    }
  );

  connection.end((error) => {
    if (error) {
      console.error("Error al cerrar la conexión:", error);
    } else {
      console.log("Conexión cerrada correctamente");
    }
  });
});
