import express from "express";
import cors from "cors";

import { sequelize } from './database/database.js';


const app = express();
const port = 3002;


app.use(express.json()); 
app.use(cors());

async function verificarConexion(){
    try {
        await sequelize.authenticate();
        console.log("Conexión a la DB exitosa")
        await sequelize.sync({alter:true}); //Sincroniza los cambios 
        //Una vez la tabla ya tenga datos, en vez de force debe ser alter. Asi no se borran los datos
    } catch (error) {
        console.error("Ocurrió un error al conectarse a la DB", error)
    }
}








app.listen(port,()=> {
    console.log("Servidor activo en el puerto " + port);
    verificarConexion();
});