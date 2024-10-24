// El Archivo app.js es el archivo de ejecución de nuestro aplicativo WEB
// Acá se va a confgurar el servidor express para gesionar tolo lo gestionado con la logica de negocio -> conexion de bases de datos, peticiones, respuestas

// 1. Importar dependencias y mnodulos necesarios

import express from "express"; // ECMAS 6

// 2. Configurar el uso del Servidor
const app = express();
const port = 3000; // los puertos mas utilizados son 3000, 6000 y 9000

// 3. Ejecutar el servidor en nuestros servidor
app.listen(port, ()=>{
    console.log("El servidor esta ejecutandose correctamente, en el puerto ", port);
});
