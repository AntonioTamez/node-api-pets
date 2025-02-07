import 'dotenv/config';
import { MongoClient } from "mongodb";
import mongoose from 'mongoose';

class dbClient{
    constructor(){
        this.conectarBaseDatos();
    }

    async conectarBaseDatos(){
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/adopcion?retryWrites=true&w=majority`;
        await mongoose.connect(queryString);
    }

    async cerrarConexion(){
        try {
            await mongoose.disconnect(); 
            console.log("Conexión a la base de datos cerrada");
        } catch (error) {
            console.log("Error al cerrar la conexión:",error);
        }
    }


}

export default new dbClient();