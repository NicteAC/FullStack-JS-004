import express from "express";
import exphbs from "express-handlebars";
import fileUpload from "express-fileupload";
import fs from "fs";
import path from "path";

const app = express();
app.listen(3000);

app.engine("hbs", exphbs.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "./src/views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.use(
  fileUpload({
    limits: { fileSize: 5000000 },
    abortOnLimit: true,
    responseOnLimit: "El peso del archivo excede el limite permitido",
  })
);

app.get("/", (req, res) => res.render("home"));

app.post("/subirfoto", (req, res) => {
  const { nombre, apellido } = req.body;
  const { foto } = req.files;
  console.log(foto);
  // Obtenemos la extensión del archivo
  const ext = path.extname(foto.name);
  console.log(ext)
  // Define las extensiones permitidas
  const validExtensions = [".png", ".jpg", ".jpeg", ".gif"];

  // Comprobamos si la extensión del archivo es válida
  if (!validExtensions.includes(ext)) {
    return res
      .status(400)
      .json({ code: 400, message: "Formato de imagen no válido" });
  }
  const fileName = `${nombre}_${apellido}_${foto.name}`;
  foto.mv(`${process.cwd()}/src/utils/uploads/${fileName}`, (err) => {
    if (err)
      return res.status(500).json({
        code: 500,
        message: "Ha ocurrido un error en el servidor",
        error: err,
      });
    res.send("Tu imagen fue cargada con exito");
  });
});

app.post("/eliminarfoto", (req, res) => {
  try {
    const { filedelete } = req.body;
    fs.unlinkSync(`${process.cwd()}/src/utils/uploads/${filedelete}`);
    res.send("imagen eliminada con éxito");
  } catch (error) {
    console.error(error);
    res.send("Error al eliminar la imagen");
  }
});

app.all("*", (req, res) =>
  res.status(404).json({ code: 404, message: "Página no encontrada" })
);

export { app };
