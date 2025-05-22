import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Trabajo } from "./Trabajo.js"

export const TipoTrabajo = sequelize.define(
    "TipoTrabajo", {
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

//Relacion Trabajo - TipoTrabajo
TipoTrabajo.hasMany(Trabajo, {
    foreignKey: "TipoTrabajoid",
    sourceKey: "id"
});

Trabajo.belongsTo(TipoTrabajo,{
    foreignKey: "TipoTrabajoid",
    targetKey: "id"
});

