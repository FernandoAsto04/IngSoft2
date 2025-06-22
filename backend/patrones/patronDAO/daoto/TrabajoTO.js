import {DataTypes } from "sequelize";
import { sequelize } from "../../../database/database.js";
import {TrabajoArticulo} from "./TrabajoArticuloTO.js"
import {TrabajoPaper} from "./TrabajoPaperTO.js"
import {TrabajoTesis} from "./TrabajoTesisTO.js"



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
        fecharegistro: DataTypes.DATE,
        observaciones: DataTypes.STRING,
        palabrasclave: DataTypes.STRING,
        ciclo: DataTypes.STRING,
        visible: DataTypes.BOOLEAN,
    }, {
        timestamps:false,
        freezeTableName: true //Para que se mantenga el nombre de la tabla
    }
);


//Relacion Trabajo - TrabajoArticulo
Trabajo.hasMany(TrabajoArticulo, { 
    foreignKey: "Trabajoid",
    sourceKey: "id"
});
TrabajoArticulo.belongsTo(Trabajo, { 
    foreignKey: "Trabajoid",
    targetKey: "id"
});

//Relacion Trabajo - TrabajoPaper

Trabajo.hasMany(TrabajoPaper, { 
    foreignKey: "Trabajoid",
    sourceKey: "id"
});
TrabajoPaper.belongsTo(Trabajo, { 
    foreignKey: "Trabajoid",
    targetKey: "id"
});

//Relacion Trabajo -TrabajoTesis

Trabajo.hasMany(TrabajoTesis, { 
    foreignKey: "Trabajoid",
    sourceKey: "id"
});
TrabajoTesis.belongsTo(Trabajo, { 
    foreignKey: "Trabajoid",
    targetKey: "id"
});