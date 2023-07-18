import mysql from "mysql2/promise";
import { config } from "dotenv";
config();

const pool = mysql.createPool({
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 100000,
  queueLimit: 0,
});

const consulta = async () => {
  try {
    const [rows] = await pool.query(
      `SELECT 
            Cita.id as CitaId,
            Cita.fecha,
            Cita.hora,
            Cita.servicio,
            Cliente.nombre as NombreCliente,
            Cliente.telefono,
            Cliente.correo,
            Peluquero.nombre as NombrePeluquero,
            Peluquero.especialidad
        FROM 
            Cita
        INNER JOIN 
            Cliente ON Cita.clienteId = Cliente.id
        INNER JOIN 
            Peluquero ON Cita.peluqueroId = Peluquero.id;
            `
    );
    return rows;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const peluquero = async () => {
  try {
    const [rows] = await pool.query(`SELECT * FROM Peluquero`);
    return rows;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const cliente = async () => {
  try {
    const [rows] = await pool.query(`SELECT * FROM Cliente`);
    return rows;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const insertarCliente = async (datos) => {
  const consulta =
    "INSERT INTO Cliente (nombre, telefono, correo) VALUES (?, ?, ?)";
  try {
    const [result] = await pool.query(consulta, datos);
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const insertarCita = async (datos) => {
  const consulta =
    "INSERT INTO Cita (fecha, hora, servicio, peluqueroId, clienteId) VALUES (?, ?, ?, ?, ?)";
  try {
    const [result] = await pool.query(consulta, datos);
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const eliminarCita = async (id) => {
  try {
    const [result] = await pool.query("DELETE FROM Cita WHERE id = ?", [id]);
    return result.affectedRows;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const editarCita = async (datos) => {
  const consulta =
    "UPDATE Cita SET fecha = ?, hora = ?, servicio = ?, peluqueroId = ?, clienteId = ? WHERE id = ?";
  try {
    const [result] = await pool.query(consulta, datos);
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export {
  consulta,
  peluquero,
  cliente,
  insertarCliente,
  insertarCita,
  eliminarCita,
  editarCita
};
