import { DataTypes } from "sequelize";
import { sequelize } from "../../../database/database.js";

export const Profesor = sequelize.define(
  "Profesor",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Usuarioid: {
      type: DataTypes.INTEGER,
      field: "Usuarioid" // ← respetamos el nombre en la base de datos
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

// Modelo intermedio para relación muchos a muchos
export const AreaProfesor = sequelize.define(
  "AreaProfesor",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);


