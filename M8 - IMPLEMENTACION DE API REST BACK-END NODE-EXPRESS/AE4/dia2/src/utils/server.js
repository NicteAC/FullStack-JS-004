import express from "express";
import { sign, verify } from "./jwt.js";
import users from "./users.json" assert {type: 'json'};

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/profile", (req, res, next) => {
  const decoded = verify(req.headers.authorization);
  decoded?.code ? res.status(401).json({ decoded }) : next();
});

app.post("/login", (req, res) => {
  const { user, pass } = req.body;
  console.log(users)
  const filter = users.find((u) => u.user === user && u.pass === pass);

  if (!filter) {
    return res
      .status(401)
      .json({ code: 401, message: "Usted no esta autorizado a ingresar" });
  }

  const token = sign({ user });

  res.status(200).json({ jwt: token });
});

app.post("/profile", (req, res) =>{
  res.send("Bienvenido a tu perfil")
})

app.listen(3000);

export { app };
