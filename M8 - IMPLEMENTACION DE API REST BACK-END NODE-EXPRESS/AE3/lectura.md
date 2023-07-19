**Subida de archivos al servidor con Express.js**

La subida de archivos al servidor es una tarea común en el desarrollo web. Express.js es un framework de Node.js que simplifica esta tarea con la ayuda de varios paquetes, como el `express-fileupload`.

**Uso del paquete express-fileupload**

`express-fileupload` es un paquete middleware para Express.js que facilita la subida de archivos al servidor.

**Instalación**

Para instalar el paquete `express-fileupload`, necesitas ejecutar el siguiente comando en la terminal de tu proyecto:

```bash
npm install --save express-fileupload
```

**Configuración**

Para usar `express-fileupload`, primero debes requerirlo en tu archivo de aplicación Express.js y luego usarlo como middleware.

```javascript
const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());
```

**Creando una aplicación para subir archivos al servidor**

Para subir archivos al servidor, primero necesitas una ruta POST donde los clientes pueden enviar sus archivos. Aquí hay un ejemplo de cómo podría verse esto:

```javascript
app.post('/upload', function(req, res) {
  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  // Use the mv() method to place the file on your server
  sampleFile.mv('/path/to/your/directory', function(err) {
    if (err)
      return res.status(500).send(err);
    res.send('File uploaded!');
  });
});
```

**Validando existencia del archivo**

Para validar la existencia del archivo, puedes comprobar si `req.files` o `req.files.nombreDeCampo` es undefined. Si lo es, significa que no se ha subido ningún archivo.

**Validando extensiones permitidas**

Para validar las extensiones de los archivos, puedes obtener la extensión del archivo y comprobar si está en una lista de extensiones permitidas.

```javascript
let fileExtension = require('path').extname(req.files.sampleFile.name);
let allowedExtensions = ['.png', '.jpg', '.jpeg', '.gif'];

if (!allowedExtensions.includes(fileExtension)) {
  return res.status(400).send('Invalid file extension.');
}
```

**Recibiendo archivos**

Los archivos se reciben en la solicitud POST. El objeto `req.files` contiene los archivos subidos.

**Obteniendo y modificando el nombre de archivo**

Puedes obtener el nombre de un archivo usando `req.files.nombreDeCampo.name` y puedes modificar el nombre de un archivo antes de guardarlo en el servidor.

```javascript
let newName = 'newName' + path.extname(req.files.sampleFile.name);
sampleFile.mv('/path/to/your/directory/' + newName, function(err) {
  // handle error and success
});
```

**Retornando mensajes de estado al cliente**

Puedes usar `res.status(codigo).send(mensaje)` para enviar mensajes de estado al cliente. Los códigos de estado comunes son 200 para éxito, 400 para una solicitud incorrecta y 500 para un error en el servidor.

**Obteniendo atributos propios del archivo**

`express-fileupload` proporciona varios atributos para cada archivo, incluyendo `name` (el nombre del archivo), `data` (un buffer que contiene los datos del archivo), `size` (el tamaño del archivo en bytes), `encoding` (la codificación del archivo), `tempFilePath` (la ruta al archivo temporal), `truncated` (si el archivo fue truncado), y `mimetype` (el tipo de medio del archivo).

**Eliminando archivos del servidor**

Para eliminar un archivo del servidor, puedes usar el módulo `fs` de Node.js.

```javascript
const fs = require('fs');

fs.unlink('/path/to/your/directory/' + fileName, function(err) {
  if (err) {
    return res.status(500).send('File deletion failed.');
  }
  res.send('File deleted.');
});
```
