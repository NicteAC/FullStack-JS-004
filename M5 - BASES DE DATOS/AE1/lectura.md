# Introducción a MySQL y Bases de Datos Relacionales

## El rol de las bases de datos relacionales en la organización:

Las bases de datos relacionales desempeñan un papel fundamental en la organización, ya que permiten el almacenamiento, gestión y manipulación eficiente de grandes volúmenes de datos estructurados. Algunos roles importantes de las bases de datos relacionales incluyen:

- Almacenamiento de datos: Las bases de datos relacionales proporcionan un mecanismo para almacenar datos de manera estructurada, organizada y persistente.

- Integridad de datos: Las bases de datos relacionales ofrecen mecanismos para garantizar la integridad de los datos, evitando la inserción de información duplicada o inconsistente.

- Acceso eficiente a los datos: Las bases de datos relacionales utilizan índices y estructuras optimizadas para permitir un acceso rápido y eficiente a los datos.

- Consultas y análisis de datos: Las bases de datos relacionales proporcionan un lenguaje de consulta (como SQL) que permite realizar consultas complejas y realizar análisis de datos.

## Características de un RDBMS:

Un RDBMS (Sistema de Gestión de Bases de Datos Relacionales) es un software que administra una base de datos relacional. Algunas características comunes de los RDBMS son:

- Estructura tabular: Los datos se almacenan en tablas compuestas por filas y columnas, lo que facilita la organización y consulta de los datos.

- Relaciones: Las tablas pueden establecer relaciones entre sí utilizando claves primarias y foráneas, lo que permite representar las relaciones entre los datos.

- Integridad referencial: Los RDBMS garantizan la integridad referencial, lo que implica que las relaciones entre las tablas se mantienen consistentes y no se producen referencias a datos inexistentes.

- Transacciones: Los RDBMS admiten el concepto de transacciones, que permiten realizar operaciones de manera atómica, consistente, aislada y duradera (propiedades ACID).

## Alternativas de bases de datos más utilizadas en la industria:

Existen varias alternativas de bases de datos que se utilizan ampliamente en la industria. Algunas de las más populares son:

- MySQL: Un RDBMS de código abierto ampliamente utilizado, conocido por su rendimiento, escalabilidad y facilidad de uso.

- Oracle Database: Un RDBMS comercial muy potente y escalable, utilizado en grandes empresas para aplicaciones críticas.

- Microsoft SQL Server: Un RDBMS desarrollado por Microsoft, que ofrece una amplia gama de características y una integración estrecha con el ecosistema de Microsoft.

- PostgreSQL: Un RDBMS de código abierto con una gran comunidad de usuarios y una sólida reputación en términos de estabilidad y soporte de características avanzadas.

- MongoDB: Una base de datos NoSQL orientada a documentos, que proporciona flexibilidad y escalabilidad para aplicaciones que manejan grandes volúmenes de datos no estructurados.

## Conociendo las herramientas para consultar una base de datos:

Para consultar una base de datos, se utilizan herramientas como:

- MySQL Command Line Client: Es una herramienta de línea de comandos que permite ejecutar comandos SQL directamente en el servidor MySQL.
Ejemplo de uso:

```sh
mysql -u usuario -p
```
- MySQL Workbench: Es una herramienta gráfica que proporciona una interfaz visual para administrar bases de datos MySQL y ejecutar consultas SQL.

- phpMyAdmin: Es una aplicación web que ofrece una interfaz gráfica para administrar bases de datos MySQL.

## Instalando la base de datos y sus herramientas utilitarias:

Para instalar MySQL y sus herramientas utilitarias, se pueden seguir los siguientes pasos:

- Descargar MySQL: Visitar el sitio web oficial de MySQL (https://www.mysql.com/) y descargar la versión adecuada para el sistema operativo utilizado.

- Instalar MySQL: Ejecutar el archivo de instalación descargado y seguir las instrucciones del instalador para completar la instalación.

- Configurar MySQL: Durante el proceso de instalación, se puede configurar una contraseña para el usuario "root" y otros parámetros de configuración.

- Instalar herramientas utilitarias: Descargar e instalar herramientas como MySQL Workbench y phpMyAdmin, si se desean utilizar.

## Creando una conexión a la base de datos desde MySQL Shell:

MySQL Shell es una interfaz de línea de comandos interactiva que permite interactuar con una base de datos MySQL directamente desde la terminal. A continuación, se muestra cómo establecer una conexión utilizando MySQL Shell:

- Abre la terminal y ejecuta el comando mysqlsh para iniciar MySQL Shell.

- Selecciona el modo SQL ejecutando el comando \sql.

- Crea una conexión estableciendo los parámetros necesarios, como el nombre de usuario, la contraseña, el host y el puerto. Por ejemplo:


```sh
\connect usuario@localhost:3306
```
- Asegúrate de reemplazar usuario con tu nombre de usuario de MySQL y localhost:3306 con la ubicación y el puerto correctos de tu servidor MySQL.

- Ingresa la contraseña cuando se te solicite.

- Una vez establecida la conexión, puedes ejecutar consultas y comandos SQL directamente en la terminal de MySQL Shell.

**Ejemplo de ejecución de una consulta:**

```sh
SELECT * FROM tabla;
```
**Ejemplo de inserción de datos:**

```sh
INSERT INTO tabla (columna1, columna2) VALUES (valor1, valor2);
```
**Ejemplo de actualización de datos:**

```sh
UPDATE tabla SET columna1 = nuevo_valor WHERE condicion;
```
**Ejemplo de eliminación de datos:**
```sh
DELETE FROM tabla WHERE condicion;
```

> MySQL Shell ofrece muchas más funcionalidades y opciones avanzadas para interactuar con la base de datos. Puedes explorar la documentación oficial de MySQL Shell para obtener más información y aprovechar al máximo esta herramienta.


## Los principales objetos de una base de datos:

Una base de datos relacional está compuesta por varios objetos, entre los cuales se destacan:

- Tablas: Son estructuras que almacenan datos en filas y columnas. Cada tabla tiene un nombre único y una estructura definida por columnas con sus respectivos tipos de datos.

- Claves primarias: Son columnas o combinaciones de columnas que identifican de manera única cada fila en una tabla. Garantizan la unicidad y la integridad referencial.

- Claves foráneas: Son columnas que establecen relaciones entre tablas. Las claves foráneas hacen referencia a las claves primarias de otras tablas, permitiendo establecer relaciones entre los datos.

- Índices: Son estructuras auxiliares utilizadas para mejorar la velocidad de las consultas al proporcionar un acceso rápido a los datos.

- Vistas: Son consultas almacenadas que se comportan como tablas virtuales. Las vistas permiten simplificar y reutilizar consultas complejas.

- Procedimientos almacenados: Son bloques de código SQL que se almacenan en la base de datos y se pueden invocar para realizar operaciones complejas o recurrentes.

Estos son solo algunos de los objetos principales en una base de datos relacional, y cada RDBMS puede ofrecer otros objetos adicionales según sus características específicas.

---

## Aquí hay algunos ejemplos de cómo administrar usuarios en MySQL:

**Crear un nuevo usuario:**
```sh
CREATE USER 'nuevo_usuario'@'localhost' IDENTIFIED BY 'contraseña';
```
*Este ejemplo crea un nuevo usuario llamado 'nuevo_usuario' con contraseña 'contraseña'. El usuario solo puede iniciar sesión desde el host local ('localhost').*

**Otorgar privilegios a un usuario:**

```sh
GRANT privilegio1, privilegio2 ON basedatos.tabla TO 'usuario'@'localhost';
```
*Este ejemplo otorga los privilegios especificados (por ejemplo, SELECT, INSERT, UPDATE) en una tabla específica de una base de datos a un usuario en particular.*

**Revocar privilegios de un usuario:**
```sh
REVOKE privilegio1, privilegio2 ON basedatos.tabla FROM 'usuario'@'localhost';
```
*Este ejemplo revoca los privilegios especificados previamente otorgados a un usuario en una tabla específica de una base de datos.*

**Eliminar un usuario:**
```sh
DROP USER 'usuario'@'localhost';
```
*Este ejemplo elimina completamente un usuario especificado.*

**Cambiar la contraseña de un usuario:**
```sh
ALTER USER 'usuario'@'localhost' IDENTIFIED BY 'nueva_contraseña';
```
*Este ejemplo cambia la contraseña de un usuario existente a una nueva contraseña especificada.*

Recuerda reemplazar **'nuevo_usuario'**, **'usuario'**, **'contraseña'**, **'basedatos'** y **'tabla'** con los nombres y valores reales correspondientes en tus casos de uso. Además, ten en cuenta que para ejecutar estas consultas necesitarás tener los privilegios adecuados, como SUPER o GRANT OPTION.

---

## Aquí tienes algunos ejemplos de cómo crear bases de datos y tablas en MySQL

**Crear una nueva base de datos:**
```sh
CREATE DATABASE nombre_basedatos;
```
*Este ejemplo crea una nueva base de datos con el nombre especificado.*

**Seleccionar una base de datos:**
```sh
USE nombre_basedatos;
```
*Este ejemplo selecciona la base de datos especificada para que todas las consultas posteriores se realicen en esa base de datos.*

**Crear una tabla:**
```sh
CREATE TABLE nombre_tabla (
  columna1 tipo_dato1,
  columna2 tipo_dato2,
  ...
);
```
*Este ejemplo crea una nueva tabla con los nombres y tipos de datos de columna especificados.*

**Agregar una clave primaria a una tabla:**
```sh
ALTER TABLE nombre_tabla
ADD PRIMARY KEY (columna_primaria);
```
*Este ejemplo agrega una clave primaria a la tabla especificada utilizando la columna especificada como clave primaria.*

**Agregar una clave foránea a una tabla:**
```sh
ALTER TABLE nombre_tabla
ADD CONSTRAINT nombre_fk FOREIGN KEY (columna_fk)
REFERENCES otra_tabla (columna_referencia);
```
*Este ejemplo agrega una clave foránea a la tabla especificada utilizando la columna especificada como clave foránea y haciendo referencia a la columna en otra tabla.*

**Agregar una restricción a una columna:**
```sh
ALTER TABLE nombre_tabla
MODIFY columna tipo_dato CONSTRAINT nombre_restriccion restriccion;
```
*Este ejemplo agrega una restricción a la columna especificada en la tabla.*

**Eliminar una tabla:**
```sh
DROP TABLE nombre_tabla;
```
*Este ejemplo elimina completamente la tabla especificada.*

Recuerda reemplazar **'nombre_basedatos'**, **'nombre_tabla'**, **'columna1'**, **'tipo_dato1'**, etc., con los nombres y valores reales correspondientes en tus casos de uso. Además, asegúrate de tener los privilegios adecuados para ejecutar estas consultas, como CREATE TABLE o ALTER TABLE según sea necesario.

>Esto es solo una introducción a los conceptos básicos de MySQL y las bases de datos relacionales. Hay muchos aspectos más avanzados y detallados que se pueden explorar en el estudio y práctica continuos de la materia.