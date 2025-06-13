import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Trabajo } from "./Trabajo.js";

export const Estado = sequelize.define(
    "Estado", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: false,
    freezeTableName: true
});

//Relacion Estado - Trabajo
Estado.hasMany(Trabajo, {
    foreignKey: "Estadoid",
    sourceKey: "id"
});

Trabajo.belongsTo(Estado, {
    foreignKey: "Estadoid",
    targetKey: "id"
});