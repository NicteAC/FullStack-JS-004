# Introducción:

En MySQL, las sentencias para la manipulación de datos y la transaccionalidad son fundamentales para realizar operaciones efectivas y asegurar la integridad de los datos. En esta clase, exploraremos las sentencias más comunes utilizadas en MySQL para la manipulación de datos, así como los conceptos clave relacionados con la transaccionalidad.

## I. Sentencias para la manipulación de datos:

- Data Manipulation Language (DML):
  El lenguaje de manipulación de datos (DML) en MySQL se utiliza para realizar operaciones como la inserción, actualización y eliminación de datos en las tablas de la base de datos. A continuación, se presentan las sentencias más comunes utilizadas en DML: 
  - Actualizando la información de una tabla:
  La sentencia **UPDATE** se utiliza para modificar los datos existentes en una tabla.
  **Ejemplo:**
      ```sql
      UPDATE tabla
      SET columna1 = valor1, columna2 = valor2
      WHERE condicion;
      ```
   - Borrando información de una tabla:
  La sentencia **DELETE** se utiliza para eliminar filas de una tabla.
  **Ejemplo:**
      ```sql
     DELETE FROM tabla
     WHERE condicion;
     ``` 
    - Ingresando información a una tabla:
  La sentencia I**NSERT INTO** se utiliza para agregar nuevas filas de datos a una tabla.
  **Ejemplo:**
        ```sql
        INSERT INTO tabla (columna1, columna2, columna3)
        VALUES (valor1, valor2, valor3);
        ```
   - Utilización de secuencias para asignar identificadores:
  Las secuencias se utilizan para generar valores únicos para una columna automáticamente. Se pueden utilizar con la sentencia **INSERT INTO**.
  **Ejemplo:**
        ```sql
       CREATE SEQUENCE secuencia START WITH 1 INCREMENT BY 1;
       INSERT INTO tabla (id, columna1, columna2)
       VALUES (NEXT VALUE FOR secuencia, valor1, valor2);
        ```

    - Insertar, actualizar y borrar datos con integridad referencial:
Cuando una tabla tiene relaciones de integridad referencial con otras tablas, se deben cumplir ciertas condiciones al insertar, actualizar o borrar datos. Esto se logra utilizando las cláusulas **FOREIGN KEY** y **ON DELETE/UPDATE** en las definiciones de tabla.
    **Ejemplo:**

        ```sql
        CREATE TABLE tabla1 (
            id INT PRIMARY KEY,
            columna1 VARCHAR(50),
            columna2 INT,
            FOREIGN KEY (columna2) REFERENCES tabla2(id) ON DELETE CASCADE ON UPDATE CASCADE
        );
        ```

## II. Transaccionalidad en las operaciones:

1.  Qué es una transacción y por qué son importantes:
    Una transacción es una secuencia de operaciones que se ejecutan como una sola unidad lógica de trabajo. Las transacciones son importantes para garantizar la integridad y la consistencia de los datos, ya que permiten que un conjunto de operaciones se ejecute como una entidad atómica.

2.  Propiedades de las transacciones: atomicidad, consistencia, aislamiento, durabilidad:
    Las transacciones tienen cuatro propiedades conocidas como ACID:

    - **Atomicidad:** Una transacción se trata como una unidad indivisible, lo que significa que todas las operaciones deben completarse con éxito o ninguna de ellas debe tener efecto en la base de datos.
     - **Consistencia:** Una transacción lleva la base de datos de un estado válido a otro estado válido. La base de datos debe cumplir con todas las restricciones de integridad después de que se complete la transacción.
     - **Aislamiento:** Cada transacción se ejecuta en un entorno aislado y no afecta a otras transacciones concurrentes hasta que se complete.
     - **Durabilidad:** Una vez que una transacción se confirma correctamente, los cambios realizados en la base de datos son permanentes y se mantienen incluso en caso de fallos del sistema.

3.  Confirmación de una transacción:
    La confirmación (commit) de una transacción se utiliza para finalizar y aplicar los cambios realizados en una transacción.
    **Ejemplo:**
    ```sql
    START TRANSACTION;
       -- Operaciones dentro de la transacción
    COMMIT;
     ```

4.  Vuelta atrás de una transacción:
    El rollback se utiliza para deshacer todos los cambios realizados en una transacción y volver al estado anterior a su inicio.
    **Ejemplo:**

    ```sql
    START TRANSACTION;
       -- Operaciones dentro de la transacción
    ROLLBACK;
    ```

5.  Modo autocommit:
    En MySQL, el modo autocommit está habilitado de forma predeterminada. Esto significa que cada sentencia individual se trata como una transacción independiente y se confirma automáticamente. Sin embargo, también es posible deshabilitar el modo autocommit y manejar explícitamente las transacciones utilizando las sentencias **COMMIT** y **ROLLBACK**.
    **Ejemplo:**

    ```sql
    SET autocommit = 0;
    START TRANSACTION;
        -- Operaciones dentro de la transacción
    COMMIT;
    ```

> ¡Espero haber proporcionado una introducción sólida a las sentencias de manipulación de datos y la transaccionalidad en MySQL! Recuerda practicar y explorar más a fondo estos conceptos para fortalecer tu comprensión.
