## Descripción

Se requiere modelar una base de datos para una biblioteca, de acuerdo a las reglas de
negocio que ha definido el cliente. Debes prestar especial atención en la relación entre las
entidades para crear el modelo conceptual, físico y lógico e implementar la base de datos de
acuerdo a dicho modelamiento.
En detalle, se requiere modelar lo siguiente:
En la biblioteca se guardan los siguientes datos para cada préstamo que se realiza: los
datos del libro (ISBN, título, número de páginas, código del autor, nombre y apellido del autor,
fecha de nacimiento y muerte del autor, tipo de autor (principal, coautor)), datos del
préstamo (fecha de inicio, y fecha de devolución) y los datos del socio (rut, nombre, apellido,
dirección y teléfono).

Además, se deben considerar las siguientes restricciones:

- Se registra una única dirección y teléfono para cada socio.
- El ISBN (International Standard Book Number), es un número de 13 cifras que
  identifica de una manera única a cada libro o producto de editorial publicado.
- Para este ejercicio, asumirá que la biblioteca posee un ejemplar de cada libro.
- El número único del autor es un correlativo interno que maneja la biblioteca para
  identificarlos y facilitar la búsqueda.
- Un libro tiene al menos un autor principal, puede tener además registrado un coautor.
- Un socio sólo puede pedir un libro a la vez.

Para realizar la carga de datos al modelo, se deben considerar los siguientes registros:

> SOCIOS

| RUT       | NOMBRE  | APELLIDO | DIRECCIÓN           | TELÉFONO  |
| --------- | ------- | -------- | ------------------- | --------- |
| 1111111-1 | JUAN    | SOTO     | AVENIDA 1, SANTIAGO | 911111111 |
| 2222222-2 | ANA     | PÉREZ    | PASAJE 2, SANTIAGO  | 922222222 |
| 3333333-3 | SANDRA  | AGUILAR  | AVENIDA 2, SANTIAGO | 933333333 |
| 4444444-4 | ESTEBAN | JEREZ    | AVENIDA 3, SANTIAGO | 944444444 |
| 5555555-5 | SILVANA | MUÑOZ    | PASAJE 3, SANTIAGO  | 955555555 |

> LIBROS

| ISBN            | TÍTULO                 | PÁG. | CÓD. AUTOR | NOMBRE AUTOR | APELLIDO AUTOR | NACIMIENTO - MUERTE | TIPO AUTOR |
| --------------- | ---------------------- | ---- | ---------- | ------------ | -------------- | ------------------- | ---------- |
| 111-1111111-111 | CUENTOS DE TERROR      | 344  | 3          | JOSE         | SALGADO        | 1968-2020           | PRINCIPAL  |
| 111-1111111-111 | CUENTOS DE TERROR      | 344  | 4          | ANA          | SALGADO        | 1972-               | COAUTOR    |
| 222-2222222-222 | POESÍAS CONTEMPORANEAS | 167  | 1          | ANDRÉS       | ULLOA          | 1982-               | PRINCIPAL  |
| 333-3333333-333 | HISTORIA DE ASIA       | 511  | 2          | SERGIO       | MARDONES       | 1950-2012           | PRINCIPAL  |
| 444-4444444-444 | MANUAL DE MECÁNICA     | 298  | 5          | MARTIN       | PORTA          | 1976-               | PRINCIPAL  |

> HISTORIAL DE PRÉSTAMOS

| SOCIO          | LIBRO                  | FECHA DEL PRÉSTAMO | FECHA DE LA DEVOLUCIÓN |
| -------------- | ---------------------- | ------------------ | ---------------------- |
| JUAN SOTO      | CUENTOS DE TERROR      | 20-01-2020         | 27-01-2020             |
| SILVANA MUÑOZ  | POESÍAS CONTEMPORANEAS | 20-01-2020         | 30-01-2020             |
| SANDRA AGUILAR | HISTORIA DE ASIA       | 22-01-2020         | 30-01-2020             |
| ESTEBAN JEREZ  | MANUAL DE MECÁNICA     | 23-01-2020         | 30-01-2020             |
| ANA PÉREZ      | CUENTOS DE TERROR      | 27-01-2020         | 04-02-2020             |
| JUAN SOTO      | MANUAL DE MECÁNICA     | 31-01-2020         | 12-02-2020             |
| SANDRA AGUILAR | POESÍAS CONTEMPORANEAS | 31-01-2020         | 12-02-2020             |

