import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Alumno } from "./Alumno.js";
import { Administrador } from "./Administrador.js";
import { Profesor } from "./Profesor.js";

export const Usuario = sequelize.define(
    "Usuario", {
        idUsuario: DataTypes.INTEGER,
        nombres: DataTypes.STRING,
        apellidos: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        rol: DataTypes.INTEGER,
    }, {
        freezeTableName: true
    }
);

//Relacion Usuario - Alumno
Usuario.hasMany(Alumno, { 
    foreignKey: "usuarioId",
    sourceKey: "id"
});
Alumno.belongsTo(Usuario, { 
    foreignKey: "usuarioId",
    targetKey: "id"
});

//Relacion Usuario - Profesor

Usuario.hasMany(Profesor, { 
    foreignKey: "usuarioId",
    sourceKey: "id"
});
Profesor.belongsTo(Usuario, { 
    foreignKey: "usuarioId",
    targetKey: "id"
});

//Relacion Usuario - Administrador

Usuario.hasMany(Administrador, { 
    foreignKey: "usuarioId",
    sourceKey: "id"
});
Administrador.belongsTo(Usuario, { 
    foreignKey: "usuarioId",
    targetKey: "id"
});