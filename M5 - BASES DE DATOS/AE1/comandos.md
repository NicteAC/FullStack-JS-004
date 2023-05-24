## Creación y gestión de bases de datos.
**CREAR BASE DE DATOS**
*Crea una nueva base de datos.*

```sql
CREATE DATABASE bank;
```
**ELIMINAR BASE DE DATOS**
*Eliminar una base de datos y todo su contenido.*

```sql
DROP DATABASE bank;
```
**MOSTRAR BASES DE DATOS**
*Muestre todas las bases de datos en su clúster.*
```sql
SHOW DATABASES;
```
**IF EXISTS** se puede usar para evitar errores si (por ejemplo) intentamos eliminar una base de datos que no existe. **IF EXISTS** también puede usarse con muchas otras sentencias SQL y combinarse con otros operadores.

**Ejemplos:**

|DROP DATABASE IF EXISTS BANK;|	CREATE DATABASE IF NOT EXISTS BANK;|
| ----------- | ----------- |

<span style="font-weight:bold">DROP DATABASE … CASCADE</span> se puede utilizar para eliminar todos los objetos que dependen de la base de datos que se descarta. <span style="font-weight:bold">DROP DATABASE … RESTRICT</span> se puede usar para evitar que el <span style="font-weight:bold">DROP DATABASE</span> comando se ejecute a menos que la base de datos esté vacía.

**Ejemplos:**

|DROP DATABASE BANK CASCADE;|	DROP DATABASE BANK RESTRICT;|
| ----------- | ----------- |
---
## Creación de tablas y esquemas.
**CREAR TABLAS**
*Crear una nueva tabla en la base de datos.*

```sql
CREATE TABLE users (
    id UUID PRIMARY KEY,
    city STRING,
    name STRING,
    address STRING,
    credit_card STRING,
    dl STRING
);
```
Para cada fila de la tabla, debe especificar al menos un nombre de fila (es decir, <span style="color:blue">city</span>) y un tipo de datos (es decir, STRING). Pero también puede hacer mucho más con CREATE TABLE, como:

**Defina una columna de clave principal:**
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY,
    city STRING,
    name STRING
);
```
**Defina una clave principal de varias columnas:**
```sql
CREATE TABLE users (
    id UUID,
    city STRING,
    name STRING,
    PRIMARY KEY (city, id)
);
```
**Defina una clave externa que haga referencia a otra tabla en la base de datos:**
*(En este caso, haciendo referencia a una columna llamada cityen la tabla llamada locations).*
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY,
    city STRING REFERENCES locations(city),
    name STRING
);
```
**Cree un índice basado en una columna:**
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY,
    city STRING,
    name STRING,
    INDEX (name)
);
```
**Defina un valor predeterminado para una columna:**
*(En este caso, usando la función de CockroachDB gen_random_uuid()para generar un UUID aleatorio como valor predeterminado).*
```sql
CREATE TABLE users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        city STRING,
        name STRING
);
```
*No permitir VALORES NULL de una columna:*
```sql
CREATE TABLE users (
    id UUID NOT NULL,
    city STRING,
    name STRING
);
```
**Cree una tabla con una columna calculada:**
```sql
CREATE TABLE users (
    id UUID NOT NULL,
    city STRING,
    name STRING,
    name_and_city STRING AS (CONCAT(name, ' ', city)) STORED
);
```
**Especifique qué sucede cuando se actualiza un objeto al que se hace referencia:**
```sql
CREATE TABLE users (
        id UUID PRIMARY KEY,
        city STRING REFERENCES locations(city) ON DELETE CASCADE,
        name STRING
);
```
**Cree una nueva tabla usando los resultados de una consulta:**
```sql
CREATE TABLE users_ny(user_id, name, city) 
AS SELECT * FROM users 
WHERE city = 'new york';
```
---

## Administrar tablas SQL
**MODIFICAR TABLA**
*Aplicar un cambio de esquema a una tabla.*
```sql
ALTER TABLE bank ADD COLUMN active BOOL;
```
**ALTER TABLE** se utiliza con subcomandos como:

- **AÑADIR COLUMNA**
    *Agrega una columna.*

    ```sql
    ALTER TABLE bank ADD COLUMN active BOOL;
    ```
- **ELIMINAR COLUMNA**
    *Eliminar una columna.*

    ```sql
    ALTER TABLE bank DROP COLUMN active;
    ```
- **MODIFICAR COLUMNA**
    *Cambiar restricciones de columna, tipos de datos, etc.*

    ```sql
    ALTER TABLE bank ALTER account_balance TYPE FLOAT;
    ```
- **RENOMBRAR COLUMNA**
    *Cambiar el nombre de una columna.*

    ```sql
    ALTER TABLE bank RENAME COLUMN account_balance TO balance;
    ```
- **RENOMBRAR A**
    *Cambiar el nombre de una tabla.*

    ```sql
    ALTER TABLE bank RENAME TO users;
    ```
- **ELIMINAR TABLA**
*Quitar una TABLA.*

    ```sql
    DROP TABLE bank;
    ```
>DROP TABLE … CASCADE se puede usar para eliminar todos los objetos (restricciones, vistas, etc.) que dependen de la eliminación de la tabla.

>DROP TABLE … RESTRICT se puede usar para evitar que se ejecute el comando DROP TABLE a menos que la tabla esté vacía.

## ¡ Use las declaraciones con precaución!

---
## Gestión de restricciones de SQL
**AGREGAR RESTRICCIÓN**
*Agregue una clave, control o restricción única a una columna.*

```sql
ALTER TABLE users ADD CONSTRAINT id_name_unique UNIQUE (id, name);
```
**RESTRICCIÓN DE ELIMINACION**
*Eliminar una restricción de una columna.*

```sql
ALTER TABLE users DROP CONSTRAINT id_name_unique;
```
**MODIFICAR COLUMNA**
*Agregue o elimine restricciones, cambie los tipos de datos.*

```sql 
ALTER TABLE subscriptions ALTER COLUMN newsletter SET NOT NULL;
```
---
## Insertar datos
**INSERTAR VALORES**
*Inserta filas con valores especificados en una tabla.*
```sql
INSERT INTO users (name, city) VALUES('Alice', 'New York');
```
**INSERTAR EN SELECCION**
*Inserta filas en una tabla a partir de los resultados de una consulta.*
```sql
INSERT INTO drivers (id, city, name, address)
SELECT id, city, name, address FROM users
WHERE name IN ('Anita Atkinson', 'Devin Jordan');
```
---
## Trabajando con tus datos
### Modificación de datos
**ACTUALIZAR**
*Actualizar fila(s) en una tabla.*
```sql
UPDATE users SET address = '201 E Randolph St' WHERE id = '851eb851-eb85-4000-8000-00000000001a';
```
>Nota: sin una declaración **WHERE**, <span style="color:blue">UPDATE</span> actualizará el valor de la columna o columnas especificadas para todas las filas .

**INSERTAR EN CONFLICTO**
*Inserte una nueva fila o realice una acción diferente si se detecta un conflicto con una fila existente (es decir, una “inserción superior”).*
```sql
INSERT INTO employees (id, name, email) 
VALUES (2, ‘Dennis’, ‘dennisp@weyland.corp’)
ON CONFLICT (id) DO UPDATE;
```
**UPSERT** 
*Upsert una fila en la base de datos.*
```sql
UPSERT INTO employees (id, name, email) VALUES (6, ‘Lambert’, ‘lambert@weyland.corp`);
```
**ELIMINAR FILAS**
*Eliminar una fila o filas específicas.*
```sql
DELETE FROM promo_codes WHERE code = 'HAPPY50';
```
---
## consulta de datos
**SELECCIONAR DE …**
*Devuelve los valores de columnas específicas en una tabla.*
```sql
SELECT id, city, name FROM users;
```
**SELECCIONAR DE …**
*Devuelve los valores de todas las columnas de una tabla.*
```sql
SELECT * FROM users;
```
**LÍMITE**
*Limite el número de filas devueltas por una consulta.*
```sql
SELECT * FROM users LIMIT 5;
```
**OFFSET**
*Omita las primeras n filas antes de devolver un resultado de consulta.*
```sql
SELECT * FROM users LIMIT 5 OFFSET 5;
```
**WHERE**
*Filtre los resultados de una consulta en función de una condición o condiciones.*
```sql
SELECT * FROM vehicles WHERE city = 'seattle' AND status = 'available';
```
**AGRUPAR POR**
*Agrupe los resultados de una consulta en función de una columna.*
```sql
SELECT city FROM rides
WHERE city IN ('new york', 'chicago', 'seattle') GROUP BY city;
```
**FILTRAR**
*Filtre una consulta según los resultados de ejecutar una función agregada.*
```sql
SELECT city, AVG(revenue) as avg FROM rides GROUP BY city
HAVING AVG(revenue) BETWEEN 50 AND 60;
```
**Uniendo TABLAS**
*Una declaración de unión en SQL se ve así:*
```sql
SELECT table1.column1, table2.column1, table2.column2
FROM table1
LEFT JOIN table2
ON table1.column1 = table2.column1;
```
>Tenga en cuenta que “LEFT” se refiere a la tabla que aparece primero en su instrucción SQL, por lo que en el ejemplo anterior, table1es la tabla de la izquierda. El resultado de esa consulta es una tabla que contiene column1y column2para todas las filas en table1y table2que coinciden con column1.