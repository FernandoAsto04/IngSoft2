import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

import { Area } from "./Area.js";

export const Profesor = sequelize.define(
    "Profesor", {
        idProfesor: DataTypes.INTEGER,
    }, {
        freezeTableName: true
    }
);

const AreaProfesor = sequelize.define(
    "AreaProfesor", {
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    },{
        timestamps:false,
        freezeTableName:true
    }
);

Area.belongsToMany(Profesor,{
    through: AreaProfesor
});

Profesor.belongsToMany(Area, {
    through: AreaProfesor
});
