import mongoose from "mongoose";

const usuariosSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        nombre: {
            type: String,
            required: true,
            trim: true,
        },
        tlefono: {
            type: String,
            required: false,
        },
        clave: {
            type: String,
            required: true,
        }
    }
);

export default mongoose.model('usuarios', usuariosSchema);