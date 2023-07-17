1. **Iniciando un Proyecto de Servidor REST con Express.js:**

   Express.js es un marco de aplicación web para Node.js que facilita la creación de aplicaciones web y APIs. Para iniciar un nuevo proyecto de servidor REST con Express.js, primero debes instalar Node.js y luego Express.js utilizando npm (Node Package Manager) que viene con Node.js.

   ```bash
   # Inicia un nuevo proyecto de Node.js
   npm init -y

   # Instala Express.js
   npm install express
   ```

   A continuación, puedes crear un nuevo archivo `index.js` (o `app.js` si lo prefieres) y escribir el siguiente código para iniciar un servidor Express.js.

   ```javascript
   const express = require('express');
   const app = express();
   const port = 3000;

   app.listen(port, () => {
     console.log(`Servidor iniciado en http://localhost:${port}`);
   });
   ```

2. **Creando Rutas con Retorno JSON para las Solicitudes HTTP:**

   En una API REST, las rutas representan los recursos (generalmente datos de la base de datos), y las solicitudes HTTP representan las operaciones CRUD (Create, Read, Update, Delete). Aquí hay un ejemplo de cómo crear rutas con retorno JSON para las solicitudes HTTP de tipo GET, POST, PUT y DELETE.

   ```javascript
   app.get('/api/recursos', (req, res) => {
     res.json({ message: 'Obtener todos los recursos' });
   });

   app.post('/api/recursos', (req, res) => {
     res.json({ message: 'Crear un nuevo recurso' });
   });

   app.put('/api/recursos/:id', (req, res) => {
     res.json({ message: 'Actualizar el recurso con el id dado' });
   });

   app.delete('/api/recursos/:id', (req, res) => {
     res.json({ message: 'Eliminar el recurso con el id dado' });
   });
   ```

3. **Estructura de los Endpoints según el Tipo de Solicitud:**

   Como mencioné anteriormente, los endpoints en una API REST suelen representar recursos. Aquí te muestro cómo se estructuran generalmente los endpoints de una API REST según el tipo de solicitud:

   - GET /api/recursos: Obtiene una lista de todos los recursos.
   - POST /api/recursos: Crea un nuevo recurso.
   - GET /api/recursos/:id: Obtiene un recurso específico por id.
   - PUT /api/recursos/:id: Actualiza un recurso específico por id.
   - DELETE /api/recursos/:id: Elimina un recurso específico por id.

4. **Recepción de Parámetros en una Solicitud HTTP:**

   Los parámetros se pueden enviar en una solicitud HTTP a través de la URL (parámetros de ruta o de consulta) o en el cuerpo de una solicitud POST o PUT (datos de formulario o JSON). Aquí te muestro cómo recibir parámetros en una solicitud HTTP en Express.js:

   ```javascript
   // Parámetros de ruta
   app.get('/api/recursos/:id', (req, res) => {
     const id = req.params.id;
     res.json({ message: `Obtiene el recurso con id: ${id}` });
   });

   // Parámetros de consulta
   app.get('/api/recursos', (req, res) => {
     const { q } = req.query;
     res.json({ message: `Busca recursos con la query: ${q}` });
   });

   // Parámetros del cuerpo de la solicitud
   app.post('/api/recursos', (req, res) => {
     const recurso = req.body;
     res.json({ message: 'Crear un nuevo recurso', data: recurso });
   });
   ```

   Ten en cuenta que para que Express.js pueda analizar los parámetros del cuerpo de la solicitud, necesitas instalar y usar el paquete body-parser, que lo mostraré en la próxima sección.

5. **Uso del Paquete Body-Parser:**

   Body-parser es un middleware que se utiliza para analizar el cuerpo de las solicitudes HTTP entrantes en Express.js. Antes de poder acceder a los datos del cuerpo de la solicitud en req.body, debes instalar y usar body-parser.

   ```bash
   # Instala body-parser
   npm install body-parser
   ```

   Luego, utiliza body-parser en tu aplicación Express.js.

   ```javascript
   const bodyParser = require('body-parser');

   app.use(bodyParser.json()); // para solicitudes con contenido tipo application/json
   app.use(bodyParser.urlencoded({ extended: true })); // para solicitudes con contenido tipo application/x-www-form-urlencoded
   ```

   Ahora, puedes acceder a los datos del cuerpo de la solicitud en req.body.

6. **Procesamiento del Retorno JSON:**

   Para enviar una respuesta JSON en Express.js, puedes usar el método res.json(). Por ejemplo:

   ```javascript
   app.get('/api', (req, res) => {
     res.json({ message: 'Hola Mundo!' });
   });
   ```

   Este método envía una respuesta (con el tipo de contenido correcto) que es el parámetro convertido a una cadena JSON utilizando JSON.stringify().

7. **Códigos de Respuesta HTTP:**

   Los códigos de estado HTTP indican si se ha completado una solicitud HTTP específica con éxito. Las respuestas se agrupan en cinco clases:

   - Respuestas informativas (100–199)
   - Respuestas satisfactorias (200–299)
   - Redirecciones (300–399)
   - Errores de los clientes (400–499)
   - Errores de los servidores (500–599)

   Para enviar una respuesta con un código de estado HTTP específico en Express.js, puedes usar el método res.status(). Por ejemplo:

   ```javascript
   app.get('/api', (req, res) => {
     res.status(200).json({ message: 'Todo está bien' });
   });

   app.get('/api', (req, res) => {
     res.status(404).json({ message: 'No se encontró el recurso' });
   });
   ```

   Eso es todo. Espero que esto te sea útil para crear una API REST con Node.js y MySQL. Si tienes alguna pregunta, no dudes en preguntar.
