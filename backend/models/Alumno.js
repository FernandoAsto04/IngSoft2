import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Alumno = sequelize.define(
    "Alumno", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codalumno: DataTypes.STRING,
    }, {
        timestamps: false,
        freezeTableName: true
    }
);
