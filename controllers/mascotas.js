import mascotasModel from '../models/mascotas.js';

class mascotasController{

    constructor(){}

    async create(req, res) {
        try {
            const data = mascotasModel.create(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).send(e); 
        }
    }

    async update(req, res) {
        try {
            res.status(201).json({status: 'update ok'});
        } catch (error) {
            res.status(500).send(e); 
        }
    }

    async delete(req, res) {
        try {
            res.status(201).json({status: 'delete ok'});
        } catch (error) {
            res.status(500).send(e); 
        }
    }

    async getAll(req, res) {
        try {
            res.status(201).json({status: 'getAll ok'});
        } catch (error) {
            res.status(500).send(e); 
        }
    }

    async getOne(req, res) {
        try {
            res.status(201).json({status: 'getOne ok'});
        } catch (error) {
            res.status(500).send(e); 
        }
    }
}

export default new mascotasController();