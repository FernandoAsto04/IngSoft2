import express from "express";
import cors from "cors";

import { sequelize } from './database/database.js';
import usuarioRoutes from './routes/usuarioroutes.js';
import profesorroutes from './routes/profesorroutes.js';
import estadoroutes from './routes/estadoroutes.js';
import trabajoroutes from './routes/trabajoroutes.js';
import linearoutes from './routes/linearoutes.js';
import asesoriaroutes from './routes/asesoriaroutes.js';
import arearoutes from './routes/arearoutes.js';
import alumnoroutes from './routes/alumnoroutes.js';
import administradorroutes from './routes/administradorroutes.js';

//cambiar rutas

import {Administrador} from  "./models/Administrador.js";
import {Alumno} from "./models/Alumno.js";
import {Area} from "./models/Area.js";

import {Asesoria} from"./models/Asesoria.js";
import {Estado} from "./models/Estado.js";
import {Linea} from "./models/Linea.js";
import {Profesor} from "./models/Profesor.js";
import {Trabajo} from "./models/Trabajo.js";
import {Usuario} from "./models/Usuario.js";
import {Tipo} from "./models/Tipo.js";





const app = express();
const port = 3002;


app.use(express.json()); 
app.use(cors({origin: "http://localhost:5173"}));

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







//Provisional para verificar la conexión a la DB mediante el browser

app.get("/ping", async (req, res) => {
    try {
        await sequelize.authenticate();
        res.send("✅ Conexión a la DB exitosa.");
    } catch (error) {
        res.status(500).send("❌ Error al conectar con la DB: " + error.message);
    }
});

// Conexión de las rutas que tengo por ahora(Solo usuario)
app.use("/usuarios", usuarioRoutes);
app.use("/profesores", profesorroutes); //falta terminar
app.use("/estados", estadoroutes);
app.use("/trabajos", trabajoroutes);
app.use("/lineas", linearoutes);
app.use("/asesorias", asesoriaroutes);
app.use("/areas", arearoutes);
app.use("/alumnos", alumnoroutes);
app.use("/administrador", administradorroutes);

//falta areaprofesor y los tres tipos de trabajo



app.listen(port,()=> {
    console.log("Servidor activo en el puerto " + port);
    verificarConexion();
});