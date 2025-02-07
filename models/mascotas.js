// import { ObjectId } from "mongodb";
// import dbClient from "../config/dbClient.js"

import mongoose from 'mongoose';
import Mascota from '../schemas/mascotas.js';

class mascotasModel {
    async create(mascota) {
        return await Mascota.create(mascota)
    }

    async update(id, mascota){
        return await Mascota.updateOne({_id: new mongoose.Types.ObjectId(id) }, mascota, { new: true });
    }

    async delete(id){
        return await Mascota.findOneAndDelete({_id: new mongoose.Types.ObjectId(id) });
    }

    async getAll(){
        return await Mascota.find();
    }

    async getOne(id){
        return await Mascota.findById(id);
    }
}

export default new mascotasModel;