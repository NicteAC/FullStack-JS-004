import { db } from "./db.js";
import bcrypt from "bcrypt";
import { sign } from "./jwt.js";

const secret_key = 'A56B3289';

//register
export async function crearUsuario(usuario) {
  console.log("sentencia", usuario);
  const { nombre, email, contrasena, tipoUsuario } = usuario;
  const contrasenaEncriptada = await bcrypt.hash(contrasena, 12);
  const connection = await db.getConnection();
  const [result] = await connection.execute(
    `INSERT INTO usuarios (nombre, email, contrasena, tipoUsuario) VALUES (?, ?, ?, ?)`,
    [nombre, email, contrasenaEncriptada, tipoUsuario]
  );
  return result.insertID;
}
//login
export async function inicioSesion(user) {
  const { nombre, email, contrasena } = user;
  const connection = await db.getConnection();
  const [rows] = await connection.execute(
    `SELECT * FROM usuarios WHERE email = ?`,
    [email]
  );
  console.log('rows', rows);
  const usuario = rows[0];
  if (usuario && (await bcrypt.compare(contrasena, usuario.contrasena))) {
    const data = { user: nombre, contrasena: contrasena };
    const token = sign(data, secret_key, {expiresIn: '1h'});
    console.log('token',token);
    return token;
  } else {
    throw new Error("Datos de acceso no correctos");
  }
}
//obtener solicitudes
