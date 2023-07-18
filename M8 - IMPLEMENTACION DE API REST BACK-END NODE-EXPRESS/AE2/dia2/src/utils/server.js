import exphbs from "express-handlebars";
import express from "express";
import {
  consulta,
  peluquero,
  cliente,
  insertarCliente,
  insertarCita,
  eliminarCita,
  editarCita,
} from "./db.js";
console.log(editarCita);
const app = express();
const port = 3000;

app.engine("hbs", exphbs.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "./src/views");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req, res) => res.render("home"));

app.get("/citas", async (req, res) => {
  const registros = await consulta();
  const peluqueros = await peluquero();
  const clientes = await cliente();
  res.status(200).json([registros, peluqueros, clientes]);
});

app.post("/cliente", async (req, res) => {
  const datos = Object.values(req.body);
  const respuesta = await insertarCliente(datos);
  res.status(201).json(respuesta);
});

app.post("/cita", async (req, res) => {
  const datos = Object.values(req.body);
  const respuesta = await insertarCita(datos);
  res.status(201).json(respuesta);
});

app.delete("/cita", async (req, res) => {
  const { id } = req.query;
  const respuesta = await eliminarCita(id);
  res.json(respuesta);
});

app.put("/cita", async (req, res) => {
  const datos = Object.values(req.body);
  const respuesta = await editarCita(datos);
  res.json(respuesta);
});

export default app;

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
