import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/database.js";

export const TrabajoPaper = sequelize.define(
    "TrabajoPaper", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    }, {
        freezeTableName: true
    }
);
