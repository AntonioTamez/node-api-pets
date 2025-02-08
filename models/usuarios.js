import mongoose from 'mongoose';
import Usuario from '../schemas/usuarios.js';

class usuariosModel {
    async create(usuario) {
        return await Usuario.create(usuario)
    }

    async update(id, usuario){
        return await Usuario.updateOne({_id: new mongoose.Types.ObjectId(id) }, usuario, { new: true });
    }

    async delete(id){
        return await usuario.findOneAndDelete({_id: new mongoose.Types.ObjectId(id) });
    }

    async getAll(){
        return await usuario.find();
    }

    async getOneById(id){
        return await Usuario.findById(id);
    }

    async getOne(filtro){
        return await Usuario.findOne(filtro);
    }


}

export default new usuariosModel;