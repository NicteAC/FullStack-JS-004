//! Jimp.read(<dirección de la imagen>, <callback(err,imagen)>)

//* Paso 1: Importar en una constante el paquete Jimp.
//* Paso 2: Importar en una constante el módulo http.
//* Paso 3: Importar en una constante el módulo fs.
//* Paso 4: Crear un servidor con el método de http createServer.
//* Paso 5: Usar el método read del objeto Jimp definiendo como primer parámetro la url de una imagen.
//* Paso 6: Aplicar los siguientes métodos, siguiendo la secuencia: 
//*   ○ Método resize definiendo como primer parámetro 250 y como segundo parámetro el método AUTO del objeto Jimp  para el cálculo automático del height.
//*   ○ Método sepia para aplicar el filtro sepia a la imagen.
//*   ○ Método writeAsync declarando el nombre del archivo procesado a almacenar.
//* Paso 7: Usar el módulo fs para la lectura del archivo creado.
//* Paso 8: Definir la cabecera de la respuesta a la consulta del servidor con un Content-Type en valor image/jpeg y  terrminar la consulta devolviendo la data del archivo leído con el readFile.
