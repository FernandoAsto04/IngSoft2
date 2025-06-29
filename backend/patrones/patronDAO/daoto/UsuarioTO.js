import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/database.js";
import { Alumno } from "./AlumnoTO.js";
import { Administrador } from "./AdministradorTO.js";
import { Profesor } from "./ProfesorTO.js";

export const Usuario = sequelize.define(
    "Usuario", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres: DataTypes.STRING,
        apellidos: DataTypes.STRING,
        email: DataTypes.STRING,
        contrasenia: DataTypes.STRING,
        rol: DataTypes.STRING,
    }, {
        timestamps: false,
        freezeTableName: true
    }
);

