"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// server.ts
const { sequelize } = require("./database/database.js");
const usuario_routes_1 = __importDefault(require("./routes/usuario_routes"));
const app = (0, express_1.default)();
const port = 3002;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//Usuario
app.use("/usuarios", usuario_routes_1.default);
async function verificarConexion() {
    try {
        await sequelize.authenticate();
        console.log("Conexión a la DB exitosa");
        await sequelize.sync({ alter: true }); // Usa alter para mantener datos existentes
    }
    catch (error) {
        console.error("Ocurrió un error al conectarse a la DB:", error);
    }
}
app.listen(port, () => {
    console.log("Servidor activo en el puerto " + port);
    verificarConexion();
});
