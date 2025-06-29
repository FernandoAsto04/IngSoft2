import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/database.js";

export const Linea = sequelize.define(
  "Linea",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: DataTypes.STRING,
    Areaid: {
      type: DataTypes.INTEGER,
      field: "Areaid"
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);
