const yargs = require("yargs");

//Definir el comando

yargs.command({
  command: "conducir",
  describe: "",
  builder: {
    puntaje: {
      describe: "Puntaje obtenido en el examen teorico de conducir",
      demand: true,
      type: "number",
    },
  },
  handler: function (argv) {
    const puntajeRequerido = 70;
    const puntajeObtenido = argv.puntaje;
    if (puntajeObtenido >= puntajeRequerido) {
      console.log("Felicidades! aprobaste el examen de conducir");
    } else {
      console.log("Lo sentimos has reprobado el examen");
    }
  },
});
yargs.parse();