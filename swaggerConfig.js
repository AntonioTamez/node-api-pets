import swaggerJsdoc from "swagger-jsdoc";
import swaggerUI from 'swagger-ui-express'

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Mascotas",
      version: "1.0.0",
      description: "Documentación de la API",
    },
    servers: [
      {
        url: "https://node-api-pets.onrender.com", // Cambia esto según la URL de tu API
      },
    ],
  },
  apis: ["./routes/*.js"], // Aquí defines dónde están tus rutas documentadas 
};

const specs = swaggerJsdoc(options);
//module.exports = specs;


export default specs