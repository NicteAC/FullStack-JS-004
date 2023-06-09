/* Basado en el ejercicio de tareas, crea una aplicación en Node que cree, lea, renombre
y elimine un archivo llamado “shopping.txt”, cuyo contenido debe ser una lista de
productos a comprar en un minimarket, siéntete libre de poner los valores que
quieras para este ejercicio propuesto.
Luego del método writeFile, cada método debe estar dentro de la función callback
del anterior y debe ser ejecutado dentro del callback de un setTimeout con un tiempo
de 2 segundos.*/
const fs = require("fs");
fs.writeFile("shopping.txt", "1) Flips 2) Savoy", "utf8", () => {
  console.log("Archivo creado");
  setTimeout(() => {
    fs.readFile("shopping.txt", "utf8", (err, data) => {
      console.log("Contenido del archivo: " + data);
      setTimeout(() => {
        fs.rename("shopping.txt", "compras.txt", () => {
          console.log("Archivo renombrado");
          setTimeout(() => {
            fs.unlink("compras.txt", () => {
              console.log("Archivo eliminado");
            });
          }, 2000);
        });
      }, 2000);
    });
  }, 2000);
});
