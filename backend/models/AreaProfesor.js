import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const AreaProfesor = sequelize.define(
    "AreaProfesor", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    }, {
        freezeTableName: true
    }
);
