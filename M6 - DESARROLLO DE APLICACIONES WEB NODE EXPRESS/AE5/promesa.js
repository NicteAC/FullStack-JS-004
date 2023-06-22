// Definicion del callback de la promesa
const callback = (resolver, rechazar) => {
  // Con un 50% de probabilidad
  if (Math.random() >= 0.5) {
    // Podra fallar
    rechazar("El numero resultante fue menor a 0.5 :'(");
  } else {
    //Caso de exito
    setTimeout(function () {
      resolver("El numero resultante fue mayor o igual que 0.5 :D");
    }, 5000);
  }
};

const promesa = new Promise(callback)
  .then((mensaje) => {
    console.log("Promesa resuleta sin problema y el mensaje es:");
    console.log(mensaje);
  })
  .catch((error) => {
    console.log("Algo salio mal, el error es el siguiente:");
    console.log(error);
  });
