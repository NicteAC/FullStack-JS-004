import express from "express";
import exphbs from "express-handlebars";
import { crearUsuario, inicioSesion } from "./consultas.js";
import { verify } from "./jwt.js";

const app = express();
const port = 3000;

app.engine("hbs", exphbs.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "./src/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/bootstrap", express.static("./node_modules/bootstrap/dist"));
app.use(express.static("public"));

const autenticacion = (req, res, next) => {
  //llamamos al token guardado
  if (auth) {
    verify(token, req, next);
  } else {
    res.redirect("/login");
  }
};

app.get("/", (req, res) => res.render("home"));

//rutas de autenticacion
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/register-admin", (req, res) => {
  res.render("register-admin");
});
app.post("/login", async (req, res) => {
  console.log('body:', req.body);
  try {
    const token = await inicioSesion(req.body);
    console.log("token route", token);
    res.status(200).send({ auth: true, token: token });
  } catch (error) {
    res.status(401).send({ auth: false, token: null, message: error.message });
  }
});
app.post("/register", async (req, res) => {
  const user = req.body;
  user.tipoUsuario = 0;
  try {
    console.log(user);
    const userID = await crearUsuario(user);
    res.status(201).send({ userID: userID });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
app.post("/register-admin", async (req, res) => {
  const user = req.body;
  user.tipoUsuario = 1;
  try {
    console.log(user);
    const userID = await crearUsuario(user);
    res.status(201).send({ userID: userID });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
//rutas de solicitudes
app.get("/solicitudes", (req, res) => {
  res.render("solicitudes");
});
app.post("/solicitudes", (req, res) => {});
app.get("/solicitudes/:solicitudID", (req, res) => {
  res.render("detalles");
});
app.get("/solicitudes/:regionID", (req, res) => {
  res.render("solicitudes");
});
app.put("/solicitudes/:solicitudID", (req, res) => {});

//rutas de anuncios
app.get("/anuncios", (req, res) => {
  res.render("anuncios");
});
app.post("/anuncios", (req, res) => {});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

export default app;
