import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/database.js";

export const Area = sequelize.define(
  "Area",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: DataTypes.STRING
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);
