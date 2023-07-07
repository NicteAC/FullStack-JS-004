## Acceso a datos con ORM

Los sistemas de gestión de bases de datos relacionales (RDBMS) son una pieza clave para la mayoría de las aplicaciones web. Sin embargo, interactuar directamente con la base de datos utilizando SQL puede ser complicado y tedioso. Aquí es donde los mapeadores de objeto-relacional (ORM) entran en juego.

Un ORM permite interactuar con la base de datos de una manera orientada a objetos, lo que puede hacer que el código sea más fácil de escribir, leer y mantener. En el contexto de Node.js, hay varios ORM disponibles, pero uno de los más populares es Sequelize.

## Clases en ES6

### Qué es una Clase

En programación orientada a objetos, una clase es una plantilla para la creación de objetos. Define qué propiedades y métodos tendrán los objetos creados a partir de ella.

### Definición de una clase por medio de una declaración

En ES6, una clase se puede definir mediante una declaración de clase. Aquí hay un ejemplo:

```javascript
class MiClase {
  constructor(propiedad) {
    this.propiedad = propiedad;
  }
}
```

### Definición de una clase por medio de una expresión

Las clases también pueden ser definidas mediante expresiones de clase:

```javascript
const MiClase = class {
  constructor(propiedad) {
    this.propiedad = propiedad;
  }
};
```

### El método constructor

El método constructor es un método especial que se utiliza para crear e inicializar un objeto creado a partir de una clase. Se ejecuta automáticamente cuando se crea un nuevo objeto:

```javascript
class MiClase {
  constructor(propiedad) {
    this.propiedad = propiedad;
  }
}
```

### Accesadores y mutadores

Los accesadores y mutadores son métodos que permiten obtener y modificar las propiedades de un objeto, respectivamente. También son conocidos como getters y setters:

```javascript
class MiClase {
  constructor(propiedad) {
    this._propiedad = propiedad;
  }

  // Accesor
  get propiedad() {
    return this._propiedad;
  }

  // Mutador
  set propiedad(value) {
    this._propiedad = value;
  }
}
```

### Métodos personalizados

Las clases pueden tener otros métodos además del constructor, los getters y los setters. Estos métodos pueden hacer cualquier cosa que necesites:

```javascript
class MiClase {
  constructor(propiedad) {
    this.propiedad = propiedad;
  }

  miMetodo() {
    console.log("Este es mi método personalizado!");
  }
}
```

### Instanciación de una clase

Para crear un objeto a partir de una clase, usamos la palabra clave `new`:

```javascript
const miObjeto = new MiClase("propiedad");
```

## Mapeo de Objeto-Relacional (ORM)

### Qué es un ORM

Un mapeador de objeto-relacional (ORM) es una herramienta que permite interactuar con la base de datos en un lenguaje de programación orientado a objetos, en lugar de SQL. Convierte (o "mapea") los datos entre la base de datos y el lenguaje de programación.

### Por qué utilizarlo

El uso de un ORM puede simplificar mucho el código y reducir la cantidad de errores. Permite que el código sea más limpio, fácil de entender y de mantener. Además, proporciona un nivel de abstracción que puede hacer que la aplicación sea más fácil de portar a diferentes sistemas de bases de datos.

### Ventajas y desventajas

Las ventajas de los ORM incluyen:

- Abstracción de la base de datos: No necesitas conocer SQL o detalles sobre cómo se almacenan los datos.
- Menos código: Los ORM suelen proporcionar métodos y funciones de alto nivel que hacen lo mismo que muchas líneas de código SQL.
- Seguridad: Muchos ORM tienen protecciones incorporadas contra ataques de inyección SQL.

Sin embargo, también hay algunas desventajas:

- Rendimiento: Los ORM pueden ser más lentos que el SQL crudo, especialmente para operaciones complejas.
- Complejidad: Aunque los ORM pueden simplificar muchas cosas, también pueden ser bastante complejos para aprender y usar correctamente.
- Flexibilidad: A veces, los ORM pueden ser menos flexibles que el SQL crudo, especialmente para consultas complejas.

### Qué es un modelo

En el contexto de los ORM, un modelo es una representación de una tabla en la base de datos. Define qué campos (o propiedades) tiene la tabla y cómo se relacionan con otros modelos (o tablas).

### Qué son las relaciones

Las relaciones definen cómo los diferentes modelos (o tablas) están conectados entre sí. Las relaciones más comunes son "uno a uno", "uno a muchos" y "muchos a muchos".

## Sequelize ORM

### Qué es Sequelize

Sequelize es un ORM para Node.js que soporta los dialectos PostgreSQL, MySQL, MariaDB, SQLite y MSSQL. Proporciona una forma fácil de usar y promesa para manejar consultas de bases de datos.

### Instalación de Sequelize

Para instalar Sequelize, simplemente ejecuta el siguiente comando en la terminal:

```shell
npm install --save sequelize
```

También necesitarás instalar el paquete correspondiente al dialecto que estás utilizando, por ejemplo, para MySQL:

```shell
npm install --save mysql2
```

### Configuración básica de Sequelize

Aquí tienes un ejemplo de cómo se configura Sequelize para conectarse a una base de datos MySQL:

```javascript
const Sequelize = require("sequelize");

const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mysql",
});
```

### Definición del modelo en Sequelize

Para definir un modelo en Sequelize, puedes usar el método `define` en tu instancia de Sequelize:

```javascript
const User = sequelize.define("User", {
  // Aquí van los atributos
});
```

### Definición de atributos y tipos de datos

Los atributos del modelo se definen en el primer argumento del método `define`:

```javascript
const User = sequelize.define("User", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    // allowNull por defecto es true
  },
});
```

### Realizando operaciones CRUD (creación, lectura, actualización y eliminación)

Aquí tienes ejemplos de cómo realizar operaciones CRUD con Sequelize:

- Crear un nuevo usuario:

```javascript
User.create({ firstName: "John", lastName: "Doe" });
```

- Leer usuarios:

```javascript
User.findAll().then((users) => {
  console.log(users);
});
```

- Actualizar un usuario:

```javascript
User.update(
  { lastName: "Smith" },
  {
    where: {
      firstName: "John",
    },
  }
);
```

- Eliminar un usuario:

```javascript
User.destroy({
  where: {
    firstName: "John",
  },
});
```
