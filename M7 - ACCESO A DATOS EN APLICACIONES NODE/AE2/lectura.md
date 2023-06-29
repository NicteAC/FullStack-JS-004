# Obtención de información desde una base de datos

En el contexto de Node.js con MySQL, la obtención de información desde una base de datos implica realizar consultas para recuperar datos almacenados en tablas. Para ello, se utilizan diversos métodos y técnicas que permiten interactuar con la base de datos y obtener los resultados deseados.

## Consultas en base de datos

Las consultas en una base de datos son instrucciones utilizadas para obtener información específica de una tabla o conjunto de tablas. En el contexto de Node.js con MySQL, existen varias formas de realizar consultas, como se detalla a continuación:

- Consultas sencillas con la instrucción query(): La función **query()** es proporcionada por la biblioteca de MySQL en Node.js y se utiliza para enviar una consulta SQL a la base de datos. Por ejemplo:

```javascript
connection.query('SELECT * FROM usuarios', (error, results) => {
  if (error) throw error;
  console.log(results);
});
```

- Client.query(): Cuando se utiliza el módulo mysql2 en Node.js, se puede crear una instancia de Client para interactuar con la base de datos. El método query() de Client se utiliza para realizar consultas. Por ejemplo:

```javascript
const mysql = require('mysql2');

const client = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase'
});

client.query('SELECT * FROM usuarios', (error, results) => {
  if (error) throw error;
  console.log(results);
});
```

- Pool.query(): En lugar de crear una conexión individual, se puede utilizar un grupo de conexiones conocido como "pool" para realizar consultas. Esto es útil cuando se necesita manejar múltiples solicitudes de forma eficiente. El método query() de Pool se utiliza para ejecutar consultas. Por ejemplo:

```javascript
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase'
});

pool.query('SELECT * FROM usuarios', (error, results) => {
  if (error) throw error;
  console.log(results);
});
```

## Consultas Asíncronas

En el contexto de Node.js con MySQL, las consultas también se pueden realizar de forma asíncrona para mejorar el rendimiento y la escalabilidad de la aplicación. A continuación, se describen dos enfoques comunes para realizar consultas asíncronas:

- Consultas asíncronas con ASYNC/AWAIT: Con el uso de las palabras clave async y await, se pueden escribir consultas asíncronas de manera más concisa y legible. Por ejemplo:

```javascript
const mysql = require('mysql2/promise');

async function obtenerUsuarios() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'mydatabase'
    });

    const [rows, fields] = await connection.execute('SELECT * FROM usuarios');
    console.log(rows);
  } catch (error) {
    console.error(error);
  }
}

obtenerUsuarios();
```

- Consultas asíncronas con CallBacks: Un enfoque más tradicional para realizar consultas asíncronas en Node.js es utilizar callbacks. El callback se ejecuta una vez que se obtienen los resultados de la consulta. Por ejemplo:

```javascript
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase'
});

connection.query('SELECT * FROM usuarios', (error, results) => {
  if (error) throw error;
  console.log(results);
});
```

## Consultas Parametrizadas

Las consultas parametrizadas permiten separar los datos de la consulta SQL, lo que mejora la seguridad y evita problemas como la inyección de SQL. A continuación, se describen distintas formas de realizar consultas parametrizadas en Node.js con MySQL:

- Queries con texto plano: En este enfoque, se concatenan los valores directamente en la consulta SQL. Sin embargo, esta forma no es segura y está expuesta a ataques de inyección de SQL. Por ejemplo:

```javascript
const usuario = 'John';
const query = `SELECT * FROM usuarios WHERE nombre = '${usuario}'`;
connection.query(query, (error, results) => {
  if (error) throw error;
  console.log(results);
});
```

- Queries con texto parametrizado: Utilizando marcadores de posición (?), se pueden pasar los valores de forma segura y separada de la consulta SQL. Por ejemplo:

```javascript
const usuario = 'John';
const query = 'SELECT * FROM usuarios WHERE nombre = ?';
connection.query(query, [usuario], (error, results) => {
  if (error) throw error;
  console.log(results);
});
```

- SQL Injection: La inyección de SQL es un tipo de ataque donde se insertan comandos SQL maliciosos en una consulta no validada. Esto puede permitir que un atacante ejecute comandos no autorizados o acceda a información confidencial. Es importante utilizar consultas parametrizadas o prepared statements para prevenir este tipo de ataques.

- Validación de parámetros en consultas: Antes de ejecutar una consulta, se deben validar y sanitizar los parámetros para evitar posibles problemas de seguridad. Esto implica asegurarse de que los datos sean del tipo y formato correctos antes de incluirlos en una consulta.

- Objeto JSON como argumento de consultas: En lugar de pasar valores individuales, también es posible utilizar un objeto JSON como argumento en las consultas parametrizadas. Esto puede resultar útil cuando se tienen múltiples valores a pasar a la consulta. Por ejemplo:

```javascript
const usuario = { nombre: 'John', edad: 25 };
const query = 'SELECT * FROM usuarios WHERE nombre = ? AND edad = ?';
connection.query(query, [usuario.nombre, usuario.edad], (error, results) => {
  if (error) throw error;
  console.log(results);
});
```

- Prepared Statements: Los prepared statements son consultas precompiladas que se pueden reutilizar con diferentes conjuntos de parámetros. Esto mejora la eficiencia y la seguridad, ya que los valores de los parámetros se envían por separado de la consulta SQL. A continuación, se muestra un ejemplo de prepared statement:

```javascript
const query = 'SELECT * FROM usuarios WHERE nombre = ?';
const statement = connection.prepare(query);
statement.execute(['John'], (error, results) => {
  if (error) throw error;
  console.log(results);
});
```

## Procesamiento de la respuesta

Después de ejecutar una consulta, es importante procesar la respuesta para obtener los resultados deseados y manejar cualquier error que pueda ocurrir. A continuación, se describen algunos aspectos relacionados con el procesamiento de la respuesta en Node.js con MySQL:

- El objeto result(): El objeto result contiene la información relacionada con la ejecución de una consulta, como el número de filas afectadas y los valores de las claves generadas. Se puede acceder a esta información para realizar acciones adicionales después de ejecutar la consulta.

- Iteración sobre filas y columnas: Los resultados de una consulta generalmente se devuelven en forma de filas y columnas. Puedes iterar sobre estas filas y acceder a los valores de cada columna utilizando los métodos adecuados proporcionados por la biblioteca de MySQL en Node.js.

- Captura de errores en consultas: Es importante manejar los errores que puedan ocurrir durante la ejecución de una consulta. Puedes utilizar bloques try-catch o funciones de callback para capturar y manejar los errores de manera adecuada.

## Manejo de cursores en Node

En el contexto de Node.js con MySQL, el manejo de cursores se refiere a la capacidad de procesar conjuntos de resultados de consultas grandes de manera eficiente, permitiendo leer e iterar sobre los datos de forma incremental. A continuación, se describe el manejo de cursores en Node.js con MySQL:

- Qué es un cursor: Un cursor es una estructura de datos que permite recorrer y manipular un conjunto de resultados de una consulta. En lugar de cargar todos los resultados en la memoria al mismo tiempo, un cursor permite leer e iterar sobre los resultados a medida que se necesitan.

- Instalación de paquete: Para habilitar el manejo de cursores en Node.js con MySQL, se debe utilizar un paquete adicional llamado "mysql2-cursor". Puedes instalarlo mediante el administrador de paquetes npm de la siguiente manera:

```bash
npm install mysql2-cursor
```

Constructor: Después de instalar el paquete, debes crear una instancia de cursor utilizando el constructor proporcionado por el paquete. Por ejemplo:

```javascript
const mysql = require('mysql2');
const Cursor = require('mysql2-cursor');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase'
});

const cursor = connection.query(new Cursor('SELECT * FROM usuarios'));
```

- Lectura e iteración sobre los resultados: Una vez que se crea el cursor, se puede utilizar el método read() para obtener los resultados de la consulta de manera incremental. Puedes iterar sobre los resultados y realizar acciones según sea necesario. Por ejemplo:

```javascript
cursor.read(10, (error, rows) => {
  if (error) throw error;
  console.log(rows); // Filas obtenidas
});
```

- Cierre de cursores: Después de terminar de utilizar un cursor, es importante cerrarlo correctamente para liberar los recursos y evitar posibles problemas de memoria o conexiones no cerradas. Para cerrar un cursor en Node.js con MySQL, se puede utilizar el método close() proporcionado por el paquete "mysql2-cursor". Por ejemplo:

```javascript
cursor.close((error) => {
  if (error) throw error;
  console.log('Cursor cerrado correctamente.');
});
```

Al cerrar un cursor, se asegura que no se realicen más lecturas o iteraciones sobre los resultados y se liberan los recursos asociados al cursor.

Estos son algunos conceptos clave relacionados con el manejo de cursores en Node.js con MySQL. Es importante tener en cuenta que el manejo de cursores puede ser útil cuando se trabaja con conjuntos de resultados grandes y se necesita procesar los datos de manera eficiente y escalable.