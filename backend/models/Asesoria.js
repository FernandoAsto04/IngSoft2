import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Profesor } from "./Profesor.js";
export const Asesoria = sequelize.define(
    "Asesoria", {
        idAsesoria: DataTypes.INTEGER,
        horario: DataTypes.DATE,
        lugar: DataTypes.STRING,
        link: DataTypes.STRING,
    }, {
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
