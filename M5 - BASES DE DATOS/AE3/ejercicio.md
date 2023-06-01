Supongamos que tenemos dos tablas relacionadas en nuestra base de datos: "Clientes" y "Pedidos". La tabla "Clientes" contiene información sobre los clientes y la tabla "Pedidos" almacena información sobre los pedidos realizados por esos clientes. Ambas tablas tienen una relación de integridad referencial, donde el campo "cliente_id" de la tabla "Pedidos" está vinculado al campo "id" de la tabla "Clientes".

1. Utilizando la sintaxis básica de DML, crea la sentencia para ingresar un nuevo cliente a la tabla "Clientes" con la siguiente información:

- Nombre: Juan Pérez
- Email: juan@example.com
- Teléfono: 1234567890

2. Utilizando la sintaxis básica de DML, crea la sentencia para actualizar el email del cliente con nombre "Juan Pérez" en la tabla "Clientes". Actualiza su email a "juanperez@example.com".

3. Utilizando la sintaxis básica de DML, crea la sentencia para borrar todos los registros de la tabla "Pedidos" asociados al cliente con nombre "Juan Pérez".

4. Utilizando la sintaxis básica de DML, crea la sentencia para ingresar un nuevo pedido a la tabla "Pedidos" con la siguiente información:

- Descripción: Orden 001
- Monto: 100.000
- Fecha: 2023-05-30
- Cliente: Juan Pérez

Recuerda aplicar la integridad referencial para asegurar que los datos insertados, actualizados y borrados cumplan con las restricciones de la relación entre las tablas.

5. Explica en una breve respuesta qué es la transaccionalidad y por qué es importante para mantener la consistencia de la información en una base de datos.

La transaccionalidad es un concepto fundamental en las bases de datos. Se refiere a la capacidad de agrupar una serie de operaciones en una unidad lógica indivisible. Una transacción garantiza que todas las operaciones se realicen de manera exitosa o que ninguna de ellas tenga efecto en la base de datos.

La importancia de la transaccionalidad radica en mantener la consistencia de la información. Imagina que estás realizando una transferencia de fondos entre dos cuentas bancarias. En este caso, es crucial que la operación sea atómica, es decir, que se realice en su totalidad o no se realice en absoluto. Si por alguna razón ocurre un error en medio de la transferencia y solo se ejecuta una parte de la operación, la consistencia de los datos se verá comprometida.

La transaccionalidad también asegura la consistencia en situaciones de concurrencia, donde varias transacciones pueden estar accediendo y modificando los mismos datos simultáneamente. Al utilizar transacciones, se evitan problemas como las lecturas sucias, las escrituras perdidas o las lecturas no repetibles, ya que se establece un aislamiento adecuado entre las transacciones.

En resumen, la transaccionalidad garantiza que las operaciones se realicen de manera segura, manteniendo la integridad y consistencia de la información en la base de datos, incluso en situaciones de fallos o concurrencia.
