# Clase: Integración de la API de Rick and Morty en un servidor Express

## 1. Definiciones:

- **API:** Una API (Application Programming Interface) es un conjunto de reglas y protocolos que permiten la interacción entre diferentes aplicaciones o componentes de software. Proporciona métodos estandarizados para solicitar y recibir datos.
- **Servidor Express:** Express.js es un framework de aplicaciones web para Node.js. Permite crear y manejar fácilmente rutas, endpoints y middleware para el desarrollo de servidores web.
- **API de Rick and Morty:** Es una API pública que proporciona información sobre personajes, episodios y ubicaciones de la serie animada "Rick and Morty". Se puede acceder a los datos a través de diferentes endpoints y realizar solicitudes HTTP para obtener la información deseada.

## 2. Ejemplo de uso de la API de Rick and Morty:

- Importa el módulo `axios` para hacer solicitudes HTTP.
- Crea una función llamada **getCharacter** que llame a la API de Rick and Morty para obtener un personaje al azar.
- Dentro de la función **getCharacter**, realiza una solicitud GET a la URL de la API de Rick and Morty que devuelve un personaje al azar.
- Extrae los datos necesarios de la respuesta, como el nombre y el estado del personaje.
- Devuelve un objeto con los datos del personaje.
- Exporta la función **getCharacter** para poder utilizarla en otros archivos.

Ejemplo:

```javascript
// Importar el módulo axios
const axios = require('axios');

  // Obtener un personaje aleatorio de la API de Rick and Morty
  async function getCharacter() {
    try {
      // Realizar solicitud a la API de Rick and Morty
      const response = await axios.get('https://rickandmortyapi.com/api/character/');

      // Obtener un personaje aleatorio de la lista de personajes
      const randomCharacter = response.data.results[Math.floor(Math.random() * response.data.results.length)];

      // Extraer los datos necesarios del personaje
      const { name, status } = randomCharacter;

      // Devolver un objeto con los datos del personaje
      return { name, status };
    } catch (error) {
      console.error('Error al obtener el personaje:', error);
      throw error;
    }
  }


// Exportar la funcion getCharacter
export default getCharacter;
```

## 3. Ejemplo de uso en un servidor Express:
- Importa el módulo **express** para crear el servidor.
- Importa la funcion **getCharacter** creada anteriormente.
- Crea una instancia de Express y configura una ruta GET para manejar las solicitudes.
- Dentro de la ruta GET, llama al método **getCharacter** para obtener un personaje aleatorio.
- Devuelve la respuesta como un objeto JSON con los datos del personaje.

Ejemplo de servidor:

```javascript
import express from "express";
import getCharacter from "./getCharacter.js";

const app = express();
const PORT = 3000;

// Ruta GET para obtener un personaje aleatorio de Rick and Morty
app.get('/random-character', async (req, res) => {
try {
// Obtener un personaje aleatorio de la API de Rick and Morty
const character = await getCharacter();

    // Devolver la respuesta como un objeto JSON
    res.json(character);

} catch (error) {
res.status(500).json({ error: 'Error al obtener el personaje' });
}
});

// Iniciar el servidor
app.listen(PORT, () => {
console.log(`Servidor escuchando en el puerto ${PORT}`);
});
```

## 4. Pantalla de Postman con llamada/resultado:
- Inicia el servidor ejecutando el archivo del servidor.
- Abre la aplicación Postman y crea una nueva solicitud GET.
- Ingresa la URL del servidor seguida de **/random-character** (por ejemplo, **http://localhost:3000/random-character**).
- Envía la solicitud y verás la respuesta en formato JSON con los datos de un personaje aleatorio de Rick and Morty.

Con esta implementación, al llamar la ruta GET /random-character mediante Postman, recibirás un objeto JSON con los datos de un personaje aleatorio obtenido de la API de Rick and Morty.

Recuerda que necesitarás tener instalados los módulos axios y express en tu proyecto. Puedes instalarlos ejecutando el comando ``npm i axios express``
