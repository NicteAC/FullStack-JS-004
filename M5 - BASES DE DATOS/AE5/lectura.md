# Modelado de Datos Relacional

**El modelo Entidad-Relación**

- El proceso de abstracción: El proceso de abstracción implica identificar y representar los conceptos y relaciones relevantes de un dominio de datos. Se busca comprender la estructura lógica de la información sin preocuparse por los detalles de implementación.

- El modelo conceptual de Entidad-Relación: Es un modelo de datos que utiliza entidades para representar objetos del mundo real y relaciones para representar las interacciones entre estas entidades. Se utiliza para visualizar y diseñar la estructura lógica de una base de datos antes de su implementación.

- Identificación de entidades: Las entidades son objetos o conceptos del mundo real que se pueden distinguir y sobre los cuales se desea almacenar información. Para identificar entidades, se deben analizar los requisitos del sistema y reconocer los objetos clave del dominio de datos.

- Definición de atributos e identificadores únicos: Los atributos son características o propiedades de las entidades que se desean almacenar. Los identificadores únicos son atributos o combinaciones de atributos que permiten identificar de manera exclusiva a cada entidad en una tabla.

- Tipos de relación entre entidades: Las relaciones representan las interacciones o conexiones entre entidades. Los tipos de relaciones más comunes son la relación uno a uno, uno a muchos y muchos a muchos.

- Entidades débiles y fuertes: Una entidad fuerte puede existir de forma independiente, mientras que una entidad débil depende de otra entidad para su existencia. Una entidad débil se identifica mediante una clave parcial, es decir, su identificador único incluye la clave de otra entidad.

## El modelo Relacional

- El modelo relacional y sus diferencias con el modelo conceptual: El modelo relacional es un modelo de datos que organiza la información en tablas con filas y columnas. A diferencia del modelo conceptual, el modelo relacional se enfoca en la estructura física y la implementación de la base de datos.

- Reglas de transformación: Las reglas de transformación permiten convertir el modelo conceptual en un esquema relacional. Estas reglas incluyen la asignación de entidades a tablas, la representación de atributos como columnas y la definición de relaciones mediante claves externas.

- Asignando tipos de datos y restricciones al modelo: En MySQL, se pueden asignar tipos de datos a las columnas de las tablas, como INT para enteros, VARCHAR para cadenas de texto, DATE para fechas, etc. Además, se pueden definir restricciones, como claves primarias, claves foráneas, restricciones de integridad, etc.

- Normalización y Desnormalización de datos: La normalización es el proceso de diseñar una base de datos relacional para eliminar la redundancia y evitar anomalías en la manipulación de los datos. Por otro lado, la desnormalización es la técnica opuesta que se utiliza para mejorar el rendimiento de consultas al permitir cierta redundancia de datos.

- El diccionario de datos: El diccionario de datos es una colección de metadatos que describe la estructura de la base de datos, incluyendo las tablas, columnas, tipos de datos, restricciones y relaciones. En MySQL, se puede acceder al diccionario de datos a través de consultas a las tablas del sistema, como "information_schema".

## Características de un modelo de Entidad-Relación para el modelamiento de un problema de datos:

- Abstracción: Permite representar de manera conceptual los objetos y relaciones del mundo real sin considerar detalles de implementación.
- Entidades: Representan objetos o conceptos del dominio de datos.
- Atributos: Características o propiedades de las entidades.
- Identificadores únicos: Atributos o combinaciones de atributos que identifican de forma exclusiva a cada entidad.
- Relaciones: Representan las interacciones o conexiones entre entidades.
- Cardinalidad: Indica la cantidad de instancias de una entidad que se relacionan con otra entidad.
- Entidades débiles: Dependen de otra entidad para su existencia y se identifican mediante una clave parcial.
- Diagramas de Entidad-Relación: Representaciones gráficas que muestran las entidades, atributos y relaciones del modelo.
## Modelo de Entidad-Relación para representar un problema dado:

Supongamos que deseamos modelar una base de datos para una tienda en línea. Identificamos las siguientes entidades, atributos e identificadores únicos:

**Entidades:**

- Cliente (ID_cliente, nombre, dirección, correo electrónico)
- Producto (ID_producto, nombre, descripción, precio)
- Pedido (ID_pedido, fecha, estado)
- Proveedor (ID_proveedor, nombre, dirección, teléfono)

**Relaciones:**

- Cliente realiza Pedido (1:N)
- Producto es proporcionado por Proveedor (N:M)
- Pedido incluye Producto (N:M)

## Reglas de transformación y normalización (3F) de un modelo relacional:

Las reglas de transformación permiten convertir un modelo de Entidad-Relación en un modelo relacional. Estas reglas incluyen:

1. Asignar entidades a tablas y atributos a columnas.
2. Definir las relaciones mediante claves externas.
3. Mantener la integridad referencial entre las tablas.
4. Normalizar las tablas para eliminar la redundancia y evitar anomalías en la manipulación de los datos.

La normalización se refiere al proceso de diseñar una base de datos relacional siguiendo ciertas formas normales. Las formas normales más comunes son:

- Primera Forma Normal (1NF): Cada atributo de una tabla debe contener un solo valor y no se deben repetir grupos de valores.
- Segunda Forma Normal (2NF): La tabla debe estar en 1NF y todos los atributos no clave deben depender completamente de la clave primaria.
- Tercera Forma Normal (3NF): La tabla debe estar en 2NF y no debe haber dependencias transitivas entre los atributos no clave.

## Diccionario de datos detallando un modelo relacional para resolver un problema dado:

En el contexto del problema de la tienda en línea, el diccionario de datos podría ser el siguiente:

Tabla: Cliente
- ID_cliente (Identificador único)
- nombre
- dirección
- correo electrónico

Tabla: Producto
- ID_producto (Identificador único)
- nombre
- descripción
- precio

Tabla: Pedido
- ID_pedido (Identificador único)
- fecha
- estado
- ID_cliente (Clave externa que referencia a Cliente)

Tabla: Proveedor
- ID_proveedor (Identificador único)
- nombre
- dirección
- teléfono

Tabla: Pedido_Producto (Tabla de relación para la relación N:M entre Pedido y Producto)
- ID_pedido (Clave externa que referencia a Pedido)
- ID_producto (Clave externa que referencia a Producto)
- cantidad


## DDL

DDL significa "Data Definition Language" (Lenguaje de Definición de Datos) y es un conjunto de comandos utilizados para definir y gestionar la estructura y características de una base de datos. DDL se utiliza para crear, modificar y eliminar objetos de base de datos como tablas, índices, vistas, restricciones, entre otros. Algunos ejemplos de comandos DDL en MySQL son:

- CREATE: Se utiliza para crear objetos de base de datos, como tablas o vistas.
- ALTER: Permite modificar la estructura de un objeto existente, como agregar o eliminar columnas de una tabla.
- DROP: Se utiliza para eliminar objetos de base de datos, como tablas o vistas.
- TRUNCATE: Elimina todos los datos de una tabla, pero mantiene su estructura.
- CREATE INDEX: Crea un índice en una o varias columnas de una tabla para mejorar la eficiencia de las consultas.
- CREATE VIEW: Crea una vista, que es una representación virtual de una o varias tablas.