## Transaccionalidad

La transaccionalidad en los sistemas de bases de datos es un conjunto de operaciones que se realizan como una unidad lógica de trabajo. Cuando trabajamos con Node.js y MySQL, podemos utilizar módulos como `mysql` o `mysql2` para manejar transacciones.

### ¿Qué es una transacción de base de datos?

Una transacción de base de datos es una secuencia de operaciones que se realizan como una unidad lógica de trabajo. Cuando trabajamos con Node.js, estas operaciones suelen ser consultas SQL enviadas a MySQL a través del módulo de mysql.

Por ejemplo, en una aplicación de comercio electrónico, una transacción podría implicar actualizar el inventario de un producto y crear un nuevo pedido. Estas operaciones serían enviadas a MySQL como consultas SQL y se ejecutarían como una unidad lógica de trabajo.

### ¿Por qué se necesita control de transacciones?

El control de transacciones es necesario para garantizar la integridad de los datos. Si ocurre un fallo durante una de las operaciones de la transacción, es posible que la base de datos quede en un estado inconsistente. El control de transacciones nos permite manejar estos fallos y asegurar que todas las operaciones se realicen con éxito o ninguna en absoluto.

En el contexto de Node.js, esto implica iniciar una transacción, enviar las consultas SQL a MySQL, verificar si hubo algún error y luego confirmar o revertir la transacción según corresponda.

### La integridad de datos

La integridad de los datos se refiere a la precisión y consistencia de los datos en una base de datos. Cuando trabajamos con Node.js y MySQL, el control de transacciones nos ayuda a mantener la integridad de los datos.

### Cuándo usar transacciones

Las transacciones deben usarse siempre que necesites garantizar que un conjunto de operaciones se complete en su totalidad. Esto es especialmente importante en aplicaciones Node.js que realizan múltiples cambios en la base de datos al mismo tiempo.

### Ejemplos de uso común de transacciones

Un ejemplo común de uso de transacciones en una aplicación Node.js podría ser un sistema de comercio electrónico donde una transacción puede implicar la actualización del inventario de un producto y la creación de un nuevo pedido.

```javascript
async function createOrder(product, user, quantity) {
  const connection = await mysql.createConnection({/* datos de conexión */});

  try {
    await connection.beginTransaction();

    // Actualizar inventario
    await connection.query('UPDATE products SET stock = stock - ? WHERE id = ?', [quantity, product.id]);

    // Crear orden
    await connection.query('INSERT INTO orders (user_id, product_id, quantity) VALUES (?, ?, ?)', [user.id, product.id, quantity]);

    await connection.commit();
  } catch (error) {
    await connection.rollback();
    console.error('Error en la transacción, se hizo ROLLBACK', error);
  } finally {
    connection.close();
  }
}
```

### Instrucciones Begin, Commit y Rollback

En Node.js, usando el paquete `mysql` o `mysql2`, podemos utilizar métodos para comenzar (`beginTransaction`), confirmar (`commit`) y revertir (`rollback`) transacciones.

### Algorítmica habitual de una transacción

La algorítmica habitual de una transacción en Node.js sería:

1. Iniciar la transacción (`beginTransaction`)
2. Realizar las operaciones de base de datos (queries SQL).
2.1. Si las operaciones son exitosas, confirmar la transacción (`commit`)
3. Si ocurre un error, revertir la transacción (`rollback`)
4. Finalmente, cerrar la conexión (`close` o `end`)

### La propiedad ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad)

Las transacciones en una base de datos como MySQL deben cumplir con las propiedades ACID:

1. **Atomicidad**: Esto significa que todas las operaciones de la transacción deben ser exitosas para que la transacción sea considerada exitosa. Si una operación falla, todas las operaciones se deben revertir. En Node.js, logramos la atomicidad utilizando `commit` si todas las operaciones son exitosas, y `rollback` si alguna falla.

2. **Consistencia**: Esto asegura que la base de datos pase de un estado válido a otro estado válido después de la transacción. En el contexto de Node.js, esto significa que debemos manejar los errores y asegurarnos de que las consultas SQL no dejen la base de datos en un estado inconsistente.

3. **Aislamiento**: Las transacciones deben ejecutarse de tal manera que parezca que son la única operación en el sistema. En Node.js y MySQL, el motor de la base de datos maneja el aislamiento de las transacciones.

4. **Durabilidad**: Una vez que una transacción se ha completado, sus efectos deben ser permanentes y sobrevivir a futuros fallos del sistema. En Node.js, una vez que llamamos al método `commit`, los cambios se hacen permanentes en la base de datos.

## Operaciones Transaccionales

### Ejecutar múltiples operaciones transaccionales con instrucción COMMIT

En Node.js, cuando trabajamos con MySQL, podemos ejecutar múltiples operaciones como parte de una transacción y luego usar la instrucción `COMMIT` (a través del método `commit`) para hacer permanentes los cambios si todas las operaciones se ejecutan con éxito.

### Ejecutar múltiples operaciones transaccionales con instrucción ROLLBACK

Si alguna de las operaciones de la transacción falla, podemos usar la instrucción `ROLLBACK` (a través del método `rollback`) para revertir todos los cambios realizados durante la transacción.

### La instrucción AUTOCOMMIT

MySQL tiene un modo AUTOCOMMIT que está habilitado por defecto, lo que significa que realiza un `COMMIT` después de cada operación individual en la base de datos. Puedes deshabilitar este comportamiento al trabajar con transacciones en Node.js y controlar manualmente cuándo se realiza el `COMMIT`.

## Captura de Errores y Operaciones Transaccionales

### Errores de operación de datos

Las operaciones de datos en Node.js pueden fallar por varias razones, incluyendo errores en las consultas SQL, problemas de conexión con la base de datos y violaciones de las restricciones de la base de datos.

### Captura de errores en Node

En Node.js, los errores de las operaciones de datos se pueden capturar en un bloque `catch` cuando se utilizan promesas o `async/await`.

```javascript
try {
  // Operaciones de base de datos
} catch (error) {
  // Manejo de errores
}
```

### Procesando errores y condiciones para la operación de transacciones en Node

Es importante manejar adecuadamente los errores durante las transacciones en Node.js para mantener la integridad de

los datos y asegurar que la aplicación pueda recuperarse de manera segura.

- **Errores en tiempo de ejecución**: Estos errores ocurren durante la ejecución de tu código y pueden ser el resultado de problemas en las consultas SQL, problemas de conexión con la base de datos, o bugs en tu código. Cuando ocurre un error en tiempo de ejecución, debes capturarlo y manejarlo adecuadamente. Esto podría implicar revertir la transacción, registrar el error y/o informar al usuario.

- **Errores controlados**: Estos son errores que puedes prever y manejar en tu código. Por ejemplo, si intentas debitar más dinero del que tiene una cuenta, puedes manejar este error mostrando un mensaje al usuario.

- **Condiciones de borde**: Estas son situaciones que pueden ocurrir pero que no son errores en sí mismos. Por ejemplo, si intentas debitar dinero de una cuenta que ya está en cero, esto no es un error, pero debes manejarlo adecuadamente en tu código.

### Operaciones de desconexión y errores generados por el Motor de base de datos

El Motor de base de datos puede generar errores por varias razones, incluyendo problemas de conexión, consultas SQL mal formadas y violaciones de las restricciones de la base de datos. Cuando ocurre un error, debes manejarlo adecuadamente para garantizar que tu aplicación pueda recuperarse.

Si se pierde la conexión con la base de datos durante una transacción, puedes intentar reconectarte y reintentar la transacción. Sin embargo, debes tener en cuenta que algunas operaciones pueden haberse completado antes de la desconexión, por lo que es posible que necesites realizar algunas operaciones de limpieza antes de reintentar la transacción.

Si ocurre un error debido a una consulta SQL mal formada o a una violación de las restricciones de la base de datos, debes manejar estos errores en tu código y proporcionar retroalimentación adecuada al usuario. En Node.js, puedes hacer esto usando bloques `try/catch` y manejo de errores adecuado.