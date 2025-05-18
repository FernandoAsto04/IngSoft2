import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Administrador = sequelize.define(
    "Administrador", {
        idAdministrador: DataTypes.INTEGER,
    }, {
        freezeTableName: true
    }
);
