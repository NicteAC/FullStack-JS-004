require("dotenv").config();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: "caro",
  password: "js-fullstack",
  database: process.env.DB_DATABASE,
});

connection.connect((error) => {
  if (error) {
    console.error("Error al conectar a la base de datos:", error);
  }

  const time = "SELECT NOW()";

  connection.query(time, (error, results) => {
    if (error) {
      console.error("Error al ejecutar la consulta:", error);
    } else {
      const currentTime = results[0]['NOW()'];
      console.log("Momento actual:", currentTime);
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
