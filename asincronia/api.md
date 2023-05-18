# API:
En esta clase aprenderemos sobre las APIs en JavaScript, su utilidad, y cómo utilizarlas tanto en el lado del cliente como con APIs de terceros. También veremos cómo obtener datos desde un servidor utilizando Ajax, las APIs XHR y Fetch, y cómo procesar las respuestas obtenidas.

## Qué es una API y para qué sirve:
- API significa Application Programming Interface (Interfaz de Programación de Aplicaciones) y es un conjunto de reglas y protocolos que permite a diferentes aplicaciones comunicarse entre sí.
- Las APIs proporcionan una interfaz estandarizada para acceder a la funcionalidad de una aplicación o servicio externo.
- Con las APIs, podemos obtener datos, enviar datos y realizar diversas operaciones utilizando las funciones y métodos proporcionados por la API.

## APIs JavaScript del lado del cliente: APIs del navegador y APIs de terceros:
- Las APIs del navegador son proporcionadas por el navegador web y permiten interactuar con diferentes elementos y características del navegador.
- Las APIs de terceros son APIs desarrolladas por terceros, como servicios web o plataformas, y se utilizan para acceder a sus funcionalidades y datos desde nuestra aplicación.

## Diferencia entre API del navegador, API de terceros, librería JavaScript y framework JavaScript:
- API del navegador: Conjunto de funciones y métodos proporcionados por el navegador para interactuar con elementos y características del navegador, como DOM API, Canvas API, Geolocation API, etc.
- API de terceros: Conjunto de funciones y métodos proporcionados por servicios o plataformas externas, como Google Maps API, Twitter API, etc., para acceder a sus funcionalidades y datos.
- Librería JavaScript: Un conjunto de funciones y utilidades predefinidas que pueden ser utilizadas en nuestras aplicaciones, como jQuery, Lodash, etc.
- Framework JavaScript: Un conjunto de librerías y herramientas que proporcionan una estructura y funcionalidades específicas para el desarrollo de aplicaciones, como React, Angular, Vue.js, etc.

## APIs del navegador comunes:
- DOM API: Permite manipular y acceder a los elementos del Document Object Model (DOM) de una página web.
- Geolocation API: Proporciona información sobre la ubicación del usuario.
- Canvas API: Permite dibujar gráficos y animaciones en un lienzo.
- Fetch API: Permite realizar solicitudes HTTP y obtener respuestas desde un servidor.

## APIs de terceros populares:
- Google Maps API: Proporciona funcionalidades relacionadas con mapas y ubicaciones.
- Twitter API: Permite acceder a datos y realizar acciones en la plataforma de Twitter.
- OpenWeatherMap API: Proporciona información sobre el clima y pronósticos meteorológicos.
- GitHub API: Permite interactuar con repositorios y datos relacionados con GitHub.
- Facebook Graph API: Proporciona acceso a datos y funcionalidades relacionadas con Facebook.

## Obtención de datos desde un servidor:
- Para obtener datos desde un servidor, podemos utilizar Ajax (Asynchronous JavaScript and XML) que es una técnica que permite realizar solicitudes asíncronas al servidor sin tener que recargar la página completa.

## Qué es Ajax y qué problema resuelve:
- Ajax es una técnica de desarrollo web que permite actualizar partes específicas de una página web sin necesidad de recargar la página completa.
- Resuelve el problema de la navegación sincrónica, donde se requería recargar la página completa cada vez que se necesitaba obtener o enviar datos al servidor.

## Las APIs XHR y Fetch, características de cada una:
- XMLHttpRequest (XHR) es una API que proporciona funcionalidad para realizar solicitudes HTTP asíncronas.

    - Características de XHR:
        - Compatible con navegadores antiguos.
        - Proporciona más opciones de configuración y manipulación directa de la solicitud y la respuesta.
- Fetch API es una API más moderna y mejorada para realizar solicitudes HTTP.

    - Características de Fetch:
        - Utiliza promesas, lo que facilita el manejo asíncrono y el encadenamiento de acciones.
        - Proporciona una sintaxis más limpia y legible.
        - Es compatible con las características de los nuevos estándares web, como los Streams.

## Realizando solicitudes con XHR:
- Para realizar una solicitud con XHR, necesitamos crear una instancia de XMLHttpRequest, configurar la solicitud y los controladores de eventos, y luego enviar la solicitud al servidor.

## Realizando solicitudes con Fetch:
- Para realizar una solicitud con Fetch, utilizamos la función fetch() y proporcionamos la URL de la API o servidor que deseamos consultar.
- Fetch devuelve una promesa que se resuelve con la respuesta obtenida.
## Cuándo usar XHR o Fetch:
- XHR puede ser útil si se necesita un mayor control sobre la solicitud y la respuesta, o si se requiere una compatibilidad con navegadores antiguos.
- Fetch es recomendado para la mayoría de los casos debido a su sintaxis más moderna, el uso de promesas y su mayor compatibilidad con las nuevas características web.

## APIs de terceros:
- Las APIs de terceros son APIs desarrolladas por servicios externos que nos permiten acceder a sus funcionalidades y datos desde nuestra aplicación.
- Estas APIs generalmente requieren una clave de API (api-key) para autenticar y limitar el acceso a los recursos.
## Conectando la API con una api-key:
- Para conectarse a una API de terceros, generalmente necesitamos obtener una clave de API (api-key) registrándonos en el servicio o plataforma correspondiente.
- La clave de API se utiliza para autenticar nuestras solicitudes a la API y permitir el acceso a los recursos.
## Solicitando datos a la API:
- Una vez que tenemos la clave de API, podemos utilizarla en nuestras solicitudes a la API proporcionando la clave como parte de los parámetros de la solicitud o en el encabezado (header) de la solicitud.
- Dependiendo de la API, es posible que también necesitemos proporcionar otros parámetros o especificar el tipo de datos que queremos obtener.
## Procesamiento de la respuesta:
- Después de realizar una solicitud a la API, recibiremos una respuesta que puede estar en diferentes formatos, como JSON, XML o texto plano.
- Podemos utilizar las funciones y métodos proporcionados por JavaScript para procesar y manipular los datos obtenidos de la respuesta de la API.


Ejemplo de código (Realizando una solicitud a una API utilizando Fetch):
```js
const apiKey = 'TU_API_KEY';
const apiUrl = 'https://api.example.com/data';

fetch(apiUrl, {
  headers: {
    'Authorization': `API-Key ${apiKey}`
  }
})
  .then(response => response.json())
  .then(data => {
    // Procesar y utilizar los datos obtenidos de la API
    console.log(data);
  })
  .catch(error => {
    // Manejar errores de la solicitud
    console.error('Error:', error);
  });
```