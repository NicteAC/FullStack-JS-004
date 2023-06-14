//! Desarrollar una aplicación que reciba argumentos por la línea de comandos y los evalúe,
//! estos argumentos corresponden a unas credenciales, en caso de éxito, es decir que las
//! credenciales son las correctas, se ejecutará otra aplicación que devolverá un mensaje por
//! consola indicando “Bienvenido al Área 51”. */
// !Paso 1: Importar en una constante el paquete child_process.
// !Paso 2: Definir las credenciales de acceso.
// !Paso 3: Definir el comando “acceso”.
// !Paso 4: Definir la descripción del comando “acceso”.
//! Paso 5: Definir qué se requerirá el argumento “user” con sus características.
//! Paso 6: Definir qué se requerirá el argumento “pass” con sus características.
//! Paso 7: Declarar al operador ternario que condicione si los valores ingresados en los argumentos coinciden con las credenciales.
//! Paso 8: Ejecutar el archivo acceso.js con el método exec del módulo child_process e imprimir por consola su respuesta.
//! Paso 9: Devolver en el “else” del operador ternario un mensaje por consola que diga “Credenciales incorrectas”

//* Paso 10: Ejecutar el archivo acceso.js con el siguiente comando: node acceso.js login -u=admin -p=1234