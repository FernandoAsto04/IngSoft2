import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/database.js";
import { Profesor } from "./ProfesorTO.js";

export const Asesoria = sequelize.define(
  "Asesoria",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    horario: DataTypes.STRING,
    lugar: DataTypes.STRING,
    link: DataTypes.STRING,
    Profesorid: {
      type: DataTypes.INTEGER,
      field: "Profesorid"
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

