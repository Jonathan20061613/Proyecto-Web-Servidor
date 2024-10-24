// En Este archivo, Se escribe la conexion para la base de datos

// 1. Importar las dependencias que se necesitan
import mongoose from "mongoose";

// 2. creamos una funcion para conectar la base de datos
// Funcion asincronica -> necesitamos esperar una respuesta

export async function connectionMongo(){
    // Debes controlar los errores -> bosque try - catch
    // try -> gestiona cuando la respuesta es positiva
    // catch -> atrapa los errores

    try{
        // conector de base de datos
        await mongoose.connect(process.env.DB_URL,{});
        console.log("conexion exitosa con la base de datos");
    }catch(error){
        console.error("Error de conexion: " + error);
    }
}