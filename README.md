# Películas App

## Descripción

Esta es una aplicación para gestionar información sobre películas. Permite a los usuarios ver una lista de películas, detalles de cada película y realizar acciones como agregar, editar o eliminar películas.

## Diseño de Ingeniería

### Arquitectura del Sistema

#### Diagrama de Arquitectura

Inserta aquí un diagrama de la arquitectura de tu aplicación, mostrando la relación entre los componentes principales.

### Componentes Principales

#### Backend

- **Express:** Servidor web para gestionar las solicitudes HTTP.
- **MongoDB:** Base de datos para almacenar información sobre las películas.
- **Multer:** Middleware para el manejo de archivos multimedia (imágenes de películas).
- **Mongoose:** ORM para interactuar con la base de datos MongoDB.

#### Frontend

- **React:** Biblioteca para construir la interfaz de usuario.
- **Axios:** Cliente HTTP para realizar solicitudes al backend.
- **React Router:** Enrutador para gestionar la navegación en la aplicación.

### Decisiones de Diseño

- **Uso de Multer:** Se eligió Multer para manejar la carga de imágenes de películas en el backend.
- **Separación de Frontend y Backend:** La aplicación sigue una arquitectura de cliente-servidor con una separación clara entre el frontend y el backend.

## Cómo Contribuir

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Clona el repositorio.
2. Configura el entorno de desarrollo según las instrucciones en el README del backend y frontend.
3. Realiza tus cambios y asegúrate de que las pruebas pasen.
4. Envía una solicitud de extracción.

## Configuración del Entorno de Desarrollo

### Backend

1. Navega al directorio `backend`.
2. Ejecuta `npm install` para instalar las dependencias.
3. Crea un archivo `.env` con las variables de entorno necesarias (consultar el ejemplo en `.env.example`).
4. Ejecuta `npm start` para iniciar el servidor.

### Frontend

1. Navega al directorio `frontend`.
2. Ejecuta `npm install` para instalar las dependencias.
3. Ejecuta `npm start` para iniciar la aplicación en modo de desarrollo.

## Licencia

Este proyecto está bajo la Licencia MIT.

