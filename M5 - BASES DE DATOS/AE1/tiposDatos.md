# Tipos de datos para MySQL
En MySQL hay tres tipos principales de datos: texto, número y fecha.

## Tipos de datos de texto

|Tipo de datos| Descripción|
| ----------- | ----------- |
CHAR (tamaño)|	Tiene una cadena de longitud fija (puede contener letras, números y caracteres especiales). El tamaño fijo se especifica entre paréntesis. Puede almacenar hasta 255 caracteres
VARCHAR (tamaño)	|Tiene una cadena de longitud variable (puede contener letras, números y caracteres especiales). El tamaño máximo se especifica entre paréntesis. Puede almacenar hasta 255 caracteres. **Nota:** si agrega un valor mayor que 255, se convertirá en un tipo de texto
TINYTEXT|	Tiene una cadena con una longitud máxima de 255 caracteres
TEXTO|	Tiene una cadena con una longitud máxima de 65.535 caracteres
BLOB|	Para BLOB (Objetos grandes binarios). Almacena hasta 65.535 bytes de datos
MEDIUMTEXT	|Tiene una cadena con una longitud máxima de 16,777,215 caracteres
MEDIUMBLOB|	Para BLOB (Objetos grandes binarios). Tiene capacidad para 16.777.215 bytes de datos
LONGTEXT|	Tiene una cadena con una longitud máxima de 4.294.967.295 caracteres
LONGBLOB|	Para BLOB (Objetos grandes binarios). Tiene capacidad para 4.294.967.295 bytes de datos
ENUM (x, y, z, etc.)|	Permite ingresar una lista de valores posibles. Puede enumerar hasta 65535 valores en una lista ENUM. Si se inserta un valor que no está en la lista, se insertará un valor en blanco.<br>**Nota:** los valores se ordenan en el orden en que los ingresas.<br>Ingrese los valores posibles en este formato: ENUM ('X', 'Y', 'Z')
|SET|	Similar a ENUM, excepto que SET puede contener hasta 64 elementos de lista y puede almacenar más de una opción

## Tipos de datos numéricos

|Tipo de datos| Descripción|
| ----------- | ----------- |
TINYINT (tamaño)|	-128 a 127 normal. 0 a 255 SIN FIRMAR *. La cantidad máxima de dígitos se puede especificar entre paréntesis|
SMALLINT (tamaño)|-32768 a 32767 normal. 0 a 65535 SIN FIRMAR *. La cantidad máxima de dígitos se puede especificar entre paréntesis|
MEDIUMINT (tamaño)|	-8388608 a 8388607 normal. 0 a 16777215 SIN FIRMAR *. La cantidad máxima de dígitos se puede especificar entre paréntesis|
INT (tamaño)|	-2147483648 a 2147483647 normal. 0 a 4294967295 SIN FIRMAR *. La cantidad máxima de dígitos se puede especificar entre paréntesis|
BIGINT (tamaño)|-9223372036854775808 a 9223372036854775807 normal. 0 a 18446744073709551615 SIN FIRMAR *. La cantidad máxima de dígitos se puede especificar entre paréntesis|
FLOAT (tamaño, d)|	Un pequeño número con un punto decimal flotante. La cantidad máxima de dígitos se puede especificar en el parámetro de tamaño. El número máximo de dígitos a la derecha del punto decimal se especifica en el parámetro d|
DOBLE (tamaño, d)|	Un número grande con un punto decimal flotante. La cantidad máxima de dígitos se puede especificar en el parámetro de tamaño. El número máximo de dígitos a la derecha del punto decimal se especifica en el parámetro d|
DECIMAL (tamaño, d)|	Un DOBLE almacenado como una cadena, lo que permite un punto decimal fijo. La cantidad máxima de dígitos se puede especificar en el parámetro de tamaño. El número máximo de dígitos a la derecha del punto decimal se especifica en el parámetro d|

## Tipos de datos para Fechas

|Tipo de datos| Descripción|
| ----------- | ----------- |
DATE ()|	Una fecha. Formato: AAAA-MM-DD <br>**Nota:** el rango admitido es de '1000-01-01' a '9999-12-31'
DATETIME ()	|* Una combinación de fecha y hora. Formato: AAAA-MM-DD HH: MI: SS <br>**Nota:** el rango admitido es de '1000-01-01 00:00:00' a '9999-12-31 23:59:59'
TIMESTAMP ()|	* Una marca de tiempo. Los valores de TIMESTAMP se almacenan como el número de segundos desde la época de Unix ('1970-01-01 00:00:00' UTC). Formato: AAAA-MM-DD HH: MI: SS <br>**Nota:** el rango admitido es de '1970-01-01 00:00:01' UTC a '2038-01-09 03:14:07' UTC
TIME ()	| Un tiempo. Formato: HH: MI: SS <br>**Nota:** el rango admitido es de '-838: 59: 59' a '838: 59: 59'
YEAR () |	Un año en formato de dos o cuatro dígitos. <br>**Nota:** Valores permitidos en formato de cuatro dígitos: de 1901 a 2155. Valores permitidos en formato de dos dígitos: 70 a 69, que representan los años de 1970 a 2069