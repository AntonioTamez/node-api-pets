/**
 * @fileoverview Ruta de mascotas
 * @author [Antonio Tamez Salinas]
 * @version 1.0.0
 */

import express from 'express';
import mascotasController from '../controllers/mascotas.js'
import { verificarToken } from '../helpers/autenticacion.js';

const route = express.Router();

/**
 * @swagger
 * /pets:
 *   post:
 *     summary: Crea una nueva mascota
 *     description: Crea una nueva mascota en la base de datos
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: mascota
 *         description: Objeto con los datos de la mascota
 *         schema:
 *           type: object
 *           properties:
 *             nombre:
 *               type: string
 *             especie:
 *               type: string
 *             edad:
 *               type: integer
 *     responses:
 *       201:
 *         description: Mascota creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 especie:
 *                   type: string
 *                 edad:
 *                   type: integer
 */
route.post('/', mascotasController.create);

/**
 * @swagger
 * /pets/{id}:
 *   get:
 *     summary: Obtiene una mascota por ID
 *     description: Obtiene una mascota por su ID en la base de datos
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la mascota
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mascota obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 especie:
 *                   type: string
 *                 edad:
 *                   type: integer
 */
route.get('/:id', mascotasController.getOne);

/**
 * @swagger
 * /pets:
 *   get:
 *     summary: Obtiene todas las mascotas
 *     description: Obtiene todas las mascotas en la base de datos
 *     responses:
 *       200:
 *         description: Lista de mascotas exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nombre:
 *                     type: string
 *                   especie:
 *                     type: string
 *                   edad:
 *                     type: integer
 */
route.get('/', mascotasController.getAll);

/**
 * @swagger
 * /pets/{id}:
 *   put:
 *     summary: Actualiza una mascota
 *     description: Actualiza una mascota en la base de datos
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la mascota
 *         schema:
 *           type: integer
 *       - in: body
 *         name: mascota
 *         description: Objeto con los datos de la mascota
 *         schema:
 *           type: object
 *           properties:
 *             nombre:
 *               type: string
 *             especie:
 *               type: string
 *             edad:
 *               type: integer
 *     responses:
 *       200:
 *         description: Mascota actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombre:
 *                   type: string
 *                 especie:
 *                   type: string
 *                 edad:
 *                   type: integer
 */
route.put('/:id', verificarToken, mascotasController.update);

/**
 * @swagger
 * /pets/{id}:
 *   delete:
 *     summary: Elimina una mascota
 *     description: Elimina una mascota en la base de datos
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la mascota
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Mascota eliminada exitosamente
 */
route.delete('/:id', verificarToken, mascotasController.delete);

export default route;