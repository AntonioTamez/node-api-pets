// import { ObjectId } from "mongodb";
// import dbClient from "../config/dbClient.js"

import Mascota from '../schemas/mascotas.js';

class mascotasModel {
    async create(mascota) {
        return await Mascota.create(mascota)
        // const colMascotas = dbClient.db.collection('mascotas')
        // return await colMascotas.insertOne(mascota)
    }

    async update(id, mascota){
        return await Mascota.findOneAndUpdate(id, mascota, { new: true });
        // const colMascotas = dbClient.db.collection('mascotas')
        // return await colMascotas.updateOne({_id: new ObjectId(id)}, {$set: mascota});
    }

    async delete(id){
        return await Mascota.findOneAndDelete(id);
        // const colMascotas = dbClient.db.collection('mascotas')
        // return await colMascotas.deleteOne({_id: new ObjectId(id)});
    }

    async getAll(){
        return await Mascota.find();
        // const colMascotas = dbClient.db.collection('mascotas')
        // return await colMascotas.find({}).toArray();
    }

    async getOne(id){
        return await Mascota.findById(id);
        // const colMascotas = dbClient.db.collection('mascotas')
        // return await colMascotas.findOne({ _id: new ObjectId(id) });
    }
}

export default new mascotasModel;