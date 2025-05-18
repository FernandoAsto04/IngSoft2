import express from "express";
import cors from "cors";

import { sequelize } from './database/database.js';

import { Trabajo } from "./models/Trabajo.js";
import { TipoTrabajo } from './models/TipoTrabajo.js';


import { Area } from './models/Area.js';
import { AreaProfesor } from './models/AreaProfesor.js';
import { Linea } from './models/Linea.js';


import { Usuario } from './models/Usuario.js';
import { Alumno } from './models/Alumno.js';
import { Administrador } from './models/Administrador.js';
import { Profesor } from './models/Profesor.js';
import { Asesoria } from './models/Asesoria.js';


const app = express();
const port = 3002;


app.use(express.json()); 
app.use(cors());

async function verificarConexion(){
    try {
        await sequelize.authenticate();
        console.log("Conexión a la DB exitosa")
        await sequelize.sync({force:true}); //Sincroniza los cambios 
        //Una vez la tabla ya tenga datos, en vez de force debe ser alter. Asi no se borran los datos
    } catch (error) {
        console.error("Ocurrió un error al conectarse a la DB", error)
    }
}


app.listen(port,()=> {
    console.log("Servidor activo en el puerto " + port);
    verificarConexion();
});