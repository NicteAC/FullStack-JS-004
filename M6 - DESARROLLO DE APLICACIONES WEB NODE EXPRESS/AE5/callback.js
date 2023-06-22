// Definir la funcion que implementará el callback

const piopio = function (callback) {
  // Añadimos primer paso a consola
  console.log("🥚");
  //Ejecutar el callback
  callback();
  //Añadimos ultimo paso a consola
  console.log("🐓");
};

piopio(function () {
    console.log("🐣");
  });
