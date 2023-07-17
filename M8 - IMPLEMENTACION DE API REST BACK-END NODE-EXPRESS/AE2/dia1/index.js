import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

let libros = JSON.parse(fs.readFileSync("./libros.json", "utf8"));

app.use(express.json());

app.get("/api/libros", (req, res) => {
  res.json(libros);
});

app.get("/api/libros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const libro = libros.find((libro) => libro.id === id);
  if (libro) {
    res.json(libro);
  } else {
    res.status(404).json({ message: "Libro no encontrado" });
  }
});

app.post("/api/libros", (req, res) => {
  const nuevoLibro = req.body;
  libros.push(nuevoLibro);
  res.status(201).json(nuevoLibro);
});

app.put("/api/libros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const libroIndex = libros.findIndex((libro) => libro.id === id);
  if (libroIndex > -1) {
    libros[libroIndex] = req.body;
    res.json(libros[libroIndex]);
  } else {
    res.status(404).json({ message: "Libro no encontrado" });
  }
});

app.delete("/api/libros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const libroIndex = libros.findIndex((libro) => libro.id === id);

  if (libroIndex > -1) {
    libros.splice(libroIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Libro no encontrado" });
  }
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
