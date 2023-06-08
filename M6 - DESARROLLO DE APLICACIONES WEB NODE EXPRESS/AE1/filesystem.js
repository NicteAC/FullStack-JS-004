//¿Qué tareas tengo pendientes para hoy?

//importar el modulo "fs" en una constante

const fs = require("fs");

//Usar el metodo writeFile del modulo "fs" para crear un archivo de nombre
//"tareas.txt" con una tarea especificando que la codificacion sera en codigo
//utf8 e imprimiendo en pantalla un mensaje de exito

fs.writeFile("tareas.txt", "1) Preparar AE2 del modulo 6", "utf8", () => {
  console.log("Archivo creado con exito");
});

//ejecutar el metodo readFile declarando el nombre del archivo y la codificacion utf8

fs.readFile("tareas.txt", "utf8", (err, data) => {
  //dentro del callback ejecutar el metodo writeFile declarando de nuevo el nombre del archivo
  //pero en este metodo concatenamos el parametro datacon la nueva tarea
  fs.writeFile(
    "tareas.txt",
    data + " 2) ordenar la mochila de la bendi",
    "utf8",
    () => {
      console.log("Archivo sobrescrito con exito");
    }
  );
});

//renombrar el archivo tareas.txt por task.txt

fs.rename("tareas.txt", "task.txt", () => {
  console.log("Archivo renombrado con exito");
  //Eliminar el archivo renombrado
  fs.unlink("task.txt", () => {
    console.log("archivo eliminado con exito");
  });
});
