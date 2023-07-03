import { dbConfig } from "./config.js";
import mysql from "mysql2/promise";

export const obtenerActoresPorApellido = async (apellido) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const query = "SELECT * FROM actor WHERE last_name = ?";
    const [rows] = await connection.execute(query, [apellido]);
    console.log(rows);

    connection.end();
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const procesarDatos = async () => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const query = "SELECT * FROM actor";
        const [rows] = await connection.execute(query);
        rows.forEach((element) => {
            console.table(element);
          });
    
        connection.end();
      } catch (error) {
        console.error("Error: ", error);
      }
/*   try {
    const connection = await mysql.createConnection(dbConfig);
    const query = "SELECT * FROM actor";

    const [rows] = await connection.query(query, { stream: true });
    rows.forEach((element) => {
      console.log(element);
    });
    connection.end();
  } catch (error) {
    console.error("Error: ", error);
  } */
};
