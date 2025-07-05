import {DataTypes } from "sequelize";
import { sequelize } from "../../../database/database.js";

export const Trabajo = sequelize.define(
    "Trabajo", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        fecharegistro: DataTypes.DATE,
        observaciones: DataTypes.STRING,
        palabrasclave: DataTypes.STRING,
        ciclo: DataTypes.STRING,
        visible: DataTypes.BOOLEAN,
    }, {
        timestamps:false,
        freezeTableName: true 
    }
);