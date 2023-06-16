import express from "express";
import getRandomCard from "./cartas.js";

const app = express();
const PORT = 3000;

app.get("/random-card", async (req, res) => {
  try {
    const card = await getRandomCard();
    res.json(card);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la carta" });
  }
});

app.listen(PORT, () => {
  console.log(`Escuchando el puerto ${PORT}`);
});
