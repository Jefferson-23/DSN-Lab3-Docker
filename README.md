# Mi Proyecto de API de Productos

Este proyecto es una API simple para gestionar productos. Fue construido con Node.js y Express.

## Características

- Obtener todos los productos (GET /productos)
- Crear un nuevo producto (POST /productos)
- Actualizar un producto existente (PUT /productos/:id)
- Eliminar un producto existente (DELETE /productos/:id)

## Requisitos

- Node.js
- npm

## Instalación

1. Clona este repositorio.
2. Navega hasta el directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.

## Uso

1. Ejecuta `node index.js` para iniciar el servidor.
2. El servidor se iniciará en `http://localhost:3000`.
3. Puedes probar las rutas de la API usando Postman o cualquier otra herramienta de prueba de API.

## Docker

Este proyecto también incluye un Dockerfile para la creación de una imagen Docker. Para construir y ejecutar la imagen Docker, sigue estos pasos:

1. Construye la imagen Docker con `docker build -t mi-api-productos .`.
2. Ejecuta el contenedor Docker con `docker run -p 3000:3000 mi-api-productos`.

## Licencia

Este proyecto está bajo la licencia MIT.
