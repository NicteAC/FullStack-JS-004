//! Jimp.read(<dirección de la imagen>, <callback(err,imagen)>)

//! imagen.resize(<ancho>, <alto>).sepia().writeAsync(<nombre_nueva_imagen>).then()
//todo https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg
//* Paso 1: Importar en una constante el paquete Jimp.
//* Paso 2: Importar en una constante el módulo http.
//* Paso 3: Importar en una constante el módulo fs.
//* Paso 4: Crear un servidor con el método de http createServer.
//* Paso 5: Usar el método read del objeto Jimp definiendo como primer parámetro la url de una imagen.
//* Paso 6: Aplicar los siguientes métodos, siguiendo la secuencia:
//*   ○ Método resize definiendo como primer parámetro 250 y como segundo parámetro el método AUTO del objeto Jimp
// *para el cálculo automático del height.
//*   ○ Método sepia para aplicar el filtro sepia a la imagen.
//*   ○ Método writeAsync declarando el nombre del archivo procesado a almacenar.
//* Paso 7: Usar el módulo fs para la lectura del archivo creado.
//* Paso 8: Definir la cabecera de la respuesta a la consulta del servidor con un Content-Type en valor image/jpeg y
//* terrminar la consulta devolviendo la data del archivo leído con el readFile.

const Jimp = require("jimp");
const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    Jimp.read(
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      (err, imagen) => {
        imagen
          .resize(250, Jimp.AUTO)
          .sepia()
          .writeAsync("img.png")
          .then(() => {
            fs.readFile("img.png", (err, Imagen) => {
              res.writeHead(200, { "Content-Type": "text/html" });
              res.end(Imagen);
            });
          });
      }
    );
  })
  .listen(3000, () => console.log("Server on"));
