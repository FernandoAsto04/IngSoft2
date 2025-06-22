import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const TrabajoArticulo = sequelize.define(
    "TrabajoArticulo", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    }, {
        freezeTableName: true
    }
);
