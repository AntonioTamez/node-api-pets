import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mi API con Swagger",
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
  src: './'
};

const specs = swaggerJsdoc(options);
//module.exports = specs;


export default specs