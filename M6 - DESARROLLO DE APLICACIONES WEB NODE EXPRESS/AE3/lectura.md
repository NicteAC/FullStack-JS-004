# Tema 1: Gestor de paquetes NPM

## Introducción:
El gestor de paquetes NPM (Node Package Manager) es una herramienta que se utiliza en el entorno de Node.js para instalar, gestionar y compartir paquetes de código reutilizable. Proporciona un repositorio público de paquetes de código abierto y facilita la administración de dependencias de un proyecto.

## Definiciones:

1. ¿Qué es npm?

    - NPM es el acrónimo de Node Package Manager. Es una herramienta de línea de comandos que viene incluida con Node.js y se utiliza para administrar paquetes de JavaScript.

2. ¿Para qué sirve npm?

    - NPM permite instalar, actualizar, desinstalar y administrar las dependencias de un proyecto de Node.js. Además, proporciona un repositorio público de paquetes de código abierto llamado npm registry.

3. Instalando paquetes básicos:

    - Utilizando el comando npm install, es posible instalar paquetes en un proyecto. Por ejemplo: npm install nombre-del-paquete.

4. Manejo de versión de paquetes:

    - NPM permite especificar las versiones de los paquetes que se deben instalar. Se pueden utilizar distintos formatos de especificación, como números de versión exactos o rangos semánticos.
5. Desinstalando paquetes:

    - Con el comando npm uninstall, se pueden desinstalar paquetes del proyecto. Por ejemplo: npm uninstall nombre-del-paquete.
6. Argumentos de la línea de comandos npm:

    - NPM acepta varios argumentos de línea de comandos para personalizar su comportamiento, como --save para guardar la dependencia en el archivo package.json, o --global para instalar un paquete de forma global en el sistema.
7. Comandos básicos de npm:

    - npm init: Inicializa un proyecto de Node.js y crea un archivo package.json interactivo.
    - npm install: Instala las dependencias especificadas en el archivo package.json.
    - npm uninstall: Desinstala un paquete y lo elimina del archivo package.json.
    - npm update: Actualiza las dependencias del proyecto a las últimas versiones disponibles.
    - npm list: Muestra una lista de las dependencias instaladas en el proyecto.
    - npm outdated: Muestra una lista de las dependencias que necesitan actualización.

8. La carpeta node_modules:

    - Cuando se instalan paquetes en un proyecto de Node.js, estos se almacenan en la carpeta node_modules. Esta carpeta contiene las dependencias del proyecto y se crea automáticamente al ejecutar npm install.

# Tema 2: Uso de paquetes en Node

1. Requiriendo paquetes en Node:

    - En Node.js, se utiliza la función require() para importar módulos y paquetes en un archivo. Por ejemplo: const express = require('express');.
2. Importar archivos de nuestro proyecto:

    - Además de importar paquetes externos, también se pueden importar archivos locales dentro de un proyecto. Por ejemplo: const miModulo = require('./ruta/al/archivo');.
3. Exportando módulos:

    - Para hacer que un archivo o módulo sea accesible desde otros archivos, se utiliza el objeto module.exports. Permite exportar variables, funciones y objetos para su uso en otros módulos.
4. Entendiendo el archivo package.json:

    - El archivo package.json es un archivo de configuración en formato JSON que contiene metadatos sobre un proyecto de Node.js. Además de información sobre el proyecto, también incluye las dependencias y scripts de ejecución.