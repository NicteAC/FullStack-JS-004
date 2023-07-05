**Ejercicio: Sistema de Transferencia de Dinero**

En este ejercicio, estás trabajando en un sistema bancario que permite transferencias de dinero entre cuentas. El sistema está construido con Node.js y utiliza MySQL para la base de datos. 

La lógica de la transferencia de dinero es la siguiente:

1. Reducir el balance de la cuenta del remitente.
2. Aumentar el balance de la cuenta del receptor.

Estas dos operaciones deben ser atómicas: si una falla, la otra tampoco debe suceder. De lo contrario, podríamos terminar en un estado donde el dinero se ha retirado de una cuenta pero no se ha depositado en la otra, o viceversa.

**Tarea**: Escribe una función `transferirDinero` en Node.js que realice una transferencia de dinero entre dos cuentas. La función debe recibir tres argumentos: el id de la cuenta del remitente, el id de la cuenta del receptor, y la cantidad de dinero a transferir. Asegúrate de que tu implementación maneje correctamente los errores y use transacciones para asegurar la atomicidad de la operación.



**Criterios de Evaluación**

1. **Describe conceptos básicos de transaccionalidad y sus beneficios para la implementación de un aplicativo que interactúa con una base de datos**: La descripción debe incluir una explicación de qué es una transacción, por qué se utilizan transacciones y cómo las transacciones benefician a la aplicación al garantizar la consistencia y la integridad de los datos.

2. **Utiliza sentencias para el inicio, confirmación y vuelta atrás de una transacción dando solución a un problema**: La solución debe utilizar `beginTransaction`, `commit` y `rollback` para manejar correctamente las transacciones.

3. **Utiliza sentencias para la captura y manejo de errores de operación SQL utilizando el entorno Node.js**: La solución debe utilizar un bloque `try/catch` para capturar errores durante las operaciones SQL, manejar estos errores de manera adecuada (p. ej., haciendo un rollback de la transacción), y proporcionar mensajes de error claros y útiles.