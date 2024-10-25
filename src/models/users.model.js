// 1. Importamos dependencias

import mongoose from "mongoose";

// 2. Creamos el Esquema de datos
const userSchema = new mongoose.Schema({
    fullName: {type: String, required:true},
    email: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    role: {type: String, required:true, default: 'Cliente'}
})

// 3. Definir Nuestro Modelo

export const userModel = mongoose.model('user', userSchema);