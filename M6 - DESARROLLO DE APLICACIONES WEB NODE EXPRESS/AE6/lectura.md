# Invocación con paso de parámetros

## Invocación con paso de parámetros

Cuando ejecutamos un programa Node, podemos pasarle parámetros desde la línea de comandos. Estos parámetros se pasan como argumentos a nuestro programa y se pueden utilizar para modificar su comportamiento o realizar acciones específicas.

Ejemplo:
Supongamos que tenemos un archivo llamado "programa.js" que toma dos parámetros: nombre y edad. Podemos invocar el programa desde la línea de comandos de la siguiente manera:

```bash
node programa.js Juan 25
```

Dentro de nuestro programa, podemos acceder a estos parámetros usando el objeto **process.argv**. Por ejemplo:

```javascript
const nombre = process.argv[2];
const edad = process.argv[3];
console.log(`Hola ${nombre}, tienes ${edad} años.`);
```

## Paso de parámetros al iniciar nuestro programa

Además de pasar parámetros durante la ejecución, también podemos pasar parámetros al iniciar nuestro programa Node. Estos parámetros se definen en el archivo de configuración **package.json** bajo la propiedad **scripts**. Por ejemplo:

```json
"scripts": {
  "start": "node programa.js parametro1 parametro2"
}
```

Luego, podemos ejecutar el programa con los parámetros definidos usando el comando:

```bash
npm run start
```

Dentro de nuestro programa, los parámetros pasados de esta manera se pueden obtener de la misma manera que se describió anteriormente.

## Validación de paso de parámetros

Es importante validar los parámetros pasados a nuestro programa para asegurarnos de que sean correctos y cumplan con las expectativas. Podemos realizar diversas validaciones, como comprobar si se proporcionan todos los parámetros necesarios o si los valores son del tipo esperado.

Ejemplo:

```javascript
const nombre = process.argv[2];
const edad = process.argv[3];

if (!nombre || !edad) {
  console.log("Por favor, proporciona el nombre y la edad.");
} else if (isNaN(edad)) {
  console.log("La edad debe ser un número válido.");
} else {
  console.log(`Hola ${nombre}, tienes ${edad} años.`);
}
```

## Uso del paquete YARGS

YARGS es un paquete popular para trabajar con argumentos de línea de comandos en Node.js. Proporciona una interfaz sencilla para definir y analizar argumentos con facilidad.

Ejemplo:
Para usar YARGS, primero debemos instalarlo utilizando el administrador de paquetes de Node (npm):

```bash
npm install yargs
```

Luego, podemos definir y analizar argumentos utilizando YARGS en nuestro programa:

```javascript
const argv = require("yargs").argv;

const nombre = argv.nombre;
const edad = argv.edad;

console.log(`Hola ${nombre}, tienes ${edad} años.`);
```

Podemos ejecutar nuestro programa con parámetros de la siguiente manera:

```bash
node programa.js --nombre Juan --edad 25
```

## Validaciones automáticas con YARGS

Una de las ventajas de utilizar YARGS es que nos permite realizar validaciones automáticas de los argumentos pasados. Podemos definir reglas y restricciones sobre los argumentos para garantizar su validez.

Ejemplo:

```javascript
const argv = require("yargs")
  .demandOption(["nombre", "edad"])
  .number("edad").argv;

console.log(`Hola ${argv.nombre}, tienes ${argv.edad} años.`);
```

En este ejemplo, estamos utilizando YARGS para asegurarnos de que los argumentos **nombre** y **edad** sean proporcionados y que **edad** sea un número. Si alguno de los argumentos falta o no cumple con las restricciones, YARGS mostrará un mensaje de error automáticamente.

## Bajando una aplicación

Cuando trabajamos con Node, a menudo necesitamos descargar e instalar aplicaciones o paquetes externos para utilizar en nuestros proyectos. Para esto, utilizamos administradores de paquetes como npm (Node Package Manager) o Yarn.

Ejemplo:
Para descargar una aplicación o paquete utilizando npm, ejecutamos el siguiente comando en la línea de comandos:

```bash
npm install nombre-del-paquete
```

Esto descargará el paquete especificado y lo instalará en la carpeta **node_modules** de nuestro proyecto.

## Funciones globales en Node - Salida de la consola

Node proporciona una serie de funciones y objetos globales que podemos utilizar en nuestros programas. Uno de ellos es **console**, que nos permite imprimir mensajes y depurar nuestro código mediante la salida de la consola.

Ejemplo:

```javascript
console.log("Este es un mensaje de registro.");
console.error("Este es un mensaje de error.");
console.warn("Este es un mensaje de advertencia.");
```

Estas funciones nos permiten imprimir mensajes en la salida estándar o de error, lo cual es útil para mostrar información al usuario o para detectar problemas en nuestro programa.

## Entendiendo la salida de la consola de comandos

Cuando ejecutamos un programa Node desde la línea de comandos, la salida del programa se muestra en la propia consola. Es importante comprender cómo se muestra y se organiza esta salida para poder interpretarla correctamente.

La salida de la consola se compone de mensajes que se imprimen mediante las funciones de **console**, así como de errores y excepciones que se producen durante la ejecución del programa. Los mensajes se muestran secuencialmente en el orden en que se imprimieron.

Además, es posible que la salida se divida en diferentes niveles o canales, como la salida estándar (stdout) y la salida de error (stderr). Por lo general, los mensajes normales se muestran en la salida estándar, mientras que los errores y excepciones se muestran en la salida de error.

## Coloreando la salida

Una forma de mejorar la legibilidad de la salida en la consola es agregar colores y formato a los mensajes. Podemos lograr esto utilizando paquetes como **chalk**.

Ejemplo:
Para utilizar chalk, primero debemos instalarlo utilizando el administrador de paquetes de Node (npm):

```bash
npm install chalk
```

Luego, podemos utilizarlo en nuestro programa para agregar colores y formato a los mensajes de la siguiente manera:

```javascript
const chalk = require("chalk");

console.log(chalk.blue("Este es un mensaje en azul."));
console.log(chalk.red.bold("Este es un mensaje en rojo y en negrita."));
```

**chalk** proporciona una serie de métodos para cambiar el color, el fondo y el formato del texto en la consola, lo que nos permite resaltar ciertos mensajes o hacer que sean más legibles.

## Errores legibles en la línea de comandos

Cuando ocurre un error en nuestro programa Node, es importante que el mensaje de error sea claro y legible para poder entender y solucionar el problema de manera eficiente. Podemos lograr esto utilizando mensajes de error descriptivos y comprensibles.

Ejemplo:

```javascript
console.error("Ha ocurrido un error: No se pudo abrir el archivo.");
```

Al proporcionar mensajes de error claros y descriptivos, facilitamos la identificación y solución de problemas en nuestro programa.

## Levantar con Nodemon

Durante el desarrollo de una aplicación Node, es común realizar cambios frecuentes en el código y volver a ejecutar el programa para ver los resultados. Para simplificar este proceso, podemos utilizar herramientas como **nodemon**, que reinician automáticamente la aplicación cuando detectan cambios en los archivos.

Ejemplo:
Para utilizar **nodemon**, primero debemos instalarlo globalmente utilizando el administrador de paquetes de Node (npm):

```bash
npm install -g nodemon
```

Luego, podemos ejecutar nuestro programa utilizando **nodemon** de la siguiente manera:

```bash
nodemon programa.js
```

Ahora, cada vez que guardemos cambios en nuestros archivos, nodemon reiniciará automáticamente la aplicación, lo que nos permite ver los resultados actualizados sin tener que reiniciar manualmente.

## Errores en la salida de la consola de comandos

Cuando ocurre un error en nuestro programa Node, es posible que se muestre información adicional en la salida de la consola de comandos, como mensajes de error y trazas de pila (stack traces). Estos detalles pueden ser útiles para identificar la causa y ubicación del error.

Es importante prestar atención a los mensajes de error y a las trazas de pila, ya que nos proporcionan información sobre dónde se produjo el error y qué código lo causó. Al comprender y analizar estos detalles, podemos solucionar problemas y depurar nuestro programa de manera efectiva.

## Errores comunes al levantar una aplicación Node

Al levantar una aplicación Node, es común encontrar errores que pueden dificultar su ejecución o provocar comportamientos inesperados. Algunos errores comunes incluyen la falta de dependencias, la configuración incorrecta de variables de entorno y la incompatibilidad de versiones.

Es importante familiarizarse con estos errores comunes y saber cómo solucionarlos. Algunas estrategias para resolverlos incluyen verificar las dependencias y versiones necesarias, asegurarse de que las variables de entorno estén configuradas correctamente y consultar la documentación oficial o buscar ayuda en la comunidad.

## Los mensajes de console.log()

La función **console.log()** es una herramienta útil para imprimir mensajes y depurar nuestro programa en Node. Nos permite mostrar información relevante, como valores de variables, resultados de operaciones y mensajes de seguimiento.

Ejemplo:

```javascript
const nombre = "Juan";
console.log("El nombre es:", nombre);
```

**console.log()** acepta múltiples argumentos separados por coma y los imprime en la salida de la consola.

## Resolviendo errores comunes

Cuando desarrollamos aplicaciones en Node, es común encontrarnos con errores y problemas. Algunos errores comunes incluyen referencias a variables no definidas, errores de sintaxis, problemas de alcance y errores en la manipulación de objetos y arrays.

Para resolver estos errores, es importante realizar una depuración exhaustiva y utilizar herramientas como el depurador integrado de Node o la inserción de mensajes de console.log() estratégicamente para identificar y solucionar los problemas. Además, es útil consultar la documentación oficial, buscar en foros o solicitar ayuda a la comunidad de desarrolladores.
