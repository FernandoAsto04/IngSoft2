import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const AreaProfesor = sequelize.define(
    "AreaProfesor", {
        idAreaProfesor: DataTypes.INTEGER,
    }, {
        freezeTableName: true
    }
);
