import express, { Application } from "express";
import cors from "cors";

// server.ts
const { sequelize } = require("./database/database.js");



import router from "./routes/usuario_routes"

const app: Application = express();
const port: number = 3002;


app.use(express.json()); 
app.use(cors());

//Usuario
app.use("/usuarios", router);

async function verificarConexion(): Promise<void> {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la DB exitosa");

    await sequelize.sync({ alter: true }); // Usa alter para mantener datos existentes
  } catch (error) {
    console.error("Ocurrió un error al conectarse a la DB:", error);
  }
}

app.listen(port,()=> {
    console.log("Servidor activo en el puerto " + port);
    verificarConexion();
});
