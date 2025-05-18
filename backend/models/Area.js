import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Trabajo } from "./Trabajo.js"
import {Linea} from "./Linea.js"

export const Area = sequelize.define(
    "Area", {
        idArea: DataTypes.INTEGER,
        nombre: DataTypes.STRING,
    }, {
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

//Relacion Area - Linea
Area.hasMany(Linea, {
    foreignKey: "lineaid",
    sourceKey: "id"
});

Linea.belongsTo(Area, {
    foreignKey: "lineaid",
    targetKey: "id"
});