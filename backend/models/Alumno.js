import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Alumno = sequelize.define(
    "Alumno", {
        idAlumno: DataTypes.INTEGER,
        codAlumno: DataTypes.INTEGER,
    }, {
        freezeTableName: true
    }
);
