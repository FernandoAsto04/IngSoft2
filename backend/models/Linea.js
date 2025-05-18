import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Linea = sequelize.define(
    "Linea", {
        idLinea: DataTypes.INTEGER,
        nombre: DataTypes.STRING,
    }, {
        freezeTableName: true
    }
);
