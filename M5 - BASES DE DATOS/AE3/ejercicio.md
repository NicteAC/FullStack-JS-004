Supongamos que tenemos dos tablas relacionadas en nuestra base de datos: "Clientes" y "Pedidos". La tabla "Clientes" contiene información sobre los clientes y la tabla "Pedidos" almacena información sobre los pedidos realizados por esos clientes. Ambas tablas tienen una relación de integridad referencial, donde el campo "cliente_id" de la tabla "Pedidos" está vinculado al campo "id" de la tabla "Clientes".

1. Utilizando la sintaxis básica de DML, crea la sentencia para ingresar un nuevo cliente a la tabla "Clientes" con la siguiente información:

- Nombre: Juan Pérez
- Email: juan@example.com
- Teléfono: 1234567890

2. Utilizando la sintaxis básica de DML, crea la sentencia para actualizar el email del cliente con nombre "Juan Pérez" en la tabla "Clientes". Actualiza su email a "juanperez@example.com".

3. Utilizando la sintaxis básica de DML, crea la sentencia para borrar todos los registros de la tabla "Pedidos" asociados al cliente con nombre "Juan Pérez".

4. tilizando la sintaxis básica de DML, crea la sentencia para ingresar un nuevo pedido a la tabla "Pedidos" con la siguiente información:
- Descripción: Orden 001
- Monto: 100.00
- Fecha: 2023-05-30
- Cliente: Juan Pérez
Recuerda aplicar la integridad referencial para asegurar que los datos insertados, actualizados y borrados cumplan con las restricciones de la relación entre las tablas.

5. Explica en una breve respuesta qué es la transaccionalidad y por qué es importante para mantener la consistencia de la información en una base de datos.