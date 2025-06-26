import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/database.js";
import { Trabajo } from "./TrabajoTO.js"

export const Tipo = sequelize.define(
    "Tipo", {
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

//Relacion Trabajo - Tipo
Tipo.hasMany(Trabajo, {
    foreignKey: "Tipoid",
    sourceKey: "id"
});

Trabajo.belongsTo(Tipo, {
    foreignKey: "Tipoid",
    targetKey: "id"
});

