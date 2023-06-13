// ! .command( <comando> , <descripción>, <constructor>, <callback> )

// ? Paso 1: Importar en una constante el paquete Yargs y en otra el paquete moment
const yargs = require("yargs");
const moment = require("moment");
//? Paso 2: Inicializar el método “command” para el paso de parámetros.
yargs
  .command(
    //? Paso 3: Definir del comando con el primer parámetro el cual será “Buenos dias”.
    "Hola",
    //? Paso 4: Definir la descripción del comando “Buenos dias” como segundo parámetro del método “command”.
    "Comando para saludar y que muestra la fecha actual",
    //? Paso 5: Definir el objeto para la configuración del constructor del comando.
    {},
    //? Paso 4: Crear la función callback la cual recibe como parámetro el objeto args que
    //? contendrá los argumentos como propiedades. A su vez la función mandará un
    //? mensaje por consola saludando con el nombre recibido como argumento.
    () => {
      const fechaActual = moment();
      //?  Paso 5: mostrar el mensaje buenos dias junto a la fecha actual
      console.log(
        `Buenos dias. La fecha de hoy es ${fechaActual.format("DD/MM/YYYY")}`
      );
    }
  ) //?concatenar el metodo command con el metodo help y la propiedad argv
  .help().argv;

const fechaActual = moment();

const fechaSumada = fechaActual.add(5, "days");
console.log(`Fecha sumada: ${fechaSumada.format("DD/MM/YYYY")}`);

const fechaRestada = fechaActual.subtract(10, "days");
console.log(`Fecha restada: ${fechaRestada.format("DD/MM/YYYY")}`);
