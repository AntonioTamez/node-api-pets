import usuariosModel from '../models/usuarios.js';
import bcrypt from 'bcryptjs'

class usuariosController{

    constructor(){}

    async register(req, res) {
        try {
            const { email, nombre, telefono, clave } = req.body;

            const usuarioExiste = await usuariosModel.getOne({ email });

            if(usuarioExiste) {
                return res.status(400).json({ error: 'El usuario ya existe' });
            }

            const claveEncriptada = await bcrypt.hash(clave, 10)
 
            const data = await usuariosModel.create({
                email,
                nombre,
                telefono,
                clave: claveEncriptada
            });

            res.status(201).json(data);
        } catch (error) {
            console.error('Error en registro:', error);
            res.status(500).json({ 
                error: 'Error al registrar usuario',
                message: error.message 
            }); 
        }
    }

    async login(req, res){
        try {
            const { email, clave } = req.body;

            const usuario = await usuariosModel.getOne({ email });

            if (!usuario) {
                return res.status(400).json({ error: 'Usuario no encontrado' });
            }

            const claveValida = await bcrypt.compare(clave, usuario.clave);

            if (!claveValida) {
                return res.status(400).json({ error: 'Contraseña incorrecta' });
            }

            // Aquí podrías generar un token JWT si lo necesitas
            
            const { clave: _, ...usuarioSinClave } = usuario.toObject();
            res.status(200).json(usuarioSinClave);

        } catch (error) {
            console.error('Error en login:', error);
            res.status(500).json({ 
                error: 'Error al iniciar sesión',
                message: error.message 
            });
        }
    }
}

export default new usuariosController();