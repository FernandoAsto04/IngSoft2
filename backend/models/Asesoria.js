import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Profesor } from "./Profesor.js";

export const Asesoria = sequelize.define(
    "Asesoria", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        horario: DataTypes.STRING,
        lugar: DataTypes.STRING,
        link: DataTypes.STRING,
    }, {
        timestamps:false,
        freezeTableName: true
    }
);

//Relacion Profesor - Asesoria
Profesor.hasMany(Asesoria, {
    foreignKey:"Profesorid",
    sourceKey: "id"
});

Asesoria.belongsTo(Profesor, {
    foreignKey: "Profesorid",
    targetKey: "id"
});