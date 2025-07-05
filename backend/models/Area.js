import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Trabajo } from "./Trabajo.js"

export const Area = sequelize.define(
    "Area", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: DataTypes.STRING,
    }, {
        timestamps:false,
        freezeTableName: true
    }
);

//Relacion Trabajo - Area
Area.hasMany(Trabajo, {
    foreignKey: "Areaid",
    sourceKey: "id"
});

Trabajo.belongsTo(Area, {
    foreignKey: "Areaid",
    targetKey: "id"
});