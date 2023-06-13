const fs = require("fs");

//? ejemplo bloqueante
const datos = fs.readFileSync("archivo.txt");

//? ejemplo no bloqueante
fs.readFile("archivo.txt", "utf8", (error, datos) => {
  if (error) {
    console.error(error);
  } else {
    console.log(datos);
  }
});
