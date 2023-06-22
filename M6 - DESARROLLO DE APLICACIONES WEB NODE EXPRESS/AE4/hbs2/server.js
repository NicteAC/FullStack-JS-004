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

app.get("/saludo", (req, res) => {
  //datos de ejemplo
  const data = {
    title: "My Application",
    name: "John",
    items: ["Item 1", "Item 2", "Item 3"],
  };
  res.render("saludo", data);
});



app.listen(PORT, () => console.log(`Escuchando el puerto ${PORT}`));
