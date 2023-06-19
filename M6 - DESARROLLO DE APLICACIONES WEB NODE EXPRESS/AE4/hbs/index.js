import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
const __dirname = dirname(fileURLToPath(import.meta.url));
app.engine("handlebars", engine());

app.set("views", `${__dirname}/views`);
app.set("view engine", "hbs");

app.get("/tareas", (req, res) => {
  //datos de ejemplo
  const title = "Tareas Pendientes";
  const tareas = [
    { id: 1, titulo: "Preparar el desayuno" },
    { id: 2, titulo: "Entregar los jumbitos" },
    { id: 3, titulo: "Aprender express" },
    { id: 4, titulo: "Comprar jumbitos" },
    { id: 5, titulo: "Instalar Hbs" },
  ];
  res.render("tareas", { tareas, title });
});
app.get("/realizadas", (req, res) => {
  //datos de ejemplo
  const title = "Tareas Realizadas";
  const tareas = [
    { id: 1, titulo: "Preparar el desayuno" },
    { id: 2, titulo: "Instalar Hbs" },
  ];
  res.render("tareas", { tareas, title });
});
app.get("/hbs", (req, res) => {
  //datos de ejemplo
  const title = "Instalaciones";
  const tareas = [
    { id: 1, titulo: "express" },
    { id: 2, titulo: "hbs" },
    { id: 3, titulo: "express-handlebars" },
    { id: 3, titulo: "handlebars" },
  ];
  res.render("instalaciones", { tareas, title });
});

app.listen(PORT, () => console.log(`Escuchando el puerto ${PORT}`));
