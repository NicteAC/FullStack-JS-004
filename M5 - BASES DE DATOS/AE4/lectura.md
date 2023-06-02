# Definición de Tablas y Manipulación de Datos

## Introducción:
MySQL es un sistema de gestión de bases de datos relacional ampliamente utilizado en aplicaciones web y otros entornos. En esta clase, exploraremos las sentencias y conceptos clave relacionados con la definición de tablas en MySQL, así como la manipulación de datos mediante el lenguaje de definición de datos (DDL) y otras operaciones.

## 1. Sentencias para la definición de tablas:
Las sentencias DDL se utilizan para definir la estructura de una tabla en MySQL. Algunas de las sentencias más comunes son:
- **CREATE TABLE:** Esta sentencia se utiliza para crear una nueva tabla en la base de datos.

Ejemplo:

```sql
CREATE TABLE alumnos (
  id INT PRIMARY KEY,
  nombre VARCHAR(50),
  edad INT,
  carrera VARCHAR(50)
);
```

## 2. El lenguaje de definición de datos DDL:
El lenguaje de definición de datos (DDL) en MySQL se utiliza para crear y modificar la estructura de la base de datos. Las sentencias DDL más comunes son CREATE, ALTER y DROP.

## 3. Creación de una tabla:
Al crear una tabla, debemos definir los campos que contendrá, los tipos de datos de cada campo y cualquier restricción adicional que deseemos aplicar. Algunos elementos importantes a considerar son:

- **Definición de campos:** Especificamos los campos que contendrá la tabla, junto con sus nombres y tipos de datos correspondientes.

- **Tipos de dato:** MySQL proporciona una amplia gama de tipos de datos, como INT, VARCHAR, DATE, etc., para adaptarse a diferentes necesidades de almacenamiento de datos.

- **La restricción de nulidad:** Podemos especificar si un campo permite valores nulos o si debe contener siempre un valor no nulo.

- **Definición de la llave primaria:** La llave primaria es un campo o una combinación de campos que identifican de manera única cada registro en la tabla. Se utiliza para garantizar la integridad de los datos y facilitar las operaciones de búsqueda y actualización.

- **Definición de llaves foráneas:** Las llaves foráneas establecen relaciones entre diferentes tablas en la base de datos. Se utilizan para garantizar la integridad referencial y mantener la coherencia de los datos.

## 4. Creando un modelo de datos con integridad referencial:
La integridad referencial es un concepto clave en la gestión de bases de datos que garantiza que las relaciones entre las tablas sean coherentes y que no se produzcan datos huérfanos. Para crear un modelo de datos con integridad referencial, debemos definir las llaves foráneas y las restricciones de integridad adecuadas.

Ejemplo:

```sql
CREATE TABLE alumnos (
  id INT PRIMARY KEY,
  nombre VARCHAR(50),
  carrera_id INT,
  FOREIGN KEY (carrera_id) REFERENCES carreras(id)
);
```

## 5. Modificación de una tabla:
En ocasiones, es posible que necesitemos realizar modificaciones en la estructura de una tabla existente. Algunas operaciones comunes son:
- Modificar un campo en una tabla: Podemos cambiar el nombre de un campo, el tipo de datos o cualquier otra propiedad asociada a él.

- Modificar una condición de nulidad: Podemos especificar si un campo debe permitir valores nulos o si se debe requerir un valor no nulo.

## 6. Eliminación de una tabla:
La sentencia DROP TABLE se utiliza para eliminar una tabla existente de la base de datos. Ten en cuenta que esta operación es irreversible y eliminará todos los datos asociados con la tabla.
Ejemplo:

```sql
DROP TABLE alumnos;
```

## 7. Truncado de una tabla:
La sentencia TRUNCATE TABLE se utiliza para eliminar todos los registros de una tabla, pero mantiene la estructura de la tabla intacta.

Ejemplo:

```sql
TRUNCATE TABLE alumnos;
```

¡Esto concluye la introduccion a la definición de tablas y manipulación de datos en MySQL! Espero que esta información les sea muy útil para comprender los conceptos básicos y las sentencias relacionadas con la creación y modificación de tablas en MySQL.


