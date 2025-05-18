import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Trabajo } from "./Trabajo.js"

export const TipoTrabajo = sequelize.define(
    "TipoTrabajo", {
        idTipoTrabajo: DataTypes.INTEGER,
        nombre: DataTypes.STRING,
    }, {
        freezeTableName: true
    }
);

//Relacion Trabajo - TipoTrabajo
TipoTrabajo.hasMany(Trabajo, {
    foreignKey: "TipoTrabajoid",
    sourceKey: "id"
});

Trabajo.belongsTo(TipoTrabajo,{
    foreignKey: "TipoTrabajoid",
    targetKey: "id"
});

