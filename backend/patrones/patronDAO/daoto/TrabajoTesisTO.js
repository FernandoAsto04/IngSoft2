import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/database.js";

export const TrabajoTesis = sequelize.define(
    "TrabajoTesis", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    }, {
        freezeTableName: true
    }
);
