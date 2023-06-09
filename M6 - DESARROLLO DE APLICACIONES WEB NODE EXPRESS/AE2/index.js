// Paso 1 - Importar el módulo http en una variable.
const http = require("http");
// Paso 2 - Usar el método createServer pasándole como parámetro una función
// callback con los siguientes parámetros: req, res.
http
  .createServer(function (req, res) {
    // Paso 3 - Dentro de la función callback imprime por consola el mensaje “¿Aló? ¿Quién
    // habla?”
    console.log("¿Aló? ¿Quién habla?");
  })
    /* Paso 4 - Concatenar al método createServer el método “listen”, pasándole como
primer parámetro el número 8080, este número representará el puerto por el cual el
servidor estará oyendo peticiones, y como segundo parámetro una función de flecha
que imprima por consola el mensaje “Escuchando el puerto 8080”. */
  .listen(8080, () => console.log("Escuchando el puerto 8080")); 
