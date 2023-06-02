# Consultando información de una tabla
Para obtener información de una tabla en MySQL, utilizamos el lenguaje estructurado de consultas SQL (Structured Query Language). Algunos conceptos y ejemplos clave son:

- **El Lenguaje Estructurado de Consultas SQL:** SQL es un lenguaje estándar utilizado para interactuar con bases de datos relacionales. Permite realizar consultas y manipular datos de manera eficiente.

- **Recuperando información de una tabla:** Utilizamos la sentencia SELECT para recuperar información de una tabla. Podemos especificar los campos que queremos seleccionar y la tabla de la cual queremos obtener los datos.

Ejemplo:

```sql
SELECT nombre, edad FROM alumnos;
```

- **Consultas utilizando la llave primaria:** Podemos utilizar la llave primaria de una tabla para realizar consultas específicas. Esto nos permite obtener registros individuales de manera precisa.

Ejemplo:


```sql
SELECT * FROM alumnos WHERE id = 1;
```

- **Consultas utilizando condiciones de selección:** Podemos agregar condiciones a nuestras consultas utilizando cláusulas como WHERE, LIKE, BETWEEN, etc. Esto nos permite filtrar los resultados y obtener solo los registros que cumplan ciertas condiciones.

Ejemplo:

```sql
SELECT * FROM alumnos WHERE carrera = 'Informática';
```

- **Utilización de funciones en las consultas:** MySQL ofrece una amplia gama de funciones incorporadas que se pueden utilizar en consultas para realizar operaciones matemáticas, manipulación de texto, fechas, etc.

Ejemplo:

```sql
SELECT AVG(edad) FROM alumnos;
```

- **Consultas de selección con funciones de agrupación:** Podemos utilizar funciones de agrupación como COUNT, SUM, AVG, etc., en combinación con la cláusula GROUP BY para obtener resúmenes y estadísticas de grupos de registros.
Ejemplo:

```sql
SELECT carrera, COUNT(*) FROM alumnos GROUP BY carrera;
```

## Consultando información relacionada en varias tablas
- **Qué es un modelo de datos y cómo leerlo:** Un modelo de datos es una representación de la estructura de una base de datos, que incluye tablas, relaciones y restricciones. Podemos leer un modelo de datos para comprender cómo se relacionan las tablas entre sí.

- **Consultas de selección con tablas relacionadas:** Cuando tenemos tablas relacionadas en una base de datos, podemos utilizar cláusulas JOIN para combinar la información de varias tablas en una sola consulta.

Ejemplo:

```sql
SELECT alumnos.nombre, carreras.nombre FROM alumnos
JOIN carreras ON alumnos.carrera_id = carreras.id;
```

- **Integridad referencial:** La integridad referencial es una propiedad de las bases de datos relacionales que garantiza que las relaciones entre las tablas sean coherentes y se mantengan los vínculos entre los datos.

- **Querys anidadas:** Las consultas anidadas permiten utilizar el resultado de una consulta como entrada para otra consulta. Esto nos permite realizar consultas más complejas y obtener información detallada.

Ejemplo:

```sql
SELECT nombre FROM alumnos WHERE carrera_id IN (SELECT id FROM carreras WHERE tipo = 'Ingeniería');
```

- **Querys con distintos tipos de JOIN (INNER, LEFT, OUTER):** Los JOINs nos permiten combinar registros de diferentes tablas en base a una condición de relación. Algunos tipos comunes de JOIN son INNER JOIN, LEFT JOIN y OUTER JOIN.

Ejemplo:

```sql
SELECT alumnos.nombre, carreras.nombre FROM alumnos
INNER JOIN carreras ON alumnos.carrera_id = carreras.id;
```
