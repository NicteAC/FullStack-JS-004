import express from "express";
import users from "./users.js";
import jwt from "jsonwebtoken";
const app = express();

app.listen(3000, () => console.log("Iniciando en puerto 3000"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const secretKey = "Mi llave super secreta";

const token = jwt.sign(users[0], secretKey);

app.get("/", (req, res) => {
  res.send(token);
});

app.get("/token", (req, res) => {
  const { token } = req.query;
  jwt.verify(token, secretKey, (err, data) => {
    res.send(err ? "Token inválido" : data);
  });
});
