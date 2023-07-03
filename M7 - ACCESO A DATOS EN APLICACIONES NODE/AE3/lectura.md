# CRUD
1. Inserción de datos
La instrucción INSERT se utiliza para insertar datos en una base de datos MySQL. Aquí hay un ejemplo de cómo podrías hacer esto en Node.js:

```javascript
 
let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db'
});

connection.connect();

let post = {id: 1, title: 'Hello MySQL'};
let query = connection.query('INSERT INTO posts SET ?', post, function (error, results, fields) {
    if (error) throw error;
    console.log('Cantidad de registros insertados: ' + results.affectedRows);
});

console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'

connection.end();
```
> La función query toma tres argumentos: la cadena de consulta SQL, los datos que deseas insertar y una función de devolución de llamada que se ejecuta una vez que se ha completado la consulta.
Para obtener la cantidad de registros insertados, puedes usar results.affectedRows. Para recuperar el último id insertado, puedes usar results.insertId.

2. Actualización de datos
La instrucción UPDATE se utiliza para actualizar datos en una base de datos MySQL. Aquí está cómo puedes hacer esto en Node.js:

```javascript
 
let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db'
});

connection.connect();

let newTitle = 'Hello MySQL Updated';
let sql = 'UPDATE posts SET title = ? Where id = ?';
connection.query(sql, [newTitle, 1], function (error, results, fields) {
    if (error) throw error;
    console.log('Cantidad de registros actualizados: ' + results.affectedRows);
});

connection.end();
```
>Para obtener la cantidad de registros actualizados, puedes usar results.affectedRows.

3. Borrado de datos
La instrucción DELETE se utiliza para eliminar datos de una base de datos MySQL. Aquí hay un ejemplo de cómo podrías hacer esto en Node.js:

```javascript
 
let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: 'secret',
    database: 'my_db'
});

connection.connect();

let sql = 'DELETE FROM posts WHERE id = ?';
connection.query(sql, [1], function (error, results, fields) {
    if (error) throw error;
    console.log('Cantidad de registros eliminados: ' + results.affectedRows);
});

connection.end();
```
>Para obtener la cantidad de registros eliminados, puedes usar results.affectedRows.

4. Capturando errores en manipulación de datos
En todos los ejemplos anteriores, los errores se capturan en la función de devolución de llamada de la consulta. Si ocurre un error durante la consulta, la ejecución de la función se detiene y se lanza el error:

```javascript
if (error) throw error;
```

De esta forma puedes asegurarte de que cualquier error que ocurra durante la consulta sea manejado adecuadamente.

Por favor, ten en cuenta que estos son ejemplos básicos. En un entorno de producción, querrías manejar los errores de manera más sofisticada y segura, por ejemplo, cerrar las conexiones a la base de datos correctamente en caso de error. Además, podrías considerar el uso de bibliotecas como knex.js o sequelize que proporcionan un nivel de abstracción más alto para interactuar con las bases de datos.