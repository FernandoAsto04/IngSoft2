import { Linea } from "../patrones/patronDAO/daoto/LineaTO.js";
import { Area } from "../patrones/patronDAO/daoto/AreaTO.js";
import { Profesor, AreaProfesor } from "../patrones/patronDAO/daoto/ProfesorTO.js";
import { Asesoria } from "../patrones/patronDAO/daoto/AsesoriaTO.js";
import { Usuario } from "../patrones/patronDAO/daoto/UsuarioTO.js";
import { Trabajo } from "../patrones/patronDAO/daoto/TrabajoTO.js";
import { Administrador } from "../patrones/patronDAO/daoto/AdministradorTO.js";
import { Alumno } from "../patrones/patronDAO/daoto/AlumnoTO.js";

/* 📌 AREA ↔️ LINEA: Una Área tiene muchas Líneas */
Area.hasMany(Linea, {
  foreignKey: "Areaid",
  sourceKey: "id",
  as: "Lineas"
});

Linea.belongsTo(Area, {
  foreignKey: "Areaid",
  targetKey: "id",
  as: "Area"
});

/* 📌 AREA ↔️ PROFESOR: Muchos a Muchos a través de AreaProfesor */
Area.belongsToMany(Profesor, {
  through: AreaProfesor,
  foreignKey: "AreaId",
  otherKey: "ProfesorId",
  as: "Profesores"
});

Profesor.belongsToMany(Area, {
  through: AreaProfesor,
  foreignKey: "ProfesorId",
  otherKey: "AreaId",
  as: "AreasAsignadas"
});

/* 📌 AREA ↔️ TRABAJO (ya definido por ti) */
Area.hasMany(Trabajo, {
  foreignKey: "Areaid",
  sourceKey: "id"
});

Trabajo.belongsTo(Area, {
  foreignKey: "Areaid",
  targetKey: "id"
});

/* 📌 PROFESOR → USUARIO: Cada profesor pertenece a un usuario */
Profesor.belongsTo(Usuario, {
  foreignKey: "Usuarioid",
  as: "Usuario"
});

/* 📌 PROFESOR ↔️ ASESORIA: Uno a Muchos */
Profesor.hasMany(Asesoria, {
  foreignKey: "Profesorid",
  sourceKey: "id",
  as: "Asesorias"
});

Asesoria.belongsTo(Profesor, {
  foreignKey: "Profesorid",
  targetKey: "id",
  as: "Profesor"
});


Usuario.hasMany(Administrador, { 
    foreignKey: "Usuarioid",
    sourceKey: "id"
});
Administrador.belongsTo(Usuario, { 
    foreignKey: "Usuarioid",
    targetKey: "id"
});

Usuario.hasMany(Alumno, { 
    foreignKey: "Usuarioid",
    sourceKey: "id"
});
Alumno.belongsTo(Usuario, { 
    foreignKey: "Usuarioid",
    targetKey: "id"
});