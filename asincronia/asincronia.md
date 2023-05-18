# Asincronia
Aqui encontraran informacion sobre programación asíncrona, threads, código asíncrono vs. código bloqueante, callbacks, funciones asíncronas, promesas, y funciones asíncronas con async/await.

1. Qué es la programación asíncrona
   La programación asíncrona en JavaScript es una técnica que permite ejecutar tareas en segundo plano sin interrumpir el flujo principal del programa. Esto se logra mediante el uso de funciones asíncronas, callbacks y promesas.

2. Qué es un Thread
   Un thread es una secuencia de ejecución dentro de un programa que puede ser ejecutada simultáneamente con otras secuencias de ejecución. En JavaScript, el motor de JavaScript es el encargado de manejar los threads.

3. Código asíncrono v/s código bloqueante Callbacks asíncronos
   El código asíncrono es aquel que no bloquea el flujo principal del programa mientras se ejecutan tareas en segundo plano. Los callbacks son funciones que se ejecutan cuando una tarea asíncrona ha sido completada.

4. Qué es una función asíncrona
   Una función asíncrona es una función que permite ejecutar tareas en segundo plano sin bloquear el flujo principal del programa. Se definen con la palabra clave async y siempre retornan una promesa.

5. Qué es un callback
   Un callback es una función que se pasa como argumento a otra función y se ejecuta cuando se completa una tarea asíncrona.

6. Creando una función callback
   Para crear una función callback, simplemente definimos una función y la pasamos como argumento a otra función que acepte callbacks.

7. Ejemplo con SetTimeout
   El método setTimeout es una función asíncrona que toma dos argumentos: una función callback y un tiempo en milisegundos. La función callback se ejecutará después del tiempo especificado.

```js
setTimeout(function () {
  console.log("¡Hola, mundo!");
}, 1000);
```

8. Paso de parámetros en funciones callback
   Para pasar parámetros a una función callback, simplemente los incluimos como argumentos adicionales al llamar la función.

```js
function sayHello(name, callback) {
  callback("¡Hola, " + name + "!");
}

sayHello("Juan", function (message) {
  console.log(message);
});
```

9. Invocando una llamada callback
   Para invocar una llamada a una función callback, simplemente llamamos la función pasada como argumento y le pasamos los valores necesarios.

```js
function fetchData(url, callback) {
  // Lógica para obtener datos desde una URL
  // ...
  callback(data);
}

fetchData("https://ejemplo.com/api/data", function (data) {
  console.log(data);
});
```

10. Qué son las Promesas
    Las promesas son objetos que representan una tarea asíncrona que puede completarse con éxito o con error en algún momento en el futuro.

11. Ventajas de las Promesas por sobre los Callbacks
    Las promesas ofrecen una sintaxis más legible y fácil de entender que los callbacks anidados, además de permitir un mejor manejo de errores.

12. Los bloques .then() y .catch()
    El método then es usado para encadenar múltiples promesas y manejar el resultado exitoso de una tarea. El método catch es usado para manejar errores que puedan ocurrir durante la ejecución de una tarea.

```js
fetch(url)
  .then((response) => {
    // Lógica para manejar la respuesta exitosa
    return response.json();
  })
  .then((data) => {
    // Lógica para manejar los datos obtenidos
    console.log(data);
  })
  .catch((error) => {
    // Lógica para manejar errores
    console.log(error);
  });
```

13. Construyendo una promesa
    Para crear una promesa, usamos la palabra clave new seguida de la función constructora Promise. El constructor de la promesa acepta una función que a su vez acepta dos argumentos: resolve y reject. Dentro de esta función, realizamos la lógica para completar o rechazar la promesa.

```js
const fetchData = new Promise((resolve, reject) => {
  // Lógica para obtener datos desde una URL
  // ...
  if (data) {
    resolve(data);
  } else {
    reject("No se pudo obtener los datos.");
  }
});
```

14. Resolviendo una promesa
    Para resolver una promesa, llamamos a la función resolve y pasamos el resultado deseado como argumento.

```js
const fetchData = new Promise((resolve, reject) => {
  // Lógica para obtener datos desde una URL
  // ...
  if (data) {
    resolve(data);
  } else {
    reject("No se pudo obtener los datos.");
  }
});

fetchData.then((data) => {
  console.log(data);
});
```

15. Rechazando una promesa
    Para rechazar una promesa, llamamos a la función reject y pasamos un error como argumento.

```js
const fetchData = new Promise((resolve, reject) => {
  // Lógica para obtener datos desde una URL
  // ...
  if (data) {
    resolve(data);
  } else {
    reject("No se pudo obtener los datos.");
  }
});

fetchData.catch((error) => {
  console.log(error);
});
```

16. Creando funciones asíncronas con ASYNC/AWAIT
    Las funciones asíncronas nos permiten escribir código asíncrono de manera más legible y sencilla. Usando la palabra clave async en la definición de una función, podemos usar la palabra clave await para esperar el resultado de una promesa antes de continuar con la ejecución de la función.

```js
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

fetchData("https://ejemplo.com/api/data")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

17. Capturar un error con Catch
    Podemos usar try/catch dentro de una función asíncrona para manejar errores de manera más legible.

```js
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
```
18. Ventajas y desventajas ASYNC/AWAIT
Las ventajas de usar async/await son: 
La sintaxis es más legible y sencilla de entender que el código de devolución de llamada y las promesas anidadas.
Hace que el código asincrónico parezca síncrono, lo que facilita su razonamiento y mantenimiento.
Permite el manejo fácil y conciso de errores mediante el uso de try/catch.
Las desventajas de usar async/await son: 
No está soportado en navegadores antiguos y versiones anteriores de Node.js.
Las funciones asíncronas pueden ser más lentas que las funciones de devolución de llamada debido a la sobrecarga de administrar el contexto de la función.


19. Conclusión
La programación asíncrona es una técnica vital para desarrollar aplicaciones modernas. Al comprender los conceptos de hilos, código asíncrono, devoluciones de llamada, promesas y async/await, los desarrolladores pueden escribir código más eficiente y legible que maneje tareas que requieren tiempo, como la interacción con bases de datos y la comunicación de red. Al elegir entre las técnicas de programación asíncrona, los desarrolladores deben considerar la compatibilidad con el navegador y el rendimiento de la 
