import express from 'express';
import mascotasController from '../controllers/mascotas.js'

const route = express.Router();

route.post('/', mascotasController.create);
route.get('/:id', mascotasController.getOne);
route.get('/', mascotasController.getAll);
route.put('/:id', mascotasController.update);
route.delete('/:id', mascotasController.delete);

export default route;