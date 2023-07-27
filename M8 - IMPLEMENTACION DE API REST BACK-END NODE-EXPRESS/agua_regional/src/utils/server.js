import express from "express";
import exphbs from "express-handlebars";

const app = express();
const port = 3000;

app.engine("hbs", exphbs.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "./src/views");

app.use("/bootstrap", express.static("./node_modules/bootstrap/dist"));
app.use(express.static("public"));
app.get("/", (req, res) => res.render("home"));

//rutas de autenticacion
app.get("/login", (req, res) => {res.render("login")});
app.get("/register", (req, res) => {res.render("register")});
app.post("/auth/login", (req, res) => {});
app.post("/auth/register", (req, res) => {});

//rutas de solicitudes
app.get("/solicitudes", (req, res) => {res.render("solicitudes")});
app.post("/solicitudes", (req, res) => {});
app.get("/solicitudes/:solicitudID", (req, res) => {});
app.get("/solicitudes/:regionID", (req, res) => {});
app.put("/solicitudes/:solicitudID", (req, res) => {});

//rutas de anuncios
app.get("/anuncios", (req, res) => {res.render("anuncios")});
app.post("/anuncios", (req, res) => {});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

export default app;
