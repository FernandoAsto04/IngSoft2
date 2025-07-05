import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/database.js";

export const Administrador = sequelize.define(
    "Administrador", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    }, {
        timestamps: false,
        freezeTableName: true
    }
);