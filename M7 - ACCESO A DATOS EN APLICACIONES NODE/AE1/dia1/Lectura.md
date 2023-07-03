# Conexión a una base de datos:

La conexión a una base de datos es un proceso que permite establecer una comunicación entre una aplicación y un sistema de gestión de base de datos (SGBD). Esto permite a la aplicación interactuar con la base de datos para almacenar, recuperar, modificar y eliminar datos de manera eficiente. A continuación, se proporciona una guía detallada sobre cómo conectar a una base de datos utilizando Node.js y MySQL, incluyendo la instalación de paquetes necesarios, configuración, credenciales de acceso, pooling de conexiones y manejo de errores.

### Instalación de paquetes necesarios:

Para conectar a una base de datos MySQL utilizando Node.js, necesitaremos instalar el paquete mysql. Esto se puede hacer utilizando el administrador de paquetes de Node.js, npm, ejecutando el siguiente comando en la terminal:

```bash
npm install mysql
```
Esto descargará e instalará el paquete **mysql** y sus dependencias en tu proyecto.

### Configurando el paquete:

Una vez que el paquete mysql está instalado, necesitamos configurarlo para establecer la conexión con la base de datos. Esto implica proporcionar la información necesaria, como el nombre de host, el puerto, el nombre de usuario y la contraseña para acceder a la base de datos.

### Incluyendo el paquete en un programa Node:

Después de la instalación y configuración del paquete mysql, podemos incluirlo en nuestro programa Node.js utilizando la siguiente línea de código:

```javascript
const mysql = require('mysql');
```

### Conectando a la base de datos:

Una vez que el paquete **mysql** está incluido en nuestro programa Node.js, podemos establecer la conexión con la base de datos.

### Definiendo credenciales de acceso:

Primero, necesitamos definir las credenciales de acceso, que incluyen el nombre de host, el puerto, el nombre de usuario y la contraseña. Por ejemplo:

```javascript
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'usuario',
  password: 'contraseña',
  database: 'nombre_base_de_datos'
});
```
> **Como recomendacion se debe crear un nuevo usuario otorgando los permisos de administrador**
CREATE USER 'nuevo_usuario'@'localhost' IDENTIFIED BY 'contraseña';
GRANT ALL PRIVILEGES ON *.* TO 'nuevo_usuario'@'localhost';
ALTER USER 'nuevo_usuario'@'localhost' IDENTIFIED WITH mysql_native_password BY 'contraseña';
FLUSH PRIVILEGES;
### El cliente de conexión:

Después de definir las credenciales de acceso, creamos una instancia del cliente de conexión utilizando el método **createConnection()** del paquete **mysql**.

### Conectando a la base de datos:

Para establecer la conexión con la base de datos, utilizamos el método connect() del cliente de conexión. Por ejemplo:

```javascript
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});
```

## Pooling de conexiones:

Cuando se trabaja con aplicaciones de Node.js y bases de datos, es común utilizar el concepto de pooling de conexiones. El pooling de conexiones es un mecanismo que mantiene un conjunto de conexiones de base de datos disponibles para su reutilización, en lugar de establecer y cerrar una conexión cada vez que se necesita interactuar con la base de datos.

### Qué es pooling:

El pooling de conexiones es un patrón que permite gestionar un conjunto de conexiones de base de datos reutilizables en lugar de crear y cerrar conexiones individuales en cada interacción con la base de datos. Esto mejora el rendimiento y la eficiencia de las aplicaciones, ya que evita el costo de establecer y cerrar conexiones repetidamente.

### Cuándo usar pooling:

El pooling de conexiones es especialmente útil en entornos donde hay múltiples solicitudes concurrentes a la base de datos, como aplicaciones web. Permite gestionar eficientemente el flujo de conexiones y mejorar el rendimiento general del sistema.

### Ventajas y desventajas de usar pooling:

#### Las ventajas del pooling de conexiones incluyen:

- Mejora del rendimiento al reutilizar conexiones en lugar de establecer y cerrar conexiones individuales repetidamente.
- Manejo eficiente de múltiples solicitudes concurrentes.
- Reducción del tiempo de latencia al tener conexiones disponibles de manera inmediata.

#### Las posibles desventajas del pooling de conexiones son:

- Mayor consumo de recursos, ya que se mantienen conexiones abiertas incluso cuando no se utilizan.
- Mayor complejidad en la gestión del pool de conexiones.

### El string de conexión URI:

Además de utilizar la configuración individual de host, puerto, usuario y contraseña, también es posible utilizar una cadena de conexión URI (Uniform Resource Identifier) para conectar a la base de datos. Un ejemplo de cadena de conexión URI para MySQL es:

```javascript
const connection = mysql.createConnection('mysql://usuario:contraseña@localhost:3306/nombre_base_de_datos');
```

###Desconectar de la base de datos:

Cuando ya no necesitamos utilizar la conexión a la base de datos, es importante cerrarla para liberar recursos. Para cerrar la conexión, utilizamos el método **end()** del cliente de conexión. Por ejemplo:

```javascript
connection.end((error) => {
  if (error) {
    console.error('Error al cerrar la conexión:', error);
  } else {
    console.log('Conexión cerrada correctamente');
  }
});
```

## Capturando errores y mensajes:

Durante la conexión a una base de datos, pueden ocurrir errores y es importante capturarlos para manejarlos adecuadamente.

### Errores comunes de conexión:

Algunos errores comunes al conectar a una base de datos incluyen:

- Credenciales incorrectas.
- Nombre de host o puerto incorrectos.
- Falta de permisos para acceder a la base de datos.
- Atrapando errores al conectar:

Para capturar errores al conectar, podemos utilizar el parámetro de error en el callback del método **connect()**. Por ejemplo:

```javascript
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});
```

### Resolviendo errores de conexión:

La resolución de errores de conexión puede implicar verificar y corregir las credenciales de acceso, el nombre de host, el puerto, los permisos de la base de datos, entre otros.

### Formas correctas de conectar a una base de datos:

Al conectar a una base de datos, es importante seguir las mejores prácticas y asegurarse de utilizar credenciales seguras, validar y sanear los datos de entrada, evitar la concatenación directa de consultas SQL (utilizando consultas parametrizadas o consultas ORM), y manejar adecuadamente los errores y excepciones.

Estas son algunas de las consideraciones y pasos clave para establecer una conexión exitosa con una base de datos utilizando Node.js y el paquete de Node para MySQL. Recuerda que los ejemplos proporcionados son solo una guía y pueden requerir ajustes según tus necesidades específicas y la estructura de tu proyecto.