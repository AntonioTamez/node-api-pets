import 'dotenv/config';
import express from 'express';
import routesMascotas from './routes/mascotas.js';
import routeUsuarios from './routes/usuarios.js';
import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js';
import swaggerUI from 'swagger-ui-express'
import specs from './swaggerConfig.js'; 

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api-docs", swaggerUI.setup(specs));


app.use('/pets', routesMascotas);
app.use('/users', routeUsuarios);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=> console.log('Servidor activo en el puerto ' + PORT));
} catch (error) {
    console.log(error);
}

process.on('SIGINT', async() => {
    dbClient.cerrarConexion();
    process.exit(0);
});