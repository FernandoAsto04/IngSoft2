import {DataTypes } from "sequelize";
import { sequelize } from "../../../database/database.js";

// Así se crea un modelo, osea una tabla, se comporta de igual forma como el Modelo Relacional
export const Trabajo = sequelize.define(
    "Trabajo", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        fechaDeRegistro: DataTypes.DATE,
        estado: DataTypes.STRING,
        observaciones: DataTypes.STRING,
        profesorAsesor: DataTypes.STRING,
        palabrasClave: DataTypes.STRING,
        ciclo: DataTypes.STRING,
    }, {
        timestamps:false,
        freezeTableName: true //Para que se mantenga el nombre de la tabla
    }
);


