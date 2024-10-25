// ESTE ARCHIVO ES PARA DEFINIR LA ESTRUCTURA DE DATOS QUE SE VAN A GUARDAR EN LA BASE DE DATOS

// 1. Importar las Dependencias
import mongoose from "mongoose";

// 2. Plantilla de los datos se define como SHEMA -> Esquema de datos que vamos a solicitar para guardar en la base de datos

const productSchema = new mongoose.Schema({
    image: {type: String, required: true},
    name: {type: String, required: true},
    category: {type: String},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    isAvailable: {type: Boolean}
});

// 3. Decirle a la Base de Datos que se cree una colecion con el esquema anterior

const productModel = mongoose.model('product', productSchema);