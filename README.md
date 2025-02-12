# API de Gestión de Mascotas y Usuarios

## Descripción
API RESTful desarrollada con Node.js y Express que permite gestionar un sistema de registro de mascotas y usuarios. La aplicación utiliza MongoDB como base de datos y proporciona endpoints para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) tanto para mascotas como para usuarios.


###  [View Demo](https://node-api-pets.onrender.com/api-docs/)

### Deploy realizado en [render.com](https://render.com/)

## Tecnologías usadas
[MongoDB](https://www.mongodb.com/es)
[Express.js](https://expressjs.com/)
[Node.js](https://nodejs.org/es)
[Mongoose](https://mongoosejs.com/)


## Características Principales

### Gestión de Usuarios
- Registro de usuarios con encriptación de contraseñas
- Autenticación de usuarios
- Almacenamiento seguro de datos personales
- Validación de datos de entrada

### Gestión de Mascotas
- Registro completo de mascotas
- Actualización de información
- Búsqueda por ID
- Listado completo de mascotas
- Eliminación de registros

## Tecnologías Utilizadas

### Core
- Node.js (v18+)
- Express.js
- MongoDB
- Mongoose

### Seguridad
- bcryptjs (encriptación de contraseñas)
- cors (seguridad de acceso entre dominios)
- dotenv (manejo de variables de entorno)

### Desarrollo
- nodemon (recarga automática en desarrollo)
- ESLint (calidad de código)

## Requisitos Previos
- Node.js instalado (v18 o superior)
- MongoDB instalado y en ejecución
- npm o yarn como gestor de paquetes

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/AntonioTamez/node-api-pets.git
cd node-api-pets
```
2. Instalar dependencias:
```bash
npm install
```

## Estructura del Proyecto

```
node-api-pets/
├── config/
│   ├── dbClient.js
│   └── config.js
├── controllers/
│   ├── mascotas.js
│   └── usuarios.js
├── models/
│   ├── mascotas.js
│   └── usuarios.js
├── schemas/
│   ├── mascotas.js
│   └── usuarios.js
├── routes/
│   ├── mascotas.js
│   └── usuarios.js
├── middleware/
│   └── auth.js
├── .env
├── .gitignore
├── package.json
└── server.js
```
## Scripts Disponibles
```
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "lint": "eslint .",
    "test": "jest"
  }
}
```

## Paquetes instalados
```
npm i express

npm i body-parser

npm i dotenv

npm i mongodb

npm i mongoose

npm i bcrypt

npm install jsonwebtoken
```

## Comandos
- Desarrollo:
```
npm run dev
```

- Producción:
```
npm start
```

## API Endpoints

### Usuarios
- POST /api/users/register - Registro de nuevo usuario
- POST /api/users/login - Autenticación de usuario
- POST /api/users/profile - Datos de usuario

### Mascotas
- GET /api/pets - Obtener todas las mascotas
- GET /api/pets/:id - Obtener una mascota por ID
- POST /api/pets - Crear nueva mascota
- PUT /api/pets/:id - Actualizar mascota existente
- DELETE /api/pets/:id - Eliminar mascota

## Modelos de Datos

### Usuario
```
{
  email: String,
  nombre: String,
  telefono: String,
  clave: String (encriptada)
}
```

### Mascota
```
{
  nombre: String,
  tipo: String,
  raza: String,
  edad: Number,
  descripcion: String,
  adoptado: Boolean
}
```

## Seguridad
- Contraseñas encriptadas con bcryptjs
- Validación de datos de entrada
- Protección contra inyección de MongoDB
- Headers de seguridad con CORS configurado

## Despliegue
### Preparación

- Asegúrate de tener todas las variables de entorno configuradas
- Verifica que todas las dependencias estén instaladas
- Ejecuta pruebas si existen

## Despliegue en Producción

### Heroku
```
heroku login
heroku create tu-app-name
git push heroku main
```

## Contribución
```
Fork el repositorio
Crea una rama para tu feature (git checkout -b feature/AmazingFeature)
Commit tus cambios (git commit -m 'Add some AmazingFeature')
Push a la rama (git push origin feature/AmazingFeature)
Abre un Pull Request
```

---

## 📢 **Contact**

- **Author:** [Antonio Tamez](https://github.com/AntonioTamez)
- **Email:** antonio.tamez@hotmail.com
- **GitHub:** [https://github.com/AntonioTamez](https://github.com/AntonioTamez)
