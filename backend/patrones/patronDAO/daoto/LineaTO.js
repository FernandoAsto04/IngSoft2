import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/database.js";
import { Area } from "./AreaTO.js";

export const Linea = sequelize.define(
    "Linea", {
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

//Relacion Area - Linea
Area.hasMany(Linea, {
    foreignKey: "Areaid",
    sourceKey: "id"
});

Linea.belongsTo(Area, {
    foreignKey: "Areaid",
    targetKey: "id"
});