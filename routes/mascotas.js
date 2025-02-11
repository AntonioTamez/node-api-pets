import express from 'express';
import mascotasController from '../controllers/mascotas.js'
import { verificarToken } from '../helpers/autenticacion.js';

const route = express.Router();

/**
 * @swagger
 * /api/saludo:
 *   get:
 *     summary: Obtiene un mensaje de saludo
 *     responses:
 *       200:
 *         description: Mensaje de saludo exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: ¡Hola, mundo!
 */
route.post('/', mascotasController.create);
route.get('/:id', mascotasController.getOne);
route.get('/', mascotasController.getAll);
route.put('/:id', verificarToken, mascotasController.update);
route.delete('/:id', verificarToken, mascotasController.delete);

export default route;